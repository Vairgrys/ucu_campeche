import { motion } from "framer-motion";
import Input from "../Inputs";

function PatientsInfoForm() {
	return (
		<motion.div>
			<div className='flex w-full mb-2'>
				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Nombre(s)</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar nombre(s)'></Input>
					</div>
				</div>
				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Apellidos</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar apellidos'></Input>
					</div>
				</div>
			</div>
			<div className='flex w-full mb-2'>
				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>
						Fecha de Nacimiento
					</label>
					<div className='flex h-8'>
						<Input disabled={true}></Input>
					</div>
				</div>

				<div className='flex flex-col w-1/3 m-1'>
					<label className='text-slate-600 text-sm'>Edad</label>
					<div className='flex h-8'>
						<Input disabled={true}></Input>
					</div>
				</div>
				<div className='flex flex-col w-4/5 m-1'>
					<label className='text-slate-600 text-sm'>Sexo</label>
					<div className='flex h-8 justify-center'>
						<Input disabled={true} placeholder='Sexo'></Input>
					</div>
				</div>
			</div>
			<div className='flex mb-2'>
				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Teléfono</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar teléfono'></Input>
					</div>
				</div>

				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Correo</label>
					<div className='flex h-8'>
						<Input disabled={true} type='email'></Input>
					</div>
				</div>
			</div>

			<div className='flex mb-2'>
				<div className='flex flex-col w-4/5 m-1'>
					<label className='text-slate-600 text-sm'>
						Escolaridad
					</label>
					<div className='flex h-8 justify-center'>
						<Input
							disabled={true}
							placeholder='Escolaridad'></Input>
					</div>
				</div>

				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>INE</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar OCR de 13 dígitos'
							maxlength='13'></Input>
					</div>
				</div>
			</div>

			<div className='flex w-full mb-2'>
				<div className='flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Estado</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar estado'></Input>
					</div>
				</div>
				<div className='flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Municipio</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar ciudad'></Input>
					</div>
				</div>
				<div className='flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>Localidad</label>
					<div className='flex h-8'>
						<Input
							disabled={true}
							placeholder='Ingresar localidad'></Input>
					</div>
				</div>
			</div>
			<div className='flex h-auto mb-2 m-1'>
				<div className='flex flex-col w-full'>
					<label className='text-slate-600 text-sm'>Dirección</label>
					<Input.textarea
						disabled={true}
						placeholder='Ingresar dirección'></Input.textarea>
				</div>
			</div>
			<div className='flex w-full'>
				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>
						Diagnóstico
					</label>
					<div className='flex h-full'>
						<Input
							disabled={true}
							placeholder='Ingresar diagnóstico'></Input>
					</div>
				</div>
				<div className='flex flex-col w-full m-1'>
					<label className='text-slate-600 text-sm'>
						Tratamiento
					</label>
					<div className='flex'>
						<Input
							disabled={true}
							placeholder='Ingresar tratamiento'></Input>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export { PatientsInfoForm };
