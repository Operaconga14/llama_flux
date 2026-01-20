import { AiOutlineArrowsAlt, AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Logo from "./logo";
import Button from "../ui/button";
import Image from "../ui/image";
import Card from "../ui/card";
import { GoArrowUpRight } from "react-icons/go";

const Hero = async () => {
	return (
		<div className="flex justify-center pt-50 border-b border-white/10 min-h-250 md:min-h-200 text-white py-15">
			<div className="absolute w-30 md:w-65 lg:w-150 h-30 md:h-100 rounded-full bg-radial from-[var(--accent-color)] to-[var(--accent-colr)] opacity-30  md:opacity-10 blur-3xl right-0 transform top-0 md:top-0 xl:top-17"></div>
			{/* Main Content */}
			<div className="flex flex-col">
				{/* First Main Content */}
				<div className="flex hidden md:flex justify-between items-center gap-60 xl:gap-170 px-3 mx-auto">
					{/* Logo */}
					<div className="flex items-center justify-center w-full">
						<Image className="w-30 h-30" alt="Llama-flux" src="/logo_trns.png" /> <h1 className="">Llama Flux</h1>
					</div>
					{/* Search Input */}
					<div className="relative w-full">
						<input
							type="text"
							placeholder="Search Protocols.."
							className="ps-8 py-1 text-[14px] w-full border-1 border-gray-800 text-gray-500 rounded-full focus:border-gray-700 focus:outline-none focus:outline-gray-900 focus:ring-1 focus:ring-gray-800 focus:text-gray-400"
						/>
						<button
							type="button"
							className="absolute text-gray-500 focus:text-gray-700 left-2 top-1/2 transform -translate-y-1/2 hover:text-gray-600 transition hover:-translate-x-1 cursor-pointer text-xl">
							<AiOutlineSearch />
						</button>
					</div>
					{/* Notification and User Icon */}
					<div className="flex items-center gap-4">
						<AiOutlineBell className="text-2xl" />
						<AiOutlineUser className="rounded-full border border-purple-400 text-2xl p-1" />
					</div>
				</div>
				{/* Second Main Content */}
				<div className="flex flex-col mt-0 md:mt-5 md:flex-row justify-start px-5 lg:px-10 gap-y-10 gap-x-100">
					{/* Left Content */}
					<div className="flex flex-col">
						<h1 className="text-4xl md:text-5xl font-semibold">DECENTRALIZED FINANCE</h1>
						<h1 className="text-4xl md:text-5xl text-[var(--accent-color)]">UNFILTERED.</h1>
						<p className="text-sm md:text-lg text-gray-400 pe-10">Real-time analytics for the next generation of liquidity protocols. Track TVL, volume, and yields across 100+ chains.</p>
						{/* Buttons */}
						<div className="flex flex-col md:flex-row mt-7 gap-4">
							<Button className="bg-[var(--accent-color)] rounded-lg px-4 py-3 font-semibold text-sm" children="Explore Protocols" />
							<Button className="border border-[var(--accent-color)] rounded-lg px-4 py-3 font-semibold text-sm" children="View Global Chart" />
						</div>
					</div>
					{/* Right Content */}
					<div className="flex flex-col md:flex-row gap-4 absolute xl:static top-160 md:top-170">
						<Card className="border-l-4 flex w-38 items-center justify-start rounded h-fit py-5 px-3 border-[var(--accent-color)] shadow-lg">
							<div className="flex flex-col">
								<h1 className="text-sm text-gray-500">Total DEFI TVL</h1>
								<h1 className="text-2xl font-semibold">$84.298</h1>
								<p className="flex text-green-500 items-center gap-1 text-sm">
									+2.4% <GoArrowUpRight />
								</p>
							</div>
						</Card>
						<Card className="border-l-4 flex w-38 items-center justify-start rounded h-fit py-5 px-3 border-[var(--accent-color)] shadow-lg">
							<div className="flex flex-col">
								<h1 className="text-sm text-gray-500">24H CHANGE</h1>
								<h1 className="text-2xl font-semibold">+1.82%</h1>
								<p className="flex text-sm text-green-500 items-center gap-1">Bullish</p>
							</div>
						</Card>
						<Card className="border-l-4 flex w-38 items-center justify-start rounded h-fit py-5 px-3 border-[var(--accent-color)] shadow-lg">
							<div className="flex flex-col">
								<h1 className="text-sm text-gray-500">PROTOCOLS</h1>
								<h1 className="text-2xl font-semibold">3,142</h1>
								<p className="flex text-gray-500 items-center gap-1 text-sm">Updated 2m ago</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
