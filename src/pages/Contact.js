import Input from "../components/Input";
import { useState } from "react";
import inputs from "../inputs";
import "./css/contact.css";

const Contact = () => {
	const [values, setValues] = useState({
		first_name: "",
		last_name: "",
		email: "",
	});

	const [message, setMessage] = useState("");
	const msg = "Send me a message and I'll reply you as soon as possible";
	const name = "Idisi Efezino";

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="contact--page">
			<h2>Contact Me</h2>
			<p>Hi there, contact me to ask me about anything you have in mind.</p>

			<form onSubmit={handleSubmit}>
				{inputs.map((input) => (
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
				))}

				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="5"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder={msg}
				></textarea>
				<div className="confirm">
					<input type="checkbox" name="confirm" id="confirm" />
					<label htmlFor="confirm">
						You agree to providing your data to {name} who may contact you.
					</label>
				</div>
				<button id="btn__submit">Send message</button>
			</form>
		</div>
	);
};

export default Contact;
