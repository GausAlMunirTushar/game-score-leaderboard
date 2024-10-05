import { AxiosV1 } from "./config";
import axios from "axios";
import Cookies from "js-cookie";
import { comma } from "postcss/lib/list";

// Authentication
export const loginUserApi = async (formData, redierectUser) => {
	try {
		const response = await AxiosV1.post("/auth/login", formData);
		const { access_token } = response.data;

		if (access_token) {
			Cookies.set("token", access_token);
			redierectUser();
		}
		return response;
	} catch (error) {
		throw error;
	}
};

//match schedule
export const fetchMatchScheduleApi = () => {};
``