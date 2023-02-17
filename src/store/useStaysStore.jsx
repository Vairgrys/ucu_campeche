import { create } from "zustand";
import axios from "axios";

const useStaysStore = create((set, get) => ({
	stays: [],
	saveStays: async (data, callback = () => {}) => {
		await axios
			.post("https://api.unacariciahumana.com/api/stays", {
				task: "setStay",
				data: {
					...data,
				},
			})
			.then((response) => callback(response));
	},
	requestStays: async (fecha_inicio = "") => {
		await axios
			.post("https://api.unacariciahumana.com/api/stays", {
				task: "getStays",
				data: {},
			})
			.then((response) => set({ stays: response.data }));
	},
}));

export { useStaysStore };
