import React from "react";
import Profile from "../components/Profile";
import pic from "../images/avatar.jpg";
import LinkList from "../components/LinkList";
import Share from "../components/Share";
import Social from "../components/Social";

const Home = () => {
	const name = "_zeetech";
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
