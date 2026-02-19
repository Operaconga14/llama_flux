import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950r">
        <section className="relative overflow-hidden px-6 py-20 md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Logo & Nav */}
                <div className="mb-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Zap className="h-8 w-8 text-cyan-400" />
                        <span className="font-bold text-2xl text-white">Llama Flux</span>
                    </div>
                    <Link href="/auth/login">
                        <Button variant="outline" className="border-white/20 bg-gray-900/80 text-white hover:bg-gray-800/40 hover:text-white">
                            Login
                        </Button>
                    </Link>
                </div>

                {/* Hero Content */}
                <div className="text-center">
                    <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                        Track DeFi Yields,
                        <br />
                        Chains & Protocols
                    </h1>
                    <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-500 md:text-xl">
                        Explore real-time analytics from DeFi Llama. Monitor yields, track protocols, and discover opportunities across all major chains.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/yields">
                            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-gray-900">
                                Explore Yields
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/protocols">
                            <Button size="lg" variant="outline" className="border-white/20 bg-gray-900/80 text-white hover:bg-gray-800/40 hover:text-white">
                                View Protocols
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button size="lg" variant="outline" className="border-white/20 bg-gray-900/80 text-white hover:bg-gray-800/40 hover:text-white">
                                Go to Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
}