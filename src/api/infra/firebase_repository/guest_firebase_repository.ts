import { Guest } from '@/api/domain/entity/guest';
import { GuestRepository } from '@/api/domain/repository/guest_repository';
import { db } from '@/db/firebase';
import {
  addDoc,
  and,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export class GuestFirebaseRepository implements GuestRepository {
  async findById(id: string): Promise<Guest | null> {
    const q = query(collection(db, 'guests'), where('id', '==', id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const guest = querySnapshot.docs[0].data();
    return guest as Guest;
  }

  async save(input: { name: string; phone: string }): Promise<Guest> {
    const guest = {
      id: crypto.randomUUID(),
      name: input.name,
      phone: input.phone,
    };
    await addDoc(collection(db, 'guests'), guest);
    return guest;
  }

  async isDuplicate(guest: Guest): Promise<boolean> {
    const q = query(
      collection(db, 'guests'),
      and(where('name', '==', guest.name), where('name', '==', guest.name))
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }
}
