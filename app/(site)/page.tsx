export default async function page() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<div>
			<h1 className="text-white text-3xl">Home Hello</h1>
		</div>
	);
}
