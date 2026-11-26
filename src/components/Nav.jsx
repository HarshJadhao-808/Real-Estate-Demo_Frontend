"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
const solid = scrolled || open;
const showShadow = scrolled;

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				solid ? "bg-ink/95 backdrop-blur" : "bg-transparent"
			} ${showShadow ? "shadow-lg shadow-black/10" : "shadow-none"}`}
		>
			<nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
				{/* Logo */}
				<Link href="/" className="flex flex-col leading-none">
					<span className="font-display text-2xl text-paper">
						Ory<span className="text-gold-gradient">bite</span>
					</span>
					<span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gold-light">
						Real Estate
					</span>
				</Link>

				{/* Desktop links */}
				<ul className="hidden items-center gap-8 md:flex">
					{links.map((l) => (
						<li key={l.href} className="relative">
							<Link
								href={l.href}
								className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-light ${
									isActive(l.href) ? "text-gold-light" : "text-paper"
								}`}
							>
								{l.label}
							</Link>
							{isActive(l.href) && (
								<motion.span
									layoutId="nav-underline"
									className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold-gradient"
								/>
							)}
						</li>
					))}
				</ul>

				{/* Desktop CTA */}
				<div className="hidden items-center gap-4 md:flex">
					<Link
						href="/login"
						className="text-sm font-medium text-paper hover:text-gold-light"
					>
						Login
					</Link>
					<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
						<Link
							href="/register"
							className="bg-gold-gradient inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-ink shadow-md"
						>
							Get Started
						</Link>
					</motion.div>
				</div>

				{/* Mobile toggle */}
				<button
					onClick={() => setOpen((o) => !o)}
					aria-label="Toggle menu"
					className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
				>
					<span
						className={`h-0.5 w-6 bg-paper transition ${open ? "translate-y-2 rotate-45" : ""}`}
					/>
					<span
						className={`h-0.5 w-6 bg-paper transition ${open ? "opacity-0" : ""}`}
					/>
					<span
						className={`h-0.5 w-6 bg-paper transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
					/>
				</button>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden border-t border-white/10 bg-ink md:hidden"
					>
						<ul className="flex flex-col gap-1 px-6 py-4">
							{links.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className={`block rounded-lg px-3 py-3 text-base ${
											isActive(l.href)
												? "bg-white/5 text-gold-light"
												: "text-paper"
										}`}
									>
										{l.label}
									</Link>
								</li>
							))}
							<li className="mt-3 flex gap-3">
								<Link
									href="/login"
									className="flex-1 rounded-full border border-gold/60 py-3 text-center text-paper"
								>
									Login
								</Link>
								<Link
									href="/register"
									className="bg-gold-gradient flex-1 rounded-full py-3 text-center font-semibold text-ink"
								>
									Get Started
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}