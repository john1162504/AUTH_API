import { z } from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.email(),
    password: z.string().min(8).max(30),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
