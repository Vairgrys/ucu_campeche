import { Suspense, useEffect, useState } from "react";
import Table from "../components/Tables";
import Input from "../components/Inputs";
import Button from "../components/Buttons";

import { variant } from "../utils/variant";
import { AnimatePresence, motion } from "framer-motion";
import {
	FaBars,
	FaPlus,
	FaSearch,
	FaTv,
	FaUser,
	FaUsers,
	FaRegCalendarPlus,
} from "react-icons/fa";
import { PatientsForm } from "../components/Patients/PatientsForm";
import { StaysForm } from "../components/Stays/StaysForm";
import { ParentsForm } from "../components/Parents/ParentsForm";
import { FormularioUsuarios } from "../components/Users/FormularioUsuarios";

import { useModal } from "../hooks/useModal";
import { lazy } from "react";
import { TableLoading } from "../components/Skeletons/TableLoading";

const PatientsList = lazy(() => import("../components/Patients/PatientsList"));

function Pacientes() {
	const [isMenuOpen, toggleMenu] = useModal();
	const [isFormPacienteOpen, toggleFormPaciente] = useModal();
	const [isFormEstanciaOpen, toggleFormEstancia] = useModal();
	const [isFormAcompañanteOpen, toggleFormAcompañante] = useModal();
	const [isFormUsuarioOpen, toggleFormUsuario] = useModal();

	dismissMenu = (e) => {
		e.stopPropagation();
		e.preventDefault();
		toggleFormPaciente(false);
		toggleFormEstancia(false);
		toggleFormAcompañante(false);
		toggleFormUsuario(false);
		toggleMenu(false);
	};

	const [listaPaciente, setListaPaciente] = useState([]);

	function eliminarPaciente(idEliminar) {
		let nuevaLista = listaPaciente.filter((filas) => {
			return filas.identifier != idEliminar;
		});

		setListaPaciente(nuevaLista);
	}

	return (
		<>
			<div
				// Fondo General //
				className='w-screen h-screen flex justify-center items-center to-blue-300  from-green-300 bg-gradient-to-t  dark:bg-slate-900'>
				<div className='w-[1100px] h-[700px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg bg-opacity-90'>
					<Input.icon
						placeholder='Búsqueda de pacientes por nombre'
						className={{
							input: "bg-opacity-70 bg-slate-100 border-[2px] w-96",
						}}>
						<FaSearch></FaSearch>
					</Input.icon>
					<hr />
					<Table
						className={{
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
								<Table.Th>Télefono</Table.Th>
								<Table.Th>Acciones</Table.Th>
							</Table.Tr>
						</Table.Header>
						<Table.Body>
							<Suspense
								fallback={
									<TableLoading cols={7}></TableLoading>
								}>
								<PatientsList></PatientsList>
							</Suspense>
						</Table.Body>
					</Table>
				</div>
			</div>
			<Button
				handlerClick={toggleMenu}
				className={`rounded-full z-10 to-blue-500 from-indigo-700 ease-in-out transition duration-300 bg-gradient-to-t hover:bg-gradient-to-l text-white fixed shadow-xl p-4 text-xl hover:ring-4 border-[1px] border-blue-600  top-2 left-0`}>
				<FaBars></FaBars>
			</Button>
			<motion.div
				// Primer Modal con boton agregar paciente
				onClick={(e) => {
					dismissMenu(e);
				}}
				initial={{ opacity: 0 }}
				animate={isMenuOpen ? variant.modalIn : variant.modalOut}
				className='w-screen h-screen fixed left-0 top-0 bg-slate-200 bg-opacity-70 backdrop-blur-[3px]'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={
						isMenuOpen ? variant.modalPageIn : variant.modalPageOut
					}
					className='h-full w-full px-24 py-16 relative  rounded-lg'>
					<Button
						className='my-5 rounded-full transition hover:ring-[10px] ring-green-400 bg-gradient-to-t px-10 py-7 text-xl flex flex-row justify-center items-center from-teal-600 to-green-400 border-0 shadow-xl'
						handlerClick={toggleFormPaciente}>
						<FaPlus></FaPlus> &nbsp;&nbsp; Añadir Paciente
					</Button>
					<Button
						handlerClick={toggleFormUsuario}
						className='my-5 rounded-full transition hover:ring-[10px] ring-blue-400 bg-gradient-to-t px-10 py-7 text-xl flex flex-row justify-center items-center from-blue-600 to-cyan-400 border-0 shadow-xl'>
						<FaUser></FaUser> &nbsp;&nbsp; Módulo Usuarios
					</Button>
					<Button className='my-5 rounded-full transition hover:ring-[10px] ring-yellow-400 bg-gradient-to-t px-10 py-7 text-xl flex flex-row justify-center items-center from-yellow-500 to-amber-400 border-0 shadow-xl'>
						<FaTv></FaTv> &nbsp;&nbsp; Módulo Monitoreo
					</Button>
					<Button
						handlerClick={toggleFormAcompañante}
						className='my-5 rounded-full transition hover:ring-[10px] ring-purple-400 bg-gradient-to-t px-10 py-7 text-xl flex flex-row justify-center items-center from-indigo-600 to-purple-400 border-0 shadow-xl'>
						<FaUsers></FaUsers> &nbsp;&nbsp; Registrar Acompañantes
					</Button>
					<Button
						handlerClick={toggleFormEstancia}
						className='my-5 rounded-full transition hover:ring-[10px] ring-orange-400 bg-gradient-to-t px-10 py-7 text-xl flex flex-row justify-center items-center from-orange-500 to-yellow-400 border-0 shadow-xl'>
						<FaRegCalendarPlus></FaRegCalendarPlus> &nbsp;&nbsp;
						Módulo Estancias
					</Button>
				</motion.div>
			</motion.div>
			<AnimatePresence>
				{isFormPacienteOpen && (
					<PatientsForm
						key='PatientsForm'
						isOpen={isFormPacienteOpen}
						dismissMenu={dismissMenu}
						toggleIsOpen={toggleFormPaciente}></PatientsForm>
				)}
				{isFormUsuarioOpen && (
					<FormularioUsuarios
						key='formularioUsuarios'
						isOpen={isFormUsuarioOpen}
						dismissMenu={dismissMenu}
						toggleIsOpen={toggleFormUsuario}></FormularioUsuarios>
				)}
				{isFormAcompañanteOpen && (
					<ParentsForm
						key='ParentsForm'
						isOpen={isFormAcompañanteOpen}
						dismissMenu={dismissMenu}
						toggleIsOpen={toggleFormAcompañante}></ParentsForm>
				)}
				{isFormEstanciaOpen && (
					<StaysForm
						key='StaysForm'
						isOpen={isFormEstanciaOpen}
						dismissMenu={dismissMenu}
						toggleIsOpen={toggleFormEstancia}></StaysForm>
				)}
			</AnimatePresence>
		</>
	);
}

export { Pacientes };
