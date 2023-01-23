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
				`rounded-lg border-[1px] border-slate-300 resize-none pl-10 p-2.5 w-full h-full ${addCSS.input}`
			)}
		/>
	);
}

export default TextArea;
