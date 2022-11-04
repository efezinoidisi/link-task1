import { Link } from "react-router-dom";
import share from "../images/share.svg";
import hamburger from "../images/mobileShare.svg";

const Share = () => {
	return (
		<div className="share">
			<Link to="/">
				<img src={share} alt="share icon" id="desktop" />
			</Link>

			<Link to="/">
				<img src={hamburger} alt="mobile" id="mobile" />
			</Link>
		</div>
	);
};

export default Share;
