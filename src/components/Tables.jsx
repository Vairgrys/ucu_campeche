import { twMerge } from "tailwind-merge";

function Table(props) {
	const { addCSS = {} } = props;
	return (
		<div
			className={twMerge(
				`relative overflow-x-auto shadow-md sm:rounded-lg ${addCSS?.container}`
			)}>
			<table
				className={twMerge(
					`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${addCSS?.table}`
				)}>
				{props.children}
			</table>
		</div>
	);
}

function Header(props) {
	return (
		<thead className='text-xs top-0 sticky text-white uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400'>
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
	return <td className='px-6 py-4'>{props.children}</td>;
}

function Tr(props) {
	return <tr className='border-slate-200'>{props.children}</tr>;
}

Table.Header = Header;
Table.Body = Body;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
