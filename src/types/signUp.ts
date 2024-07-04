import { z } from "zod"

export const SignUpSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(50)
})

export type SignUpSchemaType = z.infer<typeof SignUpSchema>
