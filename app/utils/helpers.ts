export const getRiskLevel = (pool: any): 'Low' | 'Medium' | 'High' => {
    if (pool.apy < 10) return 'Low'
    if (pool.apy < 50) return 'Medium'
    return 'High'
}