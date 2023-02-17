import { Suspense } from "react";
import { TableLoading } from "../Skeletons/TableLoading";
import StaysList from "../TableRows/StaysList";
import Table from "../Tables";

function StaysTable() {
	return (
		<Table className={{ container: "shadow-lg shadow-gray-300" }}>
			<Table.Header className='bg-indigo-500'>
				<Table.Tr>
					<Table.Th>Fecha y Hora de Inicio</Table.Th>
					<Table.Th>Paciente</Table.Th>
					<Table.Th>Acompañante</Table.Th>
					<Table.Th>Acciones</Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				<Suspense fallback={<TableLoading cols={7}></TableLoading>}>
					<StaysList></StaysList>
				</Suspense>
			</Table.Body>
		</Table>
	);
}

export { StaysTable };
