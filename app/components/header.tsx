"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed w-full h-16 bg-transparent backdrop-blur-md z-50 border-b border-purple-700 shadow-md">
			<div className="flex justify-between mx-auto px-4 sm:px-6 lg:px-8 items-center text-white">
				<Link href="/" className="h-fit w-fit p-0">
					<div className="flex items-center justify-center">
						<Image width={70} height={55} src="/logo_trns.png" alt="Llama Flux Logo" />
						<span className="text-white text-3xl font-bold">Llama Flux</span>
					</div>
				</Link>
				{/* Desktop Menu */}
				<div className="hidden w-1/2 max-w-7xl md:flex md:justify-between md:space-x-6 mx-6">
					{/* Menu */}
					<div>
						<div className="flex items-center space-x-4">
							<Link href="/dashboard" className="text-gray-300 text-sm hover:text-purple-700 transition">
								Dashboard
							</Link>
							<Link href="/about" className="text-gray-300 text-sm hover:text-purple-700 transition">
								About
							</Link>
							<Link href="/community" className="text-gray-300 text-sm hover:text-purple-700 transition">
								Community
							</Link>
						</div>
					</div>
					{/* Serch Field */}
					<div>
						<div className="relative w-50 max-w-sm">
							<input
								type="text"
								placeholder="Search..."
								className="px-2 py-1 text-[14px] w-full border-1 border-purple-700 text-gray-500 rounded-full focus:border-purple-700 focus:outline-none focus:outline-purple-700 focus:ring-1 focus:ring-purple-700 focus:text-purple-400"
							/>
							<button type="button" className="absolute text-purple-500 focus:text-purple-700 right-2 top-1/2 transform -translate-y-1/2 hover:text-purple-600 transition hover:-translate-x-1">
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
				<div className="fixed w-full top-15 px-5 z-50 md:hidden py-4 space-y-4 backdrop-blur-md bg-purple-900/5">
					{/* Menu */}
					<Link href="/dashboard" className="text-gray-300 text-sm block hover:text-purple-700 transition">
						Dashboard
					</Link>
					<Link
						href="/about"
						className="text-gray-300 text-sm block 
hover:text-purple-700 transition">
						About
					</Link>
					<Link
						href="/community"
						className="text-gray-300 text-sm block 
hover:text-purple-700 transition">
						Community
					</Link>
					<div>
						<div className="relative w-50 max-w-sm">
							<input
								type="text"
								placeholder="Search..."
								className="px-2 py-1 text-[14px] w-full border-1 border-purple-700 text-gray-500 rounded-full focus:border-purple-700 focus:outline-none focus:outline-purple-700 focus:ring-1 focus:ring-purple-700 focus:text-purple-400"
							/>
							<button type="button" className="absolute text-purple-500 focus:text-purple-700 right-2 top-1/2 transform -translate-y-1/2 hover:text-purple-600 transition hover:-translate-x-1">
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
