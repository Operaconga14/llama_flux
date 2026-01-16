"use client";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Button from "../ui/button";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
	return (
		<div className="flex min-h-screen">
			<div className="flex">
				{isSidebarMenuOpen && <Sidebar />}
				<Topbar className=" w-screen h-16 bg-purple-900 px-4 flex justify-between items-center">
					<div className="flex gap-4">
						<Button onClick={() => setIsSidebarMenuOpen(!isSidebarMenuOpen)}>
							{!isSidebarMenuOpen ? <AiOutlineMenu size={24} className="text-white" /> : <AiOutlineClose size={24} className="text-white" />}
						</Button>
						<h1 className="text-white text-3xl">Topbar</h1>
					</div>
				</Topbar>
			</div>
			<div className={`${isSidebarMenuOpen ? "md:left-55" : "left-0"} absolute top-16 w-screen`}>{children}</div>
		</div>
	);
};

export default DashboardLayout;
