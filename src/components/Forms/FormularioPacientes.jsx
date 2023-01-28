import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { variant } from "../../utils/variant";
import { useEdad } from "../../hooks/useEdad";
import { FaPlus, FaTimes, FaUndo } from "react-icons/fa";
import Button from "../Buttons";
import Input from "../Inputs";
import Select from "../Selects";
import { usePatientStore } from "../../store/usePatientStore";
import moment from "moment";

function FormularioPacientes(props) {
	const {
		isOpen = false,
		toggleIsOpen = () => {},
		dismissMenu = () => {},
	} = props;

	const [savePatient, requestPatients] = usePatientStore((state) => [
		state.savePatient,
		state.requestPatients,
	]);

	const [name, setName] = useState("");
	const [lastname, setLastName] = useState("");
	const [birthday, setBirthday] = useState(new Date());
	const [formatBirthday, setFormatBirthday] = useState("");
	const [age, updateAge] = useEdad();
	const [phone, setPhone] = useState("");
	const [sex, setSex] = useState("");
	const [email, setEmail] = useState("");
	const [scholarship, setScholarship] = useState("");
	const [identity, setIdentity] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [location, setLocation] = useState("");
	const [address, setAddress] = useState("");
	const [diagnostic, setDiagnostic] = useState("");
	const [status, setStatus] = useState("");

	const [isValid, setIsValid] = useState(false);
	const [validMsg, setValidMsg] = useState("");
	const [listaPaciente, setListaPaciente] = useState([]);

	useEffect(() => {
		updateAge(birthday);
		var momentDate = moment(birthday);
		setFormatBirthday(momentDate.format("YYYY-MM-DD"));
	}, [birthday]);

	function validarInputs(e) {
		try {
			if (name === "") throw new Error("Por favor llene el campo nombre");
			if (lastname === "")
				throw new Error("Por favor llene el campo apellido");
			if (birthday === "")
				throw new Error("Por favor llene el campo fecha de nacimiento");
			if (sex === "") throw new Error("Por favor llene el campo sexo");
			if (phone === "")
				throw new Error("Por favor llene el campo teléfono");
			if (email === "")
				throw new Error("Por favor llene el campo correo");
			if (scholarship === "")
				throw new Error("Por favor llene el campo escolaridad");
			if (identity === "")
				throw new Error("Por favor llene el campo INE");
			if (state === "")
				throw new Error("Por favor llene el campo estado");
			if (city === "")
				throw new Error("Por favor llene el campo municipio");
			if (location === "")
				throw new Error("Por favor llene el campo localidad");
			if (address === "")
				throw new Error("Por favor llene el campo dirección");
			if (diagnostic === "")
				throw new Error("Por favor llene el campo diagnostico");
			if (status === "")
				throw new Error("Por favor llene el campo tratamiento");

			setListaPaciente([
				...listaPaciente,
				{ name, lastname, age, state, city, status },
			]);

			setIsValid(true);
		} catch (err) {
			console.log(err);
			setIsValid(false);
			setValidMsg(err.message);
		}

		var patient = {
			nombre: name,
			apellido: lastname,
			fechaNacimiento: formatBirthday,
			telefono: phone,
			sexo: sex,
			correo: email,
			edad: age,
			escolaridad: scholarship,
			ine: identity,
			estado: state,
			municipio: city,
			localidad: location,
			direccion: address,
			diagnostico: diagnostic,
			tratamiento: status,
		};

		console.log(patient);

		savePatient(patient, (response) => {
			if (response.data?.status && response.data.status == true) {
				// mensaje si se pudo guardar
				alert(response.data?.msg);
				requestPatients();
			}
		});
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={variant.modalIn}
			exit={variant.modalOut}
			className='w-screen h-screen fixed top-0 z-10 left-0 flex justify-center items-center bg-slate-400 backdrop-blur-sm bg-opacity-50 '>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={variant.modalPageInPacientes}
				exit={variant.modalPageOutPacientes}
				onClick={(e) => e.stopPropagation()}
				className=' px-10 py-6 w-[650px] min-h-[500px] h-auto flex flex-col absolute bg-slate-50 shadow-xl rounded-lg'>
				<Button
					handlerClick={(e) => {
						dismissMenu(e);
					}}
					addCSS={
						"absolute right-2 top-2 p-2 border-0 hover:border-0 hover:bg-slate-50 hover:text-red-400 text-slate-400 bg-slate-50 hover:focus:ring-0"
					}>
					<FaTimes></FaTimes>
				</Button>
				<div className='flex mb-2 '>
					<h1 className='text-orange-500 flex flex-row items-center font-medium text-2xl w-3/4'>
						AGREGAR PACIENTE
					</h1>
					<div className='flex ml-2 items-center w-full'>
						{!isValid && (
							<p className='text-red-500 font-bold'>{validMsg}</p>
						)}
					</div>
				</div>

				<div className='flex w-full mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Nombre(s)</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar nombre(s)'
								handlerChange={setName}
								value={name}></Input>
						</div>
					</div>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Apellidos</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar apellidos'
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
							value={birthday}
							setBirthday={setBirthday}></Input.datepicker>
					</div>

					<div className='flex flex-col w-1/3 m-1'>
						<label className='text-slate-600'>Edad</label>
						<div className='flex h-8'>
							<Input
								addCSS={"p-0"}
								disabled={true}
								value={age + " años"}></Input>
						</div>
					</div>
					<div className='flex flex-col w-4/5 m-1'>
						<label className='text-slate-600'>Sexo</label>
						<div className='flex h-8 justify-center'>
							<Select
								value={sex}
								handlerChange={setSex}
								addCSS={"p-0 pl-2 border-2 border-slate-200"}>
								<Select.options defaultValue={true}>
									Selecciona tu sexo
								</Select.options>
								<Select.options value='M'>
									Masculino
								</Select.options>
								<Select.options value='F'>
									Femenino
								</Select.options>
							</Select>
						</div>
					</div>
				</div>
				<div className='flex mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Teléfono</label>
						<div className='flex h-8'>
							<Input.phone
								placeholder='Ingresar teléfono'
								handlerChange={setPhone}
								value={phone}></Input.phone>
						</div>
					</div>

					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Correo</label>
						<div className='flex h-8'>
							<Input
								type='email'
								placeholder='Ingresar correo electrónico'
								handlerChange={setEmail}
								value={email}></Input>
						</div>
					</div>
				</div>

				<div className='flex mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Escolaridad</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar escolaridad'
								handlerChange={setScholarship}
								value={scholarship}></Input>
						</div>
					</div>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>INE</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar INE'
								handlerChange={setIdentity}
								value={identity}></Input>
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
				<div className='flex h-auto mb-2 m-1'>
					<div className='flex flex-col w-full'>
						<label className='text-slate-600'>Dirección</label>
						<Input.textarea
							placeholder='Ingresar dirección'
							handlerChange={setAddress}
							value={address}></Input.textarea>
					</div>
				</div>
				<div className='flex w-full'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Diagnóstico</label>
						<div className='flex h-full'>
							<Input.textarea
								addCSS={"flex w-full"}
								placeholder='Ingresar diagnóstico'
								handlerChange={setDiagnostic}
								value={diagnostic}></Input.textarea>
						</div>
					</div>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Tratamiento</label>
						<div className='flex'>
							<Input.textarea
								addCSS={"flex rounded-lg border-1"}
								placeholder='Ingresar tratamiento'
								handlerChange={setStatus}
								value={status}></Input.textarea>
						</div>
					</div>
				</div>

				<br className='m-4' />
				<div className='flex h-1/4 justify-center items-center w-full'>
					<div className='flex'>
						<Button
							handlerClick={validarInputs}
							addCSS={
								"bg-purple-600 hover:bg-purple-400 focus:ring-violet-300"
							}>
							<FaPlus></FaPlus>&nbsp;&nbsp; Agregar
						</Button>
					</div>
					<div className='flex'>
						<Button
							handlerClick={() => {
								toggleIsOpen(false);
							}}
							addCSS={
								"bg-slate-400 hover:bg-slate-300 focus:ring-slate-300"
							}>
							<FaUndo></FaUndo>&nbsp;&nbsp; Regresar
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export { FormularioPacientes };
