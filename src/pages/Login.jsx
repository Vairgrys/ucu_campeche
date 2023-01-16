import Input from "../components/Inputs";
import Button from "../components/Buttons";
import logo from "../assets/img/Enfermera.svg";
import { FaUser, FaLock } from "react-icons/fa";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [listaUsuarios, setListaUsuarios] = useState([]);

	function iniciarSesion(e) {
		setListaUsuarios([...listaUsuarios, { username, password }]);
	}

	return (
		<>
			<div
				className={`w-screen h-screen flex relative bg-blue-500 dark:bg-slate-900 justify-center items-center`}>
				<motion.div
					initial={{ opacity: 0, y: -500 }}
					whileInView={{
						y: 0,
						opacity: 1,
						transition: {
							duration: 2,
						},
					}}
					className='flex flex-row w-[750px] h-[400px]  shadow-lg rounded-lg overflow-hidden'>
					<div className='w-[250px] bg-gradient-to-t to-teal-300 from-green-300 dark:to-amber-300  flex flex-row justify-center items-center'>
						<img className='' src={logo} alt=''></img>
					</div>
					<div
						className={` w-[500px] bg-slate-50 dark:bg-slate-800 dark:text-white p-4`}>
						<div className='font-extrabold'>
							<h1 className='text-xl'>INICIAR SESIÓN</h1>
							<div className='relative my-3'>
								<hr />
							</div>
							<label
								htmlFor='input-group-1'
								className='block mb-2'>
								Usuario
							</label>
							<Input.icon
								handlerChange={setUsername}
								value={username}
								type='text'
								id='input-group-1'
								placeholder='Escriba su nombre de usuario'>
								<FaUser></FaUser>
							</Input.icon>
							<label
								htmlFor='input-group-1'
								className='block mb-2'>
								Contraseña
							</label>
							<Input.icon
								handlerChange={setPassword}
								value={password}
								type='password'
								id='input-group-2'
								placeholder='Escriba su contraseña'>
								<FaLock></FaLock>
							</Input.icon>
							<div className='flex mt-6 flex-row justify-end'>
								<Button
									handlerClick={iniciarSesion}
									icono='check'
									text='Iniciar sesión'></Button>
								<Button
									icono='invite'
									color='alternative'
									text='Entrar como invitado'></Button>
							</div>
						</div>
						<hr className='mt-6' />
						<div>
							{listaUsuarios &&
								listaUsuarios.map((fila) => {
									return (
										<div>
											{fila.username}
											<span className='ml-4 text-red'>
												{fila.password}
											</span>
										</div>
									);
								})}
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export { Login };
