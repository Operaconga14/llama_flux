export default function Footer() {
    const fullYear = new Date().getFullYear()
    return (
        <div className="h-20 flex justify-center items-center bg-transparent border-t border-gray-800/50 text-center">
            <p className="text-gray-500 text-xs md:text-sm">&copy; {fullYear} Llama Flux. Powered by DeFi Llama data</p>
        </div>
    )
}