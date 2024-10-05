import DataManipulation from "@/components/DataManipulation";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar";
import { playerData } from "./data";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="bg-gradient-to-r from-[#8A0707] to-[#4D0404] bg-gray-100">
			<Header />
			<DataManipulation />
			<div className="flex">
				<Sidebar />
				<main className="w-full">
					<DataTable data={playerData} />
				</main>
			</div>
		</div>
	);
}
