import { db } from '@/db/connection';
import { guests, stays } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const inputSchema = z.object({
  guests: z.number().gt(0),
  guest_id: z.string().uuid(),
  password: z.string(),
  check_in: z.coerce.date(),
  check_out: z.coerce.date(),
});

export async function POST(request: Request): Promise<Response> {
  const requestJson = await request.json();

  const parsedInput = inputSchema.safeParse(requestJson);

  if (!parsedInput.success) {
    const errors = parsedInput.error.flatten();
    return NextResponse.json({ error: errors.fieldErrors }, { status: 422 });
  }

  const { data } = parsedInput;

  try {
    const guest = await db
      .select()
      .from(guests)
      .where(eq(guests.id, data.guest_id));

    if (!guest.length) {
      return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    }

    const stay = {
      id: crypto.randomUUID(),
      check_in: data.check_in.toISOString(),
      check_out: data.check_out.toISOString(),
      guest_id: data.guest_id,
      guests: data.guests,
      password: data.password,
    };
    await db.insert(stays).values(stay);

    return NextResponse.json(
      {
        message: 'Stay created successfully',
        data: stay,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const error = e as Error;
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
