import Button from "../../components/Buttons";
import {
	FaBed,
	FaFilePdf,
	FaPlus,
	FaUser,
	FaUserFriends,
} from "react-icons/fa";
import { PatientsInfoForm } from "../../components/Patients/PatientsInfoForm";
import { ParentsTable } from "../../components/Parents/ParentsTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { StaysTable } from "../../components/Stays/StaysTable";
import { ParentsForm } from "../../components/Parents/ParentsForm";
import { useModal } from "../../hooks/useModal";
import { AnimatePresence } from "framer-motion";
import { StaysForm } from "../../components/Stays/StaysForm";

function InformacionPaciente() {
	const [isOpenParentsModal, toggleParentsModal] = useModal();
	const [isOpenStaysModal, toggleStaysModal] = useModal();
	const params = useParams();

	useEffect(() => {
		console.log(params);
	}, []);

	return (
		<div className='p-6 w-screen h-screen flex flex-col flex-nowrap to-blue-300 from-green-500 bg-gradient-to-t dark:bg-slate-900 justify-start items-center'>
			<div className='w-full my-4 flex flex-row flex-nowrap'>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-2/5'>
					<h1 className='drop-shadow-lg mb-1 text-orange-500 uppercase flex items-center text-xl'>
						<FaUser className='mr-3 text-slate-500'></FaUser>
						Información del Paciente
					</h1>
					<PatientsInfoForm data={{}}></PatientsInfoForm>
				</div>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-3/5'>
					<h1 className='drop-shadow-lg mb-1 text-red-600 uppercase flex items-center text-xl'>
						<FaFilePdf className='mr-3 text-slate-400'></FaFilePdf>
						Historial Servicios
					</h1>
				</div>
			</div>
			<div className='w-full my-4 flex flex-row flex-nowrap'>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-3/6'>
					<h1 className='drop-shadow-lg mb-1 text-indigo-600 uppercase flex items-center text-xl'>
						<FaBed className='mr-3 text-slate-500'></FaBed>
						<span className='mr-2'>Estancias</span>
						<Button
							handlerClick={() => {
								toggleStaysModal(true);
							}}
							className='px-1.5 hover:shadow-lg border-0 py-1.5 rounded-lg text-sm focus:ring-indigo-300 bg-indigo-500 hover:bg-indigo-600'>
							<FaPlus></FaPlus>
						</Button>
					</h1>
					<StaysTable patient={params.patientId} /> 
					<AnimatePresence>
						{isOpenStaysModal && (
							<StaysForm
								key='parentsForm'
								dismiss={() => {
									toggleStaysModal(false);
								}}
							/>
						)}
					</AnimatePresence>
				</div>
				<div className='p-4 shadow-lg rounded-lg mx-6  bg-white w-3/5'>
					<h1 className='drop-shadow-lg mb-1 text-purple-500 uppercase flex items-center text-xl'>
						<FaUserFriends className='mr-3 text-slate-500'></FaUserFriends>
						<span className='mr-2'>Acompañantes</span>
						<Button
							handlerClick={() => {
								toggleParentsModal(true);
							}}
							className='px-1.5 hover:shadow-lg border-0 py-1.5 rounded-lg text-sm focus:ring-purple-300 bg-purple-500 hover:bg-purple-600'>
							<FaPlus></FaPlus>
						</Button>
					</h1>
					<ParentsTable patient={params.patientId} />
					<AnimatePresence>
						{isOpenParentsModal && (
							<ParentsForm
								key='parentsForm'
								dismiss={() => {
									toggleParentsModal(false);
								}}
							/>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export { InformacionPaciente };
