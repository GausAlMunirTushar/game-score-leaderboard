import React from "react";

const PlayerCard = ({ player }) => {
	if (!player) {
		return (
			<div className="bg-gray-200 p-4 rounded-lg">
				Select a player to see details
			</div>
		);
	}

	return (
		<div className="bg-white rounded-lg shadow-lg p-4 border border-gray-300">
			<h2 className="text-lg font-bold mb-2">2023-2024 SEASON</h2>
			<h3 className="text-xl font-semibold text-red-600">{`RANKING: ${player.ranking}`}</h3>

			{/* Ranking chart bar */}
			<div className="mt-4 mb-4">
				<div className="relative w-full h-16 bg-gray-200 rounded-lg flex items-center justify-center">
					{/* Dynamic bar graph based on ranking */}
					<div className="absolute h-full flex space-x-1 w-full items-end px-2">
						{player.rankingsData.map((rank, index) => (
							<div
								key={index}
								className={`h-${rank} w-2 bg-red-600`}
								style={{ height: `${rank}%` }} // Adjusting the height
							></div>
						))}
					</div>
				</div>
			</div>

			<div className="flex items-center mb-4">
				<img
					src={player.image} // URL to player image
					alt={`${player.firstName} ${player.lastName}`}
					className="w-24 h-24 rounded-full border border-gray-200"
				/>
				<div className="ml-4">
					<h4 className="text-lg font-bold">{`${player.firstName} ${player.lastName}`}</h4>
					<p className="text-gray-500">{`#${player.number} - ${player.position}`}</p>
				</div>
			</div>

			<div className="mb-4">
				<h4 className="text-md font-semibold">Honors:</h4>
				<p>{player.honors || "N/A"}</p>
			</div>

			<div className="mb-4">
				<h4 className="text-md font-semibold">Player Background:</h4>
				<p>{player.background || "N/A"}</p>
			</div>
		</div>
	);
};

export default PlayerCard;
