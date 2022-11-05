const Profile = ({ pic, name }) => {
	return (
		<div className="profile-img">
			<img src={pic} alt="my profile" id="profile__img" />
			<p id="slack">ZeeKnow</p>
			<h2>{name}</h2>
		</div>
	);
};

export default Profile;
