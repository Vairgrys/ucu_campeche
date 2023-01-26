import { useState } from "react";
import { motion } from "framer-motion";
import { variant } from "../../utils/variant";
import { FaPlus, FaTimes, FaUndo } from "react-icons/fa";
import Button from "../Buttons";
import Input from "../Inputs";

function FormularioEstancias(props) {
	const { isOpen = false, toggleIsOpen = () => {} } = props;
	const [isValid, setIsValid] = useState(false);
	const [validMsg, setValidMsg] = useState("");

	const [fechaTermino, setFechaTermino] = useState("");
	const [horaTermino, setHoraTermino] = useState("");

	function validarInputsEstancia(e) {
		try {
			if (fechaTermino === "")
				throw new Error("Por favor seleccione la fecha de termino");
			if (horaTermino === "")
				throw new Error("Por favor seleccione la hora de termino");

			setIsValid(true);
		} catch (err) {
			console.log(err);
			setIsValid(false);
			setValidMsg(err.message);
		}
	}

	var estancia = {
		fechaTermino: fechaTermino,
		horaTermino: horaTermino,
	};

	console.log(estancia);

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
				animate={variant.modalPageInEstancias}
				exit={variant.modalPageOutEstancias}
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
				<div className='flex mb-2 '>
					<h1 className='text-orange-500 flex flex-row items-center font-medium text-2xl w-full'>
						INICIAR ESTANCIA
					</h1>
					<div className='flex ml-2 items-center w-full'>
						{!isValid && (
							<p className='text-red-500 font-bold'>{validMsg}</p>
						)}
					</div>
				</div>
				<div className='flex w-full'>
					<div className='w-full'>
						<label>Fecha de Termino</label>
						<Input.datepicker
							value={fechaTermino}
							setBirthday={setFechaTermino}></Input.datepicker>
						<hr className='mt-6 w-1/2' />
						<h4 className='pt-2 col-span-3 text-sm text-slate-400 mb-5'>
							Año/Mes/Día
						</h4>
					</div>
					<div className='pl-2'>
						<label>Hora de Termino</label>
						<div className='flex w-full'>
							<Input.time
								value={horaTermino}
								handlerChange={setHoraTermino}></Input.time>
						</div>
						<hr className='mt-6 w-1/2' />
						<h4 className='pt-2 col-span-3 text-sm text-slate-400 mb-5'>
							Hora/Minutos
						</h4>
					</div>
				</div>
				<br className='m-4' />
				<div className='flex h-1/4 justify-center items-center w-full'>
					<div className='flex'>
						<Button
							handlerClick={validarInputsEstancia}
							addCSS={
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

export { FormularioEstancias };
