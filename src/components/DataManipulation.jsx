import { FaFilter } from "react-icons/fa";

const DataManipulation = () => {
	return (
		<div className="flex bg-white  items-center px-4 py-2">
			{/* Filter Button */}
			<button className="flex items-center border-4 border-primary text-primary px-4 py-2 rounded-xl ">
				<i className="fa fa-filter mr-2"></i>
				<FaFilter className="mr-2" />
				Filter
			</button>

			{/* Search Bar */}
			<div className=" mx-4 w-80">
				<input
					type="text"
					placeholder="Search"
					className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:uppercase"
				/>
			</div>

			{/* Export Data Button */}
			<button className=" px-4 py-2 rounded text-primary uppercase ">
				Export Data
			</button>
		</div>
	);
};

export default DataManipulation;
