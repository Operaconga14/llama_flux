"use client"
import Childcard from "@/app/components/childCard";
import { formatAPY, formatTVL } from "@/app/lib/formater";
import { mocksavedChains, mocksavedProtocols, mocksavedYields } from "@/app/lib/mockdata";
import { Chain, Protocol, Yield } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, Dot, Network, Trash2, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Favourites() {
    const [saveChainLenght, setSavedChainlenght] = useState(0)
    const [saveProtocolLenght, setSavedprotocollenght] = useState(0)
    const [savedYieldlenht, setSavedYieldlength] = useState(0)
    const [savedChains, setSavedChains] = useState<Chain[] | undefined>(undefined)
    const [savedprotocols, setSavedprotocols] = useState<Protocol[] | undefined>(undefined)
    const [savedyields, setSavedyields] = useState<Yield[] | undefined>(undefined)

    const habdleRemoveSavedChain = async (index: number) => {
        const targeted = savedChains?.[index]
        const updated = savedChains?.filter((_, i) => i !== index)
        setSavedChains(updated)
        setSavedChainlenght(updated?.length || 0)
        return targeted
    }

    const habdleRemoveSavedProtocol = async (index: number) => {
        const targeted = savedprotocols?.[index]
        const updated = savedprotocols?.filter((_, i) => i !== index)
        setSavedprotocols(updated)
        setSavedprotocollenght(updated?.length || 0)
        return targeted
    }

    const habdleRemoveSavedYield = async (index: number) => {
        const targeted = savedyields?.[index]
        const updated = savedyields?.filter((_, i) => i !== index)
        setSavedyields(updated)
        setSavedYieldlength(updated?.length || 0)
        return targeted
    }

    useEffect(() => {
        const fetchSaved = async () => {
            const savedChains = await mocksavedChains
            setSavedChainlenght(savedChains.length)
            setSavedChains(mocksavedChains)

            const savedProtocols = await mocksavedProtocols
            setSavedprotocollenght(savedProtocols.length)
            setSavedprotocols(mocksavedProtocols)

            const savedYields = await mocksavedYields
            setSavedYieldlength(savedYields.length)
            setSavedyields(mocksavedYields)
        }
        fetchSaved()
    }, [])

    return (
        <div className="px-3 flex flex-col pb-5">
            <div className="flex flex-col pt-5">
                <h1 className="text-white text-2xl md:text-3xl font-semibold">Saved Items</h1>
                <p className="text-slate-400 text-sm">
                    Manage your favorite chains, protocols, and yields (15 total)
                </p>
            </div>

            <div className=" mt-5">
                {/* Top yields */}

                <Childcard className="flex flex-col py-5">
                    <div className="flex gap-3">
                        <Network className="w-6 h-6 text-cyan-400" />
                        <h1 className="text-white">Saved Chains ({saveChainLenght})</h1>
                    </div>

                    {saveChainLenght <= 0 && (
                        <div className="flex justify-center items-center my-8"><h1 className="text-slate-500 text-sm">No saved chains yet</h1></div>
                    )}

                    {saveChainLenght > 0 && (
                        <div className="mt-5 grid-cols-1 md:grid-cols-3 grid gap-5">
                            {savedChains?.map((chain, index) => (
                                <Card key={index} className=" flex h-38 items-center bg-slate-800/30 border border-slate-400/20">
                                    <CardContent className="flex flex-col md:flex-row md:justify-between md;items-center gap-4 w-full py-3">
                                        <div className="flex-col flex gap-1">
                                            <h1 className="text-lg font-semibold text-white">{chain.name}</h1>
                                            <p className="text-slate-400 text-[12px] flex flex-wrap items-center gap-3">
                                                {chain.protocolCount} {chain.protocolCount > 1 ? "protocols" : "protocol"}
                                            </p>
                                            <p className="text-white font-semibold">
                                                {formatTVL(chain.tvl)}
                                            </p>
                                            <p className={`text-[10px] ${chain.tvlChange24h > 0 ? "text-green-400" : "text-red-400"}`}>
                                                {chain.tvlChange24h > 1 ? '+' : ''}{formatAPY(chain.tvlChange24h)} 24h
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <Button className="bg-transparent hover:bg-transparent" onClick={() => { habdleRemoveSavedChain(index) }}>
                                                <Trash2 className="w-4 h-4 text-red-400" />

                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                        </div>

                    )}


                </Childcard>
            </div>

            {/* Saved Protocol */}

            <div className="grid mt-5 grid-cols-1 gap-5">
                {/* Top yields */}

                <Childcard className="flex flex-col py-5">
                    <div className="flex gap-3">
                        <Boxes className="w-6 h-6 text-purple-400" />
                        <h1 className="text-white">Saved Protocols ({saveProtocolLenght})</h1>
                    </div>

                    {saveProtocolLenght <= 0 && (
                        <div className="flex justify-center items-center my-8"><h1 className="text-slate-500 text-sm">No saved protocols yet</h1></div>
                    )}

                    {saveProtocolLenght > 0 && (
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {savedprotocols?.map((protocol, index) => (
                                <Card key={index} className=" flex my-3 h-38 items-center bg-slate-700/30 border border-slate-600/40">
                                    <CardContent className="flex flex-col md:flex-row md:justify-between md;items-center gap-4 w-full py-3">
                                        <div className="flex-col flex gap-1">
                                            <h1 className="text-lg font-semibold text-white">{protocol.name}</h1>
                                            <p className="text-purple-400 text-[11px] flex flex-wrap items-center gap-3">
                                                {protocol.category}
                                            </p>
                                            <p className="text-white font-semibold">
                                                {formatTVL(protocol.tvl)}
                                            </p>
                                            <p className="text-slate-400 text-[10px]">
                                                {protocol.chains.length} {protocol.chains.length > 1 ? "chains" : "chain"}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <Button className="bg-transparent hover:bg-transparent" onClick={() => { habdleRemoveSavedProtocol(index) }}>
                                                <Trash2 className="w-4 h-4 text-red-400" />

                                            </Button>
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
                        <TrendingUp className="text-green-400 w-6 h-6" />
                        <h1 className="text-white">Saved Yields ({savedYieldlenht})</h1>
                    </div>

                    {savedYieldlenht <= 0 && (
                        <div className="flex justify-center items-center my-8"><h1 className="text-slate-500 text-sm">No saved yields yet</h1></div>
                    )}

                    {savedYieldlenht > 0 && (
                        <div className="mt-5">
                            {savedyields?.map((yld, index) => (
                                <Card key={index} className=" flex my-2.5 h-fit py-2 border-slate-500/30 items-center bg-slate-600/30 border">
                                    <CardContent className="flex flex-col md:flex-row md:justify-between md;items-center gap-4 w-full py-3">
                                        <div className="flex-col flex">
                                            <h1 className="text-sm font-semibold text-white">{yld.pool}</h1>
                                            <p className="text-slate-400 text-[11px] flex flex-wrap items-center gap-2">
                                                {yld.protocol} <Dot className="text-slate-500 w-4 h-4" /><span className="text-cyan-400">{yld.chain}</span> <span className={yld.riskLevel === 'High' ? 'text-red-400' : yld.riskLevel === 'Medium' ? 'text-yellow-400' : 'text-green-400'}>{yld.riskLevel}</span>
                                            </p>
                                        </div>
                                        <div className="flex gap-5">
                                            <div className="flex flex-col">
                                                <div className="text-green-400 text-sm font-semibold">{formatAPY(yld.apy)}</div>
                                                <p className="text-[10px] text-slate-400 text-start md:text-end">APY</p>
                                            </div>

                                            <Button className="bg-transparent hover:bg-transparent" onClick={() => { habdleRemoveSavedYield(index) }}>
                                                <Trash2 className="w-4 h-4 text-red-400" />

                                            </Button>
                                        </div>

                                    </CardContent>
                                </Card>
                            ))}

                        </div>
                    )}
                </Childcard>
            </div>
        </div>
    )
}