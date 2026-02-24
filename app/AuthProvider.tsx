"use client"
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs"

export const AuthProvider = ({ children }: { children: any }) => {
    return <KindeProvider>{children}</KindeProvider>
}