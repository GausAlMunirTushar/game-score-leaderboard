import { useState } from "react";

export default function Leaderboard() {
	const [search, setSearch] = useState("");
	const players = [
		{
			firstName: "Trent",
			lastName: "Williams",
			pos: "T",
			ht: "6-5",
			wt: "320",
			age: "36",
			exp: "15",
			college: "Oklahoma",
		},
		{
			firstName: "Nick",
			lastName: "Bosa",
			pos: "DE",
			ht: "6-4",
			wt: "266",
			age: "25",
			exp: "5",
			college: "Ohio State",
		},
		// Add more player data here
	];

	const filteredPlayers = players.filter(
		(player) =>
			player.firstName.toLowerCase().includes(search.toLowerCase()) ||
			player.lastName.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="w-full p-6">
			<div className="mb-4">
				<input
					type="text"
					placeholder="Search players..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="p-2 border border-gray-300 rounded w-full"
				/>
			</div>
			<table className="w-full table-auto text-left">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Position</th>
						<th>Height</th>
						<th>Weight</th>
						<th>Age</th>
						<th>Experience</th>
						<th>College</th>
					</tr>
				</thead>
				<tbody>
					{filteredPlayers.map((player, index) => (
						<tr key={index} className="border-t">
							<td>{player.firstName}</td>
							<td>{player.lastName}</td>
							<td>{player.pos}</td>
							<td>{player.ht}</td>
							<td>{player.wt}</td>
							<td>{player.age}</td>
							<td>{player.exp}</td>
							<td>{player.college}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
