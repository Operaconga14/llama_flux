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