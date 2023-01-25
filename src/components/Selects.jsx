import { twMerge } from "tailwind-merge";
import * as React from "react";

function Select(props) {
	const { addCSS = {}, handlerChange = () => {} } = props;
	return (
		<select
			onChange={(event) => {
				handlerChange(event.target.value);
			}}
			className={twMerge(
				`flex w-full relative overflow-x-auto sm:rounded-lg ${addCSS}`
			)}>
			{props.children}
		</select>
	);
}

function Options(props) {
	const { addCSS = {}, selected = "", disabled = "", defaultValue = "" } = props;
	return (
		<option
			className={twMerge(` ${addCSS}`)}
			selected={selected}
			disabled={disabled}
			defaultValue={defaultValue}>
			{props.children}
		</option>
	);
}

Select.options = Options;

export default Select;
