"use client"
import { useEffect, useState } from "react"
import { llamaFeatures } from "../utils/mockdata"

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
        </div>
    )
}