"use client";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Logo from "./logo";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed min-w-screen h-16 bg-transparent backdrop-blur-md z-50 border-b border-gray-800 shadow-md">
			<div className="flex justify-between mx-auto px-4 sm:px-6 lg:px-8 items-center text-white">
				<Link href="/" className="h-fit w-fit p-0">
					<Logo />
				</Link>
				{/* Desktop Menu */}
				<div className="hidden w-1/2 max-w-7xl md:flex md:justify-between md:space-x-6 mx-6">
					{/* Menu */}
					<div>
						<div className="flex items-center space-x-4">
							<Link href="/dashboard" className="text-gray-300 text-sm hover:text-purple-700 transition">
								Dashboard
							</Link>
							<Link href="/protocols" className="text-gray-300 text-sm hover:text-purple-700 transition">
								Protocols
							</Link>
							<Link href="/yields" className="text-gray-300 text-sm hover:text-purple-700 transition">
								Yields
							</Link>
							<Link href="/chains" className="text-gray-300 text-sm hover:text-purple-700 transition">
								Chains
							</Link>
						</div>
					</div>
					{/* Serch Field */}
					<div>
						<div className="relative w-50 max-w-sm">
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
				</div>

				<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex flex-col space-y-1.5">
					{mobileMenuOpen && <AiOutlineClose className="text-purple-700 text-2xl" />}
					{!mobileMenuOpen && <AiOutlineMenu className="text-purple-700 text-2xl" />}
				</button>
			</div>
			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="fixed w-full top-15 px-5 z-50 md:hidden py-4 space-y-4 bg-gray-900/100">
					{/* Menu */}
					<Link href="/dashboard" className="text-gray-300 text-sm block hover:text-purple-700 transition">
						Dashboard
					</Link>
					<Link href="/protocols" className="text-gray-300 text-sm block hover:text-purple-700 transition">
						Protocols
					</Link>
					<Link href="/yields" className="text-gray-300 text-sm block hover:text-purple-700 transition">
						Yields
					</Link>
					<Link href="/chains" className="text-gray-300 text-sm block hover:text-purple-700 transition">
						Chains
					</Link>
					<div>
						<div className="relative w-50 max-w-sm">
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
				</div>
			)}
		</nav>
	);
};

export default Header;
