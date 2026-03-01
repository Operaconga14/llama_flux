import { LucideIcon } from "lucide-react";

export interface LiveMarketTypes {
    totalValueLocked: number;
    topApy: number;
    activeChains: number
}

export interface Yield {
    id: string;
    pool: string;
    protocol: string;
    chain: string;
    apy: number;
    tvl: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    isStablecoin: boolean;
    apyHistory?: { date: string; apy: number }[];
}

export interface Chain {
    id: string;
    name: string;
    tvl: number;
    tvlChange24h: number;
    protocolCount: number;
    logo?: string;
}

export interface ChainByTVL {
    gecko_id: string
    tvl: number
    tokenSymbol: string
    cmcId: string
    name: string
    chainId: number
}

export interface SidebarProps {
    sidebarOpen: boolean
    setSidebarOpen: (open: boolean) => void
    sideBarClose: boolean
    setSidebarClose: (close: boolean) => void
}

export interface KpiCardProps {
    title: string
    value: string
    icon: LucideIcon
    trend?: "up" | "down"
    change?: number
    iconClassName?: string
    iconContainerClassName?: string

}

export interface Protocol {
    id: string;
    name: string;
    tvl: number;
    category: string;
    chains: string[];
    logo?: string;
    description?: string;
    tvlHistory?: { date: string; tvl: number }[];
}

