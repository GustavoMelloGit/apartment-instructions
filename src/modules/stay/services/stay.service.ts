'use server';

import { Fetcher } from '@/lib/fetcher';
import { GetStayOutput, getStayOutputSchema } from './stay.dto';

export async function getStay(stay_id: string): Promise<GetStayOutput> {
  const response = await Fetcher.fetch(`/api/stay/${stay_id}`);
  const parsedStay = getStayOutputSchema.parse(response);

  return parsedStay;
}
