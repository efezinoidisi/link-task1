import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<p>404 error</p>
			<h2>We can't find that page</h2>
			<p>Sorry, the page you are looking for doesn't exist.</p>
			<Link to="/" className="btn">
				Go back
			</Link>
			<Link to="/" className="btn">
				Back to homepage
			</Link>
		</div>
	);
};

export default Error;
