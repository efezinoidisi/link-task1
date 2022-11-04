const Input = ({
	type,
	id,
	value,
	handleChange,
	label,
	title,
	placeholder,
}) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={(e) => handleChange(e)}
				className={title}
				placeholder={placeholder}
			/>
		</>
	);
};

export default Input;
