import axios from "axios";

// axios call with token from local storage
export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: "https://how-to-2.herokuapp.com",
	});
};
