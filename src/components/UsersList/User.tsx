import { UserItem } from "@/interfaces";
import Image from "next/image";
import React from "react";

const User = ({ name, consumption, email, image }: UserItem) => {
	return (
		<li className="flex justify-between items-center gap-10 border-b border-accent/70 pb-2">
			<div className="flex gap-3 flex-1">
				<Image
					width={40}
					height={40}
					className="w-10 h-10 rounded-full object-cover"
					src={image}
					alt={name}
				/>
				<div className="flex flex-col">
					<h2 className="text-base font-bold text-slate-900">{name}</h2>
					<span className="text-xs text-gray-500 font-medium">{email}</span>
				</div>
			</div>

			<div>
				<h3 className="text-green-300 text-sm font-semibold">
					Consumo de energia
				</h3>
				<span className="text-lg font-bold text-slate-900">
					{consumption} <span className="text-xs font-medium">kWh/mês</span>
				</span>
			</div>
		</li>
	);
};

export default User;
