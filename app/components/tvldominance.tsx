import Button from "../ui/button";
import Chart from "../ui/chart";

export default function TvlDominance() {
	return (
		<div className="border border-0.5 bg-gray-900 border-gray-800 rounded-lg py-5 px-5">
			<div className="flex flex-col md:flex-row justify-between">
				<div className="flex flex-col text-white">
					<h1 className="text-white text-1xl md:text-5xl font-normal">Tvl Dominance</h1>
					<div className="text-[11px]">Historical Total value locked accross all tracked chains</div>
				</div>

				<div className="flex gap-2 items-center">
					<Button className="px-3 h-8 rounded-md hover:bg-[var(--accent-color)] text-white" children="1D" />
					<Button className="px-3 h-8 rounded-md hover:bg-[var(--accent-color)] text-white" children="7D" />
					<Button className="px-3 h-8 rounded-md hover:bg-[var(--accent-color)] text-white" children="1M" />
					<Button className="px-3 h-8 rounded-md hover:bg-[var(--accent-color)] text-white" children="1Y" />
					<Button className="px-3 h-8 rounded-md hover:bg-[var(--accent-color)] text-white" children="ALL" />
				</div>
			</div>
			{/* Graph Section */}
			<div className="mt-10 flex flex-col md:flex-row h-100 w-full justify-center items-center">
				<Chart />
				<div className="text-white w-72 h-40 justify-center items-center flex">
					<div className="border border-[var(--accent-color)] rounded-lg py-2 px-4 flex flex-col items-center">
						<p className="text-xs text-gray-400">Legend</p>
						<h2 className="text-[var(--accent-color)] font-bold">$84.298</h2>
					</div>
				</div>
			</div>
			{/* Divider */}
			<div className="border-b border-gray-800"></div>
			{/* Chains */}
			<div className="flex gap-3 md:gap-10 mt-5">
				<div className="flex text-white flex-col">
					<p className="text-gray-400">Etheresum</p>
					<h1 className="text-xl font-bold">$48.2B (57.2%)</h1>
				</div>
				<div className="flex text-white flex-col">
					<p className="text-gray-400">Tron</p>
					<h1 className="text-xl font-bold">$8.1B (9.6%)</h1>
				</div>
				<div className="flex text-white flex-col">
					<p className="text-gray-400">BSC</p>
					<h1 className="text-xl font-bold">$5.4B (6.4%)</h1>
				</div>
			</div>
		</div>
	);
}
