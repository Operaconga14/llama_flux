import { Bookmark, Boxes, LayoutDashboard, Network, Settings, Shield, TrendingUp } from "lucide-react";
import { Chain, Protocol, Yield } from "../types";

export const llamaFeatures = [
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


export const mockSavedYields = <Yield[]>[
    {
        id: "1",
        apy: 10.5,
        protocol: "Aave",
        chain: "Ethereum",
        tvl: 1000000,
    }, {
        id: "2",
        apy: 15.5,
        protocol: "Uniswap",
        chain: "Polygon",
        tvl: 1500000,
    },
]

export const mockSavedChains = <Chain[]>[
    {
        id: "1",
        name: "Aave",
        tvl: 1000000,
        protocolCount: 10,
        tvlChange24h: 10,
        logo: "https://example.com/logo.png",
    }, {
        id: "2",
        name: "Uniswap",
        tvl: 1500000,
        protocolCount: 15,
        tvlChange24h: 15,
        logo: "https://example.com/logo.png",
    },
]

export const mockSavedProtocols = <Protocol[]>[
    {
        id: "1",
        name: "Aave",
        tvl: 1000000,
        logo: "https://example.com/logo.png",
        category: "Lending",
        chains: ["Ethereum", "Polygon"],
        description: "Aave is a decentralized finance (DeFi) protocol that provides a range of financial services, including lending, borrowing, and yield farming.",
        tvlHistory: [{ date: "2022-01-01", tvl: 1000000 }]
    }, {
        id: "2",
        name: "Uniswap",
        tvl: 1500000,
        logo: "https://example.com/logo.png",
        category: "Dex",
        chains: ["Ethereum", "Polygon"],
        description: "Uniswap is a decentralized exchange (DEX) that allows users to trade cryptocurrencies and other assets on the Ethereum blockchain.",
        tvlHistory: [{ date: "2022-01-01", tvl: 1500000 }]
    },
]