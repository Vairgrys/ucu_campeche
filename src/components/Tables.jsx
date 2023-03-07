import { twMerge } from "tailwind-merge";

function Table(props) {
	const { className = {} } = props;
	return (
		<div
			className={twMerge(
				`relative shadow-md sm:rounded-lg ${className?.container}`
			)}>
			<table
				className={twMerge(
					`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${className?.table}`
				)}>
				{props.children}
			</table>
		</div>
	);
}

function Header(props) {
	return (
		<thead
			className={twMerge(
				"text-xs top-0 sticky text-white uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400",
				props.className
			)}>
			{props.children}
		</thead>
	);
}

function Body(props) {
	return <tbody>{props.children}</tbody>;
}

function Th(props) {
	return (
		<th className='px-6 py-3'>
			<div className='flex items-center'>{props.children}</div>
		</th>
	);
}

function Td(props) {
	return (
		<td className={twMerge("px-2 py-2 bg-slate-100", props.className)}>
			{props.children}
		</td>
	);
}

function Tr(props) {
	return (
		<tr className='border-b-[1px] border-slate-200'>{props.children}</tr>
	);
}

Table.Header = Header;
Table.Body = Body;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
