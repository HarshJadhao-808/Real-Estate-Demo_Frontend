"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import {
	FiSearch,
	FiMapPin,
	FiArrowUpRight,
	FiArrowRight,
	FiPhone,
	FiMail,
	FiStar,
	FiShield,
	FiUsers,
	FiHome,
	FiChevronDown,
	FiX,
	FiGrid,
	FiList,
	FiSliders,
	FiCheckCircle,
	FiClock,
	FiAward,
	FiMessageCircle,
	FiBriefcase,
} from "react-icons/fi";

import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";

import {
	agents,
	agentFilters,
	agentBenefits,
	agentTestimonials,
	agentFaqs,
} from "../../src/data/agents";

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description, centered = false }) {
	return (
		<div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
			<p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#A8832F]">
				{eyebrow}
			</p>
			<h2 className="font-serif text-3xl leading-tight text-[#0B1B33] sm:text-4xl lg:text-5xl">
				{title}
			</h2>
			{description && (
				<p className="mt-5 text-sm leading-7 text-[#5B6B82] sm:text-base">
					{description}
				</p>
			)}
		</div>
	);
}

function AgentCard({ agent, layout = "grid" }) {
	const isList = layout === "list";

	return (
		<motion.article
			layout
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.08 }}
			transition={{ duration: 0.45 }}
			className={`group overflow-hidden rounded-sm border border-[#E6E1D6] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(11,27,51,0.10)] ${
				isList ? "grid md:grid-cols-[260px_1fr]" : ""
			}`}
		>
			<div
				className={`relative overflow-hidden bg-[#F4F1EA] ${
					isList ? "h-64 md:h-full" : "h-72"
				}`}
			>
				<img
					src={agent.image}
					alt={agent.name}
					className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
				/>

				<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/55 via-transparent to-transparent" />

				{agent.featured && (
					<span className="absolute left-4 top-4 bg-[#C9A24B] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B1B33]">
						Featured Agent
					</span>
				)}

				{agent.verified && (
					<span className="absolute right-4 top-4 flex items-center gap-1.5 bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-[#1E3E6D]">
						<FiShield size={12} />
						Verified
					</span>
				)}

				<div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-white">
					<FiMapPin size={13} />
					{agent.location.city}
				</div>
			</div>

			<div className="flex flex-col p-5 sm:p-6">
				<div className="flex items-start justify-between gap-3">
					<div>
						<h3 className="font-serif text-2xl text-[#0B1B33] transition group-hover:text-[#A8832F]">
							{agent.name}
						</h3>
						<p className="mt-1 text-xs text-[#5B6B82]">{agent.designation}</p>
					</div>

					<div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#A8832F]">
						<FiStar fill="currentColor" size={14} />
						{agent.rating.toFixed(1)}
					</div>
				</div>

				<p className="mt-4 line-clamp-2 text-sm leading-6 text-[#5B6B82]">
					{agent.bio}
				</p>

				<div className="mt-5 grid grid-cols-3 border-y border-[#E6E1D6] py-4">
					<div>
						<p className="font-serif text-xl text-[#0B1B33]">
							{agent.experience}+
						</p>
						<p className="mt-1 text-[10px] uppercase tracking-wider text-[#7C8796]">
							Years
						</p>
					</div>

					<div className="border-x border-[#E6E1D6] px-3">
						<p className="font-serif text-xl text-[#0B1B33]">
							{agent.propertiesSold}
						</p>
						<p className="mt-1 text-[10px] uppercase tracking-wider text-[#7C8796]">
							Sold
						</p>
					</div>

					<div className="pl-3">
						<p className="font-serif text-xl text-[#0B1B33]">
							{agent.activeListings}
						</p>
						<p className="mt-1 text-[10px] uppercase tracking-wider text-[#7C8796]">
							Listings
						</p>
					</div>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{agent.specialties.slice(0, 3).map((specialty) => (
						<span
							key={specialty}
							className="border border-[#E6E1D6] bg-[#FAF7F2] px-2.5 py-1.5 text-[10px] text-[#5B6B82]"
						>
							{specialty}
						</span>
					))}
				</div>

				<div className="mt-6 flex items-center gap-2">
					<Link
						href={`/agents/${agent.slug}`}
						className="flex flex-1 items-center justify-center gap-2 bg-[#0B1B33] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#1E3E6D]"
					>
						View Profile
						<FiArrowUpRight size={15} />
					</Link>

					<a
						href={`https://wa.me/${agent.whatsapp}`}
						target="_blank"
						rel="noreferrer"
						aria-label={`WhatsApp ${agent.name}`}
						className="flex h-11 w-11 items-center justify-center border border-[#E6E1D6] text-[#0B1B33] transition hover:border-[#C9A24B] hover:text-[#A8832F]"
					>
						<FaWhatsapp size={18} />
					</a>
				</div>
			</div>
		</motion.article>
	);
}

function SelectFilter({ label, value, onChange, options }) {
	return (
		<label className="block">
			<span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7C8796]">
				{label}
			</span>
			<div className="relative">
				<select
					value={value}
					onChange={(event) => onChange(event.target.value)}
					className="h-12 w-full appearance-none border border-[#E6E1D6] bg-white px-3 pr-9 text-sm text-[#0B1B33] outline-none transition focus:border-[#C9A24B]"
				>
					{options.map((option) => {
						const item =
							typeof option === "string"
								? { label: option, value: option }
								: option;

						return (
							<option key={item.value} value={item.value}>
								{item.label}
							</option>
						);
					})}
				</select>
				<FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7C8796]" />
			</div>
		</label>
	);
}

function Stat({ value, label }) {
	return (
		<div className="border-l border-white/15 pl-5 first:border-0 first:pl-0">
			<p className="font-serif text-3xl text-[#E4C77B] sm:text-4xl">{value}</p>
			<p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
				{label}
			</p>
		</div>
	);
}

export default function AgentsPage() {
	const [search, setSearch] = useState("");
	const [specialty, setSpecialty] = useState("All Specialties");
	const [city, setCity] = useState("All Locations");
	const [experience, setExperience] = useState("0");
	const [rating, setRating] = useState("0");
	const [language, setLanguage] = useState("All Languages");
	const [availability, setAvailability] = useState(false);
	const [sort, setSort] = useState("recommended");
	const [layout, setLayout] = useState("grid");
	const [showFilters, setShowFilters] = useState(false);
	const [visibleCount, setVisibleCount] = useState(6);
	const [activeFaq, setActiveFaq] = useState(0);

	const activeAgents = agents.filter((agent) => agent.status === "active");

	const featuredAgents = activeAgents.filter((agent) => agent.featured);

	const filteredAgents = useMemo(() => {
		let result = [...agents].filter((agent) => agent.status === "active");

		const searchTerm = search.trim().toLowerCase();

		if (searchTerm) {
			result = result.filter((agent) => {
				const searchable = [
					agent.name,
					agent.designation,
					agent.bio,
					agent.location.city,
					...agent.location.areas,
					...agent.specialties,
					...agent.languages,
				]
					.join(" ")
					.toLowerCase();

				return searchable.includes(searchTerm);
			});
		}

		if (specialty !== "All Specialties") {
			result = result.filter((agent) => agent.specialties.includes(specialty));
		}

		if (city !== "All Locations") {
			result = result.filter((agent) => agent.location.city === city);
		}

		if (language !== "All Languages") {
			result = result.filter((agent) => agent.languages.includes(language));
		}

		if (Number(experience) > 0) {
			result = result.filter((agent) => agent.experience >= Number(experience));
		}

		if (Number(rating) > 0) {
			result = result.filter((agent) => agent.rating >= Number(rating));
		}

		if (availability) {
			result = result.filter((agent) => agent.available);
		}

		if (sort === "rating") {
			result.sort((a, b) => b.rating - a.rating);
		}

		if (sort === "experience") {
			result.sort((a, b) => b.experience - a.experience);
		}

		if (sort === "sold") {
			result.sort((a, b) => b.propertiesSold - a.propertiesSold);
		}

		if (sort === "recommended") {
			result.sort(
				(a, b) =>
					Number(b.featured) - Number(a.featured) || b.rating - a.rating,
			);
		}

		return result;
	}, [
		search,
		specialty,
		city,
		language,
		experience,
		rating,
		availability,
		sort,
	]);

	const displayedAgents = filteredAgents.slice(0, visibleCount);

	const clearFilters = () => {
		setSearch("");
		setSpecialty("All Specialties");
		setCity("All Locations");
		setExperience("0");
		setRating("0");
		setLanguage("All Languages");
		setAvailability(false);
		setSort("recommended");
		setVisibleCount(6);
	};

	const hasFilters =
		search ||
		specialty !== "All Specialties" ||
		city !== "All Locations" ||
		experience !== "0" ||
		rating !== "0" ||
		language !== "All Languages" ||
		availability;

	return (
		<main className="overflow-hidden bg-[#FAF7F2]">
			{/* HERO */}
			<section className="relative min-h-[650px] bg-[#0B1B33] pt-28 text-white lg:min-h-[710px]">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=90"
						alt="Luxury residential property"
						className="h-full w-full object-cover "
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/90 to-[#0B1B33]/45" />
					<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-transparent to-transparent" />
				</div>

				<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-32">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							visible: {
								transition: { staggerChildren: 0.12 },
							},
						}}
					>
						<motion.p
							variants={fadeUp}
							className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#E4C77B]"
						>
							<span className="h-px w-10 bg-[#C9A24B]" />
							Meet the Professionals
						</motion.p>

						<motion.h1
							variants={fadeUp}
							className="max-w-3xl font-serif text-5xl leading-[1.1] sm:text-6xl lg:text-7xl"
						>
							The right people.
							<span className="block italic text-[#E4C77B]">
								The right property.
							</span>
						</motion.h1>

						<motion.p
							variants={fadeUp}
							className="mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base"
						>
							Discover experienced real estate agents who understand your
							market, your goals, and what makes a property worth investing in.
						</motion.p>

						<motion.div
							variants={fadeUp}
							className="mt-10 flex flex-wrap gap-4"
						>
							<a
								href="#agent-directory"
								className="inline-flex items-center gap-3 bg-[#C9A24B] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#0B1B33] transition hover:bg-[#E4C77B]"
							>
								Explore Agents
								<FiArrowRight size={16} />
							</a>

							<Link
								href="/contact"
								className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#E4C77B] hover:text-[#E4C77B]"
							>
								Talk to Our Team
								<FiArrowUpRight size={16} />
							</Link>
						</motion.div>

						<motion.div
							variants={fadeUp}
							className="mt-14 flex flex-wrap gap-8 border-t border-white/15 pt-8 sm:gap-12"
						>
							<Stat value={`${activeAgents.length}+`} label="Professionals" />
							<Stat value="06" label="Cities covered" />
							<Stat value="4.8/5" label="Average rating" />
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 35 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.25 }}
						className="relative hidden lg:block"
					>
						<div className="relative ml-auto max-w-[440px]">
							<img
								src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=90"
								alt="Real estate professional"
								className="h-[490px] w-full object-cover"
							/>

							<div className="absolute -bottom-7 -left-12 max-w-[260px] border border-[#E4C77B]/30 bg-[#142B4A] p-6 shadow-2xl">
								<FiAward className="mb-4 text-[#E4C77B]" size={27} />
								<p className="font-serif text-2xl text-white">
									Expertise you can trust.
								</p>
								<p className="mt-2 text-xs leading-6 text-white/55">
									Connect with professionals who put your property goals first.
								</p>
							</div>

							<div className="absolute -right-5 top-8 h-20 w-20 border border-[#E4C77B]/50" />
						</div>
					</motion.div>
				</div>
			</section>

			{/* SEARCH STRIP */}
			<section className="relative z-10 mx-auto -mt-9 max-w-7xl px-5 lg:px-10">
				<div className="grid gap-4 bg-white p-5 shadow-[0_15px_60px_rgba(11,27,51,0.12)] md:grid-cols-[1fr_240px_auto] md:items-end md:p-7">
					<label>
						<span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7C8796]">
							Search professionals
						</span>
						<div className="flex h-12 items-center gap-3 border border-[#E6E1D6] px-4">
							<FiSearch className="shrink-0 text-[#A8832F]" size={18} />
							<input
								value={search}
								onChange={(event) => {
									setSearch(event.target.value);
									setVisibleCount(6);
								}}
								placeholder="Name, city, area or specialty..."
								className="h-full w-full bg-transparent text-sm text-[#0B1B33] outline-none placeholder:text-[#9AA3AF]"
							/>
						</div>
					</label>

					<SelectFilter
						label="Location"
						value={city}
						onChange={setCity}
						options={agentFilters.cities}
					/>

					<button
						onClick={() => {
							setVisibleCount(6);
							document
								.getElementById("agent-directory")
								?.scrollIntoView({ behavior: "smooth" });
						}}
						className="flex h-12 items-center justify-center gap-3 bg-[#0B1B33] px-8 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#1E3E6D]"
					>
						Find an Agent
						<FiArrowRight />
					</button>
				</div>
			</section>

			{/* FEATURED AGENTS */}
			<section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
				<div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
					<SectionHeading
						eyebrow="Our Selection"
						title="Meet our featured agents."
						description="Meet professionals recognized for their experience, market knowledge, and commitment to helping clients make confident property decisions."
					/>

					<Link
						href="#agent-directory"
						className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8832F] transition hover:gap-4"
					>
						View All Agents
						<FiArrowRight size={16} />
					</Link>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{featuredAgents.map((agent) => (
						<AgentCard key={agent.id} agent={agent} />
					))}
				</div>
			</section>

			{/* WHY CHOOSE OUR AGENTS */}
			<section className="bg-[#F4F1EA] py-24 lg:py-28">
				<div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
					<div>
						<SectionHeading
							eyebrow="The Difference"
							title="More than an introduction. A better property journey."
							description="The right real estate professional can help you understand the market, compare opportunities, and navigate important decisions with greater confidence."
						/>

						<div className="mt-10 grid gap-7 sm:grid-cols-2">
							{agentBenefits.map((benefit) => (
								<div key={benefit.number} className="flex gap-4">
									<span className="font-serif text-xl text-[#C9A24B]">
										{benefit.number}
									</span>
									<div>
										<h3 className="font-serif text-lg text-[#0B1B33]">
											{benefit.title}
										</h3>
										<p className="mt-2 text-xs leading-6 text-[#5B6B82]">
											{benefit.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90"
							alt="Elegant modern residential interior"
							className="h-[440px] w-full object-cover sm:h-[560px]"
						/>

						<div className="absolute -bottom-5 left-5 right-5 bg-[#0B1B33] p-7 sm:-left-8 sm:right-12 sm:p-9">
							<p className="font-serif text-2xl text-white sm:text-3xl">
								Every great property decision starts with the right
								conversation.
							</p>
							<p className="mt-3 text-xs leading-6 text-white/55">
								Find someone who understands what matters to you.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* AGENT DIRECTORY */}
			<section
				id="agent-directory"
				className="scroll-mt-20 mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"
			>
				<div className="mb-12">
					<SectionHeading
						eyebrow="Find Your Professional"
						title="Explore our agent directory."
						description="Compare agent experience, specializations, ratings, and locations to find a professional who fits your property requirements."
					/>
				</div>

				<div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-y border-[#E6E1D6] py-5">
					<div>
						<p className="font-serif text-xl text-[#0B1B33]">
							{filteredAgents.length} Professionals
						</p>
						<p className="mt-1 text-xs text-[#7C8796]">
							Showing {Math.min(visibleCount, filteredAgents.length)} of{" "}
							{filteredAgents.length} matching agents
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-3">
						<button
							onClick={() => setShowFilters(!showFilters)}
							className={`flex h-10 items-center gap-2 border px-4 text-xs font-semibold transition ${
								showFilters
									? "border-[#C9A24B] bg-[#C9A24B] text-[#0B1B33]"
									: "border-[#E6E1D6] text-[#0B1B33] hover:border-[#C9A24B]"
							}`}
						>
							<FiSliders size={15} />
							Filters
						</button>

						<div className="flex border border-[#E6E1D6]">
							<button
								onClick={() => setLayout("grid")}
								aria-label="Grid view"
								className={`flex h-10 w-10 items-center justify-center ${
									layout === "grid"
										? "bg-[#0B1B33] text-white"
										: "text-[#5B6B82]"
								}`}
							>
								<FiGrid />
							</button>
							<button
								onClick={() => setLayout("list")}
								aria-label="List view"
								className={`flex h-10 w-10 items-center justify-center ${
									layout === "list"
										? "bg-[#0B1B33] text-white"
										: "text-[#5B6B82]"
								}`}
							>
								<FiList />
							</button>
						</div>
					</div>
				</div>

				<AnimatePresence initial={false}>
					{showFilters && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mb-8 overflow-hidden"
						>
							<div className="grid gap-5 border border-[#E6E1D6] bg-white p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
								<SelectFilter
									label="Specialization"
									value={specialty}
									onChange={(value) => {
										setSpecialty(value);
										setVisibleCount(6);
									}}
									options={agentFilters.specialties}
								/>

								<SelectFilter
									label="Experience"
									value={experience}
									onChange={(value) => {
										setExperience(value);
										setVisibleCount(6);
									}}
									options={agentFilters.experience}
								/>

								<SelectFilter
									label="Minimum Rating"
									value={rating}
									onChange={(value) => {
										setRating(value);
										setVisibleCount(6);
									}}
									options={agentFilters.ratings}
								/>

								<SelectFilter
									label="Language"
									value={language}
									onChange={(value) => {
										setLanguage(value);
										setVisibleCount(6);
									}}
									options={agentFilters.languages}
								/>

								<SelectFilter
									label="Sort By"
									value={sort}
									onChange={setSort}
									options={agentFilters.sorting}
								/>

								<label className="flex cursor-pointer items-center gap-3 text-sm text-[#0B1B33] sm:col-span-2 lg:col-span-3 xl:col-span-5">
									<input
										type="checkbox"
										checked={availability}
										onChange={(event) => {
											setAvailability(event.target.checked);
											setVisibleCount(6);
										}}
										className="h-4 w-4 accent-[#C9A24B]"
									/>
									Show only currently available agents
								</label>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{hasFilters && (
					<div className="mb-7 flex flex-wrap items-center gap-3">
						<span className="text-xs text-[#7C8796]">Active filters:</span>

						{[
							search && `Search: ${search}`,
							specialty !== "All Specialties" && specialty,
							city !== "All Locations" && city,
							experience !== "0" && `${experience}+ years`,
							rating !== "0" && `${rating}+ stars`,
							language !== "All Languages" && language,
							availability && "Available now",
						]
							.filter(Boolean)
							.map((filter) => (
								<span
									key={filter}
									className="bg-[#F4F1EA] px-3 py-1.5 text-[10px] text-[#5B6B82]"
								>
									{filter}
								</span>
							))}

						<button
							onClick={clearFilters}
							className="text-xs font-semibold text-[#A8832F] underline underline-offset-4"
						>
							Clear all
						</button>
					</div>
				)}

				{displayedAgents.length > 0 ? (
					<motion.div
						layout
						className={
							layout === "grid"
								? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
								: "grid gap-5"
						}
					>
						<AnimatePresence mode="popLayout">
							{displayedAgents.map((agent) => (
								<AgentCard key={agent.id} agent={agent} layout={layout} />
							))}
						</AnimatePresence>
					</motion.div>
				) : (
					<div className="border border-dashed border-[#D8D0C1] bg-white px-5 py-20 text-center">
						<FiUsers className="mx-auto text-[#C9A24B]" size={36} />
						<h3 className="mt-5 font-serif text-2xl text-[#0B1B33]">
							No matching agents found
						</h3>
						<p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#5B6B82]">
							Try changing your search or removing some filters to discover more
							professionals.
						</p>
						<button
							onClick={clearFilters}
							className="mt-7 bg-[#0B1B33] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1E3E6D]"
						>
							Reset Filters
						</button>
					</div>
				)}

				{visibleCount < filteredAgents.length && (
					<div className="mt-12 text-center">
						<button
							onClick={() => setVisibleCount((count) => count + 6)}
							className="inline-flex items-center gap-3 border border-[#C9A24B] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B1B33] transition hover:bg-[#C9A24B]"
						>
							Load More Agents
							<FiArrowRight size={16} />
						</button>
					</div>
				)}
			</section>

			{/* TESTIMONIALS */}
			<section className="bg-[#0B1B33] py-24 text-white lg:py-28">
				<div className="mx-auto max-w-7xl px-5 lg:px-10">
					<div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeading
							eyebrow="Client Experiences"
							title="Trust built through every conversation."
							description="Thoughtful guidance and clear communication can make a meaningful difference in a property journey."
						/>
						<div className="flex items-center gap-2 text-[#E4C77B]">
							<FiStar fill="currentColor" />
							<span className="font-serif text-3xl">4.8</span>
							<span className="text-xs text-white/50">Average demo rating</span>
						</div>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						{agentTestimonials.map((testimonial) => (
							<article
								key={testimonial.id}
								className="border border-white/15 bg-white/[0.04] p-7 sm:p-8"
							>
								<div className="flex gap-1 text-[#E4C77B]">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<FiStar key={i} size={14} fill="currentColor" />
									))}
								</div>

								<p className="mt-7 font-serif text-xl leading-8 text-white/90">
									“{testimonial.quote}”
								</p>

								<div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="h-12 w-12 rounded-full object-cover"
									/>
									<div>
										<p className="text-sm font-semibold text-white">
											{testimonial.name}
										</p>
										<p className="mt-1 text-xs text-white/45">
											{testimonial.role} · {testimonial.location}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-28">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<SectionHeading
							eyebrow="Common Questions"
							title="A little clarity before you connect."
							description="Learn more about finding and contacting real estate professionals through our platform."
						/>

						<div className="mt-8 flex items-center gap-3 text-sm text-[#A8832F]">
							<FiMessageCircle size={19} />
							Need more help?
							<Link
								href="/contact"
								className="font-semibold underline underline-offset-4"
							>
								Contact us
							</Link>
						</div>
					</div>

					<div className="border-t border-[#E6E1D6]">
						{agentFaqs.map((faq, index) => (
							<div key={faq.question} className="border-b border-[#E6E1D6]">
								<button
									onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
									className="flex w-full items-center justify-between gap-5 py-6 text-left"
								>
									<span className="font-serif text-lg text-[#0B1B33] sm:text-xl">
										{faq.question}
									</span>
									<FiChevronDown
										className={`shrink-0 text-[#A8832F] transition ${
											activeFaq === index ? "rotate-180" : ""
										}`}
										size={20}
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
											<p className="max-w-2xl pb-6 text-sm leading-7 text-[#5B6B82]">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* JOIN AGENT NETWORK */}
			<section className="relative overflow-hidden bg-[#F4F1EA]">
				<div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
					<div>
						<p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#A8832F]">
							For Real Estate Professionals
						</p>

						<h2 className="max-w-xl font-serif text-4xl leading-tight text-[#0B1B33] sm:text-5xl">
							Let more clients discover your expertise.
						</h2>

						<p className="mt-6 max-w-lg text-sm leading-7 text-[#5B6B82]">
							Grow your professional presence, showcase your experience, and
							connect with people looking for their next property.
						</p>

						<Link
							href="/contact?subject=Agent%20Registration"
							className="mt-9 inline-flex items-center gap-3 bg-[#0B1B33] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#1E3E6D]"
						>
							Join Our Agent Network
							<FiArrowUpRight size={16} />
						</Link>
					</div>

					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85"
							alt="Real estate professionals working together"
							className="h-[340px] w-full object-cover sm:h-[420px]"
						/>
						<div className="absolute -bottom-4 -left-4 bg-[#C9A24B] p-5 text-[#0B1B33] sm:p-7">
							<FiBriefcase size={25} />
							<p className="mt-3 font-serif text-xl">Build your presence.</p>
						</div>
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="relative overflow-hidden bg-[#0B1B33] px-5 py-24 text-center text-white lg:py-28">
				<div className="pointer-events-none absolute -left-28 -top-32 h-80 w-80 rounded-full border border-[#C9A24B]/20" />
				<div className="pointer-events-none absolute -bottom-48 -right-20 h-96 w-96 rounded-full border border-[#C9A24B]/20" />

				<div className="relative mx-auto max-w-3xl">
					<p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C77B]">
						Your Next Move Starts Here
					</p>

					<h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
						Find the expertise behind your next property decision.
					</h2>

					<p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
						Explore our agent directory and take the next step toward a property
						journey built around your goals.
					</p>

					<a
						href="#agent-directory"
						className="mt-9 inline-flex items-center gap-3 bg-[#C9A24B] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B1B33] transition hover:bg-[#E4C77B]"
					>
						Find Your Agent
						<FiArrowRight size={16} />
					</a>
				</div>
			</section>
		</main>
	);
}
