import React from "react";
import Profile from "./Profile";
import pic from "./images/avatar.png";
import LinkList from "./LinkList";

const Home = () => {
	const name = "Annette Black";
	return (
		<div className="row">
			<div className="col-12">
				<Profile pic={pic} name={name} />
			</div>

			<div className="row">
				<div className="col-12">
					<LinkList />
				</div>
			</div>
		</div>
	);
};

export default Home;
