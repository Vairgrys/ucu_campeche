import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import * as React from "react";
import { twMerge } from "tailwind-merge";

function Select(props) {
	const { addCSS = {}, value='', handlerChange = () => {}} = props;
    return (
		<select 
		onChange={(event) => {
						handlerChange(event.target.value);
					}}
		className={twMerge(
				`flex w-full relative overflow-x-auto shadow-md sm:rounded-lg ${addCSS}`
			)}>{props.children}</select>
	);
}

function Options(props) {
	const { addCSS = {}, disabled='', selected='' } = props;
	return(
		<option 
		className={twMerge(
				` ${addCSS}`
			)}
			disabled={disabled}
			selected={selected}
			value={props.children}>
				{props.children}</option>
			);
		}


Select.options = Options;

export default Select;
