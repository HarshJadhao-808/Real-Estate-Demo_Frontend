"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import {
	FiSearch,
	FiMapPin,
	FiHeart,
	FiArrowUpRight,
	FiArrowRight,
	FiSliders,
	FiX,
	FiGrid,
	FiList,
	FiCheck,
	FiHome,
	FiShield,
	FiAward,
	FiHeadphones,
	FiChevronDown,
	FiMaximize2,
	FiCalendar,
	FiPhone,
	FiStar,
	FiKey,
	FiTrendingUp,
	FiCheckCircle,
} from "react-icons/fi";

import { FaBed, FaBath, FaCar } from "react-icons/fa";

/* ----------------------------------
   PROPERTY DATA
---------------------------------- */

const properties = [
	{
		id: "PR001",
		slug: "grand-residence-whitefield",
		title: "The Grand Residence",
		description:
			"An elegant luxury villa with spacious interiors, contemporary architecture and beautifully landscaped outdoor spaces.",
		location: {
			city: "Bangalore",
			area: "Whitefield",
			address: "Whitefield Main Road, Bangalore",
		},
		propertyType: "Villa",
		listingType: "Sale",
		status: "Ready to Move",
		price: 28500000,
		priceLabel: "₹2.85 Cr",
		bedrooms: 4,
		bathrooms: 4,
		balconies: 2,
		parking: 2,
		area: 3200,
		areaUnit: "Sq.Ft.",
		furnishing: "Semi-Furnished",
		facing: "East",
		floor: "Independent",
		age: "New Construction",
		possession: "Immediate",
		images: [
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
		],
		amenities: [
			"Swimming Pool",
			"Garden",
			"Gym",
			"Security",
			"Parking",
			"Clubhouse",
		],
		featured: true,
		verified: true,
		views: 1250,
		createdAt: "2026-11-20",
		agent: {
			name: "Aarav Sharma",
			phone: "+91 98765 43210",
		},
	},
	{
		id: "PR002",
		slug: "skyline-heights-hebbal",
		title: "Skyline Heights",
		description:
			"A premium apartment offering panoramic city views, modern amenities and thoughtfully planned living spaces.",
		location: {
			city: "Bangalore",
			area: "Hebbal",
			address: "Hebbal, North Bangalore",
		},
		propertyType: "Apartment",
		listingType: "Sale",
		status: "Under Construction",
		price: 12500000,
		priceLabel: "₹1.25 Cr",
		bedrooms: 3,
		bathrooms: 3,
		balconies: 2,
		parking: 1,
		area: 1850,
		areaUnit: "Sq.Ft.",
		furnishing: "Unfurnished",
		facing: "North",
		floor: "12th of 24",
		age: "Under Construction",
		possession: "December 2027",
		images: [
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
		],
		amenities: [
			"Swimming Pool",
			"Gym",
			"Security",
			"Parking",
			"Clubhouse",
			"Power Backup",
		],
		featured: true,
		verified: true,
		views: 980,
		createdAt: "2026-11-19",
		agent: {
			name: "Riya Mehta",
			phone: "+91 98765 43211",
		},
	},
	{
		id: "PR003",
		slug: "azure-penthouse-indiranagar",
		title: "The Azure Penthouse",
		description:
			"A statement penthouse with expansive interiors, premium finishes and private outdoor spaces.",
		location: {
			city: "Bangalore",
			area: "Indiranagar",
			address: "Indiranagar, Bangalore",
		},
		propertyType: "Penthouse",
		listingType: "Sale",
		status: "Ready to Move",
		price: 42000000,
		priceLabel: "₹4.20 Cr",
		bedrooms: 4,
		bathrooms: 5,
		balconies: 3,
		parking: 2,
		area: 4100,
		areaUnit: "Sq.Ft.",
		furnishing: "Fully-Furnished",
		facing: "West",
		floor: "Top Floor",
		age: "New Construction",
		possession: "Immediate",
		images: [
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
			"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
		],
		amenities: [
			"Swimming Pool",
			"Garden",
			"Gym",
			"Security",
			"Parking",
			"Terrace",
		],
		featured: true,
		verified: true,
		views: 2100,
		createdAt: "2026-11-18",
		agent: {
			name: "Kabir Rao",
			phone: "+91 98765 43212",
		},
	},
	{
		id: "PR004",
		slug: "greenwood-residences-sarjapur",
		title: "Greenwood Residences",
		description:
			"A comfortable family home surrounded by greenery, with practical layouts and everyday conveniences.",
		location: {
			city: "Bangalore",
			area: "Sarjapur Road",
			address: "Sarjapur Road, Bangalore",
		},
		propertyType: "Apartment",
		listingType: "Sale",
		status: "Ready to Move",
		price: 8900000,
		priceLabel: "₹89 Lac",
		bedrooms: 2,
		bathrooms: 2,
		balconies: 1,
		parking: 1,
		area: 1250,
		areaUnit: "Sq.Ft.",
		furnishing: "Semi-Furnished",
		facing: "East",
		floor: "5th of 15",
		age: "1-5 Years",
		possession: "Immediate",
		images: [
			"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
		],
		amenities: ["Garden", "Gym", "Security", "Parking", "Power Backup"],
		featured: false,
		verified: true,
		views: 750,
		createdAt: "2026-11-17",
		agent: {
			name: "Aarav Sharma",
			phone: "+91 98765 43210",
		},
	},
	{
		id: "PR005",
		slug: "oakwood-villa-electronic-city",
		title: "The Oakwood Villa",
		description:
			"A contemporary family villa with generous living areas, elegant interiors and private garden space.",
		location: {
			city: "Bangalore",
			area: "Electronic City",
			address: "Electronic City Phase 1, Bangalore",
		},
		propertyType: "Villa",
		listingType: "Sale",
		status: "Ready to Move",
		price: 19500000,
		priceLabel: "₹1.95 Cr",
		bedrooms: 3,
		bathrooms: 3,
		balconies: 2,
		parking: 2,
		area: 2600,
		areaUnit: "Sq.Ft.",
		furnishing: "Semi-Furnished",
		facing: "South",
		floor: "Independent",
		age: "1-5 Years",
		possession: "Immediate",
		images: [
			"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
		],
		amenities: ["Garden", "Security", "Parking", "Terrace", "Power Backup"],
		featured: false,
		verified: true,
		views: 1100,
		createdAt: "2026-11-16",
		agent: {
			name: "Riya Mehta",
			phone: "+91 98765 43211",
		},
	},
	{
		id: "PR006",
		slug: "urban-collection-jayanagar",
		title: "The Urban Collection",
		description:
			"A well-designed apartment with efficient use of space, modern finishes and convenient city access.",
		location: {
			city: "Bangalore",
			area: "Jayanagar",
			address: "Jayanagar, South Bangalore",
		},
		propertyType: "Apartment",
		listingType: "Sale",
		status: "Ready to Move",
		price: 7600000,
		priceLabel: "₹76 Lac",
		bedrooms: 2,
		bathrooms: 2,
		balconies: 1,
		parking: 1,
		area: 1100,
		areaUnit: "Sq.Ft.",
		furnishing: "Unfurnished",
		facing: "North",
		floor: "3rd of 10",
		age: "1-5 Years",
		possession: "Immediate",
		images: [
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
		],
		amenities: ["Gym", "Security", "Parking", "Power Backup"],
		featured: false,
		verified: false,
		views: 620,
		createdAt: "2026-11-15",
		agent: {
			name: "Kabir Rao",
			phone: "+91 98765 43212",
		},
	},
	{
		id: "PR007",
		slug: "serene-lakeside-apartment",
		title: "Serene Lakeside",
		description:
			"A peaceful apartment overlooking landscaped surroundings, designed for relaxed everyday living.",
		location: {
			city: "Bangalore",
			area: "Yelahanka",
			address: "Yelahanka, North Bangalore",
		},
		propertyType: "Apartment",
		listingType: "Rent",
		status: "Ready to Move",
		price: 35000,
		priceLabel: "₹35,000 / month",
		bedrooms: 2,
		bathrooms: 2,
		balconies: 2,
		parking: 1,
		area: 1350,
		areaUnit: "Sq.Ft.",
		furnishing: "Fully-Furnished",
		facing: "East",
		floor: "8th of 16",
		age: "1-5 Years",
		possession: "Immediate",
		images: [
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
		],
		amenities: ["Swimming Pool", "Garden", "Gym", "Security", "Parking"],
		featured: false,
		verified: true,
		views: 540,
		createdAt: "2026-11-14",
		agent: {
			name: "Riya Mehta",
			phone: "+91 98765 43211",
		},
	},
	{
		id: "PR008",
		slug: "royal-courtyard-villa",
		title: "Royal Courtyard",
		description:
			"A spacious luxury home with private outdoor spaces and refined architectural details.",
		location: {
			city: "Bangalore",
			area: "Devanahalli",
			address: "Devanahalli, Bangalore",
		},
		propertyType: "Villa",
		listingType: "Sale",
		status: "Under Construction",
		price: 32000000,
		priceLabel: "₹3.20 Cr",
		bedrooms: 4,
		bathrooms: 4,
		balconies: 3,
		parking: 2,
		area: 3500,
		areaUnit: "Sq.Ft.",
		furnishing: "Unfurnished",
		facing: "West",
		floor: "Independent",
		age: "Under Construction",
		possession: "June 2028",
		images: [
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
		],
		amenities: [
			"Swimming Pool",
			"Garden",
			"Gym",
			"Security",
			"Parking",
			"Clubhouse",
		],
		featured: true,
		verified: false,
		views: 1600,
		createdAt: "2026-11-13",
		agent: {
			name: "Aarav Sharma",
			phone: "+91 98765 43210",
		},
	},
];

/* ----------------------------------
   FILTER CONFIGURATION
   Easy to replace with API data later
---------------------------------- */

const propertyTypes = [
	{ id: "all", label: "All Properties", value: "All", icon: "all" },
	{
		id: "apartment",
		label: "Apartments",
		value: "Apartment",
		icon: "apartment",
	},
	{ id: "villa", label: "Villas", value: "Villa", icon: "villa" },
	{
		id: "penthouse",
		label: "Penthouses",
		value: "Penthouse",
		icon: "penthouse",
	},
	{ id: "plot", label: "Plots", value: "Plot", icon: "plot" },
	{
		id: "commercial",
		label: "Commercial",
		value: "Commercial",
		icon: "commercial",
	},
];

const locations = [
	{
		id: "whitefield",
		name: "Whitefield",
		city: "Bangalore",
		image:
			"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=700&q=80",
		count: "24 Properties",
	},
	{
		id: "hebbal",
		name: "Hebbal",
		city: "Bangalore",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
		count: "18 Properties",
	},
	{
		id: "indiranagar",
		name: "Indiranagar",
		city: "Bangalore",
		image:
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80",
		count: "15 Properties",
	},
	{
		id: "sarjapur",
		name: "Sarjapur Road",
		city: "Bangalore",
		image:
			"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80",
		count: "21 Properties",
	},
];

const bedroomOptions = [
	{ label: "Any", value: "Any" },
	{ label: "1 BHK", value: 1 },
	{ label: "2 BHK", value: 2 },
	{ label: "3 BHK", value: 3 },
	{ label: "4 BHK", value: 4 },
	{ label: "5+ BHK", value: 5 },
];

const budgetOptions = [
	{ label: "Any Budget", value: "Any" },
	{ label: "Under ₹50 Lac", value: 5000000 },
	{ label: "₹50 Lac - ₹1 Cr", value: [5000000, 10000000] },
	{ label: "₹1 Cr - ₹2 Cr", value: [10000000, 20000000] },
	{ label: "₹2 Cr - ₹3 Cr", value: [20000000, 30000000] },
	{ label: "Above ₹3 Cr", value: [30000000, Infinity] },
];

const listingOptions = [
	{ label: "Buy", value: "Sale" },
	{ label: "Rent", value: "Rent" },
];

const furnishingOptions = [
	{ label: "Any Furnishing", value: "Any" },
	{ label: "Furnished", value: "Fully-Furnished" },
	{ label: "Semi-Furnished", value: "Semi-Furnished" },
	{ label: "Unfurnished", value: "Unfurnished" },
];

const statusOptions = [
	{ label: "Any Status", value: "Any" },
	{ label: "Ready to Move", value: "Ready to Move" },
	{ label: "Under Construction", value: "Under Construction" },
];

const amenityOptions = [
	{ label: "Swimming Pool", value: "Swimming Pool" },
	{ label: "Gym", value: "Gym" },
	{ label: "Garden", value: "Garden" },
	{ label: "Security", value: "Security" },
	{ label: "Parking", value: "Parking" },
	{ label: "Clubhouse", value: "Clubhouse" },
	{ label: "Power Backup", value: "Power Backup" },
	{ label: "Terrace", value: "Terrace" },
];

const sortOptions = [
	{ label: "Newest First", value: "newest" },
	{ label: "Price: Low to High", value: "low" },
	{ label: "Price: High to Low", value: "high" },
	{ label: "Most Viewed", value: "views" },
	{ label: "Largest Area", value: "area" },
];

const benefits = [
	{
		icon: FiShield,
		title: "Verified Listings",
		description:
			"Explore properties with carefully reviewed listing information.",
	},
	{
		icon: FiAward,
		title: "Curated Properties",
		description: "Discover homes selected for quality, location and lifestyle.",
	},
	{
		icon: FiHeadphones,
		title: "Expert Assistance",
		description:
			"Get support from property specialists throughout your search.",
	},
	{
		icon: FiTrendingUp,
		title: "Market Insights",
		description: "Make more informed property decisions with local insights.",
	},
];

const steps = [
	{
		number: "01",
		title: "Explore Properties",
		description: "Browse properties by location, budget, type and lifestyle.",
	},
	{
		number: "02",
		title: "Schedule a Visit",
		description: "Connect with our team and arrange a property viewing.",
	},
	{
		number: "03",
		title: "Find Your Match",
		description: "Compare your options and choose the right property.",
	},
	{
		number: "04",
		title: "Make It Yours",
		description: "Get assistance as you move towards your property decision.",
	},
];

const faqs = [
	{
		question: "How do I find properties within my budget?",
		answer:
			"Use the budget filter to narrow listings by your preferred price range. You can also combine it with location, property type and bedroom filters.",
	},
	{
		question: "Can I schedule a property visit?",
		answer:
			"Yes. Open a property listing and contact the property team to request a visit.",
	},
	{
		question: "Are the property listings verified?",
		answer:
			"Listings marked as verified have been reviewed according to the demo platform's verification status. Always confirm legal and ownership documents independently before a transaction.",
	},
	{
		question: "Can I find properties for rent as well as sale?",
		answer:
			"Yes. Use the Buy and Rent selector to explore the relevant listings.",
	},
];

/* ----------------------------------
   REUSABLE COMPONENTS
---------------------------------- */

function SectionTitle({ eyebrow, title, description, centered = false }) {
	return (
		<div className={`mb-10 ${centered ? "mx-auto text-center" : ""}`}>
			<p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B18B39]">
				{eyebrow}
			</p>
			<h2 className="font-display text-3xl font-semibold leading-tight text-[#0B1B33] md:text-4xl">
				{title}
			</h2>
			{description && (
				<p
					className={`mt-4 max-w-2xl text-sm leading-7 text-[#5B6B82] ${centered ? "mx-auto" : ""}`}
				>
					{description}
				</p>
			)}
		</div>
	);
}

function PropertyCard({ property, favorite, onFavorite, listView = false }) {
	return (
		<motion.article
			layout
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			className={`group overflow-hidden rounded-2xl border border-[#E6E1D6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B1B33]/10 ${
				listView ? "md:flex" : ""
			}`}
		>
			<div
				className={`relative overflow-hidden ${listView ? "md:w-[40%]" : ""}`}
			>
				<img
					src={property.images?.[0]}
					alt={property.title}
					loading="lazy"
					className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
						listView ? "h-[250px] md:h-full" : "h-[245px]"
					}`}
				/>

				<div className="absolute left-4 top-4 flex flex-wrap gap-2">
					<span className="rounded-full bg-[#0B1B33] px-3 py-1.5 text-[11px] font-semibold text-white">
						For {property.listingType}
					</span>

					{property.featured && (
						<span className="rounded-full bg-[#E4C77B] px-3 py-1.5 text-[11px] font-bold text-[#0B1B33]">
							Featured
						</span>
					)}
				</div>

				{property.verified && (
					<span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#0B1B33]">
						<FiCheckCircle className="text-green-600" />
						Verified
					</span>
				)}

				<button
					onClick={() => onFavorite(property.id)}
					aria-label="Toggle favorite"
					className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#0B1B33] shadow-md transition hover:bg-[#E4C77B]"
				>
					<FiHeart
						size={18}
						className={favorite ? "fill-red-500 text-red-500" : ""}
					/>
				</button>
			</div>

			<div className={`flex flex-1 flex-col p-5 ${listView ? "md:p-7" : ""}`}>
				<div className="mb-2 flex items-center gap-1.5 text-xs text-[#5B6B82]">
					<FiMapPin className="text-[#C9A24B]" />
					{property.location.area}, {property.location.city}
				</div>

				<div className="flex flex-wrap items-start justify-between gap-3">
					<div>
						<h3 className="text-xl font-semibold text-[#0B1B33]">
							{property.title}
						</h3>
						<p className="mt-1 text-xs text-[#5B6B82]">
							{property.propertyType} · {property.status}
						</p>
					</div>

					<div className="text-right">
						<p className="text-xl font-bold text-[#0B1B33]">
							{property.priceLabel}
						</p>
						{property.listingType === "Rent" && (
							<p className="text-[11px] text-[#5B6B82]">Monthly</p>
						)}
					</div>
				</div>

				<p className="mt-4 line-clamp-2 text-sm leading-6 text-[#5B6B82]">
					{property.description}
				</p>

				<div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-[#E6E1D6] py-4 text-xs text-[#5B6B82]">
					<span className="flex items-center gap-2">
						<FaBed className="text-[#C9A24B]" />
						{property.bedrooms} Beds
					</span>
					<span className="flex items-center gap-2">
						<FaBath className="text-[#C9A24B]" />
						{property.bathrooms} Baths
					</span>
					<span className="flex items-center gap-2">
						<FiMaximize2 className="text-[#C9A24B]" />
						{property.area.toLocaleString("en-IN")} Sq.Ft.
					</span>
					<span className="flex items-center gap-2">
						<FaCar className="text-[#C9A24B]" />
						{property.parking} Parking
					</span>
				</div>

				<div className="mt-auto flex items-center justify-between gap-3 pt-5">
					<span className="text-xs text-[#5B6B82]">{property.furnishing}</span>

					<Link
						href={`/properties/${property.slug}`}
						className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1B33] transition hover:text-[#A8832F]"
					>
						View Details
						<FiArrowUpRight size={18} />
					</Link>
				</div>
			</div>
		</motion.article>
	);
}

function SelectField({ label, value, onChange, options }) {
	return (
		<label className="block">
			<span className="mb-2 block text-xs font-semibold text-[#5B6B82]">
				{label}
			</span>
			<select
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className="w-full rounded-lg border border-[#E6E1D6] bg-[#FAF7F2] px-3 py-3 text-sm text-[#0B1B33] outline-none focus:border-[#C9A24B]"
			>
				{options.map((option) => (
					<option key={option.label} value={String(option.value)}>
						{option.label}
					</option>
				))}
			</select>
		</label>
	);
}

/* ----------------------------------
   MAIN PAGE
---------------------------------- */

export default function PropertiesPage() {
	const [search, setSearch] = useState("");
	const [listingType, setListingType] = useState("Sale");
	const [propertyType, setPropertyType] = useState("All");
	const [location, setLocation] = useState("All");
	const [bedrooms, setBedrooms] = useState("Any");
	const [budget, setBudget] = useState("Any");
	const [furnishing, setFurnishing] = useState("Any");
	const [status, setStatus] = useState("Any");
	const [amenities, setAmenities] = useState([]);
	const [sort, setSort] = useState("newest");
	const [favorites, setFavorites] = useState([]);
	const [view, setView] = useState("grid");
	const [showMobileFilters, setShowMobileFilters] = useState(false);
	const [activeFaq, setActiveFaq] = useState(0);
	const [visibleCount, setVisibleCount] = useState(6);

	const filteredProperties = useMemo(() => {
		let result = properties.filter((property) => {
			const searchText = [
				property.title,
				property.description,
				property.location.area,
				property.location.city,
				property.location.address,
				property.propertyType,
			]
				.join(" ")
				.toLowerCase();

			const matchesSearch = searchText.includes(search.toLowerCase());

			const matchesListing = property.listingType === listingType;

			const matchesType =
				propertyType === "All" || property.propertyType === propertyType;

			const matchesLocation =
				location === "All" || property.location.area === location;

			const matchesBedrooms =
				bedrooms === "Any" ||
				(bedrooms === "5"
					? property.bedrooms >= 5
					: property.bedrooms >= Number(bedrooms));

			const selectedBudget = budgetOptions.find(
				(item) => String(item.value) === budget,
			)?.value;

			let matchesBudget = true;

			if (Array.isArray(selectedBudget)) {
				matchesBudget =
					property.price >= selectedBudget[0] &&
					property.price < selectedBudget[1];
			} else if (typeof selectedBudget === "number") {
				matchesBudget = property.price <= selectedBudget;
			}

			const matchesFurnishing =
				furnishing === "Any" || property.furnishing === furnishing;

			const matchesStatus = status === "Any" || property.status === status;

			const matchesAmenities = amenities.every((amenity) =>
				property.amenities.includes(amenity),
			);

			return (
				matchesSearch &&
				matchesListing &&
				matchesType &&
				matchesLocation &&
				matchesBedrooms &&
				matchesBudget &&
				matchesFurnishing &&
				matchesStatus &&
				matchesAmenities
			);
		});

		if (sort === "low") result.sort((a, b) => a.price - b.price);
		if (sort === "high") result.sort((a, b) => b.price - a.price);
		if (sort === "views") result.sort((a, b) => b.views - a.views);
		if (sort === "area") result.sort((a, b) => b.area - a.area);
		if (sort === "newest") {
			result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		}

		return result;
	}, [
		search,
		listingType,
		propertyType,
		location,
		bedrooms,
		budget,
		furnishing,
		status,
		amenities,
		sort,
	]);

	const toggleFavorite = (id) => {
		setFavorites((current) =>
			current.includes(id)
				? current.filter((item) => item !== id)
				: [...current, id],
		);
	};

	const toggleAmenity = (value) => {
		setAmenities((current) =>
			current.includes(value)
				? current.filter((item) => item !== value)
				: [...current, value],
		);
	};

	const clearFilters = () => {
		setSearch("");
		setListingType("Sale");
		setPropertyType("All");
		setLocation("All");
		setBedrooms("Any");
		setBudget("Any");
		setFurnishing("Any");
		setStatus("Any");
		setAmenities([]);
		setSort("newest");
		setVisibleCount(6);
	};

	const featuredProperties = properties.filter((property) => property.featured);

	const visibleProperties = filteredProperties.slice(0, visibleCount);

	return (
		<main className="overflow-hidden bg-[#FAF7F2]">
			{/* HERO */}
			<section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#0B1B33] px-5 pb-20 pt-36 md:min-h-[720px] md:pt-40">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=90"
						alt="Luxury residential interior"
						className="h-full w-full object-cover "
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
					<div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
				</div>

				<div className="relative mx-auto w-full max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="max-w-3xl"
					>
						<span className="inline-flex items-center gap-2 rounded-full border border-[#E4C77B]/30 bg-[#E4C77B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C77B]">
							<FiStar />
							Discover Exceptional Living
						</span>

						<h1 className="mt-7 font-display text-5xl font-semibold leading-[1.1] text-white md:text-7xl">
							Find a Place
							<br />
							<span className="text-gold-gradient">That Feels Like Yours.</span>
						</h1>

						<p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
							Explore thoughtfully selected homes, premium apartments and
							exceptional properties in locations that match your lifestyle.
						</p>

						<div className="mt-9 flex flex-wrap gap-4">
							<a
								href="#property-listings"
								className="inline-flex items-center gap-3 rounded-lg bg-gold-gradient px-7 py-4 text-sm font-bold text-[#0B1B33] transition hover:-translate-y-1"
							>
								Explore Properties
								<FiArrowUpRight size={19} />
							</a>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 rounded-lg border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#E4C77B] hover:text-[#E4C77B]"
							>
								Talk to an Expert
							</Link>
						</div>
					</motion.div>

					<div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
						{[
							{ number: "250+", label: "Listed Properties" },
							{ number: "18+", label: "Prime Locations" },
							{ number: "120+", label: "Happy Clients" },
						].map((item) => (
							<div key={item.label}>
								<p className="font-display text-3xl font-semibold text-[#E4C77B] md:text-4xl">
									{item.number}
								</p>
								<p className="mt-2 text-xs text-white/55 md:text-sm">
									{item.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* QUICK SEARCH */}
			<section className="relative z-10 -mt-10 px-5">
				<div className="mx-auto max-w-7xl rounded-2xl border border-[#E6E1D6] bg-white p-4 shadow-xl md:p-6">
					<div className="mb-5 flex flex-wrap items-center justify-between gap-4">
						<div>
							<p className="font-display text-xl font-semibold text-[#0B1B33]">
								Find Your Perfect Property
							</p>
							<p className="mt-1 text-xs text-[#5B6B82]">
								Start with your preferred location and property type.
							</p>
						</div>

						<div className="flex rounded-lg bg-[#F4F1EA] p-1">
							{listingOptions.map((item) => (
								<button
									key={item.value}
									onClick={() => setListingType(item.value)}
									className={`rounded-md px-6 py-2.5 text-sm font-semibold transition ${
										listingType === item.value
											? "bg-[#0B1B33] text-white shadow"
											: "text-[#5B6B82]"
									}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					<div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_auto]">
						<div className="relative">
							<FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A24B]" />
							<input
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Search by property, area or city..."
								className="w-full rounded-lg border border-[#E6E1D6] bg-[#FAF7F2] py-4 pl-11 pr-4 text-sm text-[#0B1B33] outline-none focus:border-[#C9A24B]"
							/>
						</div>

						<select
							value={location}
							onChange={(event) => setLocation(event.target.value)}
							className="rounded-lg border border-[#E6E1D6] bg-[#FAF7F2] px-4 py-4 text-sm text-[#0B1B33] outline-none"
						>
							<option value="All">All Locations</option>
							{locations.map((item) => (
								<option key={item.id} value={item.name}>
									{item.name}
								</option>
							))}
						</select>

						<select
							value={propertyType}
							onChange={(event) => setPropertyType(event.target.value)}
							className="rounded-lg border border-[#E6E1D6] bg-[#FAF7F2] px-4 py-4 text-sm text-[#0B1B33] outline-none"
						>
							{propertyTypes.map((item) => (
								<option key={item.id} value={item.value}>
									{item.label}
								</option>
							))}
						</select>

						<button
							onClick={() => {
								document.getElementById("property-listings")?.scrollIntoView({
									behavior: "smooth",
								});
							}}
							className="flex items-center justify-center gap-2 rounded-lg bg-[#0B1B33] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1E3E6D]"
						>
							Search <FiSearch />
						</button>
					</div>
				</div>
			</section>

			{/* PROPERTY TYPES */}
			<section className="px-5 py-24">
				<div className="mx-auto max-w-7xl">
					<SectionTitle
						eyebrow="Explore By Property Type"
						title="Find a Space That Fits Your Lifestyle"
						description="From modern city apartments to spacious family villas, explore properties designed around different ways of living."
					/>

					<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
						{propertyTypes.slice(1).map((item, index) => {
							const images = [
								"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
								"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
								"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
								"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
								"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
							];

							return (
								<button
									key={item.id}
									onClick={() => {
										setPropertyType(item.value);
										document
											.getElementById("property-listings")
											?.scrollIntoView({
												behavior: "smooth",
											});
									}}
									className="group relative h-48 overflow-hidden rounded-xl text-left md:h-56"
								>
									<img
										src={images[index]}
										alt={item.label}
										loading="lazy"
										className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/95 via-[#0B1B33]/20 to-transparent" />
									<div className="absolute bottom-5 left-5 right-4">
										<p className="text-lg font-semibold text-white">
											{item.label}
										</p>
										<span className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-[#E4C77B]">
											Explore <FiArrowUpRight />
										</span>
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</section>

			{/* FEATURED PROPERTIES */}
			<section className="bg-white px-5 py-24">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<SectionTitle
							eyebrow="Handpicked For You"
							title="Featured Properties"
							description="Explore a selection of standout properties chosen for their location, design and lifestyle appeal."
						/>
						<Link
							href="#property-listings"
							className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0B1B33] hover:text-[#A8832F]"
						>
							Explore All Properties <FiArrowUpRight />
						</Link>
					</div>

					<div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
						{featuredProperties.slice(0, 3).map((property) => (
							<PropertyCard
								key={property.id}
								property={property}
								favorite={favorites.includes(property.id)}
								onFavorite={toggleFavorite}
							/>
						))}
					</div>
				</div>
			</section>

			{/* POPULAR LOCATIONS */}
			<section className="px-5 py-24">
				<div className="mx-auto max-w-7xl">
					<SectionTitle
						eyebrow="Discover Neighbourhoods"
						title="Explore Popular Locations"
						description="Find the right neighbourhood with access to the lifestyle, connectivity and conveniences that matter to you."
					/>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{locations.map((item) => (
							<button
								key={item.id}
								onClick={() => {
									setLocation(item.name);
									document.getElementById("property-listings")?.scrollIntoView({
										behavior: "smooth",
									});
								}}
								className="group relative h-[310px] overflow-hidden rounded-2xl text-left"
							>
								<img
									src={item.image}
									alt={item.name}
									loading="lazy"
									className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/20 to-transparent" />
								<div className="absolute bottom-6 left-6">
									<p className="text-xs font-semibold uppercase tracking-wider text-[#E4C77B]">
										{item.city}
									</p>
									<h3 className="mt-2 text-2xl font-semibold text-white">
										{item.name}
									</h3>
									<p className="mt-2 text-xs text-white/65">{item.count}</p>
								</div>
								<span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B1B33] transition group-hover:bg-[#E4C77B]">
									<FiArrowUpRight />
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* ALL PROPERTY LISTINGS */}
			<section id="property-listings" className="bg-[#F4F1EA] px-5 py-24">
				<div className="mx-auto max-w-7xl">
					<SectionTitle
						eyebrow="The Property Collection"
						title="Explore All Available Properties"
						description="Use the filters to find properties that match your location, budget, space requirements and preferred amenities."
					/>

					<div className="grid items-start gap-8 lg:grid-cols-[280px_1fr]">
						{/* DESKTOP FILTER SIDEBAR */}
						<aside className="hidden rounded-2xl border border-[#E6E1D6] bg-white p-6 lg:block">
							<div className="mb-6 flex items-center justify-between">
								<h3 className="flex items-center gap-2 font-semibold text-[#0B1B33]">
									<FiSliders className="text-[#C9A24B]" />
									Filters
								</h3>
								<button
									onClick={clearFilters}
									className="text-xs font-semibold text-[#A8832F] hover:underline"
								>
									Reset All
								</button>
							</div>

							<div className="space-y-6">
								<SelectField
									label="Property Type"
									value={propertyType}
									onChange={setPropertyType}
									options={propertyTypes.map((item) => ({
										label: item.label,
										value: item.value,
									}))}
								/>

								<SelectField
									label="Location"
									value={location}
									onChange={setLocation}
									options={[
										{ label: "All Locations", value: "All" },
										...locations.map((item) => ({
											label: item.name,
											value: item.name,
										})),
									]}
								/>

								<SelectField
									label="Bedrooms"
									value={bedrooms}
									onChange={setBedrooms}
									options={bedroomOptions}
								/>

								<SelectField
									label="Budget"
									value={budget}
									onChange={setBudget}
									options={budgetOptions.map((item) => ({
										label: item.label,
										value: String(item.value),
									}))}
								/>

								<SelectField
									label="Furnishing"
									value={furnishing}
									onChange={setFurnishing}
									options={furnishingOptions}
								/>

								<SelectField
									label="Property Status"
									value={status}
									onChange={setStatus}
									options={statusOptions}
								/>

								<div>
									<p className="mb-3 text-xs font-semibold text-[#5B6B82]">
										Amenities
									</p>
									<div className="space-y-3">
										{amenityOptions.map((item) => (
											<label
												key={item.value}
												className="flex cursor-pointer items-center gap-3 text-sm text-[#0B1B33]"
											>
												<input
													type="checkbox"
													checked={amenities.includes(item.value)}
													onChange={() => toggleAmenity(item.value)}
													className="h-4 w-4 accent-[#C9A24B]"
												/>
												{item.label}
											</label>
										))}
									</div>
								</div>
							</div>
						</aside>

						{/* MOBILE FILTER PANEL */}
						<AnimatePresence>
							{showMobileFilters && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="fixed inset-0 z-[100] flex justify-end bg-[#0B1B33]/60 lg:hidden"
									onClick={() => setShowMobileFilters(false)}
								>
									<motion.div
										initial={{ x: "100%" }}
										animate={{ x: 0 }}
										exit={{ x: "100%" }}
										transition={{ duration: 0.25 }}
										onClick={(event) => event.stopPropagation()}
										className="h-full w-full max-w-sm overflow-y-auto bg-white p-6"
									>
										<div className="mb-7 flex items-center justify-between">
											<h3 className="text-xl font-semibold text-[#0B1B33]">
												Property Filters
											</h3>
											<button onClick={() => setShowMobileFilters(false)}>
												<FiX size={22} />
											</button>
										</div>

										<div className="space-y-5">
											<SelectField
												label="Property Type"
												value={propertyType}
												onChange={setPropertyType}
												options={propertyTypes.map((item) => ({
													label: item.label,
													value: item.value,
												}))}
											/>

											<SelectField
												label="Location"
												value={location}
												onChange={setLocation}
												options={[
													{ label: "All Locations", value: "All" },
													...locations.map((item) => ({
														label: item.name,
														value: item.name,
													})),
												]}
											/>

											<SelectField
												label="Bedrooms"
												value={bedrooms}
												onChange={setBedrooms}
												options={bedroomOptions}
											/>

											<SelectField
												label="Budget"
												value={budget}
												onChange={setBudget}
												options={budgetOptions.map((item) => ({
													label: item.label,
													value: String(item.value),
												}))}
											/>

											<SelectField
												label="Furnishing"
												value={furnishing}
												onChange={setFurnishing}
												options={furnishingOptions}
											/>

											<SelectField
												label="Property Status"
												value={status}
												onChange={setStatus}
												options={statusOptions}
											/>

											<div>
												<p className="mb-3 text-xs font-semibold text-[#5B6B82]">
													Amenities
												</p>
												<div className="grid grid-cols-2 gap-3">
													{amenityOptions.map((item) => (
														<label
															key={item.value}
															className="flex items-center gap-2 text-xs text-[#0B1B33]"
														>
															<input
																type="checkbox"
																checked={amenities.includes(item.value)}
																onChange={() => toggleAmenity(item.value)}
																className="accent-[#C9A24B]"
															/>
															{item.label}
														</label>
													))}
												</div>
											</div>

											<div className="flex gap-3 pt-4">
												<button
													onClick={clearFilters}
													className="flex-1 rounded-lg border border-[#E6E1D6] py-3 text-sm font-semibold text-[#0B1B33]"
												>
													Reset
												</button>
												<button
													onClick={() => setShowMobileFilters(false)}
													className="flex-1 rounded-lg bg-[#0B1B33] py-3 text-sm font-semibold text-white"
												>
													Show Results
												</button>
											</div>
										</div>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* LISTINGS AREA */}
						<div>
							<div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#E6E1D6] bg-white p-4">
								<div>
									<p className="text-lg font-semibold text-[#0B1B33]">
										{filteredProperties.length} Properties Found
									</p>
									<p className="mt-1 text-xs text-[#5B6B82]">
										Showing properties matching your selection
									</p>
								</div>

								<div className="flex flex-wrap items-center gap-2">
									<button
										onClick={() => setShowMobileFilters(true)}
										className="flex items-center gap-2 rounded-lg border border-[#E6E1D6] px-3 py-2.5 text-sm font-semibold text-[#0B1B33] lg:hidden"
									>
										<FiSliders /> Filters
									</button>

									<select
										value={sort}
										onChange={(event) => setSort(event.target.value)}
										className="rounded-lg border border-[#E6E1D6] bg-[#FAF7F2] px-3 py-2.5 text-xs text-[#0B1B33] outline-none"
									>
										{sortOptions.map((item) => (
											<option key={item.value} value={item.value}>
												{item.label}
											</option>
										))}
									</select>

									<div className="flex rounded-lg border border-[#E6E1D6] p-1">
										<button
											onClick={() => setView("grid")}
											className={`rounded-md p-2 ${view === "grid" ? "bg-[#0B1B33] text-white" : "text-[#5B6B82]"}`}
											aria-label="Grid view"
										>
											<FiGrid />
										</button>
										<button
											onClick={() => setView("list")}
											className={`rounded-md p-2 ${view === "list" ? "bg-[#0B1B33] text-white" : "text-[#5B6B82]"}`}
											aria-label="List view"
										>
											<FiList />
										</button>
									</div>
								</div>
							</div>

							{/* Active filter chips */}
							<div className="mb-5 flex flex-wrap gap-2">
								{[
									...(propertyType !== "All" ? [propertyType] : []),
									...(location !== "All" ? [location] : []),
									...(bedrooms !== "Any" ? [`${bedrooms}+ Bedrooms`] : []),
									...amenities,
								].map((item) => (
									<span
										key={item}
										className="rounded-full border border-[#C9A24B]/40 bg-white px-3 py-1.5 text-xs text-[#0B1B33]"
									>
										{item}
									</span>
								))}
							</div>

							{visibleProperties.length > 0 ? (
								<div
									className={
										view === "grid"
											? "grid gap-6 xl:grid-cols-2"
											: "grid grid-cols-1 gap-6"
									}
								>
									{visibleProperties.map((property) => (
										<PropertyCard
											key={property.id}
											property={property}
											favorite={favorites.includes(property.id)}
											onFavorite={toggleFavorite}
											listView={view === "list"}
										/>
									))}
								</div>
							) : (
								<div className="rounded-2xl border border-[#E6E1D6] bg-white px-6 py-20 text-center">
									<FiHome className="mx-auto mb-4 text-4xl text-[#C9A24B]" />
									<h3 className="text-xl font-semibold text-[#0B1B33]">
										No matching properties
									</h3>
									<p className="mt-3 text-sm text-[#5B6B82]">
										Try changing your filters or searching another location.
									</p>
									<button
										onClick={clearFilters}
										className="mt-6 rounded-lg bg-[#0B1B33] px-6 py-3 text-sm font-semibold text-white"
									>
										Clear Filters
									</button>
								</div>
							)}

							{visibleCount < filteredProperties.length && (
								<div className="mt-10 text-center">
									<button
										onClick={() => setVisibleCount((count) => count + 6)}
										className="inline-flex items-center gap-3 rounded-lg border border-[#0B1B33] px-8 py-4 text-sm font-bold text-[#0B1B33] transition hover:bg-[#0B1B33] hover:text-white"
									>
										Load More Properties
										<FiArrowRight />
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="bg-white px-5 py-24">
				<div className="mx-auto max-w-7xl">
					<div className="grid items-center gap-14 lg:grid-cols-2">
						<div>
							<SectionTitle
								eyebrow="A Better Property Experience"
								title="More Than Finding a Property. Finding the Right One."
								description="The right property is about more than price and square footage. It is about location, comfort, convenience and the life you want to build."
							/>

							<div className="grid gap-6 sm:grid-cols-2">
								{benefits.map((item) => {
									const Icon = item.icon;

									return (
										<div key={item.title} className="flex gap-4">
											<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F1EA] text-xl text-[#B18B39]">
												<Icon />
											</div>
											<div>
												<h3 className="font-semibold text-[#0B1B33]">
													{item.title}
												</h3>
												<p className="mt-2 text-xs leading-6 text-[#5B6B82]">
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85"
								alt="Premium property interior"
								loading="lazy"
								className="h-[520px] w-full rounded-2xl object-cover"
							/>
							<div className="absolute -bottom-7 -left-5 max-w-[240px] rounded-xl bg-[#0B1B33] p-6 shadow-xl md:-left-8">
								<FiAward className="text-3xl text-[#E4C77B]" />
								<p className="mt-4 font-display text-2xl font-semibold text-white">
									Thoughtfully Selected
								</p>
								<p className="mt-2 text-xs leading-6 text-white/60">
									A property discovery experience focused on quality and
									clarity.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* PROPERTY JOURNEY */}
			<section className="px-5 py-24">
				<div className="mx-auto max-w-7xl">
					<SectionTitle
						eyebrow="Simple From Start to Finish"
						title="Your Property Journey, Made Easier"
						description="A clear process to help you move from browsing properties to making a confident decision."
						centered
					/>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{steps.map((step) => (
							<div
								key={step.number}
								className="rounded-2xl border border-[#E6E1D6] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
							>
								<p className="font-display text-5xl font-semibold text-[#C9A24B]/50">
									{step.number}
								</p>
								<h3 className="mt-7 text-xl font-semibold text-[#0B1B33]">
									{step.title}
								</h3>
								<p className="mt-3 text-sm leading-7 text-[#5B6B82]">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* VIRTUAL TOUR PROMOTION */}
			<section className="px-5 pb-24">
				<div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#0B1B33] lg:grid-cols-2">
					<div className="flex flex-col justify-center p-8 md:p-14">
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4C77B]">
							Experience Before You Visit
						</p>
						<h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
							Step Inside Your Future Home.
						</h2>
						<p className="mt-5 text-sm leading-7 text-white/65">
							Explore selected properties through an interactive virtual tour.
							Discover room layouts and experience the space from a first-person
							perspective.
						</p>
						<Link
							href="/properties/2bhk-virtual-tour"
							className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-gold-gradient px-7 py-4 text-sm font-bold text-[#0B1B33] transition hover:scale-[1.03]"
						>
							Explore 3D Virtual Tour
							<FiArrowUpRight />
						</Link>
					</div>

					<div className="relative min-h-[320px] lg:min-h-[480px]">
						<img
							src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85"
							alt="Virtual tour of a modern apartment"
							loading="lazy"
							className="absolute inset-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33]/30 to-transparent" />
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-white px-5 py-24">
				<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<SectionTitle
							eyebrow="Common Questions"
							title="Everything You Need to Know"
							description="A few helpful answers to make your property search simpler."
						/>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 text-sm font-bold text-[#A8832F]"
						>
							Have another question? Contact us <FiArrowUpRight />
						</Link>
					</div>

					<div className="space-y-3">
						{faqs.map((item, index) => (
							<div
								key={item.question}
								className="rounded-xl border border-[#E6E1D6] bg-[#FAF7F2] px-5"
							>
								<button
									onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
									className="flex w-full items-center justify-between gap-5 py-5 text-left"
								>
									<span className="font-semibold text-[#0B1B33]">
										{item.question}
									</span>
									<FiChevronDown
										className={`shrink-0 text-[#B18B39] transition ${
											activeFaq === index ? "rotate-180" : ""
										}`}
									/>
								</button>

								<AnimatePresence>
									{activeFaq === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											className="overflow-hidden"
										>
											<p className="pb-5 text-sm leading-7 text-[#5B6B82]">
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="px-5 py-24">
				<div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0B1B33] px-7 py-16 text-center md:px-16 md:py-24">
					<div className="absolute -right-24 -top-36 h-96 w-96 rounded-full bg-[#C9A24B]/10 blur-[90px]" />
					<div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#1E3E6D]/60 blur-[90px]" />

					<div className="relative">
						<FiKey className="mx-auto text-4xl text-[#E4C77B]" />
						<p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C77B]">
							Your Next Chapter Starts Here
						</p>
						<h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
							Let's Find the Place You'll Love Coming Home To.
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
							Tell us what you're looking for. Our team can help you explore
							suitable properties and take the next step.
						</p>

						<div className="mt-9 flex flex-wrap justify-center gap-4">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 rounded-lg bg-gold-gradient px-7 py-4 text-sm font-bold text-[#0B1B33] transition hover:scale-[1.03]"
							>
								Contact Our Team <FiArrowUpRight />
							</Link>
							<a
								href="tel:+919876543210"
								className="inline-flex items-center gap-3 rounded-lg border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#E4C77B] hover:text-[#E4C77B]"
							>
								<FiPhone /> Call Us
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
