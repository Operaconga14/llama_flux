import { CardProps } from "../props/cardProps";

const Card = ({ className, description, footer, image, style, title, children }: CardProps) => {
	return (
		<div className={className} style={style}>
			{title && <h2>{title}</h2>}
			{description && <p>{description}</p>}
			{image && <img src={image} alt={title || ""} />}
			{footer && <p>{footer}</p>}
			{children}
		</div>
	);
};

export default Card;
