import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

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
				`rounded-lg border-1 border-slate-400 pl-10 p-2.5 w-full dark:bg-gray-700 dark:text-blue ${addCSS.input}`
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
						`rounded-lg border-1 text-slate-600 font-medium border-slate-300 p-2.5 pl-10 w-full ${addCSS.input}`
					)}
				/>
			</div>
		</>
	);
}

function InputDatepicker(props) {
	const {
		value = "",
		handlerChange = () => {},
		addCSS = {
			input: "",
		},
	} = props;

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className='absolute inset-y-0 left-0 flex text-slate-600 items-center pl-3 pointer-events-none'>
				{props.children}
			</div>
			<DatePicker
				label='Colocar fecha de nacimiento'
				value={value}
				onChange={(event) => {
					console.log(event.target);
					debugger;
					// handlerChange(event.$d);
				}}
				renderInput={(params) => <TextField {...params} />}
				className={twMerge(
					`rounded-lg border-1 text-slate-600 font-medium border-slate-300 p-2.5 pl-10 w-full ${addCSS.input}`
				)}
			/>
		</LocalizationProvider>
	);
}

function InputMike() {
	return <></>;
}

Input.Mike = InputMike;
Input.icon = InputIcon;
Input.datepicker = InputDatepicker;

export default Input;
