"use server"
import client from "../lib/defi-llama";
import { Yield } from "../types";
import { getRiskLevel } from "../utils/helpers";
import axios from "axios"

export const getTotalApys = async () => {
    const response = await fetch("https://yields.llama.fi/pools")
    const data = await response.json()
    const pools = data.data.filter((pool: any) =>
        pool.apy != null && pool.apy > 0 && pool.apy < 1000)

    const tatalApy = pools.reduce((sum: number, pool: any) => sum + (pool.apy ?? 0), 0)
    return {
        totalApy: tatalApy,
    }
}

export const getTotalLocked = async () => {
    const response = await fetch("https://api.llama.fi/v2/historicalChainTvl")
    const data = await response.json()
    const globalTvl = data[data.length - 1]
    return {
        tvl: globalTvl.tvl
    }
}

export const getActiveChanisLenght = async () => {
    const chains = await fetch("https://api.llama.fi/v2/chains")
    const data = await chains.json()
    return {
        activeChains: data.length
    }
}

export const getTopYields = async (count: number = 5): Promise<Yield[]> => {
    const response = await fetch("https://yields.llama.fi/pools")


    const data = await response.json()
    const pools = data.data
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

    const topYields = pools
    return topYields
};

export const getTopChainsByTvl = async (count: number) => {
    const response = await fetch("https://api.llama.fi/v2/chains", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0"
        }
    })
    const chains = await response.json()
    return chains
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
}