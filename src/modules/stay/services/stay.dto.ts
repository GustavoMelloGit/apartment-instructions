import { z } from 'zod';

export const getStayOutputSchema = z.object({
  id: z.string(),
  guest: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
  }),
  guests: z.number(),
  check_in: z.coerce.date(),
  check_out: z.coerce.date(),
  password: z.string(),
});

export type GetStayOutput = z.infer<typeof getStayOutputSchema>;
