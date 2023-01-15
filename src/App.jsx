import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Despensa } from "./pages/Services/Despensa";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route
					path='/servicios/despensa'
					element={<Despensa></Despensa>}></Route>
				<Route path='/*' element={<p>Pagina No Encontrada</p>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>
);
