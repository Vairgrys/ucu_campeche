import { create } from "zustand";
import axios from "axios";

const useUsersStore = create((set, get) => ({
	users: [],
	saveUser: async (data, callback = () => {}) => {
		await axios
			.post("https://api.unacariciahumana.com/api/users", {
				task: "setUser",
				data: {
					...data,
				},
			})
			.then((response) => callback(response));
	},
	requestUsers: async (fullname = "") => {
		await axios
			.post("https://api.unacariciahumana.com/api/users", {
				task: "getUsers",
				data: {},
			})
			.then((response) => set({ users: response.data }));
	},
}));

export { useUsersStore };
