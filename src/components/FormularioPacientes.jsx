import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variant } from "../utils/variant";
import { useEdad } from "../hooks/useEdad";
import { FaPlus, FaTimes } from "react-icons/fa";
import { getImageListItemBarUtilityClass } from "@mui/material";
import Button from "../components/Buttons";
import Input from "../components/Inputs";
import TextArea from "./Textarea";

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
				className='overflow-auto p-6 item bg-slate-50 relative shadow-xl rounded-lg'>
				<div className='relative w-full h-full flex flex-col'>
					<div className="absolute flex w-full justify-end">
				<Button
					handlerClick={() => {
						toggleIsOpen(false);
					}}
					addCSS={
						"right-0 z-20 top-0 p-0 border-0 hover:border-0 hover:bg-slate-50 hover:text-slate-400 text-slate-600 bg-slate-50 hover:focus:ring-0"
					}>
					<FaTimes></FaTimes>
				</Button>
					</div>
					<div className='flex w-full'>
						<div className='flex flex-col w-full m-1'>
							<label>Nombre</label>
							<div className="flex h-8">
							<Input
								placeholder='Ingresar Nombre(s)'
								handlerChange={setName}
								value={name}
								></Input>
							</div>
						</div>
						<div className='flex flex-col w-full m-1'>
							<label>Apellidos</label>
							<div className="flex h-8">
							<Input
								placeholder='Ingresar Apellidos'
								handlerChange={setLastName}
								value={lastname}
								></Input>
							</div>
						</div>
					</div>
					<div className='flex w-full'>
						<div className="flex flex-col w-full m-1">
						<label>Fecha de Nacimiento</label>
						<Input.datepicker
						placeholder="Seleccionar fecha"
						handlerChange={setBirthday}
						value={birthday}
						></Input.datepicker>
						</div>
						<div className="flex flex-col m-1 place-content-around">
							<label>Edad</label> 
							<div className="flex h-8">
							<Input
							disabled={true}
							value={age}
							>
							</Input>
							</div>
						</div>
						<div className="flex flex-col w-full m-1 place-content-around">
							<label>Género</label>
								<div className="flex h-8 justify-center">
							<Input
								placeholder='Selecciona tu género'
								handlerChange={setSex}
								value={sex}
								></Input>
								</div>
						</div>
					</div>
					<div className="flex">
							<div className="flex flex-col w-full m-1">
							<label>Teléfono</label>
							<div className="flex h-8">
							<Input
								placeholder='Ingresar teléfono'
								handlerChange={setPhone}
								value={phone}
								></Input>
							</div>
							</div>
					<div className="flex flex-col w-full m-1">
						<label>Correo</label>
						<div className="flex h-8">
					<Input
						placeholder='Ingresar correo electrónico'
						handlerChange={setEmail}
						value={email}
						></Input>
						</div>
					</div>
					</div>
					<div className="flex w-full">
						<div className="flex-col w-full m-1">
					<label>Estado</label>
					<div className="flex h-8">
					<Input
						placeholder='Ingresar estado'
						handlerChange={setState}
						value={state}
						></Input>
					</div>
						</div>
						<div className="flex-col w-full m-1">
					<label>Municipio</label>
					<div className="flex h-8">
					<Input
						placeholder='Ingresar ciudad'
						handlerChange={setCity}
						value={city}
						></Input>
					</div>
						</div>
						<div className="flex-col w-full m-1">
					<label>Localidad</label>
					<div className="flex h-8">
					<Input
						placeholder='Ingresar localidad'
						handlerChange={setLocation}
						value={location}
						></Input>
						</div>
					</div>
					</div>
					<div className="flex h-auto">
					<div className="flex flex-col w-full">
					<label>Dirección</label>
					<TextArea
						placeholder='Ingresar dirección'
						handlerChange={setAddress}
						value={address}
						></TextArea>
					</div>
					</div>
					<div className="flex w-full">
					<div className="flex flex-col w-full">
					<label>Diagnóstico</label>
					<div className="flex h-full">
					<TextArea
						addCSS={"flex w-full"}
						placeholder='Ingresar Diagnóstico'
						handlerChange={setStatus}
						value={status}
						>
					</TextArea>
					</div>
					</div>
					</div>
					<div className="flex w-full">
					<div className="flex flex-col w-full">
					<label>Tratamiento</label>
					<div className="flex h-full">
					<TextArea
						addCSS={"flex w-full rounded-lg border-1"}
						placeholder='Ingresar tratamiento'
						handlerChange={setDiagnostic}
						value={diagnostic}
						></TextArea>
					</div>
					</div>
					</div>
					<div className='flex h-full items-center w-full'>
						<div className="flex h-14 w-full">
						<Button addCSS={"ml-0 bg-purple-600 hover:purple-400"}>
							<FaPlus></FaPlus>&nbsp;&nbsp; Agregar
						</Button>
						</div>
						<div className="flex h-14 w-full justify-end">
						<Button addCSS={"bg-red-600 hover:bg-red-400"}>
							<FaTimes></FaTimes>&nbsp;&nbsp; Cancelar
						</Button>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export { FormularioPacientes };
