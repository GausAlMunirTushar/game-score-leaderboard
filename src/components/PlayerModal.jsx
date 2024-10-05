/* eslint-disable @next/next/no-img-element */
const PlayerModal = ({ player, isOpen, onClose }) => {
	if (!isOpen || !player) return null;

	return (
		<div className="h-[600px] inset-0 flex items-center justify-center sm:justify-end z-50">
			<div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-4 relative">
				<div className="flex gap-x-3 mb-2">
					<img
						src={player?.image}
						className="w-20 rounded-lg"
						alt="player"
					/>
					<div>
						<h2 className="text-xl font-medium">
							{player.firstName} {player.lastName}
						</h2>
						<p className="font-bold">#71</p>
					</div>
				</div>

				<div className="mb-2">{player.background}</div>
				<div className="mb-2">
					<ul className="list-disc list-inside">
						{player.notableAchievements.map(
							(achievement, index) => (
								<li key={index}>{achievement}</li>
							)
						)}
					</ul>
				</div>
			</div>
			<div className="fixed inset-0" onClick={onClose}></div>
		</div>
	);
};

export default PlayerModal;
