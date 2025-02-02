import { z } from "zod";

export const speakerSchema = z.object({
  email: z.string().email({ message: "Invalid email address!" }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30, { message: "Name must be at most 30 characters long" }),
  aboutYourself: z
    .string()
    .min(10, { message: "Please tell us a bit about yourself." }),
  experience: z
    .string()
    .min(10, { message: "Please describe your speaking experience." }),
});
