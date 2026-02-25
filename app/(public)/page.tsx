import { LandingPage } from "./landing/page"

const PublicPage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <LandingPage />
    )
}

export default PublicPage