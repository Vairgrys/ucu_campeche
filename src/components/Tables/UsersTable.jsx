import { Suspense } from "react";
import { TableLoading } from "../Skeletons/TableLoading";
import UsersList from "../TableRows/UsersList";
import Table from "../Tables";

function UsersTable() {
	return (
		<Table className={{ container: "shadow-lg shadow-gray-300" }}>
			<Table.Header className='bg-purple-500'>
				<Table.Tr>
					<Table.Th>Usuario</Table.Th>
					<Table.Th>Contraseña</Table.Th>
					<Table.Th>Nombre</Table.Th>
					<Table.Th>Apellido</Table.Th>
					<Table.Th>Rol</Table.Th>
					<Table.Th>Correo</Table.Th>
					<Table.Th>Departamento</Table.Th>
					<Table.Th>Acciones</Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				<Suspense fallback={<TableLoading cols={7}></TableLoading>}>
					<UsersList></UsersList>
				</Suspense>
			</Table.Body>
		</Table>
	);
}

export { UsersTable };
