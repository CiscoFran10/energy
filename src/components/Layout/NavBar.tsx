import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

const navItems = [
	{ label: "Início", icon: "home" },
	{ label: "Estatísticas", icon: "analytics" },
	{ label: "Calendário", icon: "calendar_month" },
	{ label: "Lideranças", icon: "leaderboard" },
	{ label: "Fórum", icon: "forum" },
];

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<aside
			className={`bg-white flex flex-col justify-between  py-10 h-screen border-r border-slate-200 transition duration-300 ${
				isOpen ? "pr-10 pl-5" : "px-5"
			}`}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`menu-item transition-all duration-300 ${
					isOpen ? "text-green-300" : "text-gray-200 hover:text-green-300"
				}`}
				aria-label="menu"
				aria-expanded={isOpen}
			>
				<span className="sr-only">Menu</span>
				<span className="material-symbols-rounded">menu</span>
			</button>

			<nav>
				<ul className="flex flex-col gap-8">
					{navItems.map(({ label, icon }, index) => (
						<li key={index}>
							<Link
								href={""}
								className={`menu-item ${index === 0 ? " text-green-300" : ""}`}
							>
								<span className="material-symbols-rounded">{icon}</span>
								<span
									className={`transition-all duration-300 delay-300 ${
										isOpen ? "flex opacity-100" : "hidden opacity-0"
									}`}
								>
									{label}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<button className="menu-item">
				<span className="material-symbols-rounded">nights_stay</span>
			</button>
		</aside>
	);
};

export default NavBar;
