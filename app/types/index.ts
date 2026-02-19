import { LucideIcon } from "lucide-react";

export type Theme = 'dark' | 'light';

export interface ThemeContexttype {
    theme: Theme
    toggletheme: () => void
}

export interface Livemarkettype {
    totalVL: number;
    topAPY: number;
    activeChains: number;
}

export interface Chain {
    id: string;
    name: string;
    tvl: number;
    tvlChange24h: number;
    protocolCount: number;
    logo?: string;
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

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface SavedItems {
    chains: string[];
    protocols: string[];
    yields: string[];
}

export interface KPICardProps {
    title: string;
    value: string;
    change?: number;
    icon: LucideIcon;
    trend?: 'up' | 'down';
}

export interface TVLChartProps {
    data: { date: string; tvl: number }[];
    title?: string;
}

export interface ChainDominanceChartProps {
    chains: Chain[];
}