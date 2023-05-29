import React from "react";

interface TabsProps {
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
	tabs: { label: string; value: string }[];
}

const Tabs = ({ activeTab, setActiveTab, tabs }: TabsProps) => {
	return (
		<div className="flex gap-3 items-center">
			{tabs.map(({ label, value }) => (
				<button
					onClick={() => setActiveTab(value)}
					className={activeTab === value ? "btn active" : "btn"}
					key={value}
				>
					{label}
				</button>
			))}
		</div>
	);
};

export default Tabs;
