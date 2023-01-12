import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Login from "./modules/Login";
import { BotonDark } from "./components/Buttons";
import { ComponenteFalso } from "./components/ComponenteFalso";
import { RecoilRoot } from "recoil";

function App () {

    return (
        <>
            <Login></Login>
            <div className="flex absolute bottom-2 right-0 mb-4 mr-4"><BotonDark></BotonDark></div>
            <ComponenteFalso>
            </ComponenteFalso>
        </>
    ) 
}



const container = document.getElementById("app");
const root = createRoot(container)
root.render(
<RecoilRoot>
    <App />
</RecoilRoot>
);





