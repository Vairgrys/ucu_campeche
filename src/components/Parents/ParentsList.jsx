import { useEffect } from "react";
import Table from "../Tables";
import Button from "../Buttons";
import { useParentsStore } from "../../store/useParentsStore";
import { FaTrash, FaPen } from "react-icons/fa";

const ParentsList = () => {
	const [parentList, getParentList] = useParentsStore((state) => [
		state.parents,
		state.requestParents,
	]);
	var number = 0;

	useEffect(() => {
		getParentList();
	}, []);

	return (
		<>
			{parentList &&
				parentList.map((fila) => {
					number++;
					return (
						<Table.Tr key={"fila" + number}>
							<Table.Td>
								{fila.nombre + " " + fila.apellido}
							</Table.Td>
							<Table.Td>{fila.edad}</Table.Td>
							<Table.Td>{fila.telefono}</Table.Td>
							<Table.Td className='flex flex-row flex-nowrap items-center justify-start bg-slate-100'>
								<Button className='px-2 py-2 bg-amber-500 hover:bg-amber-600 ring-amber-400'>
									<FaPen></FaPen>
								</Button>
								<Button className='px-2 py-2 bg-red-400 hover:bg-red-600 ring-red-300'>
									<FaTrash></FaTrash>
								</Button>
							</Table.Td>
						</Table.Tr>
					);
				})}
		</>
	);
};

export default ParentsList;
