const Links = ({ link, title, id, description }) => {
	return (
		<a href={link} id={id} className="link" title={description}>
			{title}
		</a>
	);
};

export default Links;
