"use client"
import { useEffect, useState } from "react";
import { mockLivedata } from "../lib/mockdata";
import { Livemarkettype } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Network, TrendingUp } from "lucide-react";
import { formatAPY, formatChains, formatTVL } from "../lib/formater";

export default function SliveMarket() {
    const [liveMarketState, stelivemarketState] = useState<Livemarkettype>({
        totalVL: 0,
        topAPY: 0,
        activeChains: 0
    })



    useEffect(() => {
        const fetchLivedata = async () => {
            const sLiveMarket = await mockLivedata
            stelivemarketState({
                totalVL: sLiveMarket.totalVL,
                topAPY: sLiveMarket.topAPY,
                activeChains: sLiveMarket.activeChains
            })
        }
        fetchLivedata()
    }, [])
    return <div className="flex flex-col items-center w-full px-3 md:px-7 py-10">
        <h1 className="text-white text-2xl font-bold">Live Market Stats</h1>

        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Total VL */}
            <Card className=" flex py-5 border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
                <CardContent className="flex justify-between items-center w-full">
                    <div className="flex-col flex">
                        <h2 className="text-slate-500 text-xs font-semibold">Total Value Locked</h2>
                        <p className="text-white text-3xl font-bold mt-2">{formatTVL(liveMarketState.totalVL)}</p>
                    </div>
                    <div className="bg-cyan-500/20 rounded-sm p-3">
                        <BarChart3 className="text-cyan-400" />
                    </div>
                </CardContent>
            </Card>
            {/* Total APY */}
            <Card className=" flex py-5 border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
                <CardContent className="flex justify-between items-center w-full">
                    <div className="flex-col flex">
                        <h2 className="text-slate-500 text-xs font-semibold">Total APY</h2>
                        <p className="text-white text-3xl font-bold mt-2">{formatAPY(liveMarketState.topAPY)}</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-sm p-3">
                        <TrendingUp className="text-purple-400" />
                    </div>
                </CardContent>
            </Card>

            {/* Active Chain */}
            <Card className=" flex py-5 border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
                <CardContent className="flex justify-between items-center w-full">
                    <div className="flex-col flex">
                        <h2 className="text-slate-500 text-xs font-semibold">Active Chains</h2>
                        <p className="text-white text-3xl font-bold mt-2">{formatChains(liveMarketState.activeChains)}</p>
                    </div>
                    <div className="bg-pink-500/20 rounded-sm p-3">
                        <Network className="text-pink-400" />

                    </div>
                </CardContent>
            </Card>
        </div>
    </div>;
}