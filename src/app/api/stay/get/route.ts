import { supabaseServer } from '@/db/supabase/supabase';
import { z } from 'zod';

const getStayOutputSchema = z.object({
  id: z.string(),
  guest: z.object({
    id: z.string(),
    name: z.string(),
  }),
  guests: z.number(),
  check_in: z.coerce.date(),
  check_out: z.coerce.date(),
  password: z.string(),
});

export type GetStayOutput = z.infer<typeof getStayOutputSchema>;

export async function GET(request: Request): Promise<GetStayOutput> {
  const supabase = await supabaseServer();
  const stay = await supabase
    .from('stays')
    .select('*')
    .eq('id', stay_id)
    .single();

  console.log({ stay, stay_id });
  if (!stay || stay.error) throw new Error('Stay not found');

  const parsedStay = getStayOutputSchema.parse(stay);

  return parsedStay;
}
