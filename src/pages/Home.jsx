import { useEffect, useState } from "react";

import Table from "../components/Tables";
import Input from "../components/Inputs";
import Button from "../components/Buttons";

import { variant } from "../utils/variant";
import { motion } from "framer-motion";
import { FaBars, FaPlus, FaSearch } from "react-icons/fa";
import { FormularioPacientes } from "../components/Forms/FormularioPacientes";

import { useModal } from "../hooks/useModal";

function Home() {
	const [isMenuOpen, toggleMenu] = useModal();
	const [isFormPacienteOpen, toggleFormPaciente] = useModal();

	dismissMenu = (e) => {
		e.stopPropagation();
		e.preventDefault();
		toggleMenu(false);
	};

	dismissMenuPaciente = (e) => {
		toggleFormPaciente(false);
	};

	return (
		<>
			<Button
				handlerClick={toggleMenu}
				addCSS={
					"rounded-full to-blue-500 from-indigo-700 ease-in-out transition duration-300 bg-gradient-to-t hover:bg-gradient-to-l text-white fixed z-10 shadow-lg p-4 text-xl hover:ring-4 border-[1px] border-blue-600  top-4 left-6"
				}>
				<FaBars></FaBars>
			</Button>
			<div
				// Fondo General //
				onClick={(e) => dismissMenu(e)}
				className='w-screen h-screen flex justify-center items-center to-orange-300  from-orange-500 bg-gradient-to-t  dark:bg-slate-900'>
				<motion.div
					// Primer Modal con boton agregar paciente
					initial={{ opacity: 0 }}
					animate={isMenuOpen ? variant.modalIn : variant.modalOut}
					className='w-screen h-screen absolute z-20 bg-slate-400 bg-opacity-30 backdrop-blur-[1px]'>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, width: 0, height: 0 }}
						animate={
							isMenuOpen
								? variant.modalPageIn
								: variant.modalPageOut
						}
						className='w-[650px] h-[800px] bg-slate-100 relative top-4 left-6 shadow-xl rounded-lg'>
						<Button handlerClick={toggleFormPaciente}>
							<FaPlus></FaPlus> Añadir Paciente
						</Button>
					</motion.div>
				</motion.div>
				<div className='w-[1300px] h-[800px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg bg-opacity-90'>
					<Input.icon
						placeholder='Búsqueda de pacientes por nombre'
						addCSS={{
							input: "bg-opacity-70 bg-slate-100 border-[2px] w-96",
						}}>
						<FaSearch></FaSearch>
					</Input.icon>
					<hr />
					<Table
						addCSS={{
							container: "h-auto shadow-lg ",
							table: "h-full ",
						}}>
						<Table.Header>
							<Table.Tr>
								<Table.Th>Nombre</Table.Th>
								<Table.Th>Apellidos</Table.Th>
								<Table.Th>Edad</Table.Th>
								<Table.Th>Estado</Table.Th>
								<Table.Th>Municipio</Table.Th>
								<Table.Th>Estatus</Table.Th>
								<Table.Th>Acciones</Table.Th>
							</Table.Tr>
						</Table.Header>
						<Table.Body>
							{/* {listaPaciente &&
								listaPaciente.map((fila) => {
									number++;
									return (
										<Table.Tr key={"fila" + number}>
											<Table.Td>{fila.name}</Table.Td>
											<Table.Td>{fila.lastname}</Table.Td>
											<Table.Td>{fila.age}</Table.Td>
											<Table.Td>
												{fila.cityState}
											</Table.Td>
											<Table.Td>{fila.city}</Table.Td>
											<Table.Td>{fila.status}</Table.Td>
											<Table.Td>
												<Button
													handlerClick={eliminarProducto.bind(
														this,
														fila.identifier
													)}
													addCSS='bg-red-400 hover:bg-red-600 ring-red-300 px-2'
													text='Borrar'>
													<FaTrash></FaTrash>
												</Button>
											</Table.Td>
										</Table.Tr>
									);
								})} */}
						</Table.Body>
					</Table>
				</div>
			</div>
			<FormularioPacientes
				isOpen={isFormPacienteOpen}
				toggleIsOpen={toggleFormPaciente}></FormularioPacientes>
		</>
	);
}

export { Home };
