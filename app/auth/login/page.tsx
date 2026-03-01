"use client"
import { LoginAction } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const result = await LoginAction(formData)

        if (!result) {
            return
        }

        if ("message" in result) {
            toast.success(result.message)
            setTimeout(() => setLoading(false), 1000)
            setTimeout(() => redirect('/dashboard'), 3000)
        } else if ("email" in result || "password" in result) {
            if (result.email) {
                toast.error(result.email[0])
            }
            if (result.password) {
                toast.error(result.password[0])
            }
            setTimeout(() => setLoading(false), 1000)
        }


    }
    return (
        <div className="px-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

            <Card className="relative w-full max-w-md border-white/10 bg-slate-900/90 backdrop-blur-xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto mb-4 flex items-center gap-2">
                        <Zap className="h-8 w-8 text-cyan-400" />
                        <span className="font-bold text-2xl text-white">Llama Flux</span>
                    </div>
                    <CardTitle className="text-2xl text-white">
                        <h1>Login</h1>
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                        Sign up to start tracking DeFi yields and protocols
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-400">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                onChange={(e) => e.target.value}
                                required
                                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-400">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                onChange={(e) => e.target.value}
                                required
                                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                        >
                            {loading ? 'Loadding...' : 'Login'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-xs">
                        <span className="text-slate-400">
                            Don't have an account?
                        </span>
                        <Link
                            href={'/auth/signup'}
                            className="font-medium text-cyan-500 hover:text-cyan-300"
                        >
                            Signup
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login