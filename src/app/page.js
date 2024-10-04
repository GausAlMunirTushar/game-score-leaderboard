import DataManipulation from "@/components/DataManipulation";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component
import { playerData } from "./data";

export default function Home() {
	return (
		<div className="bg-gradient-to-tr from-red-700 to-red-900 bg-gray-100">
			<DataManipulation/>
			<div className="flex">
				{/* Sidebar */}
				<Sidebar />

				{/* Main Content - Data Table */}
				<main className="w-full">
					{/* Data Table */}
					<DataTable data={playerData} />
				</main>
			</div>
		</div>
	);
}
