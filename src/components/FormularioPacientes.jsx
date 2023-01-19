import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variant } from "../utils/variant";
import { useEdad } from "../hooks/useEdad";
import { FaPlus, FaTimes, FaTimesCircle } from "react-icons/fa";
import { getImageListItemBarUtilityClass } from "@mui/material";
import Button from "../components/Buttons";
import Input from "../components/Inputs";

function FormularioPacientes(props) {
	const { isOpen = false, toggleIsOpen = () => {} } = props;

	var identifier = 0;

	const [age, updateAge] = useEdad();

	const [name, setName] = useState("");
	const [lastname, setLastName] = useState("");
	const [birthday, setBirthday] = useState("");

	const [sex, setSex] = useState("");
	const [phone, setPhone] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [location, setLocation] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");
	const [diagnostic, setDiagnostic] = useState("");

	useEffect(() => {
		updateAge(birthday);
	}, [birthday]);

	// const [listaPaciente, setListaPaciente] = useState([]);

	// function generarPaciente(e) {
	// 	identifier++;
	// 	setListaPaciente([
	// 		...listaPaciente,
	// 		{ name, lastname, birthday, cityState, city, diagnostic },
	// 	]);
	// }

	// function eliminarPaciente(idEliminar) {
	// 	let nuevaLista = listaPaciente.filter((filas) => {
	// 		return filas.identifier != idEliminar;
	// 	});

	// 	setListaPaciente(nuevaLista);
	// }

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={isOpen ? variant.modalIn : variant.modalOut}
			onClick={(e) => toggleIsOpen(false)}
			className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center z-30 bg-slate-400 bg-opacity-30 '>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				initial={{
					opacity: 0,
					width: 0,
					height: 0,
					position: "absolute",
					left: "600px",
				}}
				animate={isOpen ? variant.modalPageIn : variant.modalPageOut}
				className='w-[500px]  h-[700px] overflow-auto p-4 item bg-slate-50 relative shadow-xl rounded-lg'>
				<Button
					handlerClick={() => {
						toggleIsOpen(false);
					}}
					addCSS={
						"absolute right-0 z-20 top-0 m-2 p-1 bg-red-600 hover:bg-red-400 focus:ring-0"
					}>
					<FaTimesCircle></FaTimesCircle>
				</Button>
				<div className='relative w-full h-full'>
					<div className='flex'>
						<div className=' flex flex-col w-full m-1'>
							<label>Nombre</label>
							<Input
								placeholder='Ingresar Nombre(s)'
								handlerChange={setName}
								value={name}
								addCSS={{ input: "h-[30px]" }}></Input>
						</div>
						<div className='flex flex-col w-full m-1'>
							<label>Apellidos</label>
							<Input
								placeholder=''
								handlerChange={setLastName}
								value={lastname}
								addCSS={{ input: "h-[30px]" }}></Input>
						</div>
					</div>
					<label>Fecha de Nacimiento</label>
					<Input.datepicker
						handlerChange={setBirthday}
						value={birthday}></Input.datepicker>
					<label>Edad</label>
					<Input
						disabled={true}
						value={age}
						addCSS={{
							input: "h-[30px] bg-red-200",
						}}>
						{age}
					</Input>
					<label>Género</label>
					<Input
						handlerChange={setSex}
						value={sex}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Teléfono</label>
					<Input
						placeholder='Ingresa tu teléfono'
						handlerChange={setPhone}
						value={phone}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Estado</label>
					<Input
						placeholder=''
						handlerChange={setState}
						value={state}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Municipio</label>
					<Input
						placeholder=''
						handlerChange={setCity}
						value={city}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Localidad</label>
					<Input
						placeholder=''
						handlerChange={setLocation}
						value={location}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Dirección</label>
					<Input
						placeholder=''
						handlerChange={setAddress}
						value={address}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Correo</label>
					<Input
						placeholder=''
						handlerChange={setEmail}
						value={email}
						addCSS={{ input: "h-[30px]" }}></Input>
					<label>Diagnóstico</label>
					<Input
						placeholder=''
						handlerChange={setStatus}
						value={status}
						addCSS={{ input: "h-[30px]" }}>
						Tratamiento
					</Input>
					<label>Tratamiento</label>
					<Input
						placeholder=''
						handlerChange={setDiagnostic}
						value={diagnostic}
						addCSS={{ input: "h-[30px]" }}></Input>
					<div className='flex justify-between'>
						<Button addCSS={"ml-0 bg-purple-600 hover:purple-400"}>
							<FaPlus></FaPlus>Agregar
						</Button>
						<Button addCSS={"bg-red-600 hover:bg-red-400"}>
							<FaTimes></FaTimes>Cancelar
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export { FormularioPacientes };
