"use client"
import { useEffect, useState } from "react"
import { Yield } from "../types"
import { getTopYieldPools } from "../lib/defi"
import { Card, CardContent } from "@/components/ui/card"
import { formatAPY } from "../utils/fomater"

export const TopYieldPools = () => {
    const [topYieldPools, setTopYieldPools] = useState<Yield[]>([])

    useEffect(() => {
        const fetchTopYiedsPools = async () => {
            const topYieldPools = await getTopYieldPools(3)
            setTopYieldPools(topYieldPools)
        }
        fetchTopYiedsPools()

    }, [])
    return (
        < div className=" pb-5 pt-2 px-3 md:px-7" >
            <h1 className="text-white text-2xl font-bold">Total Yield Pools</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {topYieldPools.map((pool) => (
                    <Card key={pool.pool} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                        <CardContent className="p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex-col">
                                    <h1 className="text-white text-sm font-semibold">{pool.pool}</h1>
                                    <h1 className="text-slate-400 text-xs">{pool.protocol}</h1>
                                    <p className="text-slate-500 text-[11px]">{pool.chain}</p>
                                </div>
                                <div className="flex-col">
                                    <div className="relative group inline-block">
                                        <h1 className="text-green-400 text-lg font-bold cursor-help">
                                            {formatAPY(pool.apy)}
                                        </h1>
                                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-slate-800 text-green-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                                            {pool.apy > 100 && `${pool.apy.toFixed(1)}%`}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-[11px] text-end">APY</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}