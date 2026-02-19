import { mockYields } from "../lib/mockdata";
import { Yield } from "../types";

export const getTopYields = (count: number = 5): Yield[] => {
    return [...mockYields].sort((a, b) => b.apy - a.apy).slice(0, count);
};