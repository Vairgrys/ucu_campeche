import { twMerge } from "tailwind-merge";
import * as React from "react";

function Select(props) {
	const { className = {}, handlerChange = () => {} } = props;
	return (
		<select
			onChange={(event) => {
				handlerChange(event.target.value);
			}}
			className={twMerge(
				`flex w-full relative overflow-x-auto sm:rounded-lg ${className}`
			)}>
			{props.children}
		</select>
	);
}

function Options(props) {
	const { className = {}, defaultValue = false, value = "" } = props;

	return (
		<option
			className={twMerge(` ${className}`)}
			value={value}
			defaultValue={defaultValue}>
			{props.children}
		</option>
	);
}

function SelectCiudad() {}

Select.options = Options;
Select.ciudad = SelectCiudad;

export default Select;
