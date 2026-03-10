import { z } from "zod";

export const forgotPasswordSchema = z
  .object({
    email: z.string().email("Email is required"), 
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.email && data.email.length > 0, {
    message: "Email must be provided before setting a password",
    path: ["password"], 
  })
 
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Passwords do not match",
  //   path: ["confirmPassword"],
  // });
