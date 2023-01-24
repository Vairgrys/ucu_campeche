import { create } from "zustand";
import axios from "axios";

const usePatientStore = create((set, get) => ({
	patients: [],
	getPatients: async (nombre_completo = "") => {
		await axios
			.post("https://api-ucu-campeche/pacientes.php", {
				task: "getPacientes",
				data: {
					nombre_completo: nombre_completo,
				},
			})
			.then((response) => set({ patients: response.data }));
	},
}));

export { usePatientStore };
