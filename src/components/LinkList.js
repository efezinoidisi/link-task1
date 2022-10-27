import Link from "./Link";
import data from "../data";

const LinkList = () => {
	const lists = data;
	return (
		<div className="link">
			{lists.map((list) => (
				<Link
					key={list.id}
					link={list.link}
					title={list.title}
					id={list.id}
					description={list.description}
				/>
			))}
		</div>
	);
};

export default LinkList;
