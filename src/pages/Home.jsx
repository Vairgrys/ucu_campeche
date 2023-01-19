import Table from "../components/Tables";
import Input from "../components/Inputs";
import Button from "../components/Buttons";
import { motion } from "framer-motion";
import { FaBars, FaPlus, FaTimes, FaSearch, FaTrash, FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from "react"

var identifier = 0;

function Home() {

	let number = 0;

	const [name, setName ] = useState('');
	const [lastname, setLastName] = useState('');
	const [birthday, setBirthday] = useState('');
	const [age, setAge] = useState('');
	const [sex, setSex] = useState('');
	const [phone, setPhone] = useState('');
	const [cityState, setCityState] = useState('');
	const [city, setCity] = useState('');
	const [location, setLocation] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('');
	const [diagnostic, setDiagnostic] = useState('');
	const [listaPaciente, setListaPaciente] = useState([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMenuOpenPaciente, setIsMenuOpenPaciente] = useState(false);
	
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

	dismissMenuPaciente = (e) => {
		setIsMenuOpenPaciente(false);
	};

	function generarPaciente(e) {
			identifier++;
			setListaPaciente([
				...listaPaciente,
				{name, lastname, birthday, cityState, city, diagnostic},
			]);
		}
	
	function eliminarProducto(idEliminar) {
		let nuevaLista = listaPaciente.filter((filas) => {
			return filas.identifier != idEliminar;
		});

		setListaPaciente(nuevaLista);
	}

	function getEdad() {
		var fechaNa = new Date(birthday)
		var hoy = new Date()

		var diah = hoy.getDate()
        var mesh = hoy.getMonth()+1
        var añoh = hoy.getFullYear()

		var diaNa = fechaNa.getDate()
        var mesNa = fechaNa.getMonth()+1
        var añoNa = fechaNa.getFullYear()

		let edad = añoh - añoNa
  		let diferenciaMeses = mesh - mesNa
  		if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diah < diaNa)) {
    		edad--
  		}
			setAge(edad);
			}	

			console.log(birthday)

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
						className='w-[500px] h-[800px] bg-slate-100 relative top-4 left-6 shadow-xl rounded-lg'>
						
						<Button handlerClick={setIsMenuOpenPaciente.bind(this, !isMenuOpenPaciente)}>
							<FaPlus></FaPlus> Añadir Paciente
						</Button>
							<motion.div
						// Segundo Modal - Alta de Paciente 
								initial={{ opacity: 0 }}
								animate={isMenuOpenPaciente ? variant.modalIn : variant.modalOut}
								onClick={(e) => dismissMenuPaciente(e)}
								className='w-screen h-screen absolute top-0 z-30 bg-slate-400 bg-opacity-30 '>
									
							<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, width: 0, height: 0, position: 'absolute', left: '600px'}}
						animate={
							isMenuOpenPaciente
								? variant.modalPageIn
								: variant.modalPageOut
							}
							className='w-[500px] h-[800px] item bg-slate-100 relative justify-center left-6 shadow-xl rounded-lg'>
								<Button handlerClick={setIsMenuOpenPaciente.bind(this, !isMenuOpenPaciente)} 
								addCSS={"absolute right-0 top-0 m-2 p-1 bg-red-600 hover:bg-red-400 focus:ring-0"}>
									<FaTimesCircle></FaTimesCircle>
								</Button>
								<div className="w-full h-full">
								<label >Nombre</label>
								<Input placeholder='Ingresar Nombre(s)' handlerChange={setName} value={name} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Apellidos</label>
								<Input  placeholder='' handlerChange={setLastName} value={lastname} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Fecha de Nacimiento</label>
								<Input.datepicker handlerChange={setBirthday} value={birthday}></Input.datepicker>
								<label >Edad</label>
								<Input handlerChange={setAge} value={age} addCSS={{ input: "h-[30px] bg-slate-200" }}>{age}</Input>
								<label >Género</label>
								<Input handlerChange={setSex} value={sex} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Teléfono</label>
								<Input placeholder='Ingresa tu teléfono' handlerChange={setPhone} value={phone} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Estado</label>
								<Input placeholder='' handlerChange={setCityState} value={cityState} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Municipio</label>
								<Input placeholder='' handlerChange={setCity} value={city} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Localidad</label>
								<Input placeholder='' handlerChange={setLocation} value={location} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Dirección</label>
								<Input placeholder='' handlerChange={setAddress} value={address} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Correo</label>
								<Input placeholder='' handlerChange={setEmail} value={email} addCSS={{ input: "h-[30px]" }}></Input>
								<label >Diagnóstico</label>
								<Input placeholder='' handlerChange={setStatus} value={status} addCSS={{ input: "h-[30px]" }}>Tratamiento</Input>
								<label >Tratamiento</label>
								<Input placeholder='' handlerChange={setDiagnostic} value={diagnostic} addCSS={{ input: "h-[30px]" }}></Input>
								<div className="flex justify-between">
								<Button handlerClick={generarPaciente} addCSS={"ml-0 bg-purple-600 hover:purple-400"}><FaPlus></FaPlus>Agregar</Button>
								<Button addCSS={"bg-red-600 hover:bg-red-400"}><FaTimes></FaTimes>Cancelar</Button>
								</div>
								</div>
							</motion.div>
						</motion.div>
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
							{listaPaciente &&
								listaPaciente.map((fila) => {
									number++;
									return (
										<Table.Tr key={"fila" + number}>
											<Table.Td>{fila.name}</Table.Td>
											<Table.Td>{fila.lastname}</Table.Td>
											<Table.Td>{fila.age}</Table.Td>
											<Table.Td>{fila.cityState}</Table.Td>
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
								})}
						</Table.Body>
					</Table>
				</div>
			</div>
		</>
	);
}

export { Home };
