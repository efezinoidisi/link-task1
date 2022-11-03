import Input from "../components/Input";
import { useState } from "react";

const Contact = () => {
	const [value, setValue] = useState("");
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className="contact--page">
			<h2>Contact Me</h2>
			<p>Hi there, contact me to ask me about anything you have in mind.</p>

			<form>
				<Input
					type="text"
					id="firstname"
					label="firstname"
					value={value}
					handleChange={handleChange}
					name="First Name"
				/>
				<Input
					type="text"
					id="lastname"
					label="lastname"
					value={value}
					handleChange={handleChange}
					name="Last name"
				/>
			</form>
		</div>
	);
};

export default Contact;
