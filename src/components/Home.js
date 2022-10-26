import React from "react";
import Profile from "./Profile";
import pic from "./images/avatar.png";
import LinkList from "./LinkList";
import Share from "./Share";
import Social from "./Social";

const Home = () => {
	const name = "Annette Black";
	return (
		<div className="home">
			<Share />
			<Profile pic={pic} name={name} />
			<LinkList />
			<Social />
		</div>
	);
};

export default Home;
