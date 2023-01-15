import MiInput from "../components/Inputs";
import {MiBoton} from "../components/Buttons";
import logo from "../../img/Enfermera.svg";
import { useEffect, useState } from "react";
import { isVisibleLogin } from "../store/atomModal";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Login () {
    const isVisible = useRecoilValue(isVisibleLogin) 


    return (
        <><div className={` ${(isVisible) ? ' ' : 'hidden'}  w-screen h-screen flex relative bg-slate-200 dark:bg-slate-800 justify-center items-center`}>
                <div className="w-[200px] h-[400px] bg-gradient-to-t from-gray-400 to-slate-600 dark:to-amber-300 rounded-l-lg shadow-lg flex flex-row justify-center items-center content-center">
                    <img className="" src={logo} alt=""></img>
                </div>
                <div className={` w-[600px] h-[400px] bg-gray-300 dark:bg-slate-600 dark:text-white rounded-r-lg shadow-lg p-4`}>
                    <div className="font-Barlow1 font-extrabold">
                        <h1 className="text-xl">INICIAR SESIÓN</h1>
                    <div className="relative my-3">
                    <hr />
                    </div>
                        <label htmlFor="input-group-1" className="block mb-2">Usuario</label>
                        <MiInput type="text" icono='user' id="input-group-1" placeholder="Escriba su nombre de usuario"></MiInput>
                        <label htmlFor="input-group-1" className="block mb-2">Contraseña</label>
                        <MiInput type="password" icono='pass' id="input-group-2" placeholder="Escriba su contraseña"></MiInput> 
                        <div className="flex mt-6 flex-row justify-end">
                            <MiBoton icono='check' text="Iniciar sesión"></MiBoton>
                            <MiBoton icono='invite' color='alternative' text="Entrar como invitado"></MiBoton>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Login;