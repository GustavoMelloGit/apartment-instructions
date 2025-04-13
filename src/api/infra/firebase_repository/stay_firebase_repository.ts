import { Stay } from '@/api/domain/entity/stay';
import { StayRepository } from '@/api/domain/repository/stay_repository';
import { db } from '@/api/infra/db/firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export class StayFirebaseRepository implements StayRepository {
  async findById(id: string): Promise<Stay | null> {
    const docRef = doc(db, 'stays', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const docData = docSnap.data();

    return {
      check_in: new Date(docData.check_in),
      check_out: new Date(docData.check_out),
      guest_id: docData.guest_id,
      guests: docData.guests,
      id: docData.id,
      password: docData.password,
    } satisfies Stay;
  }
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
