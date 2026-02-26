import { Bookmark, Boxes, LayoutDashboard, Network, Settings, Shield, TrendingUp } from "lucide-react";

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