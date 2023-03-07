import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Login } from "./pages/Login";
import { Pacientes } from "./pages/Pacientes";
import { Despensa } from "./pages/Services/Despensa";
import { Medicamentos } from "./pages/Services/Medicamentos";
import { InformacionPaciente } from "./pages/Services/InformacionPaciente";
import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<BrowserRouter>
			<AnimatePresence mode='wait'>
				<Routes>
					<Route path='/login' element={<Login></Login>}></Route>
					<Route
						path='/pacientes'
						element={<Pacientes></Pacientes>}></Route>
					<Route
						path='/servicios/despensa/:patientId'
						element={<Despensa></Despensa>}></Route>
					<Route
						path='/pacientes/informacion/:patientId'
						element={
							<InformacionPaciente></InformacionPaciente>
						}></Route>
					<Route
						path='/servicios/medicamentos/:patientId'
						element={<Medicamentos></Medicamentos>}></Route>
					<Route
						path='/*'
						element={<Navigate to='/pacientes' />}></Route>
				</Routes>
			</AnimatePresence>
		</BrowserRouter>
	);
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
