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
        <div className="flex flex-col gap-4 mt-8">
            {topYields.map((tpy) => (
                <Card key={tpy.id} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex-col">
                                <h1 className="text-white text-md">{tpy.pool}</h1>
                                <h1 className="text-gray-400 text-sm">{tpy.protocol}</h1>
                                <p className="text-gray-500 text-xs">{tpy.chain}</p>
                            </div>
                            <div className="flex-col">
                                <h1 className="text-green-400 text-lg font-bold ">{formatAPY(tpy.apy)}</h1>
                                <p className="text-gray-400 text-xs text-end">APY</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

    </div>;
}