import { z } from 'zod';
import { Country, UserRole } from '../db/models/User';

const UserInputSchema = z.object({
  name: z.string().trim(),
  role: z.nativeEnum(UserRole).optional(),
  email: z.string().trim().email().optional(),
  image: z.string().trim().optional(),
  country: z.nativeEnum(Country),
  communities: z.array(z.string()).optional(),
});

type UserInput = z.infer<typeof UserInputSchema>;

export { UserInputSchema, UserInput };
