import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { variant } from "../../utils/variant";
import { useEdad } from "../../hooks/useEdad";
import { FaPlus, FaTimes, FaUndo } from "react-icons/fa";
import Button from "../Buttons";
import Input from "../Inputs";
import Select from "../Selects";
import moment from "moment";

function FormularioAcompañantes(props) {
	const { isOpen = false, toggleIsOpen = () => {} } = props;

	const [isValid, setIsValid] = useState(false);
	const [validMsg, setValidMsg] = useState("");

	const [nameAcom, setNameAcom] = useState("");
	const [lastnameAcom, setLastNameAcom] = useState("");
	const [birthdayAcom, setBirthdayAcom] = useState("");
	const [fBirthdayA, setFBirthdayA] = useState("");
	const [ageAcom, updateAgeAcom] = useEdad();
	const [scholarshipAcom, setScholarShipAcom] = useState("");
	const [sexAcom, setSexAcom] = useState("");
	const [identityA, setIdentityA] = useState("");
	const [phoneAcom, setPhoneAcom] = useState("");
	const [fPhoneA, setFPhoneA] = useState("");
	const [relationshipAcom, setRelationshipAcom] = useState("");

	useEffect(() => {
		updateAgeAcom(birthdayAcom);
		var momentDateA = moment(birthdayAcom);
		setFBirthdayA(momentDateA.format("YYYY-MM-DD"));
		setFPhoneA(phoneAcom.replace("+", ""));
	}, [birthdayAcom, phoneAcom]);

	function validarInputsAcompañantes(e) {
		try {
			if (nameAcom === "")
				throw new Error("Por favor llene el campo nombre");
			if (lastnameAcom === "")
				throw new Error("Por favor llene el campo apellido");
			if (birthdayAcom === "" || birthdayAcom === "invalid date")
				throw new Error("Por favor llene el campo fecha de nacimiento");
			if (scholarshipAcom === "")
				throw new Error("Por favor llene el campo escolaridad");
			if (sexAcom === "")
				throw new Error("Por favor llene el campo sexo");
			if (phoneAcom === "")
				throw new Error("Por favor llene el campo teléfono");
			if (relationshipAcom === "")
				throw new Error("Por favor llene el campo parentesco");

			setIsValid(true);
		} catch (err) {
			console.log(err);
			setIsValid(false);
			setValidMsg(err.message);
		}
		var Acompanante = {
			nombre: nameAcom,
			apellido: lastnameAcom,
			edad: ageAcom,
			fechaNacimiento: fBirthdayA,
			telefono: fPhoneA,
			escolaridad: scholarshipAcom,
			parentesco: relationshipAcom,
			sexo: sexAcom,
			ine: identityA,
		};

		console.log(Acompanante);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={variant.modalIn}
			exit={variant.modalOut}
			className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-30 bg-slate-400 bg-opacity-30 '>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={variant.modalPageInAcompañantes}
				exit={variant.modalPageOutAcompañantes}
				onClick={(e) => e.stopPropagation()}
				className=' px-10 py-6 w-[650px] h-auto flex flex-col absolute bg-slate-50 shadow-xl rounded-lg'>
				<Button
					handlerClick={(e) => {
						dismissMenu(e);
					}}
					addCSS={
						"absolute right-2 top-2 p-2 border-0 hover:border-0 hover:bg-slate-50 hover:text-red-400 text-slate-400 bg-slate-50 hover:focus:ring-0"
					}>
					<FaTimes></FaTimes>
				</Button>
				<div className='flex mb-2 w-full'>
					<h1 className='text-orange-500 flex flex-row items-center font-medium text-2xl'>
						REGISTRAR ACOMPAÑANTE(S)
					</h1>
				</div>
				<div className='flex ml-2 items-center w-full'>
					{!isValid && (
						<p className='text-red-500 font-bold'>{validMsg}</p>
					)}
				</div>

				<div className='flex w-full'>
					<div className='m-1 w-full'>
						<label>Nombre(s)</label>
						<div className='flex h-8'>
							<Input
								value={nameAcom}
								handlerChange={setNameAcom}
								placeholder='Ingresa nombre(s)'></Input>
						</div>
					</div>
					<div className='m-1 w-full'>
						<label>Apellido(s)</label>
						<div className='flex h-8'>
							<Input
								value={lastnameAcom}
								handlerChange={setLastNameAcom}
								placeholder='Ingresa apellido(s)'></Input>
						</div>
					</div>
				</div>

				<div className='flex w-full mb-2'>
					<div className='w-full m-1'>
						<label>Fecha de Nacimiento</label>
						<Input.datepicker
							value={birthdayAcom}
							setBirthday={setBirthdayAcom}></Input.datepicker>
					</div>
					<div className='m-1'>
						<label>Edad</label>
						<div className='flex h-8'>
							<Input
								value={ageAcom + " años"}
								disabled={true}
								placeholder='Edad'></Input>
						</div>
					</div>
				</div>

				<div className='flex w-full h-full mb-2'>
					<div className='w-full m-1'>
						<label>Escolaridad</label>
						<div className='flex h-8'>
							<Select
								value={scholarshipAcom}
								handlerChange={setScholarShipAcom}
								addCSS={"p-0 pl-2 border-2 border-slate-200"}>
								<Select.options
									defaultValue={true}
									addCSS={"text-slate-300"}>
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
					<div className='w-full m-1'>
						<label>Sexo</label>
						<div className='flex h-8'>
							<Select
								value={sexAcom}
								handlerChange={setSexAcom}
								addCSS={"p-0 pl-2 border-2 border-slate-200"}>
								<Select.options
									defaultValue={true}
									addCSS={"text-slate-300"}>
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

				<div className='flex w-full mb-2'>
					<div className='w-full m-1'>
						<label>Teléfono</label>
						<div className='flex h-8'>
							<Input.phone
								value={phoneAcom}
								handlerChange={setPhoneAcom}
								placeholder='Ingresa teléfono'></Input.phone>
						</div>
					</div>
					<div className='w-full m-1'>
						<label>Parentesco</label>
						<div className='flex h-8'>
							<Input
								value={relationshipAcom}
								handlerChange={setRelationshipAcom}
								placeholder='Ingresa parentesco'></Input>
						</div>
					</div>
				</div>
				<div className='w-full flex'>
					<div className='flex flex-col w-1/2 m-1 mb-2'>
						<label className='text-slate-600'>INE</label>
						<div className='flex h-8'>
							<Input
								placeholder='Ingresar OCR de 13 dígitos'
								handlerChange={setIdentityA}
								maxlength='13'
								value={identityA}></Input>
						</div>
					</div>
					<div className='w-1/2 flex'> </div>
				</div>

				<br className='m-4' />
				<div className='flex h-1/4 justify-center items-center w-full'>
					<div className='flex'>
						<Button
							handlerClick={validarInputsAcompañantes}
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

export { FormularioAcompañantes };
