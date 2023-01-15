import Table from "../../components/Tables";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import { useState } from "react";

function Despensa() {
	
	const [number, setNumber] = useState(1);
	const [product, setProduct] = useState("");
	const [weight, setWeight] = useState("");
	const [amount, setAmount] = useState("");
	const [listaDespensa, setListaDespensa] = useState([]);

	function generarDatos(e) {
		setListaDespensa([...listaDespensa, { number, product, weight, amount }]);
		setNumber(number + 1)
	}

	return (
		<>
		<div className='w-screen h-screen flex relative bg-teal-100 dark:bg-slate-900 justify-center items-center'>
		<div className="w-[750px] h-[600px] flex flex-col item p-4 bg-slate-50">
			<h1 className="text-orange-400">SERVICIO : DONACIÓN DE DESPENSA</h1>
			<h2>PACIENTE: "Nombre"</h2>
			<div className="grid grid-rows-2 grid-cols-3 grid-flow-col p-4">
			<label className="">Producto</label>
			<Input.icon
				icono = ''
				handlerChange={setProduct}
				value={product}>
			</Input.icon>
			<label className="">Peso / Tamaño</label>
			<Input.icon
				icono = ''
				handlerChange={setWeight}
				value={weight}>
			</Input.icon>
			<label className="">Cantidad</label>
			<Input.icon
				icono = ''
				handlerChange={setAmount}
				value={amount}>
			</Input.icon>
			</div>
			<h4 className="col-span-3 text-sm text-slate-400">Presione Enter después de llenar los campos para agregar</h4>	
			<Table contenido=
			{listaDespensa && listaDespensa.map((fila) => {
				return (
            	<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {fila.number}
                </th>
                <td className="px-6 py-4">
                    {fila.product}
                </td>
                <td className="px-6 py-4">
                    {fila.weight}
                </td>
                <td className="px-6 py-4">
                     {fila.amount}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">TRASH</a>
                </td>
            </tr>
        		);
            })}
			></Table>
			<Button handlerClick={generarDatos} className="grid col-span-1" color='save' text='Generar'></Button>
		</div>
		</div>
		</>

	);
}

export { Despensa };
