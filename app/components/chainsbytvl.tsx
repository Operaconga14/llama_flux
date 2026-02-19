"use client"

import { useEffect, useState } from "react";
import { Chain } from "../types";
import { getTopChains } from "../lib/mockdata";
import { Card, CardContent } from "@/components/ui/card";
import { formatAPY, formatTVL } from "../lib/formater";

export default function ChainsByTVL() {
    const [topchainTvl, setTopchainTvl] = useState<Chain[]>([])

    useEffect(() => {
        const fetchTopChainsByTvl = async () => {
            const topChains = await getTopChains(3)
            setTopchainTvl(topChains)
        }
        fetchTopChainsByTvl()
    }, [])
    return <div className="pb-5 pt-2 px-3 md:px-7">
        <h1 className="text-white text-2xl font-bold">Top Chains By TVL</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {topchainTvl.map((tpctvl) => (
                <Card key={tpctvl.id} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex-col">
                                <h1 className="text-white text-md">{tpctvl.name}</h1>
                                <h1 className="text-slate-500 text-xs">{tpctvl.protocolCount} protocols</h1>
                            </div>
                            <div className="flex-col">
                                <h1 className="text-white text-lg font-bold ">{formatTVL(tpctvl.tvl)}</h1>
                                <p className={tpctvl.tvlChange24h > 1 ? "text-green-400 text-xs text-end" : "text-red-400 text-xs text-end"}>{formatAPY(tpctvl.tvlChange24h)}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>;
}