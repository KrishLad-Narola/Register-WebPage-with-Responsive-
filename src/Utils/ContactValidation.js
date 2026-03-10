import { z } from 'zod';

export const UserContactSchema = z.object({
  FirstName: z.string().min(2, 'First name is required'),
  LastName: z.string().min(3, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  Mobilenumber:z.string().min(10 ,'Enter a valid MobileNumber'),
  FeedBack: z .string() .min(8, { message: "FeedBack is mendetry " })
 
  // password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  // currectpassword: z.string() .max(32, { message: "write a currect password" })

  });