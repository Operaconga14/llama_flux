import React from "react";
import { Toaster } from 'sonner'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return (
        <div className="min-h-screen flex items-center justify-center">{children}
            <Toaster position="top-right" richColors closeButton />
        </div>
    )
}