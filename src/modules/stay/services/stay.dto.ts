import { z } from 'zod';

export const tenantSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
});

export const getStayOutputSchema = z.object({
  id: z.string(),
  tenant: tenantSchema,
  guests: z.number(),
  check_in: z.coerce.date(),
  check_out: z.coerce.date(),
  password: z.string(),
});

export type GetStayOutput = z.infer<typeof getStayOutputSchema>;
