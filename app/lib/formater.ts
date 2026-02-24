export const formatTVL = (tvl: number) => {
    if (tvl >= 1e9) return `$${(tvl / 1e9).toFixed(2)}B`;
    if (tvl >= 1e6) return `$${(tvl / 1e6).toFixed(2)}M`;
    if (tvl >= 1e3) return `$${(tvl / 1e3).toFixed(2)}K`;
    return `$${tvl}`;
};

export const formatAPY = (apy: number) => {
    return `${(apy * 100).toFixed(2)}%`;
};

export const formatChains = (chain: number) => {
    if (chain >= 1e9) return `${(chain / 1e9).toFixed(2)}B`;
    if (chain >= 1e6) return `${(chain / 1e6).toFixed(2)}M`;
    if (chain >= 1e3) return `${(chain / 1e3).toFixed(2)}K`;
    return `${chain}`;
}

export const formatGeneral = (number: number) => {
    if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`;
    if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`;
    if (number >= 1e3) return `${(number / 1e3).toFixed(2)}K`;
    return `${number}`;
}

export const formatPercentage = (number: number) => {
    if (number > 100)
        return `+${number}`;
}
