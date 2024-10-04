const games = [
	{ opponent: 'Baltimore Ravens', result: 'L', score: '19-33', date: 'December 25, 2023', location: 'Allegiant Stadium' },
	{ opponent: 'Washington Commanders', result: 'W', score: '27-10', date: 'December 31, 2023', location: 'FedExField' },
	// Add more games here
  ];

  export default function GameScoreboard() {
	return (
	  <div className="p-6 w-full">
		<h2 className="text-xl font-bold mb-4">Game Scoreboard</h2>
		<div className="flex space-x-4 overflow-x-auto">
		  {games.map((game, index) => (
			<div key={index} className="min-w-[200px] border p-4 rounded-lg bg-white shadow-md">
			  <p className="font-bold">{game.date}</p>
			  <p className="text-gray-700">{game.location}</p>
			  <p className="text-gray-900">{game.opponent}</p>
			  <p className={`font-bold ${game.result === 'W' ? 'text-green-500' : 'text-red-500'}`}>{game.result} {game.score}</p>
			</div>
		  ))}
		</div>
	  </div>
	);
  }
