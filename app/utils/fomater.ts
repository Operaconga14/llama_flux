export const formatNumberIn1Decimal = (number: number) => {
    if (number >= 1e9) return `${(number / 1e9).toFixed(1)}B`;
    if (number >= 1e6) return `${(number / 1e6).toFixed(1)}M`;
    if (number >= 1e3) return `${(number / 1e3).toFixed(1)}K`;
    return `${number}`;
}

export const formatNumberIn2Decimal = (number: number) => {
    if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`;
    if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`;
    if (number >= 1e3) return `${(number / 1e3).toFixed(2)}K`;
    return `${number}`;
}

export const formatAPY = (apy: number) => {
    if (apy > 100) return `+100%`;
    if (apy === 0) return `0%`;
    return `${Number(apy).toFixed(1)}%`;
}

export const formatPercentage = (percentage: number) => {
    if (percentage > 100) return `+${Number(percentage).toFixed(2)}%`;
    return `${Number(percentage).toFixed(2)}%`;
}