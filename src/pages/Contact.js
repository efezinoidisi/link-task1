import Input from "../components/Input";
import { useState, useEffect } from "react";
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
	const name = "Idisi Efezino Endurance";
	const [errorMessage, setErrorMessage] = useState("");
	const [isValidated, setIsValidated] = useState(false);

	const [isChecked, setIsChecked] = useState(false);

	const checkHandler = () => {
		setIsChecked(!isChecked);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrorMessage(validate(values.message));
		setIsValidated(true);
	};

	const validate = (msg) => {
		const error = "Please enter a message";
		if (!msg) return error;
		else return "";
	};
	useEffect(() => {
		if (errorMessage.length === 0 && isValidated) {
		}
	}, [errorMessage, isValidated, values]);

	return (
		<div className="contact--page">
			<h2>Contact Me</h2>
			<p>Hi there, contact me to ask me about anything you have in mind.</p>

			<form onSubmit={handleSubmit}>
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
				<div className="form--input-message">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="5"
						value={values.message}
						onChange={(e) => handleChange(e)}
						placeholder={msg}
						style={errorMessage ? { border: "1px solid #F89687" } : {}}
					></textarea>
					<span>{errorMessage}</span>
				</div>

				<div className="confirm">
					<input
						type="checkbox"
						name="form--consent"
						id="form--consent"
						onChange={checkHandler}
						checked={isChecked}
						className="form-check-input"
					/>
					<label htmlFor="form--consent" className="form-check-label">
						You agree to providing your data to {name} who may contact you.
					</label>
				</div>
				<button type="submit" id="btn__submit">
					Send message
				</button>
			</form>

			<p>{isValidated && !errorMessage ? "Message sent!" : ""}</p>
		</div>
	);
};

export default Contact;
