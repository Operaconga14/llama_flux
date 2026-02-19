"use client"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { X, Zap } from "lucide-react";
import { sidebarMenu } from "../lib/mockdata";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function AppSidebar({ sidebarOpen, setSidebarClose }: { sidebarOpen: boolean, setSidebarClose?: () => void }) {
    const location = usePathname();


    return (
        <div className="text-white">

            <Sidebar className={cn(
                "fixed top-0 left-0 z-50 h-full w-64 flex flex-col bg-slate-900 shadow-2xl shadow-black/50 transition-transform duration-300 ease-in-out",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>

                <SidebarHeader className="border-b h-16 px-5 bg-gray-900" >
                    <div className="flex justify-between gap-9">
                        <div className="flex items-center gap-2">
                            <Zap className="text-cyan-400 w-8 h-8" />
                            <div className="flex-col">
                                <h1 className="text-white text-xl font-bold">LlamaFlux</h1>
                                <p className="text-slate-400 text-[10px]">DeFi Analytics</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Button variant="outline" className="bg-transparent text-slate-400 hover:bg-transparent hover:text-slate-300" size="icon" onClick={setSidebarClose}><X /></Button>
                        </div>

                    </div>

                </SidebarHeader>
                <SidebarContent className="bg-slate-900">
                    <SidebarMenu>
                        <SidebarMenuItem className="px-4 py-5 flex flex-col gap-4">
                            {sidebarMenu.map(({ icon: Icon, link, title }) => {
                                const isActive = location === link;
                                return (
                                    <div key={link}>
                                        <Link href={link}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium transition-all",
                                                isActive
                                                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                                            )}>
                                            <Button className="bg-transparent shadow-none w-full h-8 flex justify-start text-sm text-slate-500 hover:bg-transparent hover:text-cyan-400">< Icon className="w-12 h-12" />{title}</Button>
                                        </Link>
                                    </div>
                                );
                            })}
                        </SidebarMenuItem>
                    </SidebarMenu>

                </SidebarContent>
            </Sidebar>
        </div>

    )
}