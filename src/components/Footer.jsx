"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";

import {
	FiMapPin,
	FiPhone,
	FiMail,
	FiArrowUpRight,
	FiArrowUp,
} from "react-icons/fi";

const quickLinks = [
	{ href: "/", label: "Home" },
	{ href: "/properties", label: "Explore Properties" },
	{ href: "/agents", label: "Our Agents" },
	{ href: "/about", label: "About Us" },
	{ href: "/contact", label: "Contact Us" },
];

const accountLinks = [
	{ href: "/login", label: "Login" },
	{ href: "/register", label: "Create Account" },
	{ href: "/properties", label: "Find a Property" },
	{ href: "/agents", label: "Find an Agent" },
];

const socials = [
	{ icon: FaInstagram, href: "https://www.instagram.com/orybiteofficial", label: "Instagram" },
	{ icon: FaFacebookF, href: "#", label: "Facebook" },
	{ icon: FaLinkedinIn, href: "https://www.linkedin.com/company/orybite/", label: "LinkedIn" },
	{ icon: FaXTwitter, href: "https://x.com/Orybite", label: "X" },
];

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative overflow-hidden bg-ink text-paper">
			{/* Decorative Background */}
			<div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/5 blur-[100px]" />
			<div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-navy/40 blur-[100px]" />

			{/* CTA Section */}
			<div className="relative mx-auto max-w-7xl px-6 pt-20">
				<div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-navy via-ink to-[#102746] p-8 md:p-12">
					<div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border border-gold/10" />
					<div className="pointer-events-none absolute -right-2 -top-16 h-56 w-56 rounded-full border border-gold/10" />

					<div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
						<div className="max-w-xl">
							<span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
								<span className="h-px w-8 bg-gold" />
								Your Next Chapter Starts Here
							</span>

							<h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
								Find a place you'll
								<span className="text-gold-gradient"> love to call home.</span>
							</h2>

							<p className="mt-4 max-w-lg text-sm leading-7 text-paper/65">
								Whether you're buying, selling, or exploring new opportunities,
								let us help you find the perfect property.
							</p>
						</div>

						<motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
							<Link
								href="/properties"
								className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-gold-gradient px-7 py-4 text-sm font-bold text-ink shadow-lg shadow-gold/10 transition-shadow hover:shadow-gold/20"
							>
								Explore Properties
								<FiArrowUpRight size={18} />
							</Link>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Main Footer */}
			<div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20">
				<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
					{/* Brand */}
					<div className="lg:col-span-4">
						<Link href="/" className="inline-flex flex-col leading-none">
							<span className="font-display text-3xl text-paper">
								Ory<span className="text-gold-gradient">bite</span>
							</span>

							<span className="mt-2 text-[10px] uppercase tracking-[0.4em] text-gold-light">
								Real Estate
							</span>
						</Link>

						<p className="mt-7 max-w-sm text-sm leading-7 text-paper/60">
							Discover exceptional properties and meaningful opportunities. We
							bring buyers, sellers, and real estate professionals together
							through a smarter property experience.
						</p>

						{/* Social Links */}
						<div className="mt-7 flex items-center gap-3">
							{socials.map(({ icon: Icon, href, label }) => (
								<motion.a
									key={label}
									href={href}
									aria-label={label}
									target={href.startsWith("http") ? "_blank" : undefined}
									rel={href.startsWith("http") ? "noreferrer" : undefined}
									whileHover={{ y: -4, backgroundColor: "#C9A24B" }}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper transition-colors hover:text-ink"
								>
									<Icon size={17} />
								</motion.a>
							))}
						</div>
					</div>

					{/* Explore */}
					<div className="lg:col-span-2 lg:col-start-6">
						<h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
							Explore
						</h3>

						<ul className="space-y-4">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="group inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold-light"
									>
										<span className="h-1 w-1 rounded-full bg-gold/50 transition-all group-hover:w-3" />
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Account */}
					<div className="lg:col-span-2">
						<h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
							Account
						</h3>

						<ul className="space-y-4">
							{accountLinks.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="group inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold-light"
									>
										{link.label}
										<FiArrowUpRight
											size={13}
											className="opacity-0 transition-opacity group-hover:opacity-100"
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div className="lg:col-span-2">
						<h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
							Get in Touch
						</h3>

						<ul className="space-y-5">
							<li className="flex items-start gap-3">
								<FiMapPin size={17} className="mt-1 shrink-0 text-gold" />
								<span className="text-sm leading-6 text-paper/60">
									Your City, Your Location
								</span>
							</li>

							<li className="flex items-center gap-3">
								<FiPhone size={16} className="shrink-0 text-gold" />
								<a
									href="tel:+910000000000"
									className="text-sm text-paper/60 transition-colors hover:text-gold-light"
								>
									+91 00000 00000
								</a>
							</li>

							<li className="flex items-center gap-3">
								<FiMail size={17} className="shrink-0 text-gold" />
								<a
									href="mailto:hello@example.com"
									className="break-all text-sm text-paper/60 transition-colors hover:text-gold-light"
								>
									hello@example.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="my-12 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

				{/* Bottom Bar */}
				<div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
					<p className="text-xs text-paper/40">
						© 2026 Orybite Real Estate. All rights
						reserved.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-6">
						<Link
							href="/privacy-policy"
							className="text-xs text-paper/40 transition-colors hover:text-gold-light"
						>
							Privacy Policy
						</Link>

						<Link
							href="/terms"
							className="text-xs text-paper/40 transition-colors hover:text-gold-light"
						>
							Terms & Conditions
						</Link>
					</div>

					<button
						onClick={scrollToTop}
						aria-label="Back to top"
						className="group flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-ink"
					>
						<FiArrowUp
							size={17}
							className="transition-transform group-hover:-translate-y-1"
						/>
					</button>
				</div>
			</div>
		</footer>
	);
}
