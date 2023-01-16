import Table from "../../components/Tables";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import {
	FaBox,
	FaBoxes,
	FaStar,
	FaStore,
	FaTrash,
	FaWeight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

var identifier = 0;

function Despensa() {
	const [product, setProduct] = useState("");
	const [weight, setWeight] = useState("");
	const [amount, setAmount] = useState("");
	const [listaDespensa, setListaDespensa] = useState([]);

	let number = 0;

	function generarDatos(e) {
		identifier++;
		setListaDespensa([
			...listaDespensa,
			{ identifier, product, weight, amount },
		]);
		console.log(identifier);
	}

	// Function para eliminar de la lista el valor particular

	function eliminarProducto(idEliminar) {
		let nuevaLista = listaDespensa.filter((filas) => {
			return filas.identifier != idEliminar;
		});

		setListaDespensa(nuevaLista);
	}

	return (
		<>
			<div className='w-screen h-screen flex relative to-teal-300 from-green-500 bg-gradient-to-t dark:bg-slate-900 justify-center items-center'>
				<div className='w-[750px] h-[800px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg'>
					<h1 className='text-3xl text-orange-400'>
						SERVICIO : DONACIÓN DE DESPENSA
					</h1>
					<h2 className='text-xl'>PACIENTE: "Nombre"</h2>
					<div className='flex flex-row justify-center mt-6'>
						<div className='flex flex-col justify-start mx-2'>
							<label className=''>Producto</label>
							<Input.icon
								icono=''
								handlerChange={setProduct}
								value={product}>
								<FaBox></FaBox>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className=''>Peso / Tamaño</label>
							<Input.icon
								icono=''
								handlerChange={setWeight}
								value={weight}>
								<FaWeight></FaWeight>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className=''>Cantidad</label>
							<Input.icon
								icono=''
								handlerChange={setAmount}
								value={amount}>
								<FaBoxes></FaBoxes>
							</Input.icon>
						</div>
					</div>
					<h4 className='col-span-3 text-sm text-slate-400'>
						Presione Enter después de llenar los campos para agregar
					</h4>
					<Table
						addCSS={{
							container: "h-[700px] shadow-lg ",
							table: "h-full ",
						}}>
						<Table.Header>
							<Table.Tr>
								<Table.Th>#</Table.Th>
								<Table.Th>id</Table.Th>
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
											<Table.Td>
												{fila.identifier}
											</Table.Td>
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
					<hr className='mt-6' />
					<Button
						handlerClick={generarDatos}
						addCSS='bg-red-400 hover:bg-red-600 ring-red-300'
						text='Generar'>
						<FaStar></FaStar>
						&nbsp;&nbsp; Generar PDF
					</Button>
				</div>
			</div>
		</>
	);
}

export { Despensa };
