import { Bookmark, Boxes, LayoutDashboard, Network, Settings, Shield, TrendingUp } from "lucide-react";
import { Chain, Protocol, Yield } from "../types";

export const mockLivedata = {
    totalVL: 85600000000,
    topAPY: 32.4,
    activeChains: 3000000,
}


// Generate mock historical data
const generateHistoricalData = (baseValue: number, days: number = 30) => {
    const data = [];
    for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const randomVariation = baseValue * (0.9 + Math.random() * 0.2);
        data.push({
            date: date.toISOString().split('T')[0],
            value: randomVariation,
        });
    }
    return data;
};

export const mockChains: Chain[] = [
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
    },
    {
        id: 'polygon',
        name: 'Polygon',
        tvl: 6400000000,
        tvlChange24h: 1.8,
        protocolCount: 134,
    },
    {
        id: 'optimism',
        name: 'Optimism',
        tvl: 4200000000,
        tvlChange24h: 3.2,
        protocolCount: 98,
    },
    {
        id: 'avalanche',
        name: 'Avalanche',
        tvl: 3100000000,
        tvlChange24h: -2.1,
        protocolCount: 87,
    },
    {
        id: 'solana',
        name: 'Solana',
        tvl: 2800000000,
        tvlChange24h: 8.4,
        protocolCount: 76,
    },
    {
        id: 'base',
        name: 'Base',
        tvl: 2200000000,
        tvlChange24h: 12.3,
        protocolCount: 54,
    },
];

export const mockProtocols: Protocol[] = [
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
    },
    {
        id: 'makerdao',
        name: 'MakerDAO',
        tvl: 5100000000,
        category: 'Lending',
        chains: ['Ethereum'],
        description: 'MakerDAO is a decentralized organization dedicated to bringing stability to the cryptocurrency economy through the DAI stablecoin.',
    },
    {
        id: 'lido',
        name: 'Lido',
        tvl: 12300000000,
        category: 'Liquid Staking',
        chains: ['Ethereum', 'Solana', 'Polygon'],
        description: 'Lido is a liquid staking solution for ETH 2.0 backed by industry-leading staking providers.',
    },
    {
        id: 'pancakeswap',
        name: 'PancakeSwap',
        tvl: 2100000000,
        category: 'DEX',
        chains: ['BSC', 'Ethereum', 'Arbitrum'],
        description: 'PancakeSwap is a decentralized exchange for swapping BEP20 tokens on Binance Smart Chain.',
    },
    {
        id: 'compound',
        name: 'Compound',
        tvl: 1800000000,
        category: 'Lending',
        chains: ['Ethereum', 'Polygon', 'Arbitrum'],
        description: 'Compound is an algorithmic, autonomous interest rate protocol built for developers.',
    },
    {
        id: 'balancer',
        name: 'Balancer',
        tvl: 1200000000,
        category: 'DEX',
        chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism'],
        description: 'Balancer is a protocol for programmable liquidity.',
    },
    {
        id: 'gmx',
        name: 'GMX',
        tvl: 890000000,
        category: 'Derivatives',
        chains: ['Arbitrum', 'Avalanche'],
        description: 'GMX is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades.',
    },
    {
        id: 'sushiswap',
        name: 'SushiSwap',
        tvl: 760000000,
        category: 'DEX',
        chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Avalanche', 'BSC'],
        description: 'SushiSwap is a community-driven decentralized exchange (DEX).',
    },
];

export const mockYields: Yield[] = [
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
    },
    {
        id: 'y4',
        pool: 'WBTC-ETH',
        protocol: 'Uniswap',
        chain: 'Arbitrum',
        apy: 18.3,
        tvl: 156000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y5',
        pool: 'stETH',
        protocol: 'Lido',
        chain: 'Ethereum',
        apy: 5.2,
        tvl: 8900000000,
        riskLevel: 'Low',
        isStablecoin: false,
    },
    {
        id: 'y6',
        pool: 'DAI-USDC',
        protocol: 'Curve Finance',
        chain: 'Polygon',
        apy: 3.8,
        tvl: 210000000,
        riskLevel: 'Low',
        isStablecoin: true,
    },
    {
        id: 'y7',
        pool: 'ARB-ETH',
        protocol: 'Uniswap',
        chain: 'Arbitrum',
        apy: 24.7,
        tvl: 89000000,
        riskLevel: 'High',
        isStablecoin: false,
    },
    {
        id: 'y8',
        pool: 'MATIC',
        protocol: 'Aave',
        chain: 'Polygon',
        apy: 6.3,
        tvl: 134000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y9',
        pool: 'USDT',
        protocol: 'Compound',
        chain: 'Ethereum',
        apy: 4.1,
        tvl: 420000000,
        riskLevel: 'Low',
        isStablecoin: true,
    },
    {
        id: 'y10',
        pool: 'AVAX-USDC',
        protocol: 'PancakeSwap',
        chain: 'Avalanche',
        apy: 15.9,
        tvl: 67000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y11',
        pool: 'GMX-ETH',
        protocol: 'GMX',
        chain: 'Arbitrum',
        apy: 32.4,
        tvl: 45000000,
        riskLevel: 'High',
        isStablecoin: false,
    },
    {
        id: 'y12',
        pool: 'BNB-USDT',
        protocol: 'PancakeSwap',
        chain: 'BSC',
        apy: 19.2,
        tvl: 123000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
];

// Add TVL history to protocols
mockProtocols.forEach(protocol => {
    protocol.tvlHistory = generateHistoricalData(protocol.tvl).map(d => ({
        date: d.date,
        tvl: d.value,
    }));
});

// Add APY history to yields
mockYields.forEach(yieldItem => {
    yieldItem.apyHistory = generateHistoricalData(yieldItem.apy, 30).map(d => ({
        date: d.date,
        apy: d.value,
    }));
});

export const getTotalTVL = (): number => {
    return mockChains.reduce((sum, chain) => sum + chain.tvl, 0);
};

export const getTopYields = (count: number = 5): Yield[] => {
    return [...mockYields].sort((a, b) => b.apy - a.apy).slice(0, count);
};

export const getTopChains = (count: number = 5): Chain[] => {
    return [...mockChains].sort((a, b) => b.tvl - a.tvl).slice(0, count);
};

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
    },
    {
        id: 'polygon',
        name: 'Polygon',
        tvl: 6400000000,
        tvlChange24h: 1.8,
        protocolCount: 134,
    },
    {
        id: 'optimism',
        name: 'Optimism',
        tvl: 4200000000,
        tvlChange24h: 3.2,
        protocolCount: 98,
    },
    {
        id: 'avalanche',
        name: 'Avalanche',
        tvl: 3100000000,
        tvlChange24h: -2.1,
        protocolCount: 87,
    },
    {
        id: 'solana',
        name: 'Solana',
        tvl: 2800000000,
        tvlChange24h: 8.4,
        protocolCount: 76,
    },
    {
        id: 'base',
        name: 'Base',
        tvl: 2200000000,
        tvlChange24h: 12.3,
        protocolCount: 54,
    },
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
    },
    {
        id: 'makerdao',
        name: 'MakerDAO',
        tvl: 5100000000,
        category: 'Lending',
        chains: ['Ethereum'],
        description: 'MakerDAO is a decentralized organization dedicated to bringing stability to the cryptocurrency economy through the DAI stablecoin.',
    },
    {
        id: 'lido',
        name: 'Lido',
        tvl: 12300000000,
        category: 'Liquid Staking',
        chains: ['Ethereum', 'Solana', 'Polygon'],
        description: 'Lido is a liquid staking solution for ETH 2.0 backed by industry-leading staking providers.',
    },
    {
        id: 'pancakeswap',
        name: 'PancakeSwap',
        tvl: 2100000000,
        category: 'DEX',
        chains: ['BSC', 'Ethereum', 'Arbitrum'],
        description: 'PancakeSwap is a decentralized exchange for swapping BEP20 tokens on Binance Smart Chain.',
    },
    {
        id: 'compound',
        name: 'Compound',
        tvl: 1800000000,
        category: 'Lending',
        chains: ['Ethereum', 'Polygon', 'Arbitrum'],
        description: 'Compound is an algorithmic, autonomous interest rate protocol built for developers.',
    },
    {
        id: 'balancer',
        name: 'Balancer',
        tvl: 1200000000,
        category: 'DEX',
        chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism'],
        description: 'Balancer is a protocol for programmable liquidity.',
    },
    {
        id: 'gmx',
        name: 'GMX',
        tvl: 890000000,
        category: 'Derivatives',
        chains: ['Arbitrum', 'Avalanche'],
        description: 'GMX is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades.',
    },
    {
        id: 'sushiswap',
        name: 'SushiSwap',
        tvl: 760000000,
        category: 'DEX',
        chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Avalanche', 'BSC'],
        description: 'SushiSwap is a community-driven decentralized exchange (DEX).',
    },
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
    },
    {
        id: 'y4',
        pool: 'WBTC-ETH',
        protocol: 'Uniswap',
        chain: 'Arbitrum',
        apy: 18.3,
        tvl: 156000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y5',
        pool: 'stETH',
        protocol: 'Lido',
        chain: 'Ethereum',
        apy: 5.2,
        tvl: 8900000000,
        riskLevel: 'Low',
        isStablecoin: false,
    },
    {
        id: 'y6',
        pool: 'DAI-USDC',
        protocol: 'Curve Finance',
        chain: 'Polygon',
        apy: 3.8,
        tvl: 210000000,
        riskLevel: 'Low',
        isStablecoin: true,
    },
    {
        id: 'y7',
        pool: 'ARB-ETH',
        protocol: 'Uniswap',
        chain: 'Arbitrum',
        apy: 24.7,
        tvl: 89000000,
        riskLevel: 'High',
        isStablecoin: false,
    },
    {
        id: 'y8',
        pool: 'MATIC',
        protocol: 'Aave',
        chain: 'Polygon',
        apy: 6.3,
        tvl: 134000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y9',
        pool: 'USDT',
        protocol: 'Compound',
        chain: 'Ethereum',
        apy: 4.1,
        tvl: 420000000,
        riskLevel: 'Low',
        isStablecoin: true,
    },
    {
        id: 'y10',
        pool: 'AVAX-USDC',
        protocol: 'PancakeSwap',
        chain: 'Avalanche',
        apy: 15.9,
        tvl: 67000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
    {
        id: 'y11',
        pool: 'GMX-ETH',
        protocol: 'GMX',
        chain: 'Arbitrum',
        apy: 32.4,
        tvl: 45000000,
        riskLevel: 'High',
        isStablecoin: false,
    },
    {
        id: 'y12',
        pool: 'BNB-USDT',
        protocol: 'PancakeSwap',
        chain: 'BSC',
        apy: 19.2,
        tvl: 123000000,
        riskLevel: 'Medium',
        isStablecoin: false,
    },
];
