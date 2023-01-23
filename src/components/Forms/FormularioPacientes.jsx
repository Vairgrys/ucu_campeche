import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variant } from "../../utils/variant";
import { useEdad } from "../../hooks/useEdad";
import { FaPlus, FaTimes } from "react-icons/fa";
import Button from "../Buttons";
import Input from "../Inputs";
import TextArea from "../Textarea";

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
			className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-30 bg-slate-400 bg-opacity-30 '>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={
					isOpen
						? variant.modalPageInPacientes
						: variant.modalPageOutPacientes
				}
				onClick={(e) => e.stopPropagation()}
				className=' px-10 py-6 w-[550px] h-auto flex flex-col absolute bg-slate-50 shadow-xl rounded-lg'>
				<Button
					handlerClick={() => {
						toggleIsOpen(false);
					}}
					addCSS={
						"absolute right-2 top-2 p-2 border-0 hover:border-0 hover:bg-slate-50 hover:text-red-400 text-slate-400 bg-slate-50 hover:focus:ring-0"
					}>
					<FaTimes></FaTimes>
				</Button>
				<div className='flex mb-2 '>
					<h1 className='text-orange-500 flex flex-row justify-center items-center font-medium text-2xl'>
						AGREGAR PACIENTE
					</h1>
				</div>
				<div className='flex w-full mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Nombre</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar Nombre(s)'
								handlerChange={setName}
								value={name}></Input>
						</div>
					</div>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Apellidos</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar Apellidos'
								handlerChange={setLastName}
								value={lastname}></Input>
						</div>
					</div>
				</div>
				<div className='flex w-full mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>
							Fecha de Nacimiento
						</label>

						<Input.datepicker
							placeholder='Seleccionar fecha'
							handlerChange={setBirthday}
							value={birthday}></Input.datepicker>
					</div>
					<div className='flex flex-col m-1 place-content-around'>
						<label className='text-slate-600'>Edad</label>
						<div className='flex h-8'>
							<Input disabled={true} value={age}></Input>
						</div>
					</div>
					<div className='flex flex-col w-full m-1 place-content-around'>
						<label className='text-slate-600'>Género</label>
						<div className='flex h-8 justify-center'>
							<Input
								placeholder='Selecciona tu género'
								handlerChange={setSex}
								value={sex}></Input>
						</div>
					</div>
				</div>
				<div className='flex mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Teléfono</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar teléfono'
								handlerChange={setPhone}
								value={phone}></Input>
						</div>
					</div>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Correo</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar correo electrónico'
								handlerChange={setEmail}
								value={email}></Input>
						</div>
					</div>
				</div>
				<div className='flex w-full mb-2'>
					<div className='flex-col w-full m-1'>
						<label className='text-slate-600'>Estado</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar estado'
								handlerChange={setState}
								value={state}></Input>
						</div>
					</div>
					<div className='flex-col w-full m-1'>
						<label className='text-slate-600'>Municipio</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar ciudad'
								handlerChange={setCity}
								value={city}></Input>
						</div>
					</div>
					<div className='flex-col w-full m-1'>
						<label className='text-slate-600'>Localidad</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar localidad'
								handlerChange={setLocation}
								value={location}></Input>
						</div>
					</div>
				</div>
				<div className='flex h-auto mb-2'>
					<div className='flex flex-col w-full'>
						<label className='text-slate-600'>Dirección</label>
						<TextArea
							placeholder='Ingresar dirección'
							handlerChange={setAddress}
							value={address}></TextArea>
					</div>
				</div>
				<div className='flex w-full mb-2'>
					<div className='flex flex-col w-full'>
						<label className='text-slate-600'>Diagnóstico</label>
						<div className='flex h-full'>
							<TextArea
								addCSS={"flex w-full"}
								placeholder='Ingresar Diagnóstico'
								handlerChange={setStatus}
								value={status}></TextArea>
						</div>
					</div>
				</div>
				<div className='flex w-full mb-2'>
					<div className='flex flex-col w-full'>
						<label className='text-slate-600'>Tratamiento</label>
						<div className='flex h-full'>
							<TextArea
								addCSS={"flex w-full rounded-lg border-1"}
								placeholder='Ingresar tratamiento'
								handlerChange={setDiagnostic}
								value={diagnostic}></TextArea>
						</div>
					</div>
				</div>
				<br className='m-4' />
				<div className='flex h-full justify-center items-center w-full'>
					<div className='flex h-14'>
						<Button addCSS={"bg-purple-600 hover:purple-400"}>
							<FaPlus></FaPlus>&nbsp;&nbsp; Agregar
						</Button>
					</div>
					<div className='flex h-14'>
						<Button addCSS={"bg-red-600 hover:bg-red-400"}>
							<FaTimes></FaTimes>&nbsp;&nbsp; Cancelar
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export { FormularioPacientes };
