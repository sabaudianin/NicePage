import { z } from "zod";

export const sponsorSchema = z.object({
  email: z.string().email({ message: "Invalid email address !!!" }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30, { message: "Name must be at most 30 characters long" }),
  additionalInfo: z.string().max(300, "Maxiumum 300 charackters").optional(),
});
