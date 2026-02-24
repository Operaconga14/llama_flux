"use client"
import { useEffect, useState } from "react";
import { Yield } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { formatAPY } from "../lib/formater";
import { getTopYields } from "../actions";

export default function TotalYieldPools() {

    const [topYields, settopyields] = useState<Yield[]>([])

    useEffect(() => {
        const fetchTopPools = async () => {
            const topPools = await getTopYields(3)
            settopyields(topPools)
        }
        fetchTopPools()
    }, [])
    return <div className=" pb-5 pt-2 px-3 md:px-7">
        <h1 className="text-white text-2xl font-bold">Total Yield Pools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {topYields.map((tpy, index) => (
                <Card key={index} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex-col">
                                <h1 className="text-white text-sm font-semibold">{tpy.pool}</h1>
                                <h1 className="text-slate-400 text-xs">{tpy.protocol}</h1>
                                <p className="text-slate-500 text-[11px]">{tpy.chain}</p>
                            </div>
                            <div className="flex-col">
                                <div className="relative group inline-block">
                                    <h1 className="text-green-400 text-lg font-bold cursor-help">
                                        {tpy.apy > 100 && "+100%"}
                                    </h1>
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-slate-800 text-green-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                                        {tpy.apy > 100 && formatAPY(tpy.apy)}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-[11px] text-end">APY</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

    </div>;
}