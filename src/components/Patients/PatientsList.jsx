import { useEffect } from "react";
import { usePatientStore } from "../../store/usePatientStore";

import Table from "../Tables";
import Button from "../Buttons";
import { FaTrash, RiServiceFill } from "react-icons/ri";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

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
								<Dropdown
									label='Servicios'
									className=' bg-red-400'>
									<Dropdown.Item>
										<Link
											to={
												"/pacientes/informacion/" +
												fila.pkpaciente
											}>
											Información del Paciente
										</Link>
									</Dropdown.Item>
									<Dropdown.Item>
										<Link
											to={
												"/servicios/medicamentos/" +
												fila.pkpaciente
											}>
											Servicio de Medicamentos
										</Link>
									</Dropdown.Item>
									<Dropdown.Item>
										<Link
											to={
												"/servicios/despensa/" +
												fila.pkpaciente
											}>
											Servicio de Despensa
										</Link>
									</Dropdown.Item>
								</Dropdown>
							</Table.Td>
						</Table.Tr>
					);
				})}
		</>
	);
};

export default PatientsList;
