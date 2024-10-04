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
			className={`min-w-[220px] max-w-[250px] min-h-[370px] max-h-[350px] px-4 py-6 rounded-lg shadow-md cursor-pointer transition-all duration-300
				${isDetailed ? "bg-white text-black" : "bg-tertiary	 text-black"}`}
			onClick={toggleView}
		>
			<div className="h-20">
				<p className="font-semibold text-lg uppercase text-center">
					{game.date}
				</p>
				<p className="text-black text-lg text-center font-bold uppercase">
					{game.location}
				</p>
			</div>
			<div className="flex items-center justify-center mt-4 h-20">
				<div className="w-16 h-16">
					<Image
						src={currentTeam.logo}
						alt={currentTeam.name}
						height={60}
						width={60}
					/>
				</div>
			</div>
			<div className="h-20">
				<p className="text-center font-bold">VS</p>
				<p className="text-lg mt-2 uppercase text-center">{currentTeam.name}</p>
				<p className="text-center font-bold uppercase text-xl">{currentTeam.title}</p>
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
