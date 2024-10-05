/* eslint-disable @next/next/no-img-element */
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Colors,
} from "chart.js";

// Register components with Chart.js
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const PlayerModal = ({ player, isOpen, onClose }) => {
	if (!isOpen || !player) return null;
	const data = {
		labels: [
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
		],
		datasets: [
			{
				label: "Ranking",
				data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
				backgroundColor: "rgba(189, 128, 0, 0.8)",
				borderColor: "rgba(189, 128, 0, 1)",
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				reverse: true, // Reversing to have 1 on top
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			title: {
				display: true,
				text: "2023-2024 Season Rankings",
			},
		},
	};
	return (
		<div className="h-[600px] inset-0 flex items-center justify-center sm:justify-end z-50">
			<div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-4 relative">
				<div className="bg-[#a00000] rounded-lg mb-3">
					<Bar data={data} options={options} />
				</div>

				<div className="flex gap-x-3 mb-2">
					<img
						src={player?.image}
						className="w-20 rounded-lg"
						alt="player"
					/>
					<div>
						<h2 className="text-xl font-medium">
							{player.firstName} {player.lastName}
						</h2>
						<p className="font-bold">#71</p>
					</div>
				</div>

				<div className="mb-2">{player.background}</div>
				<div className="mb-2">
					<ul className="list-disc list-inside">
						{player.notableAchievements.map(
							(achievement, index) => (
								<li key={index}>{achievement}</li>
							)
						)}
					</ul>
				</div>
			</div>
			<div className="fixed inset-0" onClick={onClose}></div>
		</div>
	);
};

export default PlayerModal;
