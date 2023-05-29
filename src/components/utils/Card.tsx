import { CardData } from "@/interfaces";
import React from "react";

const Card = ({ title, icon, value }: CardData) => {
	return (
		<div className="content-wrapper py-5 flex justify-between items-start h-full">
			<div className="flex items-center gap-7">
				<span className="material-symbols-rounded bg-green-100 p-3 text-green-300 rounded-full">
					{icon}
				</span>
				<div>
					<span className="text-3xl font-bold text-slate-800">{value}</span>
					<h2 className="text-gray-400 font-medium">{title}</h2>
				</div>
			</div>

			<button className="text-gray-400  hover:bg-green-200 hover:text-green-300 rounded-full p-1 flex items-center justify-center">
				<span className="material-symbols-rounded ">more_horiz</span>
			</button>
		</div>
	);
};

export default Card;
