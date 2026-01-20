import Hero from "../components/hero";
import TvlDominance from "../components/tvldominance";

export default async function page() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<div className="">
			<Hero />
			<div className="px-5 md:px-25 mt-25">
				<TvlDominance />
			</div>
		</div>
	);
}
