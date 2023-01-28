import { create } from "zustand";
import axios from "axios";

const usePatientStore = create((set, get) => ({
	patients: [],
	savePatient: async (data, callback = () => {}) => {
		await axios
			.post("https://api.unacariciahumana.com/api/patients", {
				task: "setPatient",
				data: {
					...data,
				},
			})
			.then((response) => callback(response));
	},
	requestPatients: async (fullname = "") => {
		await axios
			.post("https://api.unacariciahumana.com/api/patients", {
				task: "getPatients",
				data: {
					fullname: fullname,
				},
			})
			.then((response) => set({ patients: response.data }));
	},
}));

export { usePatientStore };
