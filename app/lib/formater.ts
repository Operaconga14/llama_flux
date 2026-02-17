export const formatTVL = (tvl: number) => {
    if (tvl >= 1e9) return `$${(tvl / 1e9).toFixed(2)}B`;
    if (tvl >= 1e6) return `$${(tvl / 1e6).toFixed(2)}M`;
    if (tvl >= 1e3) return `$${(tvl / 1e3).toFixed(2)}K`;
    return `$${tvl}`;
};

export const formatAPY = (apy: number) => {
    return `${apy.toFixed(1)}%`;
};

export const formatChains = (chain: number) => {
    if (chain >= 1e9) return `${(chain / 1e9).toFixed(2)}B`;
    if (chain >= 1e6) return `${(chain / 1e6).toFixed(2)}M`;
    if (chain >= 1e3) return `${(chain / 1e3).toFixed(2)}K`;
    return `${chain}`;
}
