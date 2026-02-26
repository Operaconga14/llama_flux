import axios from "axios"
import { environment } from "../environments/environments"
import { Yield } from "../types"
import { getRiskLevel } from "../utils/fomater"

export const getTotalValueLocked = async () => {
    try {
        const { data } = await axios.get(`${environment.defiApis.v2}/historicalChainTvl`)
        const totalValueLocked = data[data.length - 1]
        return totalValueLocked.tvl
    } catch (error) {
        return error
    }
}

export const getTotalAPY = async () => {
    try {
        const { data } = await axios.get(`${environment.defiApis.yields}/pools`)
        const pools = data.data.filter((pool: any) => pool.apy !== null && pool.apy > 0 && pool.apy < 1000)
        const totalAPY = pools.reduce((sum: number, pool: any) => sum + (pool.apy ?? 0), 0)
        return totalAPY
    } catch (error) {
        return error
    }
}

export const getActiveChains = async () => {
    try {
        const { data } = await axios.get(`${environment.defiApis.v2}/chains`)
        const activeChains = data.length
        return activeChains
    } catch (error) {
        return error
    }
}

export const getTopYieldPools = async (count: number): Promise<Yield[]> => {
    try {
        const { data } = await axios.get(`${environment.defiApis.yields}/pools`)
        const topYieldsPools = data.data
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

        return topYieldsPools
    } catch (error) {
        return []
    }
}

export const getChainByTvl = async (count: number) => {
    try {
        const { data } = await axios.get(`${environment.defiApis.v2}/chains`)
        const chainsByTVL = data
            .filter((chain: any) => chain.tvl != null && chain.tvl > 0)
            .slice(0, count)
            .sort((a: any, b: any) => b.tvl - a.tvl)
            .map((chain: any) => ({
                gecko_id: chain.gecko_id,
                tvl: chain.tvl,
                tokenSymbol: chain.tokenSymbol,
                cmcId: chain.cmcId,
                name: chain.name,
                chainId: chain.chainId,
            }))
        return chainsByTVL
    } catch (error) {
        return error
    }
}