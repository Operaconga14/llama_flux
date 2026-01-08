import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Image src="/banner.png" width={895} height={300} alt={"Llama Flux Banner"} />
		</div>
	);
}
