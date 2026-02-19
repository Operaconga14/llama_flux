"use client"
import { getTopYields } from "@/app/actions"
import ChainDominanceChart from "@/app/components/chainDominance.Chart"
import Childcard from "@/app/components/childCard"
import KpiCard from "@/app/components/kpiCard"
import TVLChart from "@/app/components/TVL.Chart"
import { formatAPY, formatTVL } from "@/app/lib/formater"
import { mockProtocols, mocksavedChains, mocksavedProtocols, mocksavedYields, mockChains } from "@/app/lib/mockdata"
import { Chain, Protocol, Yield } from "@/app/types"
import { Card, CardContent } from "@/components/ui/card"
import { Bookmark, Boxes, Dot, Network, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Overview() {
    const [savedChain, setSavedChains] = useState("")
    const [savedProtocols, setSavedProtocols] = useState("")
    const [savedYields, setSavedYields] = useState("")
    const [totalitems, setTotalItems] = useState("")
    const [newSavedChain, setNewSavedChain] = useState<Chain[] | null>(null)
    const [newSavedprotocols, setNewSavedProtocols] = useState<Protocol[] | null>(null)
    const [newSavedYields, setNewSavedYields] = useState<Yield[] | null>(null)

    const topYields = getTopYields(8)

    useEffect(() => {
        const fetchSaved = async () => {
            const chains = await mocksavedChains
            setNewSavedChain(chains)
            setSavedChains(chains.length.toString())

            const protocols = await mocksavedProtocols
            setNewSavedProtocols(protocols)
            setSavedProtocols(protocols.length.toString())

            const yields = await mocksavedYields
            setNewSavedYields(yields)
            setSavedYields(yields.length.toString())

            const totalItems = chains.length + protocols.length + yields.length
            setTotalItems(totalItems.toString())


        }
        fetchSaved()
    }, [])
    return <div className="px-4 py-5">
        <div className="flex flex-col">
            <h1 className="text-3xl text-white font-bold">Dashboard</h1>
            <p className="text-slate-400 text-sm">Your personalized DeFi analytics overview</p>
        </div>

        {/* First Grdi View */}
        <div className="mt-7 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard
                    value={savedChain.toString()}
                    icon={Network}
                    title="Saved chains"

                />

                <KpiCard
                    value={savedProtocols.toString()}
                    icon={Boxes}
                    title="Saved Protocols"

                />

                <KpiCard
                    value={savedYields.toString()}
                    icon={TrendingUp}
                    title="Saved Yields"

                />

                <KpiCard
                    value={totalitems.toString()}
                    icon={Bookmark}
                    title="Total Items"

                />
            </div>

            <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-5">
                <TVLChart data={mockProtocols[0].tvlHistory || []} title="Protocol TVL Trend" />
                <ChainDominanceChart chains={mockChains} />
            </div>

            {/* Favourite Itesm */}
            <div className="grid mt-10 grid-cols-1 lg:grid-cols-3 gap-5">
                {/* favorites Chain */}
                <Childcard className="flex flex-col py-5">
                    <div className="flex gap-3">
                        <Network className="w-5 h-5 text-cyan-400" />
                        <h1 className="text-white">Favorite Chains</h1>
                    </div>
                    {savedChain.length <= 0 && (
                        <div className="flex justify-center items-center"><h1 className="text-slate-500 text-sm">No saved chains yet</h1></div>
                    )}
                    {savedChain.length > 0 && (
                        <div className="mt-5">
                            {newSavedChain?.map((chain, index) => (
                                <Card key={index} className=" flex my-3 h-fit bg-slate-800/30 border-none">
                                    <CardContent className="flex justify-between items-center w-full py-3">
                                        <div className="flex-col flex">
                                            <h1 className="text-sm font-semibold text-white">{chain.name}</h1>
                                            <p className="text-slate-400 text-xs">
                                                {chain.protocolCount} protocols
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-white text-sm">{formatTVL(chain.tvl)}</div>
                                            <p className={chain.tvlChange24h < 1 ? "text-red-400 text-xs" : "text-green-400/90 text-xs"}>{chain.tvlChange24h < 1 ? "" : "+"} {chain.tvlChange24h}%</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                    )}
                </Childcard>
                {/* favorites Protocols */}
                <Childcard className="flex flex-col py-5">
                    <div className="flex gap-3">
                        <Boxes className="w-5 h-5 text-purple-400" />
                        <h1 className="text-white">Favorite Protocols</h1>
                    </div>
                    {savedProtocols.length <= 0 && (
                        <div className="flex justify-center items-center"><h1 className="text-slate-500 text-sm">No saved protocols yet</h1></div>
                    )}
                    {savedProtocols.length > 0 && (
                        <div className="mt-5">
                            {newSavedprotocols?.map((protocol, index) => (
                                <Card key={index} className=" flex my-3 h-fit bg-slate-800/30 border-none">
                                    <CardContent className="flex justify-between items-center w-full py-3">
                                        <div className="flex-col flex justify-start items-start">
                                            <h1 className="text-sm font-semibold text-white">{protocol.name}</h1>
                                            <p className="text-purple-400 w-fit text-[11px]">
                                                {protocol.category}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-white text-sm">{formatTVL(protocol.tvl)}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                    )}
                </Childcard>

                {/* favorites Yields */}
                <Childcard className="flex flex-col py-5">
                    <div className="flex gap-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <h1 className="text-white">Favorite Yields</h1>
                    </div>
                    {savedYields.length <= 0 && (
                        <div className="flex justify-center items-center"><h1 className="text-slate-500 text-sm">No saved yields yet</h1></div>
                    )}
                    {savedYields.length > 0 && (
                        <div className="mt-5">
                            {newSavedYields?.map((yieldItem, index) => (
                                <Card key={index} className=" flex my-3 h-fit bg-slate-800/30 border-none">
                                    <CardContent className="flex justify-between items-center w-full py-3">
                                        <div className="flex-col flex justify-start items-start">
                                            <h1 className="text-sm font-semibold text-white">{yieldItem.pool}</h1>
                                            <p className="text-slate-500 w-fit text-[11px] flex items-center">
                                                {yieldItem.protocol} <Dot className="w-4 h-4" /> {yieldItem.chain}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-green-400 text-sm">{formatAPY(yieldItem.apy)}</div>
                                            <div className="text-[11px] text-slate-400 text-end">APY</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </Childcard>
            </div>

            {/* Highest APY Pools */}
            <div className="grid mt-10 grid-cols-1 gap-5">
                {/* Top yields */}

                <Childcard className="flex flex-col py-5">
                    <div className="flex gap-3">
                        <h1 className="text-white">Highest APY Pools</h1>
                    </div>

                    <div className="mt-5">
                        {topYields.map((yldItms, index) => (
                            <Card key={index} className=" flex my-3 h-fit bg-slate-800/30 border-none">
                                <CardContent className="flex flex-col md:flex-row md:justify-between md;items-center gap-4 w-full py-3">
                                    <div className="flex-col flex">
                                        <h1 className="text-sm font-semibold text-white">{yldItms.pool}</h1>
                                        <p className="text-slate-400 text-[12px] flex flex-wrap items-center gap-3">
                                            {yldItms.protocol} <Dot className="w-4 h-4" /> {yldItms.chain} <span className={" text-[11px]" + (yldItms.riskLevel === 'High' ? " text-red-400 " : yldItms.riskLevel === 'Medium' ? " text-yellow-400" : yldItms.riskLevel === "Low" ? " text-green-400" : " text-slate-400")}>{yldItms.riskLevel} Risk</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-white text-sm">{formatTVL(yldItms.tvl)}</div>
                                        <p className="text-[10px] text-slate-400 text-start md:text-end">APY</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </Childcard>
            </div>

        </div>
    </div >
}

