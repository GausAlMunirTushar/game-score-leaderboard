"use client";
import Image from "next/image";
import { useState } from "react";

function GameCard({ game }) {
	const [isDetailed, setIsDetailed] = useState(false);

	const toggleView = () => {
		setIsDetailed(!isDetailed);
	};

	// Toggle between team1 and team2
	const currentTeam = isDetailed ? game.team2 : game.team1;

	return (
		<div
			className={`min-w-[150px]  h-[180px] px-2 py-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 border
				${isDetailed ? "bg-white text-black" : "bg-tertiary	 text-black"}`}
			onClick={toggleView}
		>
			<div className="h-10 border">
				<p className=" text-[10px] uppercase text-center">
					{game.date}
				</p>
				<p className="text-black text-[10px] text-center font-bold uppercase">
					{game.location}
				</p>
			</div>

			<div className="flex items-center justify-center h-15 border">
				<div className="w-10 h-10 border">
					<Image
						src={currentTeam.logo}
						alt={currentTeam.name}
						height={50}
						width={50}
					/>
				</div>
			</div>

			<div className="h-20 border">
				<p className="text-center text-[10px] font-extrabold">VS</p>
				<p className="text-xs  uppercase text-center border">
					{currentTeam.name}
				</p>
				<p className="text-center font-bold uppercase text-xl">
					{currentTeam.title}
				</p>
			</div>
			<div className="flex items-center justify-center mt-4 h-20">
				<p className="font-bold text-2xl uppercase text-center">
					{currentTeam.result}
				</p>
				<p className="ml-2 font-semibold text-2xl">
					{currentTeam.score}
				</p>
			</div>
		</div>
	);
}

export default GameCard;
