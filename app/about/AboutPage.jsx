"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
	FiArrowRight,
	FiArrowUpRight,
	FiCheck,
	FiCompass,
	FiHeart,
	FiHome,
	FiLayers,
	FiMessageCircle,
	FiShield,
	FiTarget,
	FiTrendingUp,
	FiUsers,
} from "react-icons/fi";

const brandHighlights = [
	{
		number: "01",
		title: "People before properties",
		description:
			"Every property journey begins with understanding the people behind the decision. We listen before we recommend.",
		icon: FiHeart,
	},
	{
		number: "02",
		title: "Clarity in every step",
		description:
			"Property decisions involve important details. We believe in making information easier to understand and compare.",
		icon: FiCompass,
	},
	{
		number: "03",
		title: "Connections that matter",
		description:
			"The right professional, local knowledge, and relevant opportunities can make a meaningful difference.",
		icon: FiUsers,
	},
	{
		number: "04",
		title: "Built around your goals",
		description:
			"Whether buying, selling, or investing, your priorities should guide the entire experience.",
		icon: FiTarget,
	},
];

const services = [
	{
		number: "01",
		icon: FiHome,
		title: "Residential Real Estate",
		subtitle: "Find a place that feels right.",
		description:
			"Explore apartments, villas, independent homes, and residential communities suited to your lifestyle and requirements.",
		image:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
		href: "/properties?type=residential",
	},
	{
		number: "02",
		icon: FiTrendingUp,
		title: "Property Investments",
		subtitle: "Think beyond the present.",
		description:
			"Discover opportunities and evaluate properties with your investment objectives, location preferences, and budget in mind.",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=85",
		href: "/properties?type=investment",
	},
	{
		number: "03",
		icon: FiLayers,
		title: "Commercial Properties",
		subtitle: "Find space for what's next.",
		description:
			"Explore commercial spaces, offices, and business properties that align with your operational and investment needs.",
		image:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85",
		href: "/properties?type=commercial",
	},
];

const journeySteps = [
	{
		number: "01",
		title: "Start with a conversation",
		description:
			"Tell us what you are looking for, what matters most, and what you want to achieve.",
	},
	{
		number: "02",
		title: "Discover your options",
		description:
			"Explore relevant properties, locations, and opportunities based on your requirements.",
	},
	{
		number: "03",
		title: "Connect with experts",
		description:
			"Get connected with professionals who can help you understand the local property market.",
	},
	{
		number: "04",
		title: "Move with confidence",
		description:
			"Compare your options, ask the right questions, and decide on your next step.",
	},
];

const audience = [
	{
		title: "For Home Buyers",
		description:
			"Discover homes that match your lifestyle, preferred location, and budget.",
		href: "/properties",
		image:
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
	},
	{
		title: "For Property Sellers",
		description:
			"Bring your property to the attention of people exploring their next move.",
		href: "/contact",
		image:
			"https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85",
	},
	{
		title: "For Real Estate Agents",
		description:
			"Build your professional presence and connect with prospective clients.",
		href: "/agents",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85",
	},
];

const principles = [
	"Honest and straightforward communication",
	"A focus on relevant property opportunities",
	"Respect for individual needs and preferences",
	"Meaningful connections with professionals",
];

const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.12 }}
			variants={fadeUp}
			transition={{ duration: 0.65, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

function SectionIntro({ eyebrow, title, description, light = false }) {
	return (
		<div className="max-w-2xl">
			<p
				className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] ${
					light ? "text-[#E4C77B]" : "text-[#A8832F]"
				}`}
			>
				<span
					className={`h-px w-9 ${light ? "bg-[#E4C77B]" : "bg-[#C9A24B]"}`}
				/>
				{eyebrow}
			</p>

			<h2
				className={`font-serif text-4xl leading-[1.12] sm:text-5xl ${
					light ? "text-white" : "text-[#0B1B33]"
				}`}
			>
				{title}
			</h2>

			{description && (
				<p
					className={`mt-6 text-sm leading-8 ${
						light ? "text-white/55" : "text-[#5B6B82]"
					}`}
				>
					{description}
				</p>
			)}
		</div>
	);
}

export default function AboutPage() {
	return (
		<main className="overflow-hidden bg-[#FAF7F2]">
			{/* HERO */}
			<section className="relative min-h-[720px] bg-[#0B1B33] pt-24 text-white lg:min-h-[820px]">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2200&q=90"
						alt="Contemporary luxury residence"
						className="h-full w-full object-cover object-center "
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/80 to-[#0B1B33]/20" />
					<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-transparent to-[#0B1B33]/30" />
				</div>

				<div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-24 lg:min-h-[720px] lg:px-10">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							visible: {
								transition: { staggerChildren: 0.14 },
							},
						}}
						className="max-w-4xl"
					>
						<motion.p
							variants={fadeUp}
							className="mb-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C77B] sm:text-xs"
						>
							<span className="h-px w-12 bg-[#C9A24B]" />
							The Story Behind Us
						</motion.p>

						<motion.h1
							variants={fadeUp}
							className="font-serif text-5xl leading-[1.08] sm:text-6xl md:text-7xl lg:text-[88px]"
						>
							Spaces are built.
							<span className="block italic text-[#E4C77B]">
								Futures are found.
							</span>
						</motion.h1>

						<motion.p
							variants={fadeUp}
							className="mt-8 max-w-xl text-sm leading-8 text-white/70 sm:text-base"
						>
							We believe real estate is more than buying or selling a property.
							It is about discovering possibilities, finding the right
							connections, and making decisions that shape what comes next.
						</motion.p>

						<motion.div
							variants={fadeUp}
							className="mt-10 flex flex-wrap items-center gap-5"
						>
							<Link
								href="/properties"
								className="group inline-flex items-center gap-4 bg-[#C9A24B] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B1B33] transition hover:bg-[#E4C77B]"
							>
								Discover Properties
								<FiArrowUpRight
									size={17}
									className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</Link>

							<Link
								href="/contact"
								className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:text-[#E4C77B]"
							>
								Talk to Our Team
								<FiArrowRight size={16} />
							</Link>
						</motion.div>
					</motion.div>
				</div>

				<div className="absolute bottom-0 right-5 hidden border-l border-t border-white/25 px-8 py-5 lg:block">
					<p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
						Our Philosophy
					</p>
					<p className="mt-2 font-serif text-xl text-[#E4C77B]">
						More than a location.
					</p>
				</div>
			</section>

			{/* INTRODUCTION */}
			<section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-36">
				<div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
					<Reveal>
						<SectionIntro
							eyebrow="Who We Are"
							title="A different perspective on finding the right place."
							description="Real estate can feel overwhelming when information is scattered and every decision seems important. We want to make that experience more thoughtful, connected, and easier to navigate."
						/>

						<Link
							href="/contact"
							className="mt-9 inline-flex items-center gap-3 border-b border-[#C9A24B] pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B1B33] transition hover:text-[#A8832F]"
						>
							Get to Know Us
							<FiArrowUpRight size={16} />
						</Link>
					</Reveal>

					<Reveal delay={0.15}>
						<p className="font-serif text-2xl leading-[1.65] text-[#0B1B33] sm:text-3xl">
							Every property has a story. Every person has a reason for
							searching. We bring those two things closer together.
						</p>

						<p className="mt-8 text-sm leading-8 text-[#5B6B82]">
							Our platform brings property discovery and professional
							connections into one experience. From exploring residential spaces
							to understanding commercial and investment opportunities, we aim
							to help people find information that is relevant to their needs.
						</p>

						<p className="mt-5 text-sm leading-8 text-[#5B6B82]">
							We believe a better real estate experience starts with listening,
							continues with useful guidance, and is built on relationships that
							last beyond a single transaction.
						</p>

						<div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E6E1D6] pt-7">
							<div>
								<p className="font-serif text-2xl text-[#A8832F]">People</p>
								<p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#7C8796]">
									At the centre
								</p>
							</div>
							<div>
								<p className="font-serif text-2xl text-[#A8832F]">Purpose</p>
								<p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#7C8796]">
									Behind every decision
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* LARGE IMAGE STORY */}
			<section className="relative">
				<div className="grid min-h-[580px] lg:grid-cols-2">
					<div className="relative min-h-[430px] overflow-hidden lg:min-h-[680px]">
						<img
							src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90"
							alt="Warm and elegant residential interior"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>

					<div className="flex items-center bg-[#0B1B33] px-7 py-20 sm:px-12 lg:px-16 xl:px-24">
						<Reveal>
							<SectionIntro
								light
								eyebrow="Our Belief"
								title="The right decision begins with the right understanding."
								description="A beautiful property is only one part of the picture. The location, lifestyle, investment goals, practical details, and people involved all matter."
							/>

							<div className="mt-10 space-y-5">
								{principles.map((principle) => (
									<div
										key={principle}
										className="flex items-start gap-4 border-b border-white/10 pb-5"
									>
										<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A24B] text-[#0B1B33]">
											<FiCheck size={12} />
										</span>
										<p className="text-sm text-white/75">{principle}</p>
									</div>
								))}
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* OUR APPROACH */}
			<section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
				<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
					<SectionIntro
						eyebrow="What Makes Us Different"
						title="A philosophy built around people."
						description="We want every interaction to feel considered, transparent, and focused on what matters to you."
					/>

					<p className="max-w-sm text-sm leading-7 text-[#7C8796]">
						These principles guide how we present opportunities, connect
						professionals, and approach the property journey.
					</p>
				</div>

				<div className="mt-16 grid gap-px border border-[#E6E1D6] bg-[#E6E1D6] sm:grid-cols-2 lg:grid-cols-4">
					{brandHighlights.map((item) => {
						const Icon = item.icon;

						return (
							<Reveal key={item.number}>
								<article className="group h-full bg-[#FAF7F2] p-7 transition duration-300 hover:bg-white sm:p-9">
									<div className="flex items-center justify-between">
										<Icon
											size={27}
											className="text-[#A8832F] transition group-hover:scale-110"
										/>
										<span className="font-serif text-3xl text-[#D8CBAF]">
											{item.number}
										</span>
									</div>

									<h3 className="mt-12 font-serif text-xl text-[#0B1B33]">
										{item.title}
									</h3>

									<p className="mt-4 text-xs leading-7 text-[#5B6B82]">
										{item.description}
									</p>
								</article>
							</Reveal>
						);
					})}
				</div>
			</section>

			{/* WHAT WE DO */}
			<section className="bg-[#F4F1EA] py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-5 lg:px-10">
					<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
						<SectionIntro
							eyebrow="Our Expertise"
							title="Different property needs. One connected experience."
							description="Explore the property categories and opportunities that bring buyers, sellers, and investors together."
						/>

						<Link
							href="/properties"
							className="inline-flex shrink-0 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8832F] transition hover:gap-5"
						>
							Browse All Properties
							<FiArrowRight size={16} />
						</Link>
					</div>

					<div className="mt-14 grid gap-6 lg:grid-cols-3">
						{services.map((service) => {
							const Icon = service.icon;

							return (
								<Reveal key={service.number}>
									<Link
										href={service.href}
										className="group block h-full overflow-hidden border border-[#E6E1D6] bg-white"
									>
										<div className="relative h-[270px] overflow-hidden">
											<img
												src={service.image}
												alt={service.title}
												className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 to-transparent" />

											<span className="absolute bottom-5 left-6 font-serif text-3xl text-white">
												{service.number}
											</span>

											<span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center bg-[#C9A24B] text-[#0B1B33]">
												<Icon size={21} />
											</span>
										</div>

										<div className="p-7 sm:p-8">
											<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8832F]">
												{service.subtitle}
											</p>

											<h3 className="mt-3 font-serif text-2xl text-[#0B1B33]">
												{service.title}
											</h3>

											<p className="mt-4 text-xs leading-7 text-[#5B6B82]">
												{service.description}
											</p>

											<span className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B1B33] transition group-hover:gap-5 group-hover:text-[#A8832F]">
												Explore Category
												<FiArrowUpRight size={16} />
											</span>
										</div>
									</Link>
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* MISSION AND VISION */}
			<section className="bg-[#0B1B33] px-5 py-24 text-white lg:px-10 lg:py-32">
				<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
					<Reveal>
						<div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#C9A24B]/60 text-[#E4C77B]">
							<FiTarget size={25} />
						</div>

						<p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E4C77B]">
							Our Mission
						</p>

						<h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
							Make every property journey easier to navigate.
						</h2>

						<p className="mt-7 max-w-lg text-sm leading-8 text-white/55">
							We aim to bring together relevant property information,
							professional expertise, and meaningful connections so people can
							make more informed real estate decisions.
						</p>
					</Reveal>

					<Reveal delay={0.15}>
						<div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#C9A24B]/60 text-[#E4C77B]">
							<FiCompass size={25} />
						</div>

						<p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E4C77B]">
							Our Vision
						</p>

						<h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
							Create a more connected real estate experience.
						</h2>

						<p className="mt-7 max-w-lg text-sm leading-8 text-white/55">
							We envision a property ecosystem where discovering opportunities,
							understanding markets, and connecting with the right people feels
							natural, accessible, and transparent.
						</p>
					</Reveal>
				</div>
			</section>

			{/* HOW WE WORK */}
			<section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
				<div className="text-center">
					<SectionIntro
						eyebrow="The Journey"
						title="From the first question to the next chapter."
						description="A simple, thoughtful process designed to help you move forward with a clearer understanding of your options."
						centered
					/>
				</div>

				<div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					<div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#E6E1D6] lg:block" />

					{journeySteps.map((step, index) => (
						<Reveal key={step.number} delay={index * 0.08}>
							<div className="relative">
								<div className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#C9A24B] bg-[#FAF7F2] font-serif text-xl text-[#A8832F]">
									{step.number}
								</div>

								<h3 className="mt-7 font-serif text-xl text-[#0B1B33]">
									{step.title}
								</h3>

								<p className="mt-4 text-xs leading-7 text-[#5B6B82]">
									{step.description}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* WHO WE SERVE */}
			<section className="bg-[#F4F1EA] py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-5 lg:px-10">
					<SectionIntro
						eyebrow="Who We Work With"
						title="Different goals. A shared starting point."
						description="Whether you are searching for a home, bringing a property to market, or building your professional presence, there is a place for you here."
					/>

					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{audience.map((item, index) => (
							<Reveal key={item.title} delay={index * 0.1}>
								<Link
									href={item.href}
									className="group relative block h-[410px] overflow-hidden"
								>
									<img
										src={item.image}
										alt={item.title}
										className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/30 to-transparent" />

									<div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
										<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E4C77B]">
											0{index + 1}
										</p>

										<h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
											{item.title}
										</h3>

										<p className="mt-3 max-w-sm text-xs leading-6 text-white/65">
											{item.description}
										</p>

										<span className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E4C77B] transition group-hover:gap-5">
											Discover More
											<FiArrowUpRight size={16} />
										</span>
									</div>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* FULL WIDTH BRAND IMAGE */}
			<section className="relative flex min-h-[490px] items-center justify-center overflow-hidden text-center">
				<img
					src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=90"
					alt="Architectural details of a modern home"
					className="absolute inset-0 h-full w-full object-cover"
				/>

				<div className="absolute inset-0 bg-[#0B1B33]/70" />

				<Reveal className="relative mx-auto max-w-4xl px-5 py-24">
					<p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C77B]">
						More Than Real Estate
					</p>

					<h2 className="mt-7 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
						It's not just about where you live.
						<span className="block italic text-[#E4C77B]">
							It's about how you move forward.
						</span>
					</h2>

					<p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65">
						Let's make your next property decision a more considered one.
					</p>
				</Reveal>
			</section>

			{/* FINAL CTA */}
			<section className="relative overflow-hidden bg-[#0B1B33] px-5 py-24 text-center text-white lg:py-32">
				<div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-[#C9A24B]/15" />
				<div className="pointer-events-none absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full border border-[#C9A24B]/15" />

				<div className="relative mx-auto max-w-3xl">
					<p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4C77B]">
						Your Next Chapter Starts Here
					</p>

					<h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
						Let's find what comes next.
					</h2>

					<p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/55">
						Explore properties, connect with professionals, and take the next
						step towards your real estate goals.
					</p>

					<div className="mt-10 flex flex-wrap justify-center gap-4">
						<Link
							href="/properties"
							className="inline-flex items-center gap-3 bg-[#C9A24B] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B1B33] transition hover:bg-[#E4C77B]"
						>
							Explore Properties
							<FiArrowRight size={16} />
						</Link>

						<Link
							href="/contact"
							className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#E4C77B] hover:text-[#E4C77B]"
						>
							Contact Us
							<FiMessageCircle size={16} />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
