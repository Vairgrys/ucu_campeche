import Icon from "./Icons";

function Button(props) {
	const {
		handlerClick = () => {},
		text = "",
		type = "button",
		icono = "",
		color = "primary",
	} = props;

	return (
		<>
			{color == "save" && (
				<button
					type={type}
					onClick={(e) => {
						handlerClick(e);
					}}
					className='p-2 px-5 ml-2 place-items-start border-2 grid col-span-1 focus:ring-4 focus:outline-none  dark:focus:ring-blue-800  bg-teal-500 cursor-pointer text-white hover:bg-blue-400 hover:text-white rounded-lg dark:border-blue-800 dark:border-2 dark:hover:bg-blue-800 items-center'>
					<Icon icono={icono}></Icon>
					{text}
				</button>
			)}
			{color == "primary" && (
				<button
					type={type}
					onClick={(e) => {
						handlerClick(e);
					}}
					className='p-2 px-5 ml-2 place-items-start border-2 flex focus:ring-4 focus:outline-none  dark:focus:ring-blue-800  bg-blue-600 cursor-pointer text-white hover:bg-blue-400 hover:text-white rounded-lg dark:border-blue-800 dark:border-2 dark:hover:bg-blue-800 items-center'>
					<Icon icono={icono}></Icon>
					{text}
				</button>
			)}
			{color == "alternative" && (
				<button
					type={type}
					className='p-2 px-5 ml-2 border-2 flex text-gray-600 border-gray-400 bg-white-600 font-bold hover:bg-gray-400 hover:text-white rounded-lg dark:border-gray-400 dark:border-2 dark:bg-gray-600 dark:hover:bg-gray-400 dark:text-white'>
					<Icon icono={icono}></Icon>
					{text}
				</button>
			)}
		</>
	);
}

export default Button;
