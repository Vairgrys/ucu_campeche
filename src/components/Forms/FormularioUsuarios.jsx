import { useState } from "react";
import { motion } from "framer-motion";
import { variant } from "../../utils/variant";
import { FaPlus, FaTimes, FaUndo } from "react-icons/fa";
import Button from "../Buttons";
import Input from "../Inputs";
import Select from "../Selects";

function FormularioUsuarios(props) {
	const { isOpen = false, toggleIsOpen = () => {} } = props;
	const [isValid, setIsValid] = useState(false);
	const [validMsg, setValidMsg] = useState("");

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [lastname, setLastName] = useState("");
	const [group, setGroup] = useState("");
	const [email, setEmail] = useState("");
	const [department, setDepartment] = useState("");

	function validarInputsUsuarios(e) {
		try {
			if (user === "")
				throw new Error("Por favor ingrese el campo usuario");
			if (password === "")
				throw new Error("Por favor ingrese el campo contraseña");
			if (name === "")
				throw new Error("Por favor ingrese el campo nombre");
			if (lastname === "")
				throw new Error("Por favor ingrese el campo apellido");
			if (group === "") throw new Error("Por favor ingrese el campo rol");
			if (email === "")
				throw new Error("Por favor ingrese el campo correo");
			if (department === "")
				throw new Error("Por favor ingrese el campo departamento");

			setIsValid(true);
		} catch (err) {
			console.log(err);
			setIsValid(false);
			setValidMsg(err.message);
		}
		var usuario = {
			usuario: user,
			contrasena: password,
			nombre: name,
			apellido: lastname,
			rol: group,
			correo: email,
			departamento: department,
		};

		console.log(usuario);
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
				animate={variant.modalPageInUsuarios}
				exit={variant.modalPageOutUsuarios}
				onClick={(e) => e.stopPropagation()}
				className=' px-10 py-6 w-[650px] h-auto flex flex-col absolute bg-slate-50 shadow-xl rounded-lg'>
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
						AGREGAR USUARIO
					</h1>
					<div className='flex ml-2 items-center w-full'>
						{!isValid && (
							<p className='text-red-500 font-bold'>{validMsg}</p>
						)}
					</div>
				</div>
				<div className='flex w-full mb-2'>
					<div className='m-1 w-full'>
						<label>Usuario</label>
						<div className='flex h-8'>
							<Input
								value={user}
								handlerChange={setUser}
								placeholder='Ingresa el usuario'></Input>
						</div>
					</div>
					<div className='m-1 w-full'>
						<label>Contraseña</label>
						<div className='flex h-8'>
							<Input
								value={password}
								handlerChange={setPassword}
								placeholder='Ingresar la contraseña'></Input>
						</div>
					</div>
				</div>

				<div className='flex w-full mb-2'>
					<div className='m-1 w-full'>
						<label>Nombre(s)</label>
						<div className='flex h-8'>
							<Input
								value={name}
								handlerChange={setName}
								placeholder='Ingresar nombre(s)'></Input>
						</div>
					</div>
					<div className='m-1 w-full'>
						<label>Apellido(s)</label>
						<div className='flex h-8'>
							<Input
								value={lastname}
								handlerChange={setLastName}
								placeholder='Ingresar apellido(s)'></Input>
						</div>
					</div>
				</div>

				<div className='flex w-full mb-2'>
					<div className='m-1 w-full'>
						<label>Correo</label>
						<div className='flex h-8'>
							<Input
								value={email}
								handlerChange={setEmail}
								placeholder='Ingresar email'></Input>
						</div>
					</div>
					<div className='m-1 w-full'>
						<label>Departamento</label>
						<div className='flex h-8'>
							<Input
								value={department}
								handlerChange={setDepartment}
								placeholder='Ingresar departamento'></Input>
						</div>
					</div>
				</div>

				<div className='flex w-full m-1'>
					<div className='w-full m-1'>
						<label>Rol</label>
						<div className='flex h-8'>
							<Select
								value={group}
								handlerChange={setGroup}
								className={
									"p-0 pl-2 border-2 border-slate-200"
								}>
								<Select.options defaultValue={true}>
									Selecciona el rol del usuario
								</Select.options>
								<Select.options value='3'>
									ADMINISTRADOR
								</Select.options>
								<Select.options value='2'>
									OPERADOR
								</Select.options>
								<Select.options value='1'>
									USUARIO
								</Select.options>
							</Select>
						</div>
					</div>

					<div className='w-full m-1'></div>
				</div>

				<br className='m-4' />
				<div className='flex h-1/4 justify-center items-center w-full'>
					<div className='flex'>
						<Button
							handlerClick={validarInputsUsuarios}
							className={
								"bg-red-600 hover:bg-red-400 focus:ring-red-300"
							}>
							<FaPlus></FaPlus>&nbsp;&nbsp; Finalizar
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

export { FormularioUsuarios };
