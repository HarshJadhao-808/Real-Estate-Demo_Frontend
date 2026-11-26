"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
	FiArrowRight,
	FiArrowUpRight,
	FiCheck,
	FiClock,
	FiMail,
	FiMapPin,
	FiMessageCircle,
	FiPhone,
	FiSend,
	FiShield,
	FiHeadphones,
	FiChevronDown,
} from "react-icons/fi";

const contactDetails = [
	{
		icon: FiPhone,
		label: "Call our team",
		value: "+91 98765 43210",
		description: "Mon – Sat, 9:00 AM – 7:00 PM",
		action: "tel:+919876543210",
		actionLabel: "Call now",
	},
	{
		icon: FiMail,
		label: "Email us",
		value: "hello@estate-demo.com",
		description: "We usually respond within 24 hours",
		action: "mailto:hello@estate-demo.com",
		actionLabel: "Send email",
	},
	{
		icon: FiMapPin,
		label: "Visit our office",
		value: "Business District, Mumbai",
		description: "Maharashtra, India",
		action: "https://maps.google.com/?q=Mumbai",
		actionLabel: "View location",
	},
];

const officeHours = [
	{ day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
	{ day: "Saturday", hours: "10:00 AM – 5:00 PM" },
	{ day: "Sunday", hours: "By appointment" },
];

const inquiryTypes = [
	"Buying a property",
	"Selling a property",
	"Renting a property",
	"Property investment",
	"List my property",
	"Speak with an agent",
	"Other inquiry",
];

const faqs = [
	{
		question: "How can I schedule a property visit?",
		answer:
			"Submit the inquiry form with your preferred property and visit details. Our demo team will get in touch to coordinate a suitable time.",
	},
	{
		question: "Can I list my property on this platform?",
		answer:
			"Yes. Property owners and developers can contact our team to discuss listing requirements and available promotional options.",
	},
	{
		question: "Do you help with property investment?",
		answer:
			"Our property consultants can help you explore residential, commercial, and investment opportunities based on your requirements.",
	},
	{
		question: "How long does it take to receive a response?",
		answer:
			"Our sample support team aims to respond to inquiries within one business day.",
	},
	{
		question: "Can I speak directly with a property agent?",
		answer:
			"Absolutely. You can request an agent consultation through the form, or explore the Agents page to discover our sample agent profiles.",
	},
];

const reasons = [
	{
		icon: FiHeadphones,
		title: "Personal assistance",
		description:
			"Get guidance from a dedicated property consultant throughout your search.",
	},
	{
		icon: FiShield,
		title: "Transparent communication",
		description:
			"Clear information and straightforward conversations at every step.",
	},
	{
		icon: FiMessageCircle,
		title: "Quick responses",
		description:
			"Our sample team is ready to help with your property-related questions.",
	},
];

function Reveal({ children, delay = 0, className = "" }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

function SectionHeading({ eyebrow, title, description, light = false }) {
	return (
		<div className="mx-auto mb-14 max-w-2xl text-center">
			<p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24B]">
				{eyebrow}
			</p>
			<h2
				className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl ${
					light ? "text-white" : "text-[#0B1B33]"
				}`}
			>
				{title}
			</h2>
			{description && (
				<p
					className={`mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base ${
						light ? "text-white/65" : "text-[#5B6B82]"
					}`}
				>
					{description}
				</p>
			)}
		</div>
	);
}

function ContactCard({ item, index }) {
	const Icon = item.icon;

	return (
		<Reveal delay={index * 0.1}>
			<div className="group h-full rounded-2xl border border-[#E6E1D6] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/50 hover:shadow-xl hover:shadow-[#0B1B33]/5">
				<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F1EA] text-xl text-[#A8832F] transition-colors group-hover:bg-[#C9A24B] group-hover:text-white">
					<Icon />
				</div>

				<p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8B96A5]">
					{item.label}
				</p>

				<h3 className="mb-2 break-words text-lg font-semibold text-[#0B1B33]">
					{item.value}
				</h3>

				<p className="mb-6 text-sm text-[#5B6B82]">{item.description}</p>

				<a
					href={item.action}
					target={item.action.startsWith("http") ? "_blank" : undefined}
					rel={item.action.startsWith("http") ? "noreferrer" : undefined}
					className="inline-flex items-center gap-2 text-sm font-semibold text-[#A8832F] transition-colors hover:text-[#0B1B33]"
				>
					{item.actionLabel}
					<FiArrowUpRight />
				</a>
			</div>
		</Reveal>
	);
}

export default function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		inquiryType: "",
		budget: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [activeFaq, setActiveFaq] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);

		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			inquiryType: "",
			budget: "",
			message: "",
		});
	};

	return (
		<main className="overflow-hidden bg-[#FAF7F2]">
			{/* HERO */}
			<section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#0B1B33] pt-28">
				<div
					className="absolute inset-0 bg-cover bg-center "
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=2000')",
					}}
				/>

				<div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/90 to-[#0B1B33]/35" />

				<div className="absolute -right-40 top-10 h-96 w-96 rounded-full border border-[#C9A24B]/20" />
				<div className="absolute -right-20 top-28 h-72 w-72 rounded-full border border-[#C9A24B]/15" />

				<div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl"
					>
						<div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E4C77B]">
							<span className="h-px w-10 bg-[#C9A24B]" />
							Get in touch
						</div>

						<h1 className="font-serif text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
							Let's find your
							<span className="block text-[#E4C77B]">next chapter.</span>
						</h1>

						<p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
							Whether you're buying, selling, investing, or simply exploring,
							we're here to help you make your next property decision with
							confidence.
						</p>

						<div className="mt-10 flex flex-wrap gap-4">
							<a
								href="#contact-form"
								className="inline-flex items-center gap-3 bg-[#C9A24B] px-7 py-4 text-sm font-semibold text-[#0B1B33] transition hover:bg-[#E4C77B]"
							>
								Start a conversation
								<FiArrowRight />
							</a>

							<Link
								href="/properties"
								className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#C9A24B] hover:text-[#E4C77B]"
							>
								Explore properties
								<FiArrowUpRight />
							</Link>
						</div>
					</motion.div>
				</div>

				<div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
			</section>

			{/* CONTACT DETAILS */}
			<section className="px-6 py-24 lg:px-12">
				<div className="mx-auto max-w-7xl">
					<SectionHeading
						eyebrow="We're easy to reach"
						title="Let's start with a conversation."
						description="Have a question about a property or need help navigating the market? Choose the easiest way to reach our team."
					/>

					<div className="grid gap-6 md:grid-cols-3">
						{contactDetails.map((item, index) => (
							<ContactCard key={item.label} item={item} index={index} />
						))}
					</div>
				</div>
			</section>

			{/* FORM + SIDE INFO */}
			<section id="contact-form" className="bg-white px-6 py-24 lg:px-12">
				<div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<Reveal>
						<div className="sticky top-28">
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#A8832F]">
								Your property journey
							</p>

							<h2 className="font-serif text-4xl leading-tight text-[#0B1B33] sm:text-5xl">
								Tell us what
								<span className="block text-[#C9A24B]">
									you're looking for.
								</span>
							</h2>

							<p className="mt-6 text-base leading-8 text-[#5B6B82]">
								Share a few details about your requirements. Our property
								consultants will help you explore the right opportunities.
							</p>

							<div className="mt-10 space-y-7">
								{[
									{
										number: "01",
										title: "Share your requirements",
										text: "Tell us about your property goals and preferences.",
									},
									{
										number: "02",
										title: "Connect with a consultant",
										text: "Get connected with someone who understands your needs.",
									},
									{
										number: "03",
										title: "Explore your options",
										text: "Discover suitable properties and plan your next step.",
									},
								].map((step) => (
									<div key={step.number} className="flex gap-5">
										<span className="font-serif text-2xl text-[#C9A24B]">
											{step.number}
										</span>
										<div>
											<h3 className="font-semibold text-[#0B1B33]">
												{step.title}
											</h3>
											<p className="mt-1 text-sm leading-6 text-[#7A8798]">
												{step.text}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-12 rounded-2xl bg-[#0B1B33] p-7 text-white">
								<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A24B]/15 text-xl text-[#E4C77B]">
									<FiMessageCircle />
								</div>
								<h3 className="text-lg font-semibold">
									Prefer a quick conversation?
								</h3>
								<p className="mt-2 text-sm leading-6 text-white/60">
									Call our sample support team to discuss your property
									requirements.
								</p>
								<a
									href="tel:+919876543210"
									className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E4C77B]"
								>
									+91 98765 43210
									<FiArrowUpRight />
								</a>
							</div>
						</div>
					</Reveal>

					<Reveal delay={0.15}>
						<div className="rounded-3xl border border-[#E6E1D6] bg-[#FAF7F2] p-6 sm:p-10">
							{submitted ? (
								<div className="flex min-h-[570px] flex-col items-center justify-center text-center">
									<div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A24B]/15 text-3xl text-[#A8832F]">
										<FiCheck />
									</div>

									<h3 className="font-serif text-4xl text-[#0B1B33]">
										Thank you!
									</h3>

									<p className="mt-4 max-w-sm text-sm leading-7 text-[#5B6B82]">
										Your demo inquiry has been submitted successfully. This is a
										frontend demonstration, so no information has been sent to a
										server.
									</p>

									<button
										onClick={() => setSubmitted(false)}
										className="mt-8 inline-flex items-center gap-2 bg-[#0B1B33] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1E3E6D]"
									>
										Send another inquiry
										<FiArrowRight />
									</button>
								</div>
							) : (
								<>
									<div className="mb-9">
										<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8832F]">
											Contact form
										</p>
										<h3 className="font-serif text-3xl text-[#0B1B33] sm:text-4xl">
											How can we help?
										</h3>
										<p className="mt-3 text-sm leading-6 text-[#7A8798]">
											Fill in the details below and we'll take it from there.
										</p>
									</div>

									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="grid gap-5 sm:grid-cols-2">
											<div>
												<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
													First name *
												</label>
												<input
													required
													name="firstName"
													value={formData.firstName}
													onChange={handleChange}
													placeholder="Enter your first name"
													className="w-full border border-[#E6E1D6] bg-white px-4 py-4 text-sm text-[#0B1B33] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#C9A24B]"
												/>
											</div>

											<div>
												<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
													Last name *
												</label>
												<input
													required
													name="lastName"
													value={formData.lastName}
													onChange={handleChange}
													placeholder="Enter your last name"
													className="w-full border border-[#E6E1D6] bg-white px-4 py-4 text-sm text-[#0B1B33] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#C9A24B]"
												/>
											</div>
										</div>

										<div className="grid gap-5 sm:grid-cols-2">
											<div>
												<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
													Email address *
												</label>
												<input
													required
													type="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													placeholder="you@example.com"
													className="w-full border border-[#E6E1D6] bg-white px-4 py-4 text-sm text-[#0B1B33] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#C9A24B]"
												/>
											</div>

											<div>
												<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
													Phone number
												</label>
												<input
													type="tel"
													name="phone"
													value={formData.phone}
													onChange={handleChange}
													placeholder="+91 00000 00000"
													className="w-full border border-[#E6E1D6] bg-white px-4 py-4 text-sm text-[#0B1B33] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#C9A24B]"
												/>
											</div>
										</div>

										<div>
											<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
												What are you interested in? *
											</label>
											<div className="relative">
												<select
													required
													name="inquiryType"
													value={formData.inquiryType}
													onChange={handleChange}
													className="w-full appearance-none border border-[#E6E1D6] bg-white px-4 py-4 pr-12 text-sm text-[#0B1B33] outline-none transition focus:border-[#C9A24B]"
												>
													<option value="">Select inquiry type</option>
													{inquiryTypes.map((type) => (
														<option key={type} value={type}>
															{type}
														</option>
													))}
												</select>
												<FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A8798]" />
											</div>
										</div>

										<div>
											<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
												Preferred budget
											</label>
											<div className="relative">
												<select
													name="budget"
													value={formData.budget}
													onChange={handleChange}
													className="w-full appearance-none border border-[#E6E1D6] bg-white px-4 py-4 pr-12 text-sm text-[#0B1B33] outline-none transition focus:border-[#C9A24B]"
												>
													<option value="">Select your budget</option>
													<option value="Under ₹50 Lakhs">
														Under ₹50 Lakhs
													</option>
													<option value="₹50 Lakhs – ₹1 Crore">
														₹50 Lakhs – ₹1 Crore
													</option>
													<option value="₹1 Crore – ₹2 Crore">
														₹1 Crore – ₹2 Crore
													</option>
													<option value="₹2 Crore – ₹5 Crore">
														₹2 Crore – ₹5 Crore
													</option>
													<option value="Above ₹5 Crore">Above ₹5 Crore</option>
													<option value="Not decided">Not decided yet</option>
												</select>
												<FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A8798]" />
											</div>
										</div>

										<div>
											<label className="mb-2 block text-sm font-medium text-[#0B1B33]">
												Tell us more *
											</label>
											<textarea
												required
												rows={5}
												name="message"
												value={formData.message}
												onChange={handleChange}
												placeholder="Share your requirements, preferred location, or any questions..."
												className="w-full resize-none border border-[#E6E1D6] bg-white px-4 py-4 text-sm text-[#0B1B33] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#C9A24B]"
											/>
										</div>

										<button
											type="submit"
											className="group flex w-full items-center justify-center gap-3 bg-[#0B1B33] px-7 py-5 text-sm font-semibold text-white transition hover:bg-[#1E3E6D]"
										>
											Submit inquiry
											<FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
										</button>

										<p className="text-center text-xs leading-5 text-[#8B96A5]">
											This form is for demonstration purposes only. Your
											information stays in this browser and is not sent to a
											server.
										</p>
									</form>
								</>
							)}
						</div>
					</Reveal>
				</div>
			</section>

			{/* WHY CONTACT US */}
			<section className="px-6 py-24 lg:px-12">
				<div className="mx-auto max-w-7xl">
					<SectionHeading
						eyebrow="The experience"
						title="More than just a conversation."
						description="A property decision deserves thoughtful guidance. Here's what you can expect from our team."
					/>

					<div className="grid gap-8 md:grid-cols-3">
						{reasons.map((item, index) => {
							const Icon = item.icon;

							return (
								<Reveal key={item.title} delay={index * 0.1}>
									<div className="border-t border-[#C9A24B] pt-8">
										<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#A8832F] shadow-sm">
											<Icon />
										</div>
										<h3 className="font-serif text-2xl text-[#0B1B33]">
											{item.title}
										</h3>
										<p className="mt-4 text-sm leading-7 text-[#5B6B82]">
											{item.description}
										</p>
									</div>
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* OFFICE + HOURS */}
			<section className="bg-[#0B1B33] px-6 py-24 lg:px-12">
				<div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
					<Reveal>
						<div>
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E4C77B]">
								Come say hello
							</p>

							<h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
								A place to start
								<span className="block text-[#E4C77B]">something great.</span>
							</h2>

							<p className="mt-6 max-w-lg text-sm leading-8 text-white/60 sm:text-base">
								Visit our sample office location or connect with our team
								online. We're always happy to talk about property,
								possibilities, and your next move.
							</p>

							<div className="mt-9 flex items-start gap-4">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A24B]/15 text-xl text-[#E4C77B]">
									<FiMapPin />
								</div>
								<div>
									<h3 className="font-semibold text-white">Our office</h3>
									<p className="mt-2 text-sm leading-7 text-white/55">
										Estate House, Business District,
										<br />
										Mumbai, Maharashtra, India
									</p>
								</div>
							</div>

							<div className="mt-9 flex items-start gap-4">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A24B]/15 text-xl text-[#E4C77B]">
									<FiClock />
								</div>
								<div className="w-full">
									<h3 className="font-semibold text-white">Office hours</h3>
									<div className="mt-3 space-y-3">
										{officeHours.map((item) => (
											<div
												key={item.day}
												className="flex flex-wrap justify-between gap-3 border-b border-white/10 pb-3 text-sm"
											>
												<span className="text-white/55">{item.day}</span>
												<span className="text-white">{item.hours}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</Reveal>

					<Reveal delay={0.15}>
						<div className="relative min-h-[420px] overflow-hidden rounded-2xl">
							<iframe
								title="Sample office location map"
								src="https://maps.google.com/maps?q=Mumbai&t=&z=12&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								loading="lazy"
								className="absolute inset-0 h-full w-full border-0 grayscale-[0.25]"
							/>
							<div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1B33]/70 to-transparent p-7 pt-20">
								<span className="inline-flex items-center gap-2 text-sm font-medium text-white">
									<FiMapPin className="text-[#E4C77B]" />
									Mumbai, Maharashtra
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* FAQ */}
			<section className="px-6 py-24 lg:px-12">
				<div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
					<Reveal>
						<div>
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#A8832F]">
								Frequently asked questions
							</p>

							<h2 className="font-serif text-4xl leading-tight text-[#0B1B33] sm:text-5xl">
								A few things
								<span className="block text-[#C9A24B]">you might wonder.</span>
							</h2>

							<p className="mt-6 text-sm leading-8 text-[#5B6B82]">
								Have another question? Send us a message and our team will be
								happy to help.
							</p>

							<Link
								href="#contact-form"
								className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#A8832F] hover:text-[#0B1B33]"
							>
								Ask us anything
								<FiArrowUpRight />
							</Link>
						</div>
					</Reveal>

					<div className="space-y-3">
						{faqs.map((faq, index) => (
							<Reveal key={faq.question} delay={index * 0.05}>
								<div className="border-b border-[#E6E1D6]">
									<button
										onClick={() =>
											setActiveFaq(activeFaq === index ? -1 : index)
										}
										className="flex w-full items-center justify-between gap-5 py-6 text-left"
									>
										<span className="font-serif text-lg text-[#0B1B33] sm:text-xl">
											{faq.question}
										</span>
										<FiChevronDown
											className={`shrink-0 text-xl text-[#A8832F] transition-transform ${
												activeFaq === index ? "rotate-180" : ""
											}`}
										/>
									</button>

									<motion.div
										initial={false}
										animate={{
											height: activeFaq === index ? "auto" : 0,
											opacity: activeFaq === index ? 1 : 0,
										}}
										transition={{ duration: 0.3 }}
										className="overflow-hidden"
									>
										<p className="max-w-2xl pb-6 text-sm leading-7 text-[#5B6B82]">
											{faq.answer}
										</p>
									</motion.div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="px-6 pb-24 lg:px-12">
				<Reveal>
					<div className="relative mx-auto max-w-7xl overflow-hidden bg-[#C9A24B] px-8 py-16 sm:px-14 lg:px-20">
						<div className="absolute -right-20 -top-40 h-96 w-96 rounded-full border border-[#0B1B33]/15" />
						<div className="absolute -right-5 -top-24 h-72 w-72 rounded-full border border-[#0B1B33]/15" />

						<div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
							<div className="max-w-2xl">
								<p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#0B1B33]/60">
									Your next move starts here
								</p>
								<h2 className="font-serif text-4xl leading-tight text-[#0B1B33] sm:text-5xl">
									The right property.
									<br />
									The right guidance.
								</h2>
								<p className="mt-5 max-w-xl text-sm leading-7 text-[#0B1B33]/70">
									Let's turn your property plans into a clear path forward.
								</p>
							</div>

							<Link
								href="/properties"
								className="inline-flex shrink-0 items-center gap-4 bg-[#0B1B33] px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#1E3E6D]"
							>
								Explore properties
								<FiArrowUpRight className="text-lg" />
							</Link>
						</div>
					</div>
				</Reveal>
			</section>
		</main>
	);
}
