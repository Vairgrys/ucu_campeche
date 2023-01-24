import Table from "../../components/Tables";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import {
	FaBarcode,
	FaBox,
	FaBoxes,
	FaMedkit,
	FaFilePdf,
	FaTrash,
	FaPencilAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

var identifier = 0;

function Medicamentos() {
	const [code, setCode] = useState("");
	const [amount, setAmount] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [validMsg, setValidMsg] = useState("");
	const [medicine, setMedicine] = useState("");
	const [description, setDescription] = useState("");
	const [listaMedicamentos, setListaMedicamentos] = useState([]);

	let number = 0;

	onKeyDownHandler = (e) => {
		if (e.keyCode === 13) {
			generarMedicamentos(e);
			return;
		}
	};

	function generarMedicamentos(e) {
		try {
			if (code === "")
				throw new Error("Por favor llene el campo codigo *");
			if (medicine === "")
				throw new Error("Por favor llene el campo medicina *");
			if (description === "")
				throw new Error("Por favor llene el campo descripcion *");
			if (amount === "")
				throw new Error("Por favor llene el campo cantidad *");

			identifier++;
			setIsValid(true);
			setListaMedicamentos([
				...listaMedicamentos,
				{ identifier, code, medicine, description, amount },
			]);
		} catch (err) {
			console.log(err);
			setIsValid(false);
			setValidMsg(err.message);
		}

		var Medicamentos = new Object();
		Medicamentos.Código = code;
		Medicamentos.Medicina = medicine;
		Medicamentos.Descripción = description;
		Medicamentos.Cantidad = amount;

		console.log(Medicamentos);
	}

	function eliminarProducto(idEliminar) {
		let nuevaLista = listaMedicamentos.filter((filas) => {
			return filas.identifier != idEliminar;
		});

		setListaMedicamentos(nuevaLista);
	}

	return (
		<>
			<div className='w-screen h-screen flex relative to-green-600 from-green-400 bg-gradient-to-t dark:bg-slate-900 justify-center items-center'>
				<div className='w-[1000px] h-[800px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg'>
					<h1 className='text-3xl text-orange-400'>
						SERVICIO : DONACIÓN DE MEDICINA
					</h1>
					<h2 className='text-xl'>PACIENTE: "Nombre"</h2>
					<form
						onKeyDown={onKeyDownHandler}
						className='flex flex-row justify-center mt-6'>
						<div className='flex flex-col justify-start mx-2'>
							<label className='text-slate-600'>Código</label>
							<Input.icon
								handlerChange={setCode}
								addCSS={{
									input: "tracking-widest text-slate-700 font-bold",
								}}
								value={code}>
								<FaBarcode></FaBarcode>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className='text-slate-600'>
								Medicamento
							</label>
							<Input.icon
								handlerChange={setMedicine}
								value={medicine}>
								<FaMedkit></FaMedkit>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className='text-slate-600'>
								Descripción
							</label>
							<Input.icon
								handlerChange={setDescription}
								value={description}>
								<FaPencilAlt></FaPencilAlt>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className='text-slate-600'>Cantidad</label>
							<Input.icon
								handlerChange={setAmount}
								value={amount}>
								<FaBoxes></FaBoxes>
							</Input.icon>
						</div>
					</form>
					<div className='ml-2'>
						{!isValid && (
							<p className='text-red-500 italic font-bold'>
								{validMsg}
							</p>
						)}
						<h4 className='col-span-3 text-sm text-slate-400 mb-5'>
							Presione Enter después de llenar los campos para
							agregar
						</h4>
					</div>
					<Table
						addCSS={{
							container: "h-auto shadow-lg ",
							table: "h-full ",
						}}>
						<Table.Header>
							<Table.Tr>
								<Table.Th>Código</Table.Th>
								<Table.Th>Medicamento</Table.Th>
								<Table.Th>Descripción</Table.Th>
								<Table.Th>Cantidad</Table.Th>
								<Table.Th></Table.Th>
							</Table.Tr>
						</Table.Header>
						<Table.Body>
							{listaMedicamentos &&
								listaMedicamentos.map((fila) => {
									number++;
									return (
										<Table.Tr key={"fila" + number}>
											<Table.Td>{fila.code}</Table.Td>
											<Table.Td>{fila.medicine}</Table.Td>
											<Table.Td>
												{fila.description}
											</Table.Td>
											<Table.Td>{fila.amount}</Table.Td>
											<Table.Td>
												<Button
													handlerClick={eliminarProducto.bind(
														this,
														fila.identifier
													)}
													addCSS='bg-red-500 hover:bg-red-600 ring-red-300 px-2'
													text='Borrar'>
													<FaTrash></FaTrash>
												</Button>
											</Table.Td>
										</Table.Tr>
									);
								})}
						</Table.Body>
					</Table>
					<div className='flex justify-end mt-6 right-2'>
						<Button
							addCSS='flex order-last bg-red-500 hover:bg-red-600 ring-red-300'
							text='Generar'>
							<FaFilePdf></FaFilePdf>
							&nbsp;&nbsp; Generar PDF
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export { Medicamentos };
