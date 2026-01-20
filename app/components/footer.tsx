const Footer = () => {
	const fullYear = new Date().getFullYear();
	return (
		<footer className="border-t border-purple-800 py-2 text-center text-white">
			<h1>Footer</h1>
			<p>© {fullYear} Llama Flux. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
