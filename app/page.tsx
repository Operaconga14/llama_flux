import SiteLayout from "./(site)/layout";
import Home from "./(site)/default";

export default async function Page() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<SiteLayout>
			<Home />
		</SiteLayout>
	);
}
