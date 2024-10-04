"use client";
import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";

const DataTable = ({ data }) => {
	const [filterInput, setFilterInput] = useState("");

	// Define table columns
	const columns = useMemo(
		() => [
			{
				Header: "Session Rank",
				accessor: "rank",
			},
			{
				Header: "Game Rank", // This header will display the game rank
				accessor: "gamerank", // Make sure this accessor matches the property in your data
			},
			{
				Header: "First Name",
				accessor: "firstName",
			},
			{
				Header: "Last Name",
				accessor: "lastName",
			},
			{
				Header: "Position",
				accessor: "position",
			},
			{
				Header: "Height",
				accessor: "height",
			},
			{
				Header: "Weight",
				accessor: "weight",
			},
			{
				Header: "Age",
				accessor: "age",
			},
			{
				Header: "Experience",
				accessor: "experience",
			},
			{
				Header: "College",
				accessor: "college",
			},
		],
		[]
	);

	// Use react-table hooks for handling sorting, filtering, etc.
	const tableInstance = useTable(
		{ columns, data },
		useGlobalFilter,
		useSortBy
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		setGlobalFilter,
	} = tableInstance;

	// Search filter handler
	const handleFilterChange = (e) => {
		const value = e.target.value || "";
		setGlobalFilter(value);
		setFilterInput(value);
	};

	return (
		<div className="">
			{/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Search..."
        className="mb-4 p-2 border border-gray-300 rounded"
      /> */}
			<table
				{...getTableProps()}
				className="min-w-full divide-y divide-gray-200 table-auto"
			>
				<thead className="bg-red-950 mb-2">
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
									className="px-6 py-4 text-white text-left text-xs font-medium uppercase tracking-wider"
								>
									{column.render("Header")}
									<span style={{ color: "#3490dc" }}>
										{column.isSorted
											? column.isSortedDesc
												? " 🔽"
												: " 🔼"
											: ""}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody
					{...getTableBodyProps()}
					className="bg-white divide-y divide-gray-200"
				>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td
										{...cell.getCellProps()}
										className="px-6 py-6 whitespace-nowrap"
									>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
