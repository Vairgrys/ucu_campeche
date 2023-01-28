import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Button(props) {
	const { handlerClick = () => {}, addCSS = "", icon = null } = props;

	return (
		<>
			<button
				onClick={(e) => {
					handlerClick(e);
				}}
				className={twMerge(
					`p-2 px-5 ml-2 place-items-start border-2 flex focus:ring-4 focus:outline-none bg-blue-600 cursor-pointer text-white hover:bg-blue-400 hover:text-white rounded-lg items-center ${addCSS}`
				)}>
				{props.children}
			</button>
		</>
	);
}

export default Button;
