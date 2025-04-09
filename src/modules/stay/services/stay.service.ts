'use server';

import { db } from '@/db/firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { GetStayOutput, getStayOutputSchema, guestSchema } from './stay.dto';

export async function getStay(stay_id: string): Promise<GetStayOutput> {
  const docRef = doc(db, 'stays', stay_id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('Stay not found');
  }

  const docData = docSnap.data();

  const q = query(
    collection(db, 'guests'),
    where('id', '==', docData.guest_id)
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    throw new Error('Guest not found');
  }

  const guest = querySnapshot.docs[0].data();

  const parsedGuest = guestSchema.parse(guest);

  const stay: GetStayOutput = {
    check_in: docData.check_in,
    check_out: docData.check_out,
    guests: docData.guests,
    guest: parsedGuest,
    id: stay_id,
    password: docData.password,
  };

  const parsedStay = getStayOutputSchema.parse(stay);

  return parsedStay;
}
