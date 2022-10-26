import Logo from "./Logo";
import zuri from "./images/zuri.svg";
import i4g from "./images/i4g.svg";

const Footer = () => {
	const task = "HNG Internship 9 Frontend Task";
	return (
		<footer>
			<Logo src={zuri} alt="zuri logo" />
			<p>{task}</p>
			<Logo src={i4g} alt="ingressive for good logo" />
		</footer>
	);
};

export default Footer;
