import { Hero } from "@/app/components/hero"
import { LiveMarket } from "@/app/components/live-market"

export const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Live Market Section */}
            <LiveMarket />
        </div>
    )
}
