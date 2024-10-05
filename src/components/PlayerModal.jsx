const PlayerModal = ({ player, isOpen, onClose }) => {
	if (!isOpen || !player) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-end z-50">
			<div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
				>
					&times;
				</button>
				<h2 className="text-xl font-bold mb-4">
					{player.firstName} {player.lastName}
				</h2>
				<div className="mb-2">
					<strong>Position:</strong> {player.ps}
				</div>
				<div className="mb-2">
					<strong>Height:</strong> {player.ht}
				</div>
				<div className="mb-2">
					<strong>Weight:</strong> {player.wt} lbs
				</div>
				<div className="mb-2">
					<strong>Age:</strong> {player.age}
				</div>
				<div className="mb-2">
					<strong>Experience:</strong> {player.exp} years
				</div>
				<div className="mb-2">
					<strong>College:</strong> {player.college}
				</div>
				<div className="mb-2">
					<strong>Honors:</strong>
					<ul className="list-disc list-inside">
						{player.honors.map((honor, index) => (
							<li key={index}>{honor}</li>
						))}
					</ul>
				</div>
				<div className="mb-2">
					<strong>Background:</strong> {player.background}
				</div>
				<div className="mb-2">
					<strong>Notable Achievements:</strong>
					<ul className="list-disc list-inside">
						{player.notableAchievements.map(
							(achievement, index) => (
								<li key={index}>{achievement}</li>
							)
						)}
					</ul>
				</div>
			</div>
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={onClose}
			></div>
		</div>
	);
};

export default PlayerModal;
