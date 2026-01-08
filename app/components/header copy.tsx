"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			dropdownRef.current && !dropdownRef.current.contains(e.target as Node);
		};
	});
	return (
		<nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center space-x-2">
						<Link href={"/"}>
							<Image src="/logo_trns.png" width={20} height={20} alt={""} />
							<span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Llama Flux</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						<button onClick={() => setOpen(!open)} className="text-gray-300 hover:text-purple-400 transition">
							Features
						</button>

						{open && (
							<div ref={dropdownRef} className="absolute z-10 top-16 bg-black/50 backdrop-blur-md w-1/8 text-white px-5 py-2 rounded">
								<ul className="flex flex-col space-y-2">
									<li>Gigs</li>
									<li>Events</li>
									<li>Music</li>
									<li>Artists</li>
									<li>Merch</li>
								</ul>
							</div>
						)}

						<Link href="/#about" className="text-gray-300 hover:text-purple-400 transition">
							About
						</Link>

						<Link href="/#community" className="text-gray-300 hover:text-purple-400 transition">
							Community
						</Link>

						<Link href="/auth/signup" className="bg-gradient-to-r text-gray-300 from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition">
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex flex-col space-y-1.5">
						<span className="block w-6 h-0.5 bg-white"></span>
						<span className="block w-6 h-0.5 bg-white"></span>
						<span className="block w-6 h-0.5 bg-white"></span>
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 space-y-4">
						<Link href="/features" className="text-gray-300 block hover:text-purple-400 transition">
							Features
						</Link>
						<Link href="/#about" className="text-gray-300 block hover:text-purple-400 transition">
							About
						</Link>
						<Link href="/#community" className="text-gray-300 block hover:text-purple-400 transition">
							Community
						</Link>
						<Link href="/auth/signup" className="w-full text-gray-300 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition">
							Get Started
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
