"use client";
import { GlobalProvider } from "../src/Context/GlobalContext.jsx";
export default function Providers({ children }) {
	return <GlobalProvider>{children}</GlobalProvider>;
}
