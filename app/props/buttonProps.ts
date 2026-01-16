import { CSSProperties } from "react";

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	style?: CSSProperties;
}
