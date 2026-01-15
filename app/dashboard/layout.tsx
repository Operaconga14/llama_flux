import Sidebar from "../components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Sidebar />
			<div className="min-h-screen pt-16">{children}</div>
		</div>
	);
};

export default DashboardLayout;
