'use server';

import { createClient } from '@/db/supabase/server';
import { GetStayOutput, getStayOutputSchema } from './stay.dto';

export async function getStay(stay_id: string): Promise<GetStayOutput> {
  const supabase = await createClient();
  const result = await supabase
    .from('stays')
    .select('*')
    .eq('id', stay_id)
    .single();

  console.log({ result, stay_id });
  const { data: stay } = result;

  if (result.error || !stay) throw new Error('Stay not found');

  const parsedStay = getStayOutputSchema.parse(stay);

  return parsedStay;
}
