export default function PlayerCard({ player }) {
	return (
	  <div className="p-4 border rounded shadow-md bg-white w-full">
		<h2 className="text-xl font-bold mb-2">{player.firstName} {player.lastName}</h2>
		<p>{player.pos} | {player.ht} | {player.wt} lbs</p>
		<p>Age: {player.age}</p>
		<p>Experience: {player.exp} years</p>
		<p>College: {player.college}</p>
	  </div>
	);
  }
