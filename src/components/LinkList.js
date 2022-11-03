import Links from "./Link";
import data from "../data";
import { Link } from "react-router-dom";

const LinkList = () => {
	const lists = data;
	return (
		<div className="link">
			{lists.map((list) => (
				<Links
					key={list.id}
					link={list.link}
					title={list.title}
					id={list.id}
					description={list.description}
				/>
			))}
			<Link to="/contact" id="contact">
				Contact Me
			</Link>
		</div>
	);
};

export default LinkList;
