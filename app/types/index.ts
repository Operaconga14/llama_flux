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