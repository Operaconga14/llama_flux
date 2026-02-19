export default function Footer() {
    const fullYear = new Date().getFullYear()
    return (
        <div className="h-20 flex justify-center items-center bg-slate-950 border-t border-gray-800/50 text-center">
            <p className="text-slate-500 text-xs md:text-[12px]">&copy; {fullYear} Llama Flux. Powered by DeFi Llama data</p>
        </div>
    )
}