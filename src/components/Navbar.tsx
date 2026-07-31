"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/images/logo.png"
                        alt="EcoWish Academy"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                        priority
                    />

                    <div className="flex flex-col leading-tight">
                        <span className="font-serif text-3xl tracking-tight">
                            EcoWish
                        </span>
                        <span className="text-sm font-medium text-[#8B7355]">
                            Craft India
                        </span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-gray-200 bg-white px-4 py-5">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:text-[#B68652]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Admission CTA */}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 block rounded-lg bg-[#241C17] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#B68652]"
                    >
                        Enquire for Admission
                    </Link>
                </div>
            )}
        </header>
    );
}
