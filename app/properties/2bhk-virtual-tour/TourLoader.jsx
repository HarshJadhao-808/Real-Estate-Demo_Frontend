"use client";

import dynamic from "next/dynamic";
const ApartmentTour = dynamic(() => import("../../../src/components/tour/Apartment"), {
	ssr: false,
	loading: () => (
		<div className="flex h-screen items-center justify-center bg-[#0B1B33] text-[#E4C77B]">
			Loading 3D Apartment...
		</div>
	),
});

export default function TourLoader() {
	return <ApartmentTour />;
}
