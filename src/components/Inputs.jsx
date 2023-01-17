import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Input(props) {
	const { placeholder = "", icono = "user", type = "text" } = props;

	return (
		<input
			type={type}
			placeholder={placeholder}
			className='rounded-lg border-1 border-slate-400 pl-10 p-2.5 w-full dark:bg-gray-700 dark:text-blue'
		/>
	);
}

function InputIcon(props) {
	const {
		value = "",
		placeholder = "",
		type = "text",
		handlerChange = () => {},
		addCSS = {
			input: "",
		},
	} = props;

	return (
		<>
			<div className='relative mb-4'>
				<div className='absolute inset-y-0 left-0 flex text-slate-600 items-center pl-3 pointer-events-none'>
					{props.children}
				</div>
				<input
					type={type}
					onChange={(event) => {
						handlerChange(event.target.value);
					}}
					value={value}
					placeholder={placeholder}
					className={twMerge(
						`rounded-lg border-1 text-slate-600 font-medium border-slate-300 p-2.5 pl-10 w-full ${addCSS.input}`
					)}
				/>
			</div>
		</>
	);
}

function InputMike() {
	return <></>;
}

Input.Mike = InputMike;
Input.icon = InputIcon;

export default Input;
