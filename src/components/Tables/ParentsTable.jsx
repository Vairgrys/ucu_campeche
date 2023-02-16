import { Suspense } from "react";
import { TableLoading } from "../Skeletons/TableLoading";
import ParentsList from "../TableRows/ParentsList";
import Table from "../Tables";

function ParentsTable() {
	return (
		<Table className={{ container: "shadow-lg shadow-gray-300" }}>
			<Table.Header className='bg-purple-500'>
				<Table.Tr>
					<Table.Th>Nombre</Table.Th>
					<Table.Th>Apellidos</Table.Th>
					<Table.Th>Edad</Table.Th>
					<Table.Th>Estado</Table.Th>
					<Table.Th>Municipio</Table.Th>
					<Table.Th>Télefono</Table.Th>
					<Table.Th>Acciones</Table.Th>
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

export { ParentsTable };
