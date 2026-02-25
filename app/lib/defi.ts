"use server"
import { axiosInstance } from "../lib/axios";
import { Yield } from "../types";
import { getRiskLevel } from "../utils/helpers";


export const getTotalLocked = async () => {
    try {
        const { data } = await axiosInstance.get("https://api.llama.fi/v2/historicalChainTvl")
        const globalTvl = data[data.length - 1]
        return { tvl: globalTvl.tvl }
    } catch (error) {
        return { tvl: 0 }
    }
}

export const getTotalApys = async () => {
    try {
        const { data } = await axiosInstance.get("https://yields.llama.fi/pools")
        const pools = data.data.filter((pool: any) =>
            pool.apy != null && pool.apy > 0 && pool.apy < 1000)
        const totalApy = pools.reduce((sum: number, pool: any) => sum + (pool.apy ?? 0), 0)
        return { totalApy }
    } catch (error) {
        return { totalApy: 0 }
    }
}


export const getActiveChanisLenght = async () => {
    try {
        const { data } = await axiosInstance.get("https://api.llama.fi/v2/chains")
        return { activeChains: data.length }

    } catch (error) {
        return { activeChains: 0 }
    }
}

export const getTopYields = async (count: number): Promise<Yield[]> => {
    try {
        const { data } = await axiosInstance.get("https://yields.llama.fi/pools")
        return data.data
            .filter((pool: any) =>
                pool.apy != null &&
                pool.apy > 0 &&
                pool.apy < 300 &&
                pool.outlier === false &&
                pool.tvlUsd > 1_000_000
            )
            .sort((a: any, b: any) => b.apy - a.apy)
            .slice(0, count)
            .map((pool: any) => ({
                id: pool.pool,
                pool: pool.symbol,
                protocol: pool.project,
                chain: pool.chain,
                apy: parseFloat(pool.apy.toFixed(2)),
                tvl: pool.tvlUsd,
                riskLevel: getRiskLevel(pool),
                isStablecoin: pool.stablecoin ?? false,
            }))
    } catch (error) {
        return []
    }
};

export const getTopChainsByTvl = async (count: number) => {
    try {
        const { data } = await axiosInstance.get("https://api.llama.fi/v2/chains")
        return data
            .filter((chain: any) =>
                chain.tvl != null && chain.tvl > 0
            )
            .sort((a: any, b: any) => b.tvl - a.tvl)
            .slice(0, count)
            .map((chain: any) => ({
                name: chain.name,
                tokenSymbol: chain.tokenSymbol ?? "N/A",
                tvl: chain.tvl,
                tvlFormatted: `$${(chain.tvl / 1e9).toFixed(2)}B`,
            }))
    } catch (error) {
        return []
    }
}