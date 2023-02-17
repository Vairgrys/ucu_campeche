import { useEffect } from "react";
import Table from "../Tables";
import Button from "../Buttons";
import { useUsersStore } from "../../store/useUsersStore";
import { FaTrash, FaPen } from "react-icons/fa";

const UsersList = () => {
	const [userList, getUserList] = useUsersStore((state) => [
		state.users,
		state.requestUsers,
	]);
	var number = 0;

	useEffect(() => {
		getUserList();
	}, []);

	return (
		<>
			{userList &&
				userList.map((fila) => {
					number++;
					return (
						<Table.Tr key={"fila" + number}>
							<Table.Td>{fila.usuario}</Table.Td>
							<Table.Td>{fila.contrasena}</Table.Td>
							<Table.Td>{fila.nombre}</Table.Td>
							<Table.Td>{fila.apellido}</Table.Td>
							<Table.Td>{fila.rol}</Table.Td>
							<Table.Td>{fila.correo}</Table.Td>
							<Table.Td>{fila.departamento}</Table.Td>
							<Table.Td className='flex flex-row flex-nowrap items-center justify-start bg-slate-100'>
								<Button className='px-2 py-2 bg-amber-500 hover:bg-amber-600 ring-amber-400'>
									<FaPen></FaPen>
								</Button>
								<Button className='px-2 py-2 bg-red-400 hover:bg-red-600 ring-red-300'>
									<FaTrash></FaTrash>
								</Button>
							</Table.Td>
						</Table.Tr>
					);
				})}
		</>
	);
};

export default UsersList;
