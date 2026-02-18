import ChainsByTVL from "@/app/components/chainsbytvl";
import GetStarted from "@/app/components/getstarted";
import Hero from "@/app/components/hero";
import SliveMarket from "@/app/components/slivemarket";
import TotalYieldPools from "@/app/components/totalyieldpools";
import WhyLlamaFlux from "@/app/components/whyllamaflux";

export default function LandingPage() {
    return <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-25">
        {/* Hero */}
        <Hero />

        {/* Short live Market */}
        <SliveMarket />

        {/* Total Yield Pools */}
        <TotalYieldPools />

        {/* Top Chains By TVL */}
        <ChainsByTVL />

        {/* Why Llama Flux */}
        <WhyLlamaFlux />

        {/* Join Us */}
        <GetStarted />
    </div>;
}