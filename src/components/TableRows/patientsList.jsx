import { useEffect } from "react";
import { usePatientStore } from "../../store/usePatientStore";

import Table from "../Tables";
import Button from "../Buttons";
import { FaTrash, RiServiceFill } from "react-icons/ri";

const PatientsList = () => {
	const [listaPacientes, getListaPacientes] = usePatientStore((state) => [
		state.patients,
		state.requestPatients,
	]);
	var number = 0;

	useEffect(() => {
		getListaPacientes();
	}, []);

	return (
		<>
			{listaPacientes &&
				listaPacientes.map((fila) => {
					number++;
					return (
						<Table.Tr key={"fila" + number}>
							<Table.Td>{fila.nombre}</Table.Td>
							<Table.Td>{fila.apellido}</Table.Td>
							<Table.Td>{fila.edad}</Table.Td>
							<Table.Td>{fila.estado}</Table.Td>
							<Table.Td>{fila.municipio}</Table.Td>
							<Table.Td>{fila.telefono}</Table.Td>
							<Table.Td>
								<Button addCSS='bg-red-400 hover:bg-red-600 ring-red-300 px-2'>
									<RiServiceFill></RiServiceFill>
									&nbsp;&nbsp;Servicios
								</Button>
							</Table.Td>
						</Table.Tr>
					);
				})}
		</>
	);
};

export default PatientsList;
