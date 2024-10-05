"use client";
import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import PlayerCard from "./PlayerCard"; // Import the PlayerCard component

const DataTable = ({ data }) => {
	const [filterInput, setFilterInput] = useState("");
	const [showAllRows, setShowAllRows] = useState(false);
	const [selectedPlayer, setSelectedPlayer] = useState(null); // State to track selected player

	// Define table columns
	const columns = useMemo(
		() => [
			{ Header: "Session Rank", accessor: "rank" },
			{ Header: "Game Rank", accessor: "gamerank" },
			{ Header: "First Name", accessor: "firstName" },
			{ Header: "Last Name", accessor: "lastName" },
			{ Header: "PS", accessor: "ps" },
			{ Header: "HT", accessor: "ht" },
			{ Header: "WT", accessor: "wt" },
			{ Header: "Age", accessor: "age" },
			{ Header: "EXP", accessor: "exp" },
			{ Header: "College", accessor: "college" },
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
		setShowAllRows(true);
	};

	// Handle row click to select a player
	const handleRowClick = (row) => {
		setSelectedPlayer(row.original); // Set the selected player details
	};

	return (
		<div className="flex overflow-x-auto">
			<div className="w-full">
				{/* Table */}
				<table
					{...getTableProps()}
					className="divide-y divide-gray-200 table-auto min-w-full"
				>
					<thead className="bg-red-950 mb-2">
						{headerGroups.map((headerGroup) => (
							<tr
								key={headerGroup.id}
								{...headerGroup.getHeaderGroupProps()}
							>
								{headerGroup.headers.map((column) => (
									<th
										key={column.id}
										{...column.getHeaderProps(
											column.getSortByToggleProps()
										)}
										className="px-6 py-4 text-white text-left text-xs font-normal uppercase tracking-wider"
									>
										<div className="flex items-center">
											{column.render("Header")}
											<span className="ml-2">
												{/* Sorting icons */}
												{column.isSorted ? (
													column.isSortedDesc ? (
														<FaSortDown />
													) : (
														<FaSortUp />
													)
												) : (
													<FaSort />
												)}
											</span>
										</div>
									</th>
								))}
								<th></th>
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
								<tr
									key={row.id}
									{...row.getRowProps()}
									onClick={() => handleRowClick(row)}
									className="hover:bg-red-100 cursor-pointer"
								>
									{row.cells.map((cell) => (
										<td
											key={cell.column.id}
											{...cell.getCellProps()}
											className={`text-center py-2 whitespace-nowrap ${
												cell.column.id === "rank"
													? "bg-[#333333] w-[0px] text-sm font-semibold text-secondary"
													: cell.column.id ===
													  "gamerank"
													? " w-0"
													: "text-sm w-0"
											}`}
										>
											{cell.render("Cell")}
										</td>
									))}
									<td className="w-[500px] row-span-8">dfds</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DataTable;
