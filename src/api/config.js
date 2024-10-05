import Cookies from "js-cookie";
import axios from "axios";

export const API_URL = process.env.API_URL;

// Axios Global Config
export const AxiosV1 = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		accept: "application/json",
	},
});

// Axios Interceptors
AxiosV1.interceptors.request.use((config) => {
	const token = Cookies.get("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default AxiosV1;
