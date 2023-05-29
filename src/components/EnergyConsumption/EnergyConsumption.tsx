import React from "react";
import dynamic from "next/dynamic";
import { GraphData } from "@/interfaces";

import Tabs from "../utils/Tabs";
const EnergyConsumptionGraph = dynamic(
	import("@/components/EnergyConsumption/EnergyConsumptionGraph"),
	{ ssr: false }
);

interface EnergyConsumptionProps {
	data: GraphData[];
}

const tabs = [
	{ label: "Diário", value: "daily" },
	{ label: "Mensal", value: "monthly" },
];

const EnergyConsumption = ({ data }: EnergyConsumptionProps) => {
	const [activeTab, setActiveTab] = React.useState(tabs[0].value);
	return (
		<section className="content-wrapper flex flex-col gap-10 w-full pb-0 row-start-1 row-end-3 h-full">
			<div className="flex items-center justify-between">
				<h1
					className="text-lg font-semibold
      text-gray-600"
				>
					Consumo de Energia
				</h1>

				<Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
			</div>

			<EnergyConsumptionGraph data={data} />
		</section>
	);
};

export default EnergyConsumption;
