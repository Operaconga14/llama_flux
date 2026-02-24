"use client"

import { useEffect, useState } from "react";
import { TopChain } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { formatTVL } from "../lib/formater";
import { getTopChainsByTvl } from "../actions";

export default function ChainsByTVL() {
    const [topchainTvl, setTopchainTvl] = useState<TopChain[]>([])

    useEffect(() => {
        const fetchTopChainsByTvl = async () => {
            const topChains = await getTopChainsByTvl(3)
            setTopchainTvl(topChains)
        }
        fetchTopChainsByTvl()
    }, [])
    return <div className="pb-5 pt-2 px-3 md:px-7">
        <h1 className="text-white text-2xl font-bold">Top Chains By TVL</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {topchainTvl.map((tpctvl) => (
                <Card key={tpctvl.name} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex-col">
                                <h1 className="text-white text-md">{tpctvl.name}</h1>
                                <h1 className="text-slate-500 text-xs">{tpctvl.tokenSymbol ?? "N/A"}</h1>
                            </div>
                            <div className="flex-col">
                                <h1 className="text-white text-lg font-bold ">{formatTVL(tpctvl.tvl ?? 0)}</h1>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>;
}