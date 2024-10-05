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
			"Wk 13",
			"",
			"",
			"",
		],
		datasets: [
			{
				label: "Ranking",
				data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
				backgroundColor: function (context) {
					const index = context.dataIndex;
					return index === 12 ? "#FFFFFF" : "rgba(189, 128, 0, 0.8)";
				},
				borderColor: "rgba(189, 128, 0, 1)",
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					color: "#FFFFFF",
				},
			},
			y: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: "2023-2024 SEASON",
				color: "#FFFFFF",
				font: {
					size: 20,
					family: "'Montserrat', sans-serif",
					weight: "bold",
				},
				padding: {
					top: 4,
					bottom: 2,
				},
			},
		},
		layout: {
			padding: {
				top: 20,
				bottom: 1,
				left: 10,
				right: 10,
			},
		},
	};

	return (
		<div className="h-[600px] inset-0 flex items-center justify-center sm:justify-end z-50">
			<div className="bg-white file:rounded-lg rounded-lg shadow-xl max-w-sm w-full p-4 relative border">
				<div className="bg-[#a00000] border  rounded-lg">
					<Bar data={data} options={options} />
				</div>

				<div className="flex gap-x-3 mb-2 mt-4">
					<img
						src={player?.image}
						className="w-[80px] h-[60px] rounded-lg"
						alt="player"
					/>
					<div>
						<h2 className="text-xl font-medium text-black">
							{player.firstName} {player.lastName}
						</h2>
						<p className="font-bold text-black">#71</p>
					</div>
				</div>

				<div className="text-black mb-4 text-justify">
					{player.background}
				</div>
				<div className="text-black mb-2 text-justify">
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
