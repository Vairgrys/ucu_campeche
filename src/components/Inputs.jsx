import React, { useState, createRef, useEffect} from "react";
import { twMerge } from "tailwind-merge";

import { TimepickerUI } from 'timepicker-ui';

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
				`rounded-lg border-[1px] border-slate-300 placeholder:text-slate-300 text-slate-600 w-full dark:bg-gray-700 dark:text-blue ${addCSS.input}`
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
	todayBtn: false,
	maxDate: new Date(),
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
}

	const [show, setShow] = useState(false);
	const handleClose = (state) => {
		setShow(state)
	}

	function handleChange(event){
		setBirthday(event)
	}

	return (
		<div>
			<Datepicker datepicker-buttons options={options} 
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
				`rounded-lg border-[1px] placeholder:text-slate-300 text-slate-600 border-slate-300 resize-none pl-10 p-2.5 w-full h-full ${addCSS.input}`
			)}
		/>
	);
}

function InputTime(props) {
	const [inputValue, setInputValue] = useState("12:00 PM");
	const {
 		addCSS = {
			time: "",
		},
	} = props;

    
  	tmRef = createRef(null);

  handleAccept = ({ detail: { hour, minutes, type } }) => {
    setInputValue(`${hour}:${minutes} ${type}`);
  };


  useEffect(() => {
	   const tm = new TimepickerUI(tmRef.current, {theme: 'crane-radius',});
    	tm.create();
    	tmRef.current.addEventListener("accept", handleAccept);
    	tmRef.current.removeEventListener("accept", handleAccept);
  }, [])

    return (
      <div className="timepicker-ui flex h-8" ref={tmRef}>
        <input
          type="test"
          className={twMerge(`bg-white w-full pl-2 flex border-slate-300 border-[1px] rounded-lg timepicker-ui-input ${addCSS.time}`)}
          onChange={setInputValue}
		  defaultValue={inputValue}
        />
      </div>
    )
	
}

Input.Mike = InputMike;
Input.icon = InputIcon;
Input.datepicker = InputDatepicker;
Input.textarea = InputTextArea;
Input.time = InputTime;

export default Input;
