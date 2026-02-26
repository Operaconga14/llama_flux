import { ChainsByTvl } from "@/app/components/chains-tvl"
import { Features } from "@/app/components/features"
import { Hero } from "@/app/components/hero"
import { LiveMarket } from "@/app/components/live-market"
import { TopYieldPools } from "@/app/components/topyield-pools"

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Live Market Section */}
            <LiveMarket />

            {/* Top Yield Pools */}
            <TopYieldPools />

            {/* Chains By Tvl */}
            <ChainsByTvl />

            {/* Features */}
            <Features />
        </div>
    )
}


export default LandingPage