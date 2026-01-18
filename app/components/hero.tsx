import { AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Logo from "./logo";
import Button from "../ui/button";

const Hero = async () => {
	return (
		<div className="min-w-screen min-h-150 border-b border-white/10 justify-center items-center text-white flex flex-col">
			<div className="flex hidden md:flex justify-between items-center space-x-40 lg:space-x-150">
				<div className="w-full">
					<Logo />
				</div>
				<div>
					<div className="relative w-60 max-w-sm">
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
				</div>
				<div className="flex items-center gap-4">
					<AiOutlineBell className="text-2xl" />
					<AiOutlineUser className="rounded-full border border-purple-400 text-2xl p-1" />
				</div>
			</div>
			<div className="flex justify-between w-full px-23 lg:px-34">
				<div>
					<h1 className="text-4xl font-bold">DECENTRALIZED FINANCE</h1>
					<h2 className="text-4xl text-[var(--accent-color)]">UNFILTERED.</h2>
					<p className="text-xs text-gray-400">
						Real time analytics for the next generation of liquidity protocols. Track TVL, volume, and yields <br />
						across 100+ chains.
					</p>
					<div className="mt-6 flex justify-start">
						<Button className="text-black bg-[var(--accent-color)] text-xs font-semibold px-5 py-3 rounded-md" children="Explore Protocols" />
						<Button className="bg-transparent border border-[var(--accent-color)] text-[var(--accent-color)] ml-2 text-xs font-semibold px-5 py-3 rounded-md" children="View Global Chart" />
					</div>
				</div>
				<div>Right</div>
			</div>
		</div>
	);
};

export default Hero;
