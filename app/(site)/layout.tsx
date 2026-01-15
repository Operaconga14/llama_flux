import Header from "../components/header";
import Footer from "../components/footer";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<div className="min-h-screen pt-16">{children}</div>
			<Footer />
		</div>
	);
};

export default SiteLayout;
