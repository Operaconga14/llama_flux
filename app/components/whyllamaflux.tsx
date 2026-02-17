"use client"
import { useEffect, useState } from "react";
import { whyLlamaFlux } from "../lib/mockdata";

export default function WhyLlamaFlux() {
    const [whyLlamaFluxData, setWhyLlamaFluxData] = useState(whyLlamaFlux);

    useEffect(() => {
        const fetchWhyLlamaFluxData = async () => {
            const data = await whyLlamaFlux;
            setWhyLlamaFluxData(data);
        }
        fetchWhyLlamaFluxData();
    }, [])

    return <div className="px-3 md:px-7 pb-10 pt-5 flex flex-col gap-10 items-center justify-center">
        <div className="text-white text-2xl font-bold">Why Llama Flux?</div>
        <div className="flex flex-col items-center justify-center gap-9">
            {whyLlamaFluxData.map((wlfd, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                    <div className={wlfd.title === "Track Yields" ? "bg-cyan-900/20 text-cyan-500 p-5 w-20 h-20 flex justify-center items-center rounded-sm" : wlfd.title === "Explore Protocols" ? "bg-purple-600/30 text-purple-400 p-5 w-20 h-20 flex justify-center items-center rounded-sm" : wlfd.title === "Manage Favorites" ? "bg-pink-500/20 text-pink-500 p-5 w-20 h-20 flex justify-center items-center rounded-sm" : ""}><wlfd.icon /></div>
                    <div className="text-white text-xl font-bold mt-5">{wlfd.title}</div>
                    <div className="text-gray-400 text-sm md:text-sm font-bold mt-2">{wlfd.description}</div>
                </div>
            ))}
        </div>
    </div>
}