"use client"
import { useEffect, useState } from "react"
import { ChainByTVL } from "../types"
import { getChainByTvl } from "../lib/defi"
import { Card, CardContent } from "@/components/ui/card";
import { formatNumberIn1Decimal } from "../utils/fomater";

export const ChainsByTvl = () => {

    const [chainsByTvl, setChainsByTvl] = useState<ChainByTVL[]>([])

    useEffect(() => {
        const fetchChainsBy = async () => {
            const chainsByTvl = await getChainByTvl(3)
            setChainsByTvl(chainsByTvl)

        }
        fetchChainsBy()
    }, [])
    return (
        <div className="pb-5 pt-2 px-3 md:px-7">
            <h1 className="text-white text-2xl font-bold">Top Chains By TVL</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {chainsByTvl.map((tpctvl) => (
                    <Card key={tpctvl.name} className="border-white/10 bg-slate-900/50 backdrop-blur-sm gap-3">
                        <CardContent className="p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex-col">
                                    <h1 className="text-white text-md">{tpctvl.name}</h1>
                                    <h1 className="text-slate-500 text-xs">{tpctvl.tokenSymbol ?? "N/A"}</h1>
                                </div>
                                <div className="flex-col">
                                    <h1 className="text-white text-lg font-bold ">{formatNumberIn1Decimal(tpctvl.tvl ?? 0)}</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}