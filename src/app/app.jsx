import React from "react";
import { createRoot } from "react-dom/client";
import Login from "./modules/Login";
import logo from ".././img/Enfermera.svg";
import { BotonDark } from "./components/Buttons";

function App () {

    return (
        <>
            <div className="w-screen h-screen flex relative bg-slate-200 dark:bg-slate-800 justify-center items-center">
            <div className="w-[200px] h-[400px] flex flex-col items-center bg-gradient-to-t from-gray-400 to-slate-600 dark:to-amber-300 rounded-l-lg shadow-lg flex flex-row justify-center items-center content-center">
                <img className="" src={logo} alt=""></img>
            </div>
                <div className="w-[600px] h-[400px] bg-gray-100 dark:bg-slate-600 dark:text-white rounded-r-lg shadow-lg p-4">
                    <Login></Login>
                </div> 
             <div className="flex absolute top-2 right-0 mb-4 mr-4"><BotonDark></BotonDark></div>
            </div> 
        </>
    ) 
}



const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);





