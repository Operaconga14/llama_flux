import Footer from "../components/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen">{children}
        <Footer />
    </div>;
}