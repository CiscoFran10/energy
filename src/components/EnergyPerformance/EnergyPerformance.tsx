import React from "react";
import dynamic from "next/dynamic";
import { GraphData } from "@/interfaces";

const EnergyPerformanceGraph = dynamic(
	import("@/components/EnergyPerformance/EnergyPerformanceGraph"),
	{ ssr: false }
);

interface EnergyPerformanceProps {
	data: GraphData[];
}

const EnergyPerformance = ({ data }: EnergyPerformanceProps) => {
	return (
		<section className="content-wrapper flex flex-col gap-5 w-full row-start-1 row-end-2">
			<div className="flex items-center justify-between">
				<h1
					className="text-lg font-semibold
      text-gray-600"
				>
					Indicadores de Performance
				</h1>
			</div>

			<EnergyPerformanceGraph data={data} />
		</section>
	);
};

export default EnergyPerformance;
