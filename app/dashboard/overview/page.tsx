"use client"
import KpiCard from "@/app/components/kpi-card"
import { mockSavedChains, mockSavedProtocols, mockSavedYields } from "@/app/utils/mockdata"
import { Card, CardContent } from "@/components/ui/card"
import { Boxes, Dot, Network, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const OverviewPage = () => {
    const [savedChains, setSavedChains] = useState(0)
    const [savedProtocols, setSavedProtocols] = useState(0)
    const [savedYields, setSavedYield] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [favChains, setFavChains] = useState(0)
    const [favProtocols, setFavProtocols] = useState(0)
    const [favYields, setFavYields] = useState(0)

    useEffect(() => {
        const fetchSavedItems = async () => {
            const savedChains = await mockSavedChains.length
            const savedProtocols = await mockSavedProtocols.length
            const savedYields = await mockSavedYields.length
            const totalItems = await savedChains + savedProtocols + savedYields
            setSavedChains(savedChains)
            setSavedProtocols(savedProtocols)
            setSavedYield(savedYields)
            setTotalItems(totalItems)
        }
        fetchSavedItems()
    }, [])

    return <div className="px-4 py-5 w-full">
        <div className="flex flex-col">
            <h1 className="text-3xl text-white font-bold">Dashboard</h1>
            <p className="text-slate-400 text-sm">Your personalized DeFi analytics overview</p>
        </div>

        {/* Saved Items */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Saved Chains */}
            <KpiCard title={"Saved Chains"} value={savedChains.toString()} icon={Network} iconClassName="text-cyan-400" iconContainerClassName="bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />

            {/* Saved Protocols */}
            <KpiCard title={"Saved Protocols"} value={savedProtocols.toString()} icon={Network} iconClassName="text-purple-400" iconContainerClassName="bg-gradient-to-br from-purple-500/20 to-pink-500/20" />

            {/* Saved Yields */}
            <KpiCard title={"Saved Yields"} value={savedYields.toString()} icon={Network} iconClassName="text-green-400" iconContainerClassName="bg-gradient-to-br from-green-500/20 to-yellow-500/20" />

            {/* Total Items */}
            <KpiCard title={"Total Items"} value={totalItems.toString()} icon={Network} iconClassName="text-pink-400" iconContainerClassName="bg-gradient-to-br from-pink-500/20 to-red-500/20" />
        </div>

        {/* Charts */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Protocol TVL Trend */}
            <div className="">
                <Card className="py-2 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-800">
                    <CardContent>
                        <h2 className="text-xl font-bold text-white">Protocol TVL Trend</h2>
                    </CardContent>
                </Card>
            </div>

            {/* Chain Dominance */}
            <div className="">
                <Card className="py-2 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-800">
                    <CardContent>
                        <h2 className="text-xl font-bold text-white">Chain Dominance</h2>
                    </CardContent>
                </Card>

            </div>
        </div>

        {/* Favpurite Itesms */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Favourite Chains */}
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm py-4">
                <CardContent>
                    <div className="flex gap-2">
                        <Network className="h-5 w-5 text-cyan-400" />
                        <h2 className="text-sm font-bold text-white">Favourite Chains</h2>
                    </div>

                    {!favChains && (
                        <div className="pt-8 text-center">
                            <p className="text-xs text-slate-400">No Favourite Chains</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Favourite Protocols */}
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm py-4">
                <CardContent>
                    <div className="flex gap-2">
                        <Boxes className="h-5 w-5 text-purple-400" />
                        <h2 className="text-sm font-bold text-white">Favourite Protocols</h2>
                    </div>
                    {!favProtocols && (
                        <div className="pt-8 text-center">
                            <p className="text-xs text-slate-400">No Favourite Protocols</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Favourite Yields */}
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm py-4">
                <CardContent>
                    <div className="flex gap-2">
                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                        <h2 className="text-sm font-bold text-white">Favourite Yields</h2>
                    </div>
                    {!favYields && (
                        <div className="pt-8 text-center">
                            <p className="text-xs text-slate-400">No Favourite Yields</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

        {/* All Svaed Yields */}
        <div className="grid mt-10 grid-cols-1 gap-5">
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm border border-slate-800 py-3">
                <CardContent>
                    <p className="text-sm font-bold text-white">Highest APY Pools</p>

                    <div className="mt-4">
                        <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-800">
                            <CardContent className="flex justify-between py-4 items-center">
                                <div className="flex flex-col">
                                    <h1 className="text-white font-bold">GMX-ETH</h1>
                                    <div className="flex md:flex-row gap-1 text-xs text-slate-400">
                                        <p>GMX</p> <p className="md:hidden">-</p> <Dot className="w-4 h-4 hidden md:block text-slate-500" />
                                        <p>ETH</p>
                                        <p className="text-red-400">High Risk</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-green-400 font-bold">10.5%</p>
                                    <p className="text-xs text-slate-400 text-end">APY</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </div>

    </div>
}

export default OverviewPage