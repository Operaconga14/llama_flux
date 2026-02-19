"use client"
import { SidebarProvider } from "@/components/ui/sidebar";
import Topbar from "../components/topbar";
import { useState } from "react";
import { AppSidebar } from "../components/app-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <SidebarProvider
            open={sidebarOpen}
            onOpenChange={setSidebarOpen}
            className="flex bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <AppSidebar
                sidebarOpen={sidebarOpen}
                setSidebarClose={() => setSidebarOpen(false)}
            />
            <main className={`w-full flex-1 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
                <Topbar isSidebarOpen={!sidebarOpen} triggerClicked={() => setSidebarOpen(true)} />
                {children}
            </main>
        </SidebarProvider>
    )
}