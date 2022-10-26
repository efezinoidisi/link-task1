import Link from "./Link";
import data from "../data";

const LinkList = () => {
	const lists = data;
	return (
		<>
			{lists.map((list) => (
				<Link key={list.id} link={list.link} title={list.title} id={list.id} />
			))}
		</>
	);
};

export default LinkList;
