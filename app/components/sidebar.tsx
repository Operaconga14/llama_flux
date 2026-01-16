import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome, AiOutlineFire } from "react-icons/ai";

const Sidebar = () => {
	return (
		<div className="bg-purple-900 w-55 border-r shadow-lg z-50 border-purple-700">
			{/* Side Bard Container */}
			<div className="flex flex-col">
				{/* Logo header */}
				<div className="flex items-center justify-center">
					<Image src={"/logo-removebg.png"} alt="Logo" width={100} height={100} className="w-20 h-20" />
					<span className="text-white text-2xl font-bold">Llama Flux</span>
				</div>
				{/* Menus */}
				<div className="flex flex-col justify-center items-start">
					{/* Divider */}
					<div className="w-full h-px bg-purple-700 my-3"></div>
					{/* Links */}
					<div className="w-full px-10 mt-10 space-y-10">
						<Link href="/" className="text-white text-2xl font-normal flex items-center gap-7">
							<AiOutlineHome />
							Home
						</Link>
						<Link href="/dashboard/me" className="text-white text-2xl font-normal flex items-center gap-7">
							<AiOutlineFire />
							Yield
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
