import LandingPage from "./landing/page";

export default async function PublicPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <div>
        {/* Landing Page */}
        <LandingPage />
    </div>
}