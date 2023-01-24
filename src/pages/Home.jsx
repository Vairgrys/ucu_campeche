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
	FaUsers,
	FaRegCalendarPlus,
} from "react-icons/fa";
import { FormularioPacientes } from "../components/Forms/FormularioPacientes";
import { FormularioEstancias } from "../components/Forms/FormularioEstancias";
import { FormularioAcompañantes } from "../components/Forms/FormularioAcompañantes";

import { useModal } from "../hooks/useModal";
import { usePatientStore } from "../store/patientStore";
import { PatientsList } from "../components/TableRows/patientsList";

function Home() {
	const [isMenuOpen, toggleMenu] = useModal();
	const [isFormPacienteOpen, toggleFormPaciente] = useModal();
	const [isFormEstanciaOpen, toggleFormEstancia] = useModal();
	const [isFormAcompañanteOpen, toggleFormAcompañante] = useModal();

	dismissMenu = (e) => {
		e.stopPropagation();
		e.preventDefault();
		toggleMenu(false);
	};

	dismissMenuPaciente = (e) => {
		toggleFormPaciente(false);
	};

	dismissMenuEstancia = (e) => {
		toggleFormEstancia(false);
	};

	dismissMenuAcompañante = (e) => {
		toggleFormAcompañante(false);
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
			<Button
				handlerClick={toggleMenu}
				addCSS={
					"rounded-full to-blue-500 from-indigo-700 ease-in-out transition duration-300 bg-gradient-to-t hover:bg-gradient-to-l text-white fixed z-10 shadow-xl p-4 text-xl hover:ring-4 border-[1px] border-blue-600  top-2 left-0"
				}>
				<FaBars></FaBars>
			</Button>
			<div
				// Fondo General //
				onClick={(e) => dismissMenu(e)}
				className='w-screen h-screen flex justify-center items-center to-blue-300  from-green-300 bg-gradient-to-t  dark:bg-slate-900'>
				<motion.div
					// Primer Modal con boton agregar paciente
					initial={{ opacity: 0 }}
					animate={isMenuOpen ? variant.modalIn : variant.modalOut}
					className='w-screen h-screen absolute z-20 bg-slate-200 bg-opacity-70 backdrop-blur-[3px]'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={
							isMenuOpen
								? variant.modalPageIn
								: variant.modalPageOut
						}
						className='h-full w-full grid grid-cols-4 gap-4 grid-rows-5 px-24 py-16 relative  rounded-lg'>
						<Button
							addCSS='my-5 rounded-full transition hover:ring-[10px] ring-blue-400 bg-gradient-to-t px-4 py-3 text-xl flex flex-row justify-center items-center from-teal-600 to-green-400 border-0 shadow-xl'
							handlerClick={toggleFormPaciente}>
							<FaPlus></FaPlus> &nbsp;&nbsp; Añadir Paciente
						</Button>
						<Button addCSS='my-5 rounded-full transition hover:ring-[10px] ring-purple-400 bg-gradient-to-t px-4 py-3 text-xl flex flex-row justify-center items-center from-indigo-600 to-purple-400 border-0 shadow-xl'>
							<FaPlus></FaPlus> &nbsp;&nbsp; Módulo Usuarios
						</Button>
						<Button addCSS='my-5 rounded-full transition hover:ring-[10px] ring-orange-400 bg-gradient-to-t px-4 py-3 text-xl flex flex-row justify-center items-center from-orange-500 to-yellow-400 border-0 shadow-xl'>
							<FaPlus></FaPlus> &nbsp;&nbsp; Módulo Monitoreo
						</Button>
					</motion.div>
				</motion.div>
				<div className='w-[1100px] h-[700px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg bg-opacity-90'>
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
								<Table.Th>Télefono</Table.Th>
								<Table.Th>Acciones</Table.Th>
							</Table.Tr>
						</Table.Header>
						<Table.Body>
							<Suspense fallback={<p>cargando...</p>}>
								<PatientsList></PatientsList>
							</Suspense>
						</Table.Body>
					</Table>
				</div>
			</div>
			<FormularioPacientes
				isOpen={isFormPacienteOpen}
				toggleIsOpen={toggleFormPaciente}></FormularioPacientes>
			<FormularioEstancias
				isOpen={isFormEstanciaOpen}
				toggleIsOpen={toggleFormEstancia}></FormularioEstancias>
			<FormularioAcompañantes
				isOpen={isFormAcompañanteOpen}
				toggleIsOpen={toggleFormAcompañante}></FormularioAcompañantes>
		</>
	);
}

export { Home };
