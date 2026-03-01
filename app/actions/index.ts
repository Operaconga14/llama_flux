import { loginSchema, signupSchema } from "../types/validation"

export const SignupAction = async (formData: FormData) => {
    try {
        const data = {
            email: formData.get("email"),
            name: formData.get("name"),
            password: formData.get("password")
        }

        const result = signupSchema.safeParse(data)

        if (!result.success) {
            return result.error.flatten().fieldErrors
        } else {
            return {
                message: "Registration Successful"
            }
        }
    } catch (error) {
        return { error: error }
    }
}

export const LoginAction = async (formData: FormData) => {
    try {
        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        const result = loginSchema.safeParse(data)

        if (!result.success) {
            return result.error.flatten().fieldErrors
        } else {
            return {
                message: "Login Successful"
            }

        }

    } catch (error) {
        return { error: error }
    }
}