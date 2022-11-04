import Input from "../components/Input";
import { useState } from "react";
//import inputs from "../inputs";
import "./css/contact.css";

const Contact = () => {
	const [values, setValues] = useState({
		first_name: "",
		last_name: "",
		email: "",
		message: "",
	});

	const msg = "Send me a message and I'll reply you as soon as possible";
	const name = "Idisi Efezino";

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		console.log(values);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="contact--page">
			<h2>Contact Me</h2>
			<p>Hi there, contact me to ask me about anything you have in mind.</p>

			<form onSubmit={handleSubmit}>
				{/* {inputs.map((input) => (
					<Input
						key={input.id}
						id={input.id}
						title={input.title}
						type={input.type}
						placeholder={input.placeholder}
						label={input.label}
						value={values[input.name]}
						handleChange={handleChange}
					/>
				))} */}
				<div className="form--first-last">
					<Input
						type="text"
						id="first_name"
						name="first_name"
						value={values.first_name}
						handleChange={handleChange}
						title="form--input"
						placeholder="Enter your first name"
						label="First name"
						groupName="form--firstname"
					/>

					<Input
						type="text"
						id="last_name"
						name="last_name"
						value={values.last_name}
						handleChange={handleChange}
						title="form--input"
						placeholder="Enter your last name"
						label="Last name"
						groupName="form--lastname"
					/>
				</div>

				<Input
					type="text"
					id="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
					title="form--input"
					placeholder="yourname@email.com"
					label="Email"
				/>

				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="5"
					value={values.message}
					onChange={(e) => handleChange(e)}
					placeholder={msg}
					required
				></textarea>

				{/* <div className="confirm form-check">
					<input
						type="checkbox"
						name="confirm"
						id="confirm"
						className="form-check-input"
					/>
					<label htmlFor="confirm" className="form-check-label">
						You agree to providing your data to {name} who may contact you.
					</label>
				</div> */}

				<Input
					type="checkbox"
					id="form--consent"
					title="form-check-input"
					label={
						"You agree to providing your data to " +
						name +
						" who may contact you."
					}
					groupName="confirm"
				/>
				<button id="btn__submit">Send message</button>
			</form>
		</div>
	);
};

export default Contact;
