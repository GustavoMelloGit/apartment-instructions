import { StayService } from '@/modules/stay/services/stay.service';
import { StayView } from '@/modules/stay/view/stay.view';

type Props = {
  params: Promise<{
    stay_id: string;
  }>;
};

export default async function StayPage({ params }: Props) {
  const { stay_id } = await params;
  const stay = await StayService.get(stay_id);

  return <StayView stay={stay} />;
}
