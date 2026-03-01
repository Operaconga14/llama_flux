"use client"
import { useEffect, useState } from "react"
import { llamaFeatures } from "../utils/mockdata"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Features = () => {
    const [llamaFeature, setLlamaFeatures] = useState(llamaFeatures)

    useEffect(() => {
        const fetchFeatures = async () => {
            const llamaFeature = await llamaFeatures
            setLlamaFeatures(llamaFeature)
        }
        fetchFeatures()
    }, [])
    return (
        <div className="px-3 md:px-7 pb-10 pt-5 flex flex-col gap-10 items-center justify-center">
            <div className="text-white text-2xl font-bold">Why Llama Flux?</div>
            <div className="flex flex-col items-center justify-center gap-9">
                {llamaFeature.map((llamaf, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div
                            className={
                                llamaf.title === "Track Yields" ? "bg-gradient-to-br from-cyan-900/30 to-purple-950/30 text-cyan-500 p-5 w-20 h-20 flex justify-center items-center rounded-[18px]" :
                                    llamaf.title === "Explore Protocols" ? "bg-gradient-to-br from-purple-600/30 to-pink-800/20 text-purple-400 p-5 w-20 h-20 flex justify-center items-center rounded-[18px] " :
                                        llamaf.title === "Manage Favorites" ? "bg-gradient-to-br from-pink-500/20 to-orange-900/40 text-pink-400 p-5 w-20 h-20 flex justify-center items-center rounded-[18px]" : ""
                            }
                        >
                            <llamaf.icon className="w-9 h-9" />
                        </div>
                        <div className="text-white text-xl font-bold mt-5">{llamaf.title}</div>
                        <div className="text-slate-400 text-sm md:text-sm font-bold mt-2">{llamaf.description}</div>
                    </div>
                ))}
            </div>

            <div className="mt-30 pb-20 flex justify-center items-center">
                <Card className="w-full md:w-4/4 flex flex-col justify-center items-center border-none py-10 px-3 bg-gradient-to-r from-cyan-900/10 to-purple-900/10  backdrop-blur-sm">
                    <CardContent>
                        <h1 className="text-4xl text-white font-semibold text-center">Ready to start tracking?</h1>
                        <p className="text-slate-500 text-lg text-center mt-3">Join Llama Flux and get access to comprehensive DeFi analytics</p>

                        {/* Button */}
                        <div className="flex justify-center items-center mt-8">
                            <Link href="/auth/signup">
                                <Button size="lg" className="text-gray-900 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
                                    Get Started for Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}