"use client";
import { useRef, useState } from "react";
import GameCard from "./GameCard";

const games = [
	{
		date: "November 19, 2023",
		location: "Allegiant Stadium",
		team1: {
			name: "Tampa Bay Buccaneers",
			title: "Buccaneers",
			result: "W",
			score: "27-14",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Seattle Seahawks",
			title: "Seahawks",
			result: "L",
			score: "13-31",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "November 23, 2023",
		location: "Lumen Field",
		team1: {
			name: "Philadelphia Eagles",
			title: "Eagles",
			result: "W",
			score: "42-19",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Baltimore Ravens",
			title: "Ravens",
			result: "L",
			score: "19-33",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "December 3, 2023",
		location: "Ford Field",
		team1: {
			name: "Detroit Lions",
			title: "Lions",
			result: "W",
			score: "34-28",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Chicago Tigers",
			title: "Tigers",
			result: "L",
			score: "28-34",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "December 10, 2023",
		location: "Soldier Field",
		team1: {
			name: "Chicago Bears",
			title: "Bears",
			result: "L",
			score: "17-21",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Cincinnati Bengals",
			title: "Bengals",
			result: "W",
			score: "21-17",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "December 17, 2023",
		location: "Arrowhead Stadium",
		team1: {
			name: "Kansas City Chiefs",
			title: "Chiefs",
			result: "W",
			score: "30-27",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Denver Broncos",
			title: "Broncos",
			result: "L",
			score: "27-30",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "December 25, 2023",
		location: "AT&T Stadium",
		team1: {
			name: "Dallas Cowboys",
			title: "Cowboys",
			result: "L",
			score: "20-27",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Green Bay Packers",
			title: "Packers",
			result: "W",
			score: "27-20",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "December 31, 2023",
		location: "FedExField",
		team1: {
			name: "Washington Commanders",
			title: "Commanders",
			result: "L",
			score: "17-23",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "New York Giants",
			title: "Giants",
			result: "W",
			score: "23-17",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "January 2, 2024",
		location: "SoFi Stadium",
		team1: {
			name: "Los Angeles Rams",
			title: "Rams",
			result: "W",
			score: "24-21",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Arizona Cardinals",
			title: "Cardinals",
			result: "L",
			score: "21-24",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "January 7, 2024",
		location: "Lambeau Field",
		team1: {
			name: "Green Bay Packers",
			title: "Packers",
			result: "W",
			score: "17-14",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Minnesota Vikings",
			title: "Vikings",
			result: "L",
			score: "14-17",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "January 14, 2024",
		location: "Gillette Stadium",
		team1: {
			name: "New England Patriots",
			title: "Patriots",
			result: "L",
			score: "10-24",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Buffalo Bills",
			title: "Bills",
			result: "W",
			score: "24-10",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "January 20, 2024",
		location: "Levi's Stadium",
		team1: {
			name: "San Francisco 49ers",
			title: "49ers",
			result: "W",
			score: "34-21",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Las Vegas Raiders",
			title: "Raiders",
			result: "L",
			score: "21-34",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "January 28, 2024",
		location: "Mercedes-Benz Stadium",
		team1: {
			name: "Atlanta Falcons",
			title: "Falcons",
			result: "L",
			score: "21-27",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "New Orleans Saints",
			title: "Saints",
			result: "W",
			score: "27-21",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "February 3, 2024",
		location: "MetLife Stadium",
		team1: {
			name: "New York Jets",
			title: "Jets",
			result: "W",
			score: "24-20",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Miami Dolphins",
			title: "Dolphins",
			result: "L",
			score: "20-24",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "February 10, 2024",
		location: "Bank of America Stadium",
		team1: {
			name: "Carolina Panthers",
			title: "Panthers",
			result: "W",
			score: "27-17",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Tennessee Titans",
			title: "Titans",
			result: "L",
			score: "17-27",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "February 17, 2024",
		location: "NRG Stadium",
		team1: {
			name: "Houston Texans",
			title: "Texans",
			result: "L",
			score: "13-30",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Jacksonville Jaguars",
			title: "Jaguars",
			result: "W",
			score: "30-13",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "February 24, 2024",
		location: "Highmark Stadium",
		team1: {
			name: "Buffalo Bills",
			title: "Bills",
			result: "L",
			score: "21-34",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Cleveland Browns",
			title: "Browns",
			result: "W",
			score: "34-21",
			logo: "/images/card-1.svg",
		},
	},
	{
		date: "March 3, 2024",
		location: "M&T Bank Stadium",
		team1: {
			name: "Baltimore Ravens",
			title: "Ravens",
			result: "W",
			score: "24-17",
			logo: "/images/card-1.svg",
		},
		team2: {
			name: "Indianapolis Colts",
			title: "Colts",
			result: "L",
			score: "17-24",
			logo: "/images/card-1.svg",
		},
	},
];

const GameList = () => {
	const containerRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	// Start dragging
	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - containerRef.current.offsetLeft);
		setScrollLeft(containerRef.current.scrollLeft);
	};

	// End dragging
	const handleMouseUp = () => {
		setIsDragging(false);
	};

	// Dragging movement
	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - containerRef.current.offsetLeft;
		const walk = (x - startX) * 1.5; // Adjust scroll speed
		containerRef.current.scrollLeft = scrollLeft - walk;
	};

	return (
		<div
			ref={containerRef}
			className="flex space-x-6 overflow-x-auto py-4 px-2 cursor-grab scrollbar-hide"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseUp} // Stop dragging when the mouse leaves the container
			style={{ overflowX: "scroll" }} // Ensures horizontal scroll
		>
			{games.map((game, index) => (
				<GameCard key={index} game={game} />
			))}
		</div>
	);
};

export default GameList;
