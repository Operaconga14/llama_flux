import Childcard from "@/app/components/childCard";
import { formatTVL, formatAPY } from "@/app/lib/formater";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Network } from "inspector";
import { Search, Trash2 } from "lucide-react";

export default function YieldsPage() {
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
                        <Select >
                            <SelectTrigger className="border-white/10 bg-white/5 text-white">
                                <SelectValue placeholder="All Chains" />
                            </SelectTrigger>
                            <SelectContent className="border-white/10 bg-slate-900">
                                <SelectItem value="all">All Chains</SelectItem>
                                <SelectItem value={"chain"}></SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Asset Type filter */}
                        <Select >
                            <SelectTrigger className="border-white/10 bg-white/5 text-white">
                                <SelectValue placeholder="Asset Type" />
                            </SelectTrigger>
                            <SelectContent className="border-white/10 bg-slate-900">
                                <SelectItem value="all">All Assets</SelectItem>
                                <SelectItem value="stablecoin">Stablecoins</SelectItem>
                                <SelectItem value="volatile">Volatile</SelectItem>
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
        </div>
    );
}