import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${montserrat.variable} font-montserrat`}>
			<Component {...pageProps} />
		</div>
	);
}
