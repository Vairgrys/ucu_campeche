import React, { useState, useRef, useEffect, useCallback } from "react";
import { twMerge } from "tailwind-merge";

import { TimepickerUI } from "timepicker-ui";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Datepicker from "tailwind-datepicker-react";

function Input(props) {
	const {
		value = "",
		disabled = false,
		placeholder = "",
		maxlength = "",
		type = "text",
		handlerChange = () => {},
		className = {
			input: "",
		},
	} = props;

	return (
		<input
			type={type}
			value={value}
			readOnly={disabled}
			onChange={(event) => {
				handlerChange(event.target.value.toUpperCase());
			}}
			maxLength={maxlength}
			placeholder={placeholder}
			className={twMerge(
				`rounded-lg border-[1px] text-sm border-slate-300 placeholder:text-slate-300 text-slate-600 w-full dark:bg-gray-700 dark:text-blue ${
					disabled ? "cursor-text" : ""
				} ${className.input}`
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
		className = {
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
						`rounded-lg border-[1px] text-slate-600 font-medium border-slate-300 p-2.5 pl-10 w-full ${className.input}`
					)}
				/>
			</div>
		</>
	);
}

function InputDatepicker(props) {
	const {
		value = "",
		setBirthday = (event) => {},
		title = "Fecha de Nacimiento",
		maxLimit = new Date(),
	} = props;

	const options = {
		title: title,
		autoHide: true,
		todayBtn: false,
		maxDate: maxLimit,
		minDate: new Date("1900-01-01"),
		theme: {
			background: "bg-white",
			todayBtn: "",
			clearBtn: "",
			icons: "",
			text: "text-slate-600",
			disabledText: "bg-slate-100 text-slate-300",
			input: "bg-white placeholder:text-slate-300 h-8",
			inputIcon: "",
			selected: "text-slate-50",
		},
		datepickerClassNames: "",
		defaultDate: new Date(),
		language: "es",
	};

	const [show, setShow] = useState(false);
	const handleClose = (state) => {
		setShow(state);
	};

	function handleChange(event) {
		setBirthday(event);
	}

	return (
		<div>
			<Datepicker
				datepicker-buttons
				options={options}
				onChange={handleChange}
				show={show}
				value={value}
				setShow={handleClose}
			/>
		</div>
	);
}

function InputPhone(props) {
	const { value = "", handlerChange = () => {} } = props;

	return (
		<PhoneInput
			international
			defaultCountry='MX'
			maxLength='16'
			value={value}
			onChange={handlerChange}
		/>
	);
}

function InputTextArea(props) {
	const {
		value = "",
		placeholder = "",
		type = "textarea",
		handlerChange = () => {},
		className = {
			input: "",
		},
	} = props;

	return (
		<textarea
			type={type}
			value={value}
			onChange={(event) => {
				handlerChange(event.target.value.toUpperCase());
			}}
			placeholder={placeholder}
			className={twMerge(
				`rounded-lg border-[1px] placeholder:text-slate-300 text-slate-600 border-slate-300 resize-none pl-10 p-2.5 w-full h-full ${className.input}`
			)}
		/>
	);
}

function InputTime(props) {
	const {
		value = "12:00",
		handlerChange = () => {},
		placeholder = "Selecciona la Hora",
		className = {
			time: "",
		},
	} = props;

	const tmRef = useRef(null);

	const testHandler = useCallback(({ detail: { hour, minutes } }) => {
		handlerChange(`${hour}:${minutes}`);
	}, []);

	useEffect(() => {
		const tm = tmRef.current;

		const newPicker = new TimepickerUI(tm, {
			theme: "m3",
			clockType: "24h",
		});
		newPicker.create();

		tm.addEventListener("accept", testHandler);

		return () => {
			tm.removeEventListener("accept", testHandler);
		};
	}, [testHandler]);

	return (
		<div className='timepicker-ui' ref={tmRef}>
			<input
				type='test'
				className={twMerge(
					`timepicker-ui-input p-2 rounded-lg border-[1px] border-slate-300 placeholder:text-slate-300 text-slate-600 w-full dark:bg-gray-700 dark:text-blue h-8 ${className}`
				)}
				placeholder={placeholder}
				defaultValue={value}
			/>
		</div>
	);
}

Input.phone = InputPhone;
Input.icon = InputIcon;
Input.datepicker = InputDatepicker;
Input.textarea = InputTextArea;
Input.time = InputTime;

export default Input;
