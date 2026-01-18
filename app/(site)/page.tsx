import Hero from "../components/hero";

export default async function page() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<div>
			<Hero />
		</div>
	);
}
