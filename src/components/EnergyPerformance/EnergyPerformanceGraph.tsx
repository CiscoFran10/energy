import { GraphData } from "@/interfaces";
import React from "react";
import { RadialBarChart, RadialBar, Cell, PolarAngleAxis } from "recharts";

interface PerfomanceProps {
	data: GraphData[];
}

const EnergyPerformanceGraph = ({ data }: PerfomanceProps) => {
	return (
		<div className="flex items-center gap-5 ">
			<RadialBarChart
				height={250}
				width={250}
				cx="50%"
				cy="50%"
				innerRadius="60%"
				outerRadius="100%"
				barSize={10}
				data={data}
			>
				<PolarAngleAxis
					type="number"
					domain={[0, 100]}
					angleAxisId={0}
					tick={false}
				/>
				<RadialBar background dataKey="value">
					{data.map((entry, index) => {
						return (
							<Cell key={index} fill={index === 1 ? "#1DD1A1" : "#ffdb86"} />
						);
					})}
				</RadialBar>
			</RadialBarChart>

			<div className="flex flex-col gap-3">
				{data.map(({ name }, index) => (
					<h2
						key={index}
						className="flex items-center gap-2 font-medium text-gray-400 text-base whitespace-nowrap"
					>
						<span
							className={`w-4 h-4 rounded-full block ${
								index === 0 ? "bg-green-300 " : "bg-accent"
							}`}
						></span>

						{name}
					</h2>
				))}
			</div>
		</div>
	);
};

export default EnergyPerformanceGraph;
