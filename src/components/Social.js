import slack from "./images/slack.svg";
import github from "./images/github.svg";

const Social = () => {
	return (
		<div className="socials">
			<a href="/" className="pe-4">
				<img src={slack} alt="slack icon" width="20px" />
			</a>
			<a href="/">
				<img src={github} alt="github icon" width="20px" />
			</a>
		</div>
	);
};

export default Social;
