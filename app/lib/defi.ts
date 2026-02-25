import axios from "axios"
import { environment } from "../environments/environments"

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