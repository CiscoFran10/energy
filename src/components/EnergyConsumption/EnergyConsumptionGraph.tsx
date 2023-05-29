import { GraphData } from "@/interfaces";
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Cell,
	ResponsiveContainer,
} from "recharts";

interface PropTypes {
	data: GraphData[];
}

const EnergyConsumptionGraph = ({ data }: PropTypes) => {
	const values = data.map((d) => d.value);
	const maximumValue = Math.max(...values);

	return (
		<BarChart
			width={700}
			height={280}
			data={data}
			margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
		>
			<CartesianGrid stroke="#e9ebf0" vertical={false} />
			<XAxis
				fontSize={14}
				axisLine={false}
				tickLine={false}
				stroke="#a2a7b1"
				dataKey="name"
				fontWeight={500}
				tickMargin={10}
			/>
			<YAxis
				fontSize={14}
				tickMargin={10}
				axisLine={false}
				tickLine={false}
				fontWeight={500}
				stroke="#a2a7b1"
			/>
			<Bar stackId={"a"} dataKey="value" radius={8}>
				{data.map((entry, index) => (
					<Cell
						key={index}
						fill={entry.value === maximumValue ? "#1DD1A1" : "#ffdb86"}
					/>
				))}
			</Bar>
		</BarChart>
	);
};

export default EnergyConsumptionGraph;
