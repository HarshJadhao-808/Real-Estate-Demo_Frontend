"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import {
	FiSearch,
	FiMapPin,
	FiArrowUpRight,
	FiArrowRight,
	FiHeart,
	FiMaximize2,
	FiChevronDown,
	FiHome,
	FiShield,
	FiAward,
	FiHeadphones,
	FiCheck,
} from "react-icons/fi";

import { FaBed, FaBath } from "react-icons/fa";
import { FaRegBuilding, FaHouse, FaCity, FaTree } from "react-icons/fa6";

// --------------------------------------------------
// STATIC DATA
// --------------------------------------------------

const properties = [
	{
		id: 1,
		title: "The Grand Residences",
		location: "Baner, Pune",
		type: "Apartment",
		price: 18500000,
		priceLabel: "₹1.85 Cr",
		beds: 3,
		baths: 3,
		area: 1850,
		status: "For Sale",
		featured: true,
		image:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
	},
	{
		id: 2,
		title: "Villa Serenity",
		location: "Whitefield, Bangalore",
		type: "Villa",
		price: 32500000,
		priceLabel: "₹3.25 Cr",
		beds: 4,
		baths: 4,
		area: 3200,
		status: "For Sale",
		featured: true,
		image:
			"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=85",
	},
	{
		id: 3,
		title: "The Urban Heights",
		location: "Hinjewadi, Pune",
		type: "Apartment",
		price: 9200000,
		priceLabel: "₹92 Lac",
		beds: 2,
		baths: 2,
		area: 1150,
		status: "For Sale",
		featured: true,
		image:
			"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=85",
	},
	{
		id: 4,
		title: "Palm Grove Estate",
		location: "Lonavala, Maharashtra",
		type: "Villa",
		price: 45000000,
		priceLabel: "₹4.5 Cr",
		beds: 5,
		baths: 5,
		area: 4100,
		status: "For Sale",
		featured: true,
		image:
			"https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1000&q=85",
	},
	{
		id: 5,
		title: "Skyline Penthouse",
		location: "Koregaon Park, Pune",
		type: "Penthouse",
		price: 27500000,
		priceLabel: "₹2.75 Cr",
		beds: 4,
		baths: 4,
		area: 2600,
		status: "For Sale",
		featured: true,
		image:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
	},
	{
		id: 6,
		title: "The Oakwood Residence",
		location: "Powai, Mumbai",
		type: "Apartment",
		price: 21000000,
		priceLabel: "₹2.1 Cr",
		beds: 3,
		baths: 3,
		area: 1900,
		status: "For Sale",
		featured: true,
		image:
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=85",
	},
];

const categories = [
	{
		title: "Luxury Villas",
		subtitle: "Private spaces, exceptional living",
		type: "Villa",
		icon: FaHouse,
		image:
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85",
	},
	{
		title: "Apartments",
		subtitle: "Modern city living",
		type: "Apartment",
		icon: FaRegBuilding,
		image:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
	},
	{
		title: "Penthouses",
		subtitle: "Elevated luxury and views",
		type: "Penthouse",
		icon: FaCity,
		image:
			"https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85",
	},
	{
		title: "Independent Homes",
		subtitle: "Space to make your own",
		type: "Villa",
		icon: FaTree,
		image:
			"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85",
	},
];

const locations = [
	{
		name: "Pune",
		count: "120+ Properties",
		image:
			"https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=900&q=85",
	},
	{
		name: "Mumbai",
		count: "95+ Properties",
		image:
			"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=85",
	},
	{
		name: "Bangalore",
		count: "85+ Properties",
		image:
			"https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=85",
	},
];

// --------------------------------------------------
// REUSABLE COMPONENTS
// --------------------------------------------------

function SectionHeading({ eyebrow, title, description, align = "left" }) {
	return (
		<div
			className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
		>
			<span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
				<span className="h-px w-7 bg-gold" />
				{eyebrow}
				<span className="h-px w-7 bg-gold" />
			</span>

			<h2 className="font-display text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">
				{title}
			</h2>

			{description && (
				<p className="mt-5 text-sm leading-7 text-muted md:text-base">
					{description}
				</p>
			)}
		</div>
	);
}

function PropertyCard({ property, index }) {
	const [liked, setLiked] = useState(false);

	return (
		<motion.article
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.5, delay: index * 0.08 }}
			className="group overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/10"
		>
			<div className="relative h-64 overflow-hidden">
				<img
					src={property.image}
					alt={property.title}
					className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				/>

				<div className="absolute left-4 top-4 rounded-full bg-ink/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-paper backdrop-blur">
					{property.status}
				</div>

				<button
					onClick={() => setLiked(!liked)}
					aria-label={liked ? "Remove from favorites" : "Add to favorites"}
					className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition-all ${
						liked
							? "bg-gold text-ink"
							: "bg-white/90 text-ink hover:bg-gold hover:text-ink"
					}`}
				>
					<FiHeart size={17} className={liked ? "fill-current" : ""} />
				</button>

				<div className="absolute bottom-4 left-4 rounded-lg bg-gold-gradient px-4 py-2 text-sm font-bold text-ink shadow-lg">
					{property.priceLabel}
				</div>
			</div>

			<div className="p-5">
				<div className="mb-3 flex items-center gap-2 text-xs text-muted">
					<FiMapPin className="text-gold-dark" />
					{property.location}
				</div>

				<h3 className="font-display text-xl text-ink transition-colors group-hover:text-navy">
					{property.title}
				</h3>

				<p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">
					{property.type}
				</p>

				<div className="my-5 h-px bg-line" />

				<div className="flex items-center justify-between text-xs text-muted">
					<span className="flex items-center gap-2">
						<FaBed className="text-gold-dark" size={16} />
						{property.beds} Beds
					</span>

					<span className="flex items-center gap-2">
						<FaBath className="text-gold-dark" size={16} />
						{property.baths} Baths
					</span>

					<span className="flex items-center gap-2">
						<FiMaximize2 className="text-gold-dark" size={15} />
						{property.area} Sq.Ft.
					</span>
				</div>

				<Link
					href={`/properties/${property.id}`}
					className="mt-5 flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-all hover:border-gold hover:bg-gold/10"
				>
					View Property
					<FiArrowUpRight size={18} className="text-gold-dark" />
				</Link>
			</div>
		</motion.article>
	);
}

// --------------------------------------------------
// HOMEPAGE
// --------------------------------------------------

export default function HomePage() {
	const [keyword, setKeyword] = useState("");
	const [propertyType, setPropertyType] = useState("All Types");
	const [maxPrice, setMaxPrice] = useState("Any Budget");
	const [searchResults, setSearchResults] = useState(null);

	const filteredProperties = useMemo(() => {
		if (!searchResults) return properties.slice(0, 3);

		return properties.filter((property) => {
			const matchesKeyword =
				!searchResults.keyword ||
				`${property.title} ${property.location}`
					.toLowerCase()
					.includes(searchResults.keyword.toLowerCase());

			const matchesType =
				searchResults.type === "All Types" ||
				property.type === searchResults.type;

			const matchesPrice =
				searchResults.price === "Any Budget" ||
				property.price <= Number(searchResults.price);

			return matchesKeyword && matchesType && matchesPrice;
		});
	}, [searchResults]);

	const handleSearch = (e) => {
		e.preventDefault();

		setSearchResults({
			keyword,
			type: propertyType,
			price: maxPrice,
		});

		document.getElementById("featured-properties")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	const handleCategory = (type) => {
		setKeyword("");
		setPropertyType(type);
		setMaxPrice("Any Budget");

		setSearchResults({
			keyword: "",
			type,
			price: "Any Budget",
		});

		document.getElementById("featured-properties")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<main className="overflow-hidden bg-cream">
			{/* =========================================
          HERO SECTION
      ========================================= */}

			<section className="relative flex min-h-[780px] items-center bg-ink pt-28 md:min-h-[850px]">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=90"
						alt="Luxury modern residence"
						className="h-full w-full object-cover object-center"
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
					<div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
				</div>

				<div className="relative mx-auto w-full max-w-7xl px-6 pb-36 pt-16 md:pb-48">
					<motion.div
						initial={{ opacity: 0, y: 35 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl"
					>
						<span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
							<span className="h-px w-10 bg-gold" />A Better Way to Find Home
						</span>

						<h1 className="mt-7 font-display text-5xl leading-[1.1] text-paper sm:text-6xl md:text-7xl lg:text-[82px]">
							Discover a Place
							<br />
							Beyond <span className="text-gold-gradient">Ordinary.</span>
						</h1>

						<p className="mt-7 max-w-xl text-sm leading-8 text-paper/70 md:text-base">
							Explore exceptional properties, discover inspiring spaces, and
							find a home that reflects the way you want to live.
						</p>

						<div className="mt-9 flex flex-wrap items-center gap-5">
							<Link
								href="/properties"
								className="inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-sm font-bold text-ink shadow-xl shadow-gold/10 transition-all hover:-translate-y-1"
							>
								Explore Properties
								<FiArrowUpRight size={18} />
							</Link>

							<Link
								href="/about"
								className="inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors hover:text-gold-light"
							>
								Discover Our Story
								<FiArrowRight size={17} />
							</Link>
						</div>
					</motion.div>
				</div>

				{/* Search Panel */}
				<motion.div
					initial={{ opacity: 0, y: 35 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.7 }}
					className="absolute -bottom-28 left-1/2 z-10 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl bg-white p-5 shadow-2xl shadow-ink/15 md:-bottom-16 md:p-8"
				>
					<div className="mb-5 flex items-center gap-3">
						<span className="h-8 w-1 rounded-full bg-gold" />
						<h2 className="font-display text-xl text-ink">
							Find Your Perfect Property
						</h2>
					</div>

					<form
						onSubmit={handleSearch}
						className="grid grid-cols-1 gap-4 md:grid-cols-4"
					>
						<div className="rounded-xl border border-line px-4 py-3 transition-colors focus-within:border-gold">
							<label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted">
								Location or Keyword
							</label>

							<div className="flex items-center gap-3">
								<FiMapPin className="shrink-0 text-gold-dark" size={18} />

								<input
									value={keyword}
									onChange={(e) => setKeyword(e.target.value)}
									placeholder="City, area or property..."
									className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted/70"
								/>
							</div>
						</div>

						<div className="rounded-xl border border-line px-4 py-3">
							<label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted">
								Property Type
							</label>

							<div className="relative flex items-center gap-3">
								<FiHome className="shrink-0 text-gold-dark" size={18} />

								<select
									value={propertyType}
									onChange={(e) => setPropertyType(e.target.value)}
									className="w-full appearance-none bg-transparent text-sm text-ink outline-none"
								>
									<option>All Types</option>
									<option>Apartment</option>
									<option>Villa</option>
									<option>Penthouse</option>
								</select>

								<FiChevronDown className="pointer-events-none text-muted" />
							</div>
						</div>

						<div className="rounded-xl border border-line px-4 py-3">
							<label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted">
								Maximum Budget
							</label>

							<div className="relative flex items-center gap-3">
								<span className="font-semibold text-gold-dark">₹</span>

								<select
									value={maxPrice}
									onChange={(e) => setMaxPrice(e.target.value)}
									className="w-full appearance-none bg-transparent text-sm text-ink outline-none"
								>
									<option>Any Budget</option>
									<option value="10000000">Under ₹1 Cr</option>
									<option value="20000000">Under ₹2 Cr</option>
									<option value="30000000">Under ₹3 Cr</option>
									<option value="50000000">Under ₹5 Cr</option>
								</select>

								<FiChevronDown className="pointer-events-none text-muted" />
							</div>
						</div>

						<button
							type="submit"
							className="flex items-center justify-center gap-3 rounded-xl bg-gold-gradient px-6 py-4 text-sm font-bold text-ink shadow-lg shadow-gold/15 transition-all hover:-translate-y-1 hover:shadow-xl"
						>
							<FiSearch size={19} />
							Search Properties
						</button>
					</form>
				</motion.div>
			</section>

			{/* =========================================
          STATS
      ========================================= */}

			<section className="bg-cream pb-16 pt-44 md:pt-32">
				<div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
					{[
						{ value: "500+", label: "Premium Properties" },
						{ value: "120+", label: "Expert Agents" },
						{ value: "25+", label: "Cities Covered" },
						{ value: "98%", label: "Client Satisfaction" },
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="border-l-2 border-gold/50 pl-5"
						>
							<h3 className="font-display text-3xl text-ink md:text-4xl">
								{stat.value}
							</h3>
							<p className="mt-2 text-xs font-medium text-muted md:text-sm">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* =========================================
          FEATURED PROPERTIES
      ========================================= */}

			<section id="featured-properties" className="bg-cream py-20 md:py-28">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeading
							eyebrow="Handpicked For You"
							title="Featured Properties"
							description="Explore a curated collection of exceptional homes and investment opportunities."
						/>

						<Link
							href="/properties"
							className="inline-flex items-center gap-3 self-start rounded-full border border-gold/60 px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold hover:text-ink md:self-auto"
						>
							View All Properties
							<FiArrowUpRight size={17} />
						</Link>
					</div>

					{searchResults && (
						<div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gold/30 bg-white p-4">
							<p className="text-sm text-ink">
								Showing <strong>{filteredProperties.length}</strong> matching
								properties
							</p>

							<button
								onClick={() => {
									setSearchResults(null);
									setKeyword("");
									setPropertyType("All Types");
									setMaxPrice("Any Budget");
								}}
								className="text-sm font-semibold text-gold-dark hover:text-ink"
							>
								Clear Filters
							</button>
						</div>
					)}

					{filteredProperties.length > 0 ? (
						<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
							{filteredProperties.map((property, index) => (
								<PropertyCard
									key={property.id}
									property={property}
									index={index}
								/>
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-line bg-white py-20 text-center">
							<FiSearch size={35} className="mx-auto text-gold" />
							<h3 className="mt-5 font-display text-2xl text-ink">
								No Properties Found
							</h3>
							<p className="mt-3 text-sm text-muted">
								Try changing your search criteria.
							</p>
							<button
								onClick={() => {
									setSearchResults(null);
									setKeyword("");
									setPropertyType("All Types");
									setMaxPrice("Any Budget");
								}}
								className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-navy"
							>
								View All Properties
							</button>
						</div>
					)}
				</div>
			</section>

			{/* =========================================
          CATEGORIES
      ========================================= */}

			<section className="bg-white py-20 md:py-28">
				<div className="mx-auto max-w-7xl px-6">
					<SectionHeading
						eyebrow="Explore By Lifestyle"
						title="Find the Space That Fits Your Life"
						description="From contemporary city apartments to private luxury villas, discover a property that feels like yours."
						align="center"
					/>

					<div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{categories.map((category, index) => {
							const Icon = category.icon;

							return (
								<motion.button
									key={category.title}
									onClick={() => handleCategory(category.type)}
									initial={{ opacity: 0, y: 25 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="group relative h-[340px] overflow-hidden rounded-2xl text-left"
								>
									<img
										src={category.image}
										alt={category.title}
										className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />

									<div className="absolute bottom-0 left-0 right-0 p-6">
										<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ink/50 text-gold-light backdrop-blur">
											<Icon size={21} />
										</div>

										<h3 className="font-display text-2xl text-paper">
											{category.title}
										</h3>

										<p className="mt-2 text-xs text-paper/70">
											{category.subtitle}
										</p>

										<div className="mt-5 flex items-center gap-2 text-xs font-semibold text-gold-light">
											Explore Collection
											<FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
										</div>
									</div>
								</motion.button>
							);
						})}
					</div>
				</div>
			</section>

			{/* =========================================
          WHY CHOOSE US
      ========================================= */}

			<section className="relative overflow-hidden bg-ink py-24 md:py-32">
				<div className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full border border-gold/10" />
				<div className="pointer-events-none absolute -right-32 top-16 h-[350px] w-[350px] rounded-full border border-gold/10" />

				<div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
					<div>
						<SectionHeading
							eyebrow="The Orybite Difference"
							title={
								<>
									More Than Properties.
									<span className="text-gold-gradient">
										{" "}
										A Better Experience.
									</span>
								</>
							}
							description="Finding the right property is a meaningful decision. We make every step simpler, more transparent, and more rewarding."
						/>

						<div className="mt-12 space-y-8">
							{[
								{
									icon: FiShield,
									title: "Verified Property Listings",
									description:
										"Discover carefully curated listings with greater confidence and clarity.",
								},
								{
									icon: FiAward,
									title: "Experienced Professionals",
									description:
										"Connect with knowledgeable real estate professionals who understand your needs.",
								},
								{
									icon: FiHeadphones,
									title: "Dedicated Assistance",
									description:
										"Get guidance and support throughout your property discovery journey.",
								},
							].map((item, index) => {
								const Icon = item.icon;

								return (
									<motion.div
										key={item.title}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.12 }}
										className="flex gap-5"
									>
										<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold-light">
											<Icon size={23} />
										</div>

										<div>
											<h3 className="font-display text-xl text-paper">
												{item.title}
											</h3>
											<p className="mt-2 max-w-md text-sm leading-7 text-paper/55">
												{item.description}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>

						<Link
							href="/about"
							className="mt-12 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-1"
						>
							Learn More About Us
							<FiArrowUpRight size={18} />
						</Link>
					</div>

					<div className="relative">
						<div className="relative overflow-hidden rounded-3xl">
							<img
								src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90"
								alt="Beautiful luxury home interior"
								className="h-[550px] w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
						</div>

						<div className="absolute -bottom-8 -left-5 max-w-xs rounded-2xl border border-gold/20 bg-white p-6 shadow-2xl md:-left-10">
							<div className="flex items-center gap-2">
								<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
									<FiCheck size={17} />
								</span>
								<span className="text-xs font-semibold uppercase tracking-wider text-muted">
									Our Commitment
								</span>
							</div>

							<h3 className="mt-4 font-display text-2xl text-ink">
								Every Detail Matters.
							</h3>

							<p className="mt-2 text-xs leading-6 text-muted">
								Thoughtful property discovery, meaningful connections, and
								experiences built around you.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* =========================================
          FEATURED LOCATIONS
      ========================================= */}

			<section className="bg-cream py-24 md:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeading
							eyebrow="Discover Your Next Destination"
							title="Explore Prime Locations"
							description="Find your ideal home in some of India's most sought-after real estate destinations."
						/>

						<Link
							href="/properties"
							className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-dark"
						>
							Explore All Locations
							<FiArrowUpRight size={18} />
						</Link>
					</div>

					<div className="mt-14 grid gap-6 md:grid-cols-3">
						{locations.map((location, index) => (
							<motion.div
								key={location.name}
								initial={{ opacity: 0, y: 25 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative h-[390px] overflow-hidden rounded-2xl"
							>
								<img
									src={location.image}
									alt={location.name}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>

								<div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/15 to-transparent" />

								<div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
									<div>
										<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-light">
											Featured Destination
										</p>

										<h3 className="font-display text-3xl text-paper">
											{location.name}
										</h3>

										<p className="mt-2 text-xs text-paper/70">
											{location.count}
										</p>
									</div>

									<Link
										href={`/properties?location=${encodeURIComponent(location.name)}`}
										aria-label={`Explore properties in ${location.name}`}
										className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-ink transition-transform group-hover:scale-110"
									>
										<FiArrowUpRight size={21} />
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* =========================================
          FINAL CTA
      ========================================= */}

			<section className="bg-white px-6 py-20 md:py-28">
				<div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-ink to-[#102746] px-7 py-16 text-center md:px-16 md:py-24">
					<div className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full border border-gold/10" />
					<div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-gold/10" />

					<div className="relative mx-auto max-w-2xl">
						<span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
							Your Journey Begins Here
						</span>

						<h2 className="mt-6 font-display text-4xl leading-tight text-paper md:text-6xl">
							Ready to Find Your
							<span className="text-gold-gradient"> Dream Home?</span>
						</h2>

						<p className="mt-6 text-sm leading-8 text-paper/65 md:text-base">
							The right property is waiting for you. Start exploring and take
							the first step towards your next chapter.
						</p>

						<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
							<Link
								href="/properties"
								className="inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-1"
							>
								Browse Properties
								<FiArrowUpRight size={18} />
							</Link>

							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-paper transition-all hover:border-gold hover:bg-white/5"
							>
								Talk to Our Team
								<FiArrowRight size={18} />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
