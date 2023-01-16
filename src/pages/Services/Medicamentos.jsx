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
	const [code, setCode] = useState('');
	const [medicine, setMedicine] = useState('');
	const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
	const [listaMedicamentos, setListaMedicamentos] = useState([]);

	let number = 0;

    onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      generarDatos(e); return
    }
    };

	function generarDatos(e) {
        if (code === ''){
            alert('Ingresa Código');
        }else if (medicine === ''){
            alert('Ingresa Medicina');
        }else if (description === ''){
            alert('Ingresa Descripción');
        }else if (amount === ''){
            alert('Ingresa Cantidad');
        }else{
            identifier++;
            setListaMedicamentos([
                ...listaMedicamentos,
                {identifier, code, medicine, description, amount},
            ]);
        }
	}

	function eliminarProducto(idEliminar) {
		let nuevaLista = listaMedicamentos.filter((filas) => {
			return filas.identifier != idEliminar;
		});

		setListaMedicamentos(nuevaLista);
	}

	return (
		<>
			<div className='w-screen h-screen flex relative to-teal-300 from-green-500 bg-gradient-to-t dark:bg-slate-900 justify-center items-center'>
				<div className='w-[750px] h-[800px] flex flex-col item p-6 bg-slate-100 drop-shadow-lg rounded-lg'>
					<h1 className='text-3xl text-orange-400'>
						SERVICIO : DONACIÓN DE MEDICINA
					</h1>
					<h2 className='text-xl'>PACIENTE: "Nombre"</h2>
					<form onKeyDown={onKeyDownHandler} className='flex flex-row justify-center mt-6'>
                        <div className='flex flex-col justify-start mx-2'>
							<label className=''>Código</label>
							<Input.icon
								handlerChange={setCode}
								value={code}>
								<FaBarcode></FaBarcode>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className=''>Medicamento</label>
							<Input.icon
								handlerChange={setMedicine}
								value={medicine}>
								<FaMedkit></FaMedkit>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className=''>Descripción</label>
							<Input.icon
								handlerChange={setDescription}
								value={description}>
								<FaPencilAlt></FaPencilAlt>
							</Input.icon>
						</div>
						<div className='flex flex-col justify-start mx-2'>
							<label className=''>Cantidad</label>
							<Input.icon
								handlerChange={setAmount}
								value={amount}>
								<FaBoxes></FaBoxes>
							</Input.icon>
						</div>
					</form>
					<h4 className='col-span-3 text-sm text-slate-400 mb-5'>
						Presione Enter después de llenar los campos para agregar
					</h4>
					<Table
						addCSS={{
							container: "h-[700px] shadow-lg ",
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
											<Table.Td>{fila.description}</Table.Td>
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
						addCSS='flex order-last bg-red-400 hover:bg-red-600 ring-red-300'
						text='Generar'
                        >  
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
