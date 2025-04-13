import { Stay } from '@/api/domain/entity/stay';
import { StayRepository } from '@/api/domain/repository/stay_repository';
import { db } from '@/db/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

export class StayFirebaseRepository implements StayRepository {
  async findByPassword(password: string): Promise<Stay | null> {
    const q = query(collection(db, 'stays'), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const stay = querySnapshot.docs[0].data();
    return stay as Stay;
  }
  async save(input: Omit<Stay, 'id'>): Promise<Stay> {
    const stay = {
      id: crypto.randomUUID(),
      check_in: input.check_in.toISOString(),
      check_out: input.check_out.toISOString(),
      guest_id: input.guest_id,
      guests: input.guests,
      password: input.password,
    };
    await addDoc(collection(db, 'stays'), stay);
    return {
      ...stay,
      check_in: input.check_in,
      check_out: input.check_out,
    };
  }
}
