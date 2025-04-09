import { z } from 'zod';

export const guestSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
});

export const getStayOutputSchema = z.object({
  id: z.string(),
  guest: guestSchema,
  guests: z.number(),
  check_in: z.coerce.date(),
  check_out: z.coerce.date(),
  password: z.string(),
});

export type GetStayOutput = z.infer<typeof getStayOutputSchema>;
