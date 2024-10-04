import Image from "next/image";
import GameCard from "./GameCard";

export default function Header() {
	return (
		<header className="bg-gradient-to-tr	 from-red-700 to-red-900 text-white py-4 px-6">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<div className="flex items-center gap-5">
					<Image
						src="/images/logo.svg"
						height={60}
						width={60}
						alt="Logo"
						className="w-14 h-14"
					/>
					<h1 className="text-[45px] font-light">
						San Francisco 49ers
					</h1>
				</div>
				<div>
					<p className="text-xl">2023-2024 SEASON</p>
				</div>
			</div>
			<div className="flex space-x-4 overflow-x-auto">
				<GameCard />
			</div>
		</header>
	);
}
