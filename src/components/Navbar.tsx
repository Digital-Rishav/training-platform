"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#E8E1D8] bg-[#FDFCF9]/95 backdrop-blur-md">

            <nav className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3"
                >
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#C6A15B]/40">
                        <Image
                            src="/images/logo.png"
                            alt="EcoWish Craft India Academy"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="font-serif text-[26px] tracking-[-0.03em] text-[#29231E]">
                            EcoWish
                        </span>

                        <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#96784A]">
                            Craft India
                        </span>
                    </div>
                </Link>


                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative py-2 text-[14px] font-medium text-[#40382F] transition-colors duration-300 hover:text-[#A27B3F]"
                        >
                            {link.name}

                            {/* Elegant hover underline */}
                            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C6A15B] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    {/* Premium CTA */}
                    <Link
                        href="/contact"
                        className="group ml-2 flex items-center gap-2 rounded-full bg-[#241C17] hover:bg-[#A67848] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1D3D2F] hover:shadow-lg"
                    >
                        Enquire for Admission

                        <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED6CA] text-[#29231E] transition hover:border-[#C6A15B] hover:bg-[#F4EFE7] md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>

            </nav>


            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-[#E8E1D8] bg-[#FDFCF9] px-5 py-6 shadow-lg md:hidden">

                    <div className="flex flex-col">

                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between border-b border-[#E8E1D8] py-4 text-[17px] font-medium text-[#40382F] transition-colors hover:text-[#A27B3F] ${
                                    index === 0 ? "border-t" : ""
                                }`}
                            >
                                <span>{link.name}</span>

                                <ArrowUpRight className="h-4 w-4 text-[#C6A15B]" />
                            </Link>
                        ))}

                    </div>


                    {/* Mobile CTA */}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#241C17] hover:bg-[#A67848] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1D3D2F]"
                    >
                        Enquire for Admission

                        <ArrowUpRight className="h-4 w-4" />
                    </Link>

                </div>
            )}

        </header>
    );
}