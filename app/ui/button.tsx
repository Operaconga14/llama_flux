import { ButtonProps } from "../props/buttonProps";

const Button = ({ children, className, onClick, style }: ButtonProps) => {
	return (
		<button className={className} onClick={onClick} style={style}>
			{children}
		</button>
	);
};

export default Button;
