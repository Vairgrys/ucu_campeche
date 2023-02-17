import Button from "../../components/Buttons";
import {
	FaBed,
	FaFilePdf,
	FaPlus,
	FaUser,
	FaUserFriends,
} from "react-icons/fa";
import { InformacionPaciente } from "../../components/Forms/InformacionPaciente";
import { ParentsTable } from "../../components/Tables/ParentsTable";
import { StaysTable } from "../../components/Tables/StaysTable";

function Paciente() {
	return (
		<div className='p-6 w-screen h-screen flex flex-col flex-nowrap to-blue-300 from-green-500 bg-gradient-to-t dark:bg-slate-900 justify-start items-center'>
			<div className='w-full my-4 flex flex-row flex-nowrap'>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-2/6'>
					<h1 className='drop-shadow-lg mb-1 text-orange-500 uppercase flex items-center text-xl'>
						<FaUser className='mr-3 text-slate-500'></FaUser>
						Información del Paciente
					</h1>
					<InformacionPaciente></InformacionPaciente>
				</div>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-4/6'>
					<h1 className='drop-shadow-lg mb-1 text-red-600 uppercase flex items-center text-xl'>
						<FaFilePdf className='mr-3 text-slate-400'></FaFilePdf>
						Historial Servicios
					</h1>
				</div>
			</div>
			<div className='w-full my-4 flex flex-row flex-nowrap'>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-1/2'>
					<h1 className='drop-shadow-lg mb-1 text-indigo-600 uppercase flex items-center text-xl'>
						<FaBed className='mr-3 text-slate-500'></FaBed>
						<span className='mr-2'>Estancias</span>
						<Button className='px-1.5 hover:shadow-lg border-0 py-1.5 rounded-lg text-sm focus:ring-indigo-300 bg-indigo-500 hover:bg-indigo-600'>
							<FaPlus></FaPlus>
						</Button>
					</h1>
					<StaysTable></StaysTable>
				</div>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-4/5'>
					<h1 className='drop-shadow-lg mb-1 text-purple-500 uppercase flex items-center text-xl'>
						<FaUserFriends className='mr-3 text-slate-500'></FaUserFriends>
						<span className='mr-2'>Acompañantes</span>
						<Button className='px-1.5 hover:shadow-lg border-0 py-1.5 rounded-lg text-sm focus:ring-purple-300 bg-purple-500 hover:bg-purple-600'>
							<FaPlus></FaPlus>
						</Button>
					</h1>
					<ParentsTable></ParentsTable>
				</div>
			</div>
		</div>
	);
}

export { Paciente };
