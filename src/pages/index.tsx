import Head from "next/head";
import NavBar from "@/components/Layout/NavBar";
import Header from "@/components/Layout/Header";
import Card from "@/components/utils/Card";

import EnergyConsumption from "@/components/EnergyConsumption/EnergyConsumption";
import EnergyPerformance from "@/components/EnergyPerformance/EnergyPerformance";
import UsersList from "@/components/UsersList/UsersList";

import { EnergyPerformanceData, energyConsumptionData, users } from "@/data";

const Home = () => {
	return (
		<>
			<Head>
				<title>Enermatch</title>
			</Head>
			<div className="grid grid-cols-[auto_1fr]">
				<NavBar />

				<div className="py-7 px-10">
					<Header />
					<main className="max-w-7xl mt-8 grid grid-cols-[1fr_auto] mx-auto gap-8">
						<EnergyConsumption data={energyConsumptionData} />
						<EnergyPerformance data={EnergyPerformanceData} />

						<UsersList users={users} />

						<div className="flex gap-8 flex-col row-start-2 row-end-4 col-start-2">
							<Card title="Custo de energia" value="142.500" icon="bolt" />

							<Card title="Emissão de Carbono" value="122.683" icon="science" />
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Home;
