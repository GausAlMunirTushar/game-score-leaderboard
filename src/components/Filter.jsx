import { useState } from "react";

export default function Filter({ onFilterChange }) {
	const [filters, setFilters] = useState({ position: "", age: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFilters({ ...filters, [name]: value });
		onFilterChange({ ...filters, [name]: value });
	};

	return (
		<div className="mb-6">
			<select
				name="position"
				onChange={handleChange}
				className="p-2 border border-gray-300 rounded mr-4"
			>
				<option value="">All Positions</option>
				<option value="T">Tackle</option>
				<option value="DE">Defensive End</option>
			</select>
			<select
				name="age"
				onChange={handleChange}
				className="p-2 border border-gray-300 rounded"
			>
				<option value="">All Ages</option>
				<option value="under-30">Under 30</option>
				<option value="30-plus">30 and Above</option>
			</select>
		</div>
	);
}
