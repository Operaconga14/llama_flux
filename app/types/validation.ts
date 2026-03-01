import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email({ error: "Email must include @ symbols" }),
    password: z.string().min(8, { error: "Password must be at least 8 character" })
})

export const signupSchema = z.object({
    name: z.string().min(3, { error: "Name must be atleast 3 characters" }),
    email: z.string().email({ error: "Email must include @ symbol" }),
    password: z.string().min(8, { error: "Password must be atleast 8 charater long" })
})