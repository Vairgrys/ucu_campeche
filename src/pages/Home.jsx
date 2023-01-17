import Table from "../components/Tables";
import Input from "../components/Inputs";
import Button from "../components/Buttons";
import { motion } from "framer-motion";
import { FaBars, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

var identifier = 0;

function Home() {
	const [listaDespensa, setListaDespensa] = useState([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const variant = {
		modalIn: {
			opacity: 1,
			display: "flex",
			transition: {
				duration: 0.4,
				delayChildren: 0.5,
				staggerChildren: 0.3,
			},
		},
		modalOut: {
			opacity: 0,
			transitionEnd: {
				display: "none",
			},
			transition: {
				duration: 0.4,
				delayChildren: 0.5,
				staggerChildren: 0.2,
			},
		},
		modalPageIn: {
			opacity: 1,
			height: "700px",
			width: "550px",
			transition: {
				duration: 0.4,
			},
		},
		modalPageOut: {
			opacity: 0,
			height: 0,
			width: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	dismissMenu = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsMenuOpen(false);
	};

	onKeyDownHandler = (e) => {
		if (e.keyCode === 13) {
			return;
		}
	};

	return (
		<>
			<Button
				handlerClick={setIsMenuOpen.bind(this, !isMenuOpen)}
				addCSS={
					"rounded-full to-blue-500 from-indigo-700 ease-in-out transition duration-300 bg-gradient-to-t hover:bg-gradient-to-l text-white fixed z-10 shadow-lg p-4 text-xl hover:ring-4 border-[1px] border-blue-600  top-4 left-6"
				}>
				<FaBars></FaBars>
			</Button>
			<div
				onClick={(e) => dismissMenu(e)}
				className='w-screen h-screen flex to-orange-300  from-orange-500 bg-gradient-to-t  dark:bg-slate-900 justify-center items-center'>
				<motion.div
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
						className='w-[500px] h-[800px] bg-slate-100 relative top-4 left-6 shadow-xl rounded-lg'>
						<Button>
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
							{listaDespensa &&
								listaDespensa.map((fila) => {
									number++;
									return (
										<Table.Tr key={"fila" + number}>
											<Table.Td>{number}</Table.Td>
											<Table.Td>{fila.product}</Table.Td>
											<Table.Td>{fila.weight}</Table.Td>
											<Table.Td>{fila.amount}</Table.Td>
											<Table.Td>{fila.amount}</Table.Td>
											<Table.Td>{fila.amount}</Table.Td>
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
								})}
						</Table.Body>
					</Table>
				</div>
			</div>
		</>
	);
}

export { Home };
