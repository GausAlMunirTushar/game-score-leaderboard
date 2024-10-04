

import React from "react";

const Sidebar = () => {
	return (
		<aside className="w-1/4  p-4 text-white">
			{/* Filter Section */}
			<div className="mb-6">
				<h2 className="text-lg font-bold">User Segments</h2>
				<div className="mt-4 space-y-2">
					<div>
						<input type="checkbox" id="segment1" />
						<label htmlFor="segment1" className="ml-2">
							Lorem Ipsum Dolor
						</label>
					</div>
					<div>
						<input type="checkbox" id="segment2" />
						<label htmlFor="segment2" className="ml-2">
							Sit Amet
						</label>
					</div>
					<div>
						<input type="checkbox" id="segment3" />
						<label htmlFor="segment3" className="ml-2">
							Vivamus Interdum
						</label>
					</div>
				</div>
			</div>

			{/* Date Range Filter */}
			<div className="mb-6">
				<h2 className="text-lg font-bold">Aliquam Ornare</h2>
				<div className="mt-4">
					<input type="date" className="w-full p-2 mb-2 text-black" />
					<input type="date" className="w-full p-2 text-black" />
					<div className="flex justify-between mt-4">
						<button className="bg-yellow-500 px-4 py-2 rounded text-black">
							Apply
						</button>
						<button className="bg-gray-500 px-4 py-2 rounded text-white">
							Clear
						</button>
					</div>
				</div>
			</div>

			{/* Input Filter */}
			<div className="mb-6">
				<h2 className="text-lg font-bold">Nam Gravida Dolor</h2>
				<input
					type="text"
					className="w-full p-2 mt-2 text-black"
					placeholder="Type here"
				/>
			</div>
		</aside>
	);
};

export default Sidebar;
