import { db } from '@/db/connection';
import { guests, stays } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { GetStayOutput, getStayOutputSchema } from './stay.dto';

export async function getStay(stay_id: string): Promise<GetStayOutput> {
  const result = await db
    .select({
      id: stays.id,
      check_in: stays.check_in,
      check_out: stays.check_out,
      guests: stays.guests,
      guest: {
        id: guests.id,
        name: guests.name,
        email: guests.email,
      },
    })
    .from(stays)
    .where(eq(stays.id, stay_id))
    .innerJoin(guests, eq(stays.guest_id, guests.id));

  if (!result || !result.length) throw new Error('Stay not found');

  const stay = result[0];

  console.log({ stay });
  const parsedStay = getStayOutputSchema.parse(stay);

  return parsedStay;
}
