import Image from "next/image";

export default function Logo() {
	return (
		<div>
			<div className="flex items-center justify-center">
				<Image width={70} height={55} src="/logo_trns.png" alt="Llama Flux Logo" />
				<span className="text-white text-2xl font-normal">Llama Flux</span>
			</div>
		</div>
	);
}
