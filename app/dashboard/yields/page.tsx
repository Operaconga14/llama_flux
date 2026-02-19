"use client"
import Childcard from "@/app/components/childCard";
import { formatAPY, formatTVL } from "@/app/lib/formater";
import { mockYields } from "@/app/lib/mockdata";
import { Yield } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectGroup, SelectLabel } from "@/components/ui/select";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Bookmark, ChevronDown, ChevronUp, Dot, Search } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
]

export default function YieldsPage() {
    const [yieldsData, setYieldsData] = useState<Yield[] | undefined>(undefined)



    useEffect(() => {
        const fetchYields = async () => {
            const yields = await mockYields
            setYieldsData(yields)
        }
        fetchYields()
    }, [])
    return (
        <div className="px-3 flex flex-col pb-5">
            <div className="flex flex-col pt-5">
                <h1 className="text-white text-2xl md:text-3xl font-semibold">Yield Explorer</h1>
                <p className="text-slate-400 text-sm">
                    Discover and track the best yields across DeFi
                </p>
            </div>

            <div className=" mt-5">
                {/* Top yields */}

                <Childcard className="flex flex-col py-5">
                    {/* Search Filter */}
                    <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-5">
                        {/* Search */}
                        <div className="lg:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <Input
                                    type="text"
                                    placeholder="Search pools or protocols..."
                                    className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500"
                                />
                            </div>
                        </div>

                        {/* Select Chains */}
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="ms-60">
                                <SelectGroup>
                                    <SelectLabel className="text-white">Fruits</SelectLabel>
                                    {items.map((item) => (
                                        <SelectItem key={item.value} value={String(item.value)}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Asset Type filter */}
                        <Select>
                            <SelectTrigger className="border-white/10 bg-white/5 text-white rounded-md">

                                <div className="flex justify-between px-3 text-sm">
                                    <SelectValue placeholder="All Assets" />
                                    {true ? <ChevronDown /> : <ChevronUp />}
                                </div>
                            </SelectTrigger>
                            <SelectContent className="bg-red-900 right-32">
                                <SelectGroup>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Min Apy */}
                        <div className="lg:col-span-1">
                            <Input
                                type="number"
                                placeholder="Min APY %"
                                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                </Childcard>
            </div>

            {/* Result */}
            <div className="flex flex-col mt-5">
                <div className="flex">
                    <p className="text-slate-400 text-xs">showing {12} of {12} yields</p>
                </div>
                {/* Card */}
                <div className="grid grid-cols-1 mt-5 gap-3">
                    {yieldsData?.map((yild, index) => (
                        <Childcard key={index} className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-center py-4">
                            <div className="flex flex-col">
                                <h1 className="text-white text-lg font-semibold">{yild.pool}</h1>
                                <div className="flex items-center gap-2">
                                    <p className="text-slate-500 text-xs">{yild.protocol}  </p> <Dot className="text-slate-500" /> <span className="text-cyan-500 text-xs">{yild.chain}</span>
                                </div>
                                <p className={`text-xs ${yild.riskLevel === 'High' ? "text-red-400" : yild.riskLevel === "Medium" ? "text-yellow-400" : "text-green-400"}`}>{yild.riskLevel} Risk</p>
                            </div>

                            <div className="flex justif-between gap-2 items-center">
                                <div className="flex flex-col">
                                    <p className="text-slate-400 text-xs">APY</p>
                                    <h1 className="text-green-400 font-semibold">{formatAPY(yild.apy)}</h1>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-slate-400 text-xs">TVL</p>
                                    <h1 className="text-white text-sm font-semibold">{formatTVL(yild.tvl)}</h1>
                                </div>

                                <div className="flex">
                                    <Button className="bg-transparent hover:bg-transparent">
                                        <Bookmark className="text-slate-500 w-4 h-4" />
                                    </Button>
                                </div>

                            </div>
                        </Childcard>
                    ))}

                </div>
            </div>
        </div>
    );
}