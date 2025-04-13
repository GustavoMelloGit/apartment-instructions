import { z } from 'zod';

const schema = z.object({
  API_KEY: z.string(),
  AUTH_DOMAIN: z.string(),
  PROJECT_ID: z.string(),
  STORAGE_BUCKET: z.string(),
  MESSAGING_SENDER_ID: z.string(),
  APP_ID: z.string(),
  NEXT_PUBLIC_API_BASE_URL: z.string(),
});

export const env = schema.parse(process.env);
