import { Suspense } from "react";
import { TableLoading } from "../Skeletons/TableLoading";
import ParentsList from "./StaysList";
import Table from "../Tables";

function StaysTable() {
	return (
		<Table className={{ container: "shadow-lg shadow-gray-300" }}>
			<Table.Header className='bg-indigo-500'>
				<Table.Tr>
					<Table.Th>#</Table.Th>
					<Table.Th>Fecha Inicio</Table.Th>
					<Table.Th>Fecha Termino</Table.Th>
					<Table.Th>Acompañante</Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				<Suspense fallback={<TableLoading cols={7}></TableLoading>}>
					<ParentsList></ParentsList>
				</Suspense>
			</Table.Body>
		</Table>
	);
}

export { StaysTable };
