import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import * as React from "react";

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function TextArea(props) {
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
				`rounded-lg border-2 border-slate-300 pl-10 p-2.5 w-full h-full ${addCSS.input}`
			)}
		/>
	);
}

export default TextArea;