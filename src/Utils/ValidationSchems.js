import { z } from 'zod';

export const userRegistrationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  password: z .string() .min(8, { message: "Password must be at least 8 characters long" }),
  currectpassword:z.string()
  // password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  // currectpassword: z.string() .max(32, { message: "write a currect password" })
}).refine((data) => data.password === data.currectpassword, {
    message: "Passwords do not match",
    path: ["currectpassword"], 
  });

