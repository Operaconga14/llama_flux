"use client"
import { useEffect, useState } from "react";
import { getTopYields } from "../lib/mockdata";
import { Yield } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { formatAPY } from "../lib/formater";

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
            {topYields.map((tpy) => (
                <Card key={tpy.id} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex-col">
                                <h1 className="text-white text-sm font-semibold">{tpy.pool}</h1>
                                <h1 className="text-slate-400 text-xs">{tpy.protocol}</h1>
                                <p className="text-slate-500 text-[11px]">{tpy.chain}</p>
                            </div>
                            <div className="flex-col">
                                <h1 className="text-green-400 text-lg font-bold ">{formatAPY(tpy.apy)}</h1>
                                <p className="text-slate-400 text-[11px] text-end">APY</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

    </div>;
}