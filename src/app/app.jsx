import React from "react";
import { createRoot } from "react-dom/client"
import MiBoton from "./components/Buttons";
import MiInput from "./components/Inputs";
import Login from "./modules/Login";



function App () {
    return (
        <>
            <div className="w-screen h-screen bg-slate-200  dark:bg-slate-800   flex flex-row justify-center items-center">
                <div className="w-[600px] h-[450px] bg-white  dark:bg-slate-600   shadow-lg p-4">
                    <Login></Login>
                </div> 
            </div> 
        </>
    ) 
}



const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);





