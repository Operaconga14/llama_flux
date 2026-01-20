import { ImageProps } from "../props/imageProps";

export default function Image({ alt, src, className, style }: ImageProps) {
	return <img src={src} alt={alt} className={className} style={style} />;
}
