import Header from "../components/header";
import Footer from "../components/footer";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col ">
			<Header />
			<div className="pt-16 pb-5 flex-1">{children}</div>
			<Footer />
		</div>
	);
};

export default SiteLayout;
