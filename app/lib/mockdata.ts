import { Bookmark, Boxes, LayoutDashboard, Network, Settings, Shield, TrendingUp } from "lucide-react";
import { Chain, Protocol, Yield } from "../types";


export const whyLlamaFlux = [
    {
        icon: TrendingUp,
        title: "Track Yields",
        description: "Monitor APYs across all protocols and chains in real-time"
    },
    {
        icon: Boxes,
        title: "Explore Protocols",
        description: "Discover and analyze DeFi protocols with detailed metrics"
    },
    {
        icon: Shield,
        title: "Manage Favorites",
        description: "Save your favorite protocols and chains for easy access"
    }
]

export const sidebarMenu = [
    {
        icon: LayoutDashboard,
        title: "Dashboard",
        link: "/dashboard"
    },
    {
        icon: TrendingUp,
        title: "Yields",
        link: "/dashboard/yields"
    },
    {
        icon: Boxes,
        title: "Protocols",
        link: "/dashboard/protocols"
    },
    {
        icon: Network,
        title: "Chains",
        link: "/dashboard/chains"
    },
    {
        icon: Bookmark,
        title: "Saved Items",
        link: "/dashboard/favourites"
    },
    {
        icon: Settings,
        title: "Settings",
        link: "/dashboard/settings"
    },
]

// Saved 
export const mocksavedChains: Chain[] = [
    {
        id: 'ethereum',
        name: 'Ethereum',
        tvl: 45200000000,
        tvlChange24h: 2.3,
        protocolCount: 342,
    },
    {
        id: 'bsc',
        name: 'BSC',
        tvl: 12800000000,
        tvlChange24h: -1.2,
        protocolCount: 189,
    },
    {
        id: 'arbitrum',
        name: 'Arbitrum',
        tvl: 8900000000,
        tvlChange24h: 5.7,
        protocolCount: 156,
    }
];

export const mocksavedProtocols: Protocol[] = [
    {
        id: 'aave',
        name: 'Aave',
        tvl: 8900000000,
        category: 'Lending',
        chains: ['Ethereum', 'Polygon', 'Avalanche', 'Arbitrum', 'Optimism'],
        description: 'Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers.',
    },
    {
        id: 'uniswap',
        name: 'Uniswap',
        tvl: 4200000000,
        category: 'DEX',
        chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base'],
        description: 'Uniswap is a decentralized trading protocol, guaranteeing liquidity for millions of users and hundreds of Ethereum applications.',
    },
    {
        id: 'curve',
        name: 'Curve Finance',
        tvl: 3400000000,
        category: 'DEX',
        chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Avalanche'],
        description: 'Curve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading.',
    }
];

export const mocksavedYields: Yield[] = [
    {
        id: 'y1',
        pool: 'USDC-USDT',
        protocol: 'Curve Finance',
        chain: 'Ethereum',
        apy: 3.2,
        tvl: 450000000,
        riskLevel: 'Low',
        isStablecoin: true,
    },
    {
        id: 'y2',
        pool: 'ETH-USDC',
        protocol: 'Uniswap',
        chain: 'Ethereum',
        apy: 12.5,
        tvl: 280000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y3',
        pool: 'USDC',
        protocol: 'Aave',
        chain: 'Polygon',
        apy: 4.8,
        tvl: 320000000,
        riskLevel: 'Low',
        isStablecoin: true,
    }
];

export const chainDropdownItems = [
    { label: "All Chains", value: null },
    { label: "ETH", value: "ethereum" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
]
