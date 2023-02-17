import { useEffect } from "react";
import Table from "../Tables";
import Button from "../Buttons";
import { useStaysStore } from "../../store/useStaysStore";
import { FaTrash, FaPen } from "react-icons/fa";

const StaysList = () => {
	const [stayList, getStayList] = useStaysStore((state) => [
		state.stays,
		state.requestStays,
	]);
	var number = 0;

	useEffect(() => {
		getStayList();
	}, []);

	return (
		<>
			{stayList &&
				stayList.map((fila) => {
					number++;
					return (
						<Table.Tr key={"fila" + number}>
							<Table.Td>{fila.fecha_inicio}</Table.Td>
							<Table.Td>{fila.fkpaciente}</Table.Td>
							<Table.Td>{fila.fkacompanante}</Table.Td>
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

export default StaysList;
