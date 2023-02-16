import { create } from "zustand";
import axios from "axios";

const useParentsStore = create((set, get) => ({
	parents: [],
	saveParent: async (data, callback = () => {}) => {
		await axios
			.post("https://api.unacariciahumana.com/api/parents", {
				task: "setParent",
				data: {
					...data,
				},
			})
			.then((response) => callback(response));
	},
	requestParents: async (fullname = "") => {
		await axios
			.post("https://api.unacariciahumana.com/api/parents", {
				task: "getParents",
				data: {},
			})
			.then((response) => set({ parents: response.data }));
	},
}));

export { useParentsStore };
