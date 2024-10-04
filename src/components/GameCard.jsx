"use client";
import { useState } from "react";

export default function GameCard() {
	const games = [
		{
			date: "December 17, 2023",
			location: "State Farm Stadium",
			opponent: "Arizona Cardinals",
			result: "W",
			score: "45-29",
			logo: "/images/card-1.svg",
		},
		{
			date: "February 11, 2024",
			location: "Allegiant Stadium",
			opponent: "Kansas City Chiefs",
			result: "L",
			score: "22-25 (OT)",
			logo: "/images/card-1.svg",
		},
	];

	const [isDetailed, setIsDetailed] = useState(false);

	const toggleView = () => {
		setIsDetailed(!isDetailed);
	};

	const game = isDetailed ? games[1] : games[0];

	return (
		<div
			className={`min-w-[220px] max-w-[220px] min-h-[300px] p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300
				${isDetailed ? "bg-white text-black" : "bg-secondary text-white"}`}
			onClick={toggleView}
		>
			<p className="font-semibold text-lg">{game.date}</p>
			<p className="text-gray-300 text-sm">{game.location}</p>
			<div className="flex items-center justify-center mt-4">
				<div className="w-16 h-16">
					<img src={game.logo} alt={game.opponent} />
				</div>
			</div>
			<p className="font-bold text-xl mt-2">{game.opponent}</p>
			<div className="flex items-center justify-center mt-4">
				<p
					className={`font-bold text-2xl ${
						game.result === "W" ? "text-green-400" : "text-red-500"
					}`}
				>
					{game.result}
				</p>
				<p className="ml-2 font-semibold text-lg">{game.score}</p>
			</div>
		</div>
	);
}
