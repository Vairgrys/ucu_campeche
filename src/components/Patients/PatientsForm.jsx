import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variant } from "../../utils/variant";
import { useEdad } from "../../hooks/useEdad";
import { FaPlus, FaTimes, FaUndo } from "react-icons/fa";
import Button from "../Buttons";
import Input from "../Inputs";
import Select from "../Selects";
import { usePatientStore } from "../../store/usePatientStore";
import moment from "moment";

function PatientsForm(props) {
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
	const [formatPhone, setFormatPhone] = useState("");
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
	const [validMsg, setValidMsg] = useState("");
	const [listaPaciente, setListaPaciente] = useState([]);

	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		if (phone.length > 0) {
			setFormatPhone(phone.replace("+", ""));
		}
	}, [phone]);

	useEffect(() => {
		updateAge(birthday);
		var momentDate = moment(birthday);
		setFormatBirthday(momentDate.format("YYYY-MM-DD"));
	}, [birthday]);

	function validarInputs(e) {
		try {
			if (
				name === "" ||
				lastname === "" ||
				birthday === "" ||
				sex === "" ||
				phone === "" ||
				email === "" ||
				scholarship === "" ||
				identity === "" ||
				state === "" ||
				city === "" ||
				location === "" ||
				address === "" ||
				diagnostic === "" ||
				birthday === "invalid date" ||
				status === ""
			) {
				throw new Error("Favor de llenar todos los campos");
			}

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
			telefono: formatPhone,
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
					className={
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
								className={"p-0"}
								disabled={true}
								value={age + " a??os"}></Input>
						</div>
					</div>
					<div className='flex flex-col w-4/5 m-1'>
						<label className='text-slate-600'>Sexo</label>
						<div className='flex h-8 justify-center'>
							<Select
								value={sex}
								handlerChange={setSex}
								className={
									"p-0 pl-2 border-2 border-slate-200"
								}>
								<Select.options
									defaultValue={true}
									className={"text-slate-300"}>
									Selecciona tu sexo
								</Select.options>
								<Select.options value='M'>
									MASCULINO
								</Select.options>
								<Select.options value='F'>
									FEMENINO
								</Select.options>
							</Select>
						</div>
					</div>
				</div>
				<div className='flex mb-2'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Tel??fono</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar numero de telefono'
								handlerChange={setPhone}
								value={phone}></Input>
						</div>
					</div>

					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Correo</label>
						<div className='flex h-8'>
							<Input
								type='email'
								placeholder='Ingresar correo electr??nico'
								handlerChange={setEmail}
								value={email}></Input>
						</div>
					</div>
				</div>

				<div className='flex mb-2'>
					<div className='flex flex-col w-4/5 m-1'>
						<label className='text-slate-600'>Escolaridad</label>
						<div className='flex h-8 justify-center'>
							<Select
								value={scholarship}
								handlerChange={setScholarship}
								className={
									"p-0 pl-2 border-2 border-slate-200"
								}>
								<Select.options
									defaultValue={true}
									className={"text-slate-300"}>
									Selecciona la escolaridad
								</Select.options>
								<Select.options value='NINGUNA'>
									NINGUNA
								</Select.options>
								<Select.options value='INFANTIL'>
									INFANTIL
								</Select.options>
								<Select.options value='PRIMARIA'>
									PRIMARIA
								</Select.options>
								<Select.options value='SECUNDARIA'>
									SECUNDARIA
								</Select.options>
								<Select.options value='MEDIA SUPERIOR'>
									MEDIA SUPERIOR
								</Select.options>
								<Select.options value='SUPERIOR'>
									SUPERIOR
								</Select.options>
								<Select.options value='POST-UNIVERSITARIA'>
									POST-UNIVERSITARIA
								</Select.options>
							</Select>
						</div>
					</div>

					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>INE</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar OCR de 13 d??gitos'
								handlerChange={setIdentity}
								maxlength='13'
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
					<Select.ciudad></Select.ciudad>
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
						<label className='text-slate-600'>Direcci??n</label>
						<Input.textarea
							placeholder='Ingresar direcci??n'
							handlerChange={setAddress}
							value={address}></Input.textarea>
					</div>
				</div>
				<div className='flex w-full'>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Diagn??stico</label>
						<div className='flex h-full'>
							<Input.textarea
								className={"flex w-full"}
								placeholder='Ingresar diagn??stico'
								handlerChange={setDiagnostic}
								value={diagnostic}></Input.textarea>
						</div>
					</div>
					<div className='flex flex-col w-full m-1'>
						<label className='text-slate-600'>Tratamiento</label>
						<div className='flex'>
							<Input.textarea
								className={"flex rounded-lg border-1"}
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
							className={
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
							className={
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

export { PatientsForm };
