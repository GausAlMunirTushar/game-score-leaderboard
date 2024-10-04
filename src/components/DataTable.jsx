"use client";
import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";

const DataTable = ({ data }) => {
	const [filterInput, setFilterInput] = useState("");
	const [showAllRows, setShowAllRows] = useState(false); // State to toggle showing all data

	// Define table columns
	const columns = useMemo(
		() => [
			{
				Header: "Session Rank",
				accessor: "rank",
			},
			{
				Header: "Game Rank",
				accessor: "gamerank",
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

	// Limit the displayed rows to 10 initially, or show all if toggled
	const displayedRows = showAllRows ? rows : rows.slice(0, 10);

	// Search filter handler
	const handleFilterChange = (e) => {
		const value = e.target.value || "";
		setGlobalFilter(value);
		setFilterInput(value);
		setShowAllRows(true); // Show all rows when filtering
	};

	return (
		<div className="">
			{/* Table */}
			<table
				{...getTableProps()}
				className="min-w-full divide-y divide-gray-200 table-auto"
			>
				<thead className="bg-red-950 mb-2">
					{headerGroups.map((headerGroup) => (
						<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									key={column.id} // Add key prop here
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
					{displayedRows.map((row) => {
						prepareRow(row);
						return (
							<tr key={row.id} {...row.getRowProps()}> {/* Add key prop here */}
								{row.cells.map((cell) => (
									<td
										key={cell.column.id} // Add key prop here
										{...cell.getCellProps()}
										className={`px-8 text-center  py-6 whitespace-nowrap ${
											cell.column.id === "rank"
												? "bg-gray-800 text-xl font-bold text-secondary"
												: ""
										}`}
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
