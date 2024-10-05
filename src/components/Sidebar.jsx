import React from "react";

const Sidebar = () => {
	return (
		<aside className="w-1/4 text-white">
			<div className="border-b boder-white sm:py-10 md:py-8 lg:py-6"></div>
			{/* Filter Section */}
			<div className="py-4 px-8">
				<div className="mb-6">
					<h2 className="text-sm font-bold uppercase">
						User Segments
					</h2>
					<div className="mt-4 space-y-2">
						<div className="flex items-center">
							<input
								type="checkbox"
								id="segment1"
								className="h-4 w-4"
							/>
							<label htmlFor="segment1" className="ml-2 text-xs">
								Lorem Ipsum Dolor
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								id="segment2"
								className="h-4 w-4"
							/>
							<label htmlFor="segment2" className="ml-2 text-xs">
								Sit Amet
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								id="segment3"
								className="h-4 w-4"
							/>
							<label htmlFor="segment3" className="ml-2 text-xs">
								Vivamus Interdum
							</label>
						</div>
					</div>
				</div>

				{/* Date Range Filter */}
				<div className="mb-6">
					<h2 className="text-sm font-bold">Aliquam Ornare</h2>
					<div className="mt-2">
						<div className="flex gap-2">
							<input
								type="number"
								className="w-full bg-white p-2 px-4 rounded placeholder:text-secondary  text-tertiary "
								placeholder="From"
							></input>
							<input
								type="number"
								className="w-full bg-white p-2 px-4 rounded placeholder:text-secondary text-tertiary "
								placeholder="To"
							></input>
						</div>
						<div className="flex gap-4 mt-4">
							<button className="bg-tertiary rounded-full text-white font-semibold px-6 py-2">
								Apply
							</button>
							<button className="bg-red-950 rounded-full text-white font-semibold py-2 px-6">
								Clear
							</button>
						</div>
					</div>
				</div>

				{/* Input Filter */}
				<div className="mb-6">
					<h2 className="text-sm font-bold">Nam Gravida Dolor</h2>
					<input
						type="text"
						className="w-full rounded py-2.5 px-4 placeholder:text-secondary capitalize mt-2 text-black focus:outline-primary"
						placeholder="Type here"
					/>
				</div>
				{/* Input Filter */}
				<div className="mb-6">
					<h2 className="text-sm font-bold">Nam Gravida Dolor</h2>
					<input
						type="text"
						className="w-full rounded py-2.5 px-4 placeholder:text-secondary capitalize mt-2 text-black focus:outline-primary"
						placeholder="Type here"
					/>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
