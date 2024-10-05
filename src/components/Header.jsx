import Image from "next/image";
import GameCard from "./GameCard";
import GameList from "./GameList";

const games = [
	{
		date: "November 19, 2023",
		location: "Allegiant Stadium",
		team1: {
			name: "Tampa Bay Buccaneers",
			result: "W",
			score: "27-14",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Seattle Seahawks",
			result: "L",
			score: "13-31",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "November 23, 2023",
		location: "Lumen Field",
		team1: {
			name: "Philadelphia Eagles",
			result: "W",
			score: "42-19",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Baltimore Ravens",
			result: "L",
			score: "19-33",
			logo: "/images/card-1.svg",
		},
	},
	// Add more games here (total 20 games)
];
export default function Header() {
	return (
		<header className="bg-gradient-to-tr from-red-700 to-red-900 text-white ">
			<div className="">
				<div className="max-w-3xl mx-auto flex justify-between items-center border-b-2  py-4 border-[#a14343]">
					<div className="flex items-center gap-5 ">
						<Image
							src="/images/logo.svg"
							height={60}
							width={60}
							alt="Logo"
							className="w-14 h-14"
						/>
						<h1 className="text-[35px] font-light">
							San Francisco 49ers
						</h1>
					</div>
					<div>
						<p className="text-sm tracking-[.25rem]">
							2023-2024 SEASON
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<div className="">
					<GameList />
				</div>
			</div>
		</header>
	);
}
