export default function Sidebar() {
	return (
		<aside className="w-64 bg-gray-800 text-white p-6">
			<div>
				<h3 className="text-lg font-bold">User Segments</h3>
				<ul className="mt-4 space-y-2">
					<li>
						<input type="checkbox" /> Lorem Ipsum
					</li>
					<li>
						<input type="checkbox" /> Sit Amet
					</li>
				</ul>
			</div>

			<div className="mt-6">
				<h3 className="text-lg font-bold">Filter by Date</h3>
				<input type="date" className="w-full bg-gray-700 p-2 rounded" />
			</div>
		</aside>
	);
}
