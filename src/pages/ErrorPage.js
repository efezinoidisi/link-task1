import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="error-page">
			<p>404 error</p>
			<h2>We can't find that page</h2>
			<p>Sorry, the page you are looking for doesn't exist.</p>

			<div className="error-links">
				<Link to="/">
					<button className="first">&larr; Go back</button>
				</Link>

				<Link to="/">
					<button className="second">Take me home</button>
				</Link>
			</div>
		</div>
	);
};

export default Error;
