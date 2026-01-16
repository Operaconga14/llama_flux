import { CSSProperties } from "react";

export interface CardProps {
	title?: string;
	description?: string;
	image?: string;
	footer?: string;
	className?: string;
	style?: CSSProperties;
	children?: React.ReactNode;
}
