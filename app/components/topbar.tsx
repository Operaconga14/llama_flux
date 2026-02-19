import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Topbar({ triggerClicked, isSidebarOpen }: { isSidebarOpen: boolean, triggerClicked: () => void }) {
    return (
        <div className="flex h-15 bg-slate-950 justify-between items-center px-3 sticky top-0 z-50 border-b-2 border-slate-900">
            <div className="w-8"> {/* Placeholder keeps layout stable */}
                {isSidebarOpen && (
                    <SidebarTrigger
                        className="text-white hover:bg-transparent hover:text-slate-300"
                        onClick={triggerClicked}
                    />
                )}
            </div>
            <div className="flex">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-full text-center">
                    <h1 className="text-white font-bold text-sm">US</h1>
                </div>
            </div>
        </div>
    )
}