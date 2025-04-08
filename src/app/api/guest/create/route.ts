import { db } from '@/db/connection';
import { guests } from '@/db/schema';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const inputSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().length(13),
});

export async function POST(request: Request): Promise<Response> {
  const data = await request.json();

  const parsedInput = inputSchema.safeParse(data);

  if (!parsedInput.success) {
    const errors = parsedInput.error.flatten();
    return NextResponse.json({ error: errors.fieldErrors }, { status: 422 });
  }

  try {
    const { data } = parsedInput;
    const guest = {
      id: crypto.randomUUID(),
      name: data.name,
      phone: data.phone,
    };
    await db.insert(guests).values(guest);

    return NextResponse.json(
      {
        message: 'Guest created successfully',
        data: guest,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const error = e as Error;
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
