"use client";
import { loginUserApi } from "@/api/api-end-points";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
	const [inputValues, setInputValues] = useState({
		email: "",
		password: "",
	});
	const router = useRouter();

	const redierectUser = () => {
		router.push("/");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await loginUserApi(inputValues, redierectUser);
		} catch (error) {
			console.error("Error submitting the form:", error.message);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-medium mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
							value={inputValues.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 font-medium mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
							value={inputValues.password}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
