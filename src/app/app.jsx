import React from "react";
import { createRoot } from "react-dom/client"
import MiBoton from "./components/Buttons";
import MiInput from "./components/Inputs";



function App () {
    return (
        <>
            <div className="w-screen h-screen bg-slate-200  dark:bg-slate-800   flex flex-row justify-center items-center">
                <div className="w-[600px] h-[450px] bg-white  dark:bg-slate-600   shadow-lg p-4">
                    <h1 className="">React esta funcionando <MiBoton text="Este es el texto que yo le quiero poner aqui"></MiBoton></h1>
                    <h1 className="">React esta No funcionando <MiBoton text="Este no es el que quiero"></MiBoton></h1>
                    <br />
                    <MiInput placeholder="Escribe tu usuario"></MiInput>
                </div> 
            </div> 
        </>
    ) 
}



const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);





