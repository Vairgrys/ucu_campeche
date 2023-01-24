import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import * as React from "react";

import Datepicker from "tailwind-datepicker-react"

function Input(props) {
	const {
		value = "",
		disabled = false,
		placeholder = "",
		type = "text",
		handlerChange = () => {},
		addCSS = {
			input: "",
		},
	} = props;

	return (
		<input
			type={type}
			value={value}
			disabled={disabled}

			onChange={(event) => {
				handlerChange(event.target.value);
			}}
			placeholder={placeholder}
			className={twMerge(
				`rounded-lg border-[1px] border-slate-300 w-full dark:bg-gray-700 dark:text-blue ${addCSS.input}`
			)}
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
						`rounded-lg border-[1px] text-slate-600 font-medium border-slate-300 p-2.5 pl-10 w-full ${addCSS.input}`
					)}
				/>
			</div>
		</>
	);
}

function InputDatepicker(props) {

	const {
		birthday = '',
		setBirthday = (event) => {},
	} = props;

	const options = {
	title: "Fecha de Nacimiento",
	autoHide: true,
	maxDate: new Date(),
	minDate: new Date("1900-01-01"),
	theme: {
		background: "bg-slate-100 dark:bg-slate-50",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "text-slate-400",
		disabledText: "bg-slate-100 text-slate-300",
		input: "bg-white",
		inputIcon: "",
		selected: "text-slate-50",
	},
	datepickerClassNames: "",
	defaultDate: new Date("2023-01-23"),
	language: "es",
}

	const [show, setShow] = useState(false);
	const handleClose = (state) => {
		setShow(state)
	}

	function handleChange(event){
		setBirthday(event);
	}

	return (
		<div>
			<Datepicker options={options} 
				onChange={handleChange} 
				show={show} 
				value={birthday}
				setShow={handleClose} />
		</div>
	)

}

function InputMike() {
	return <></>;
}

function InputTextArea(props) {
	const {
		value = "",
		placeholder = "",
		type = "textarea",
		handlerChange = () => {},
		addCSS = {
			input: "",
		},
	} = props;

	return (
		<textarea
			type={type}
			value={value}
			onChange={(event) => {
				handlerChange(event.target.value);
			}}
			placeholder={placeholder}
			className={twMerge(
				`rounded-lg border-[1px] border-slate-300 resize-none pl-10 p-2.5 w-full h-full ${addCSS.input}`
			)}
		/>
	);
}

Input.Mike = InputMike;
Input.icon = InputIcon;
Input.datepicker = InputDatepicker;
Input.textarea = InputTextArea;

export default Input;
