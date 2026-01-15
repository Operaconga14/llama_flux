import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
	return (
		<div className="flex flex-col gap-4 min-h-screen items-center justify-center overflow-hidden">
			<p className="text-5xl md:text-8xl">😓</p>
			<h1 className="text-3xl md:text-5xl font-semibold text-white">404 – Page Not Found</h1>
			<Link href="." className="text-purple-500 flex items-center gap-2 hover:underline">
				<FaArrowLeft /> Go back home
			</Link>
		</div>
	);
};

export default NotFound;
