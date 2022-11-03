const Input = ({ label, type, id, value, handleChange, name }) => {
	return (
		<>
			<label htmlFor={label}>{name}</label>
			<input
				type={type}
				id={id}
				name={label}
				value={value}
				onChange={(e) => handleChange(e)}
			/>
		</>
	);
};

export default Input;
