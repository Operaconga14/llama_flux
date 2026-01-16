const Dashboard = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<div>
			<h1 className="text-white text-3xl">Dashboard Home</h1>
		</div>
	);
};

export default Dashboard;
