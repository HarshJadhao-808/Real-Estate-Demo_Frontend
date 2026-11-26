import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Script from "next/script";
import Providers from "./providers";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
// import SocialMedias from "./GlobalComponents";
// import axios from "axios";
// import { unstable_cache } from "next/cache";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// const API = process.env.NEXT_PUBLIC_API_URL;
// async function fetchHyperLinks() {
// 	try {
// 		const res = await axios.get(`${API}/hyperLinks/getAll`);
// 		return res.data.responce || [];
// 	} catch (error) {
// 		console.error("Failed to fetch hyperlinks:", error);
// 		return [];
// 	}
// }
// async function getHyperLinks() {
// 	const data = await fetchHyperLinks();
// 	if (!data?.length) return data;

// 	return unstable_cache(() => data, ["hyperLinks"], {
// 		revalidate: 3600,
// 	})();
// }


export const metadata = {
	title: "Orybite Real Estate",
	description: "Find your dream property with Orybite",
};

export default async function RootLayout({ children }) {
	// const hyperLinks = await getHyperLinks();

	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<script
					src="https://analytics.ahrefs.com/analytics.js"
					data-key="gv7RZPzy1GuT+qxh5z1gJA"
					async
				></script>
				{/* <SocialMedias />
          */}
					<Nav/>
				<Providers>{children}</Providers>
					<Footer /> 
			</body>
		</html>
	);
}
