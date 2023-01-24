import Table from "../../components/Tables";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import { FaBox, FaBoxes, FaFilePdf, FaTrash, FaWeight } from "react-icons/fa";
import { useEffect, useState } from "react";

var identifier = 0;

function Despensa() {

	const [isValid, setIsValid] = useState(false);
	const [validMsg, setValidMsg] = useState("");

	const [product, setProduct] = useState("");
	const [weight, setWeight] = useState("");
	const [amount, setAmount] = useState("");
	const [listaDespensa, setListaDespensa] = useState([]);

	let number = 0;

	onKeyDownHandler = (e) => {
		if (e.keyCode === 13) {
			generarDatos(e);
			return;
		}
	};

	
	function generarDatos(e) {
		try {
			if (product === "")
				throw new Error("Por favor llene el campo producto *");
			if (weight === "")
				throw new Error("Por favor llene el campo peso *");
			if (amount === "")
				throw new Error("Por favor llene el campo cantidad *");

			identifier++;
			setIsValid(true);
			setListaDespensa([
				...listaDespensa,
				{ identifier, product, weight, amount },
			]);
		} catch (err) {
			console.log(err);
			setIsValid(false);
			setValidMsg(err.message);
		}

		var Despensa = new Object();
		Despensa.Producto = product;
		Despensa.Peso = weight;
		Despensa.Cantidad =	amount;

		console.log(Despensa);
	}

	function eliminarProducto(idEliminar) {
		let nuevaLista = listaDespensa.filter((filas) => {
			return filas.identifier != idEliminar;
		});

		setListaDespensa(nuevaLista);
	}

	return (
		<>
			<div className='w-screen h-screen flex relative to-orange-300 from-orange-500 bg-gradient-to-t dark:bg-slate-900 justify-center items-center'>
				<div className='w-[1000px] h-[800px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg'>
					<h1 className='text-3xl text-orange-400'>
						SERVICIO : DONACIÓN DE DESPENSA
					</h1>
					<h2 className='text-xl'>PACIENTE: "Nombre"</h2>
					<div
						onKeyDown={onKeyDownHandler}
						className='flex flex-row justify-center mt-6'>
						<div className='flex flex-col justify-start mx-2 w-full'>
							<label className='text-slate-600'>Producto</label>
							<Input.icon
								addCSS={{ input: "w-full" }}
								handlerChange={setProduct}
								value={product}>
								<FaBox></FaBox>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2 w-full'>
							<label className='text-slate-600'>
								Peso / Tamaño
							</label>
							<Input.icon
								addCSS={{ input: "w-full " }}
								handlerChange={setWeight}
								value={weight}>
								<FaWeight></FaWeight>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2 w-full'>
							<label className='text-slate-600'>Cantidad</label>
							<Input.icon
								addCSS={{ input: "w-full" }}
								handlerChange={setAmount}
								value={amount}>
								<FaBoxes></FaBoxes>
							</Input.icon>
						</div>
					</div>
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
								<Table.Th>#</Table.Th>
								<Table.Th>Producto</Table.Th>
								<Table.Th>Peso</Table.Th>
								<Table.Th>Cantidad</Table.Th>
								<Table.Th></Table.Th>
							</Table.Tr>
						</Table.Header>
						<Table.Body>
							{listaDespensa &&
								listaDespensa.map((fila) => {
									number++;
									return (
										<Table.Tr key={"fila" + number}>
											<Table.Td>{number}</Table.Td>
											<Table.Td>{fila.product}</Table.Td>
											<Table.Td>{fila.weight}</Table.Td>
											<Table.Td>{fila.amount}</Table.Td>
											<Table.Td>
												<Button
													handlerClick={eliminarProducto.bind(
														this,
														fila.identifier
													)}
													addCSS='bg-red-400 hover:bg-red-600 ring-red-300 px-2'
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

export { Despensa };
