import DataManipulation from "@/components/DataManipulation";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar";
import { playerData } from "./data";

export default function Home() {
	return (
		<div className="bg-gradient-to-tr from-red-700 to-red-900 bg-gray-100">
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
