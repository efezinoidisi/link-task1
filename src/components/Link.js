import "./css/link.css";

const Link = ({ link, title, id }) => {
	return (
		<a href={link} id={id} className="link">
			<button>{title}</button>
		</a>
	);
};

export default Link;
