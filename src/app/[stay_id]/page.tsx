import { db } from '@/db/firebase';
import { getStay } from '@/modules/stay/services/stay.service';
import { StayView } from '@/modules/stay/view/stay.view';
import { collection, getDocs } from 'firebase/firestore';

type Props = {
  params: Promise<{
    stay_id: string;
  }>;
};

export default async function StayPage({ params }: Props) {
  const { stay_id } = await params;
  const stay = await getStay(stay_id);

  return <StayView stay={stay} />;
}

export const revalidate = 600;
export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, 'stays'));
  const ids = querySnapshot.docs.map((doc) => {
    return doc.id;
  });

  return ids.map((id) => ({
    stay_id: id,
  }));
}
