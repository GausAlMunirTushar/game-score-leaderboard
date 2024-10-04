'use client'
import Filter from "@/components/Filter";
import GameScoreboard from "@/components/GameScoreboard";
import Leaderboard from "@/components/Leaderboard";
import { useState } from "react";

export default function HomePage() {
	const [filters, setFilters] = useState({});

	const handleFilterChange = (newFilters) => {
		setFilters(newFilters);
	};

	return (
		<div className="container mx-auto p-8">
			
		</div>
	);
}
