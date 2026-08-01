import Link from "next/link";
import Image from "next/image";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#F5F1E8] text-[#2E2A24]">
            <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:px-12 lg:pt-20">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
                   {/* Brand */}
<div className="max-w-sm">
    <Link href="/" className="inline-flex items-center gap-3">
        <Image
            src="/images/logo.png"
            alt="EcoWish Craft India"
            width={56}
            height={56}
            className="rounded-full object-cover h-auto"
            priority
        />

        <div>
            <h2 className="font-serif text-3xl tracking-tight">
                EcoWish
            </h2>
            <p className="text-sm font-medium text-[#8B7355]">
                Craft India
            </p>
        </div>
    </Link>

    <p className="mt-5 text-sm leading-6 text-[#6B645A]">
        A creative space where art, craftsmanship, and imagination come
        together. Learn practical skills, explore your creativity, and
        create something meaningful.
    </p>

    {/* Social Links */}
    <div className="mt-6 flex gap-3">
        <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8BBA8] text-[#6B645A] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B7355] hover:bg-[#8B7355] hover:text-white"
        >
            <FaInstagram size={17} />
        </a>

        <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8BBA8] text-[#6B645A] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B7355] hover:bg-[#8B7355] hover:text-white"
        >
            <FaFacebookF size={16} />
        </a>

        <a
            href="#"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8BBA8] text-[#6B645A] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B7355] hover:bg-[#8B7355] hover:text-white"
        >
            <FaYoutube size={18} />
        </a>
    </div>
</div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
                            Explore
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-[#6B645A]">
                            <li>
                                <Link href="/" className="transition-colors hover:text-[#8B7355]">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/courses"
                                    className="transition-colors hover:text-[#8B7355]"
                                >
                                    Courses
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition-colors hover:text-[#8B7355]"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition-colors hover:text-[#8B7355]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
                            Courses
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-[#6B645A]">
                            <li>Portrait Making</li>
                            <li>Handicraft</li>
                            <li>Home Decor</li>
                            <li>Textile Design</li>
                            <li>Fashion Art</li>
                            <li>Festive Crafts</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
                            Get In Touch
                        </h3>

                        <div className="mt-5 space-y-4 text-sm text-[#6B645A]">
                            <p>
                                Have questions about our courses or admissions? We'd love to
                                hear from you.
                            </p>

                            <a
                                href="mailto:info@ecowishcraft.com"
                                className="block transition-colors hover:text-[#8B7355]"
                            >
                                info@ecowishcraft.com
                            </a>

                            <Link
                                href="/contact"
                                className="inline-flex items-center font-medium text-[#2E2A24] transition-colors hover:text-[#8B7355]"
                            >
                                Contact Us
                                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col gap-4 border-t border-[#D8D0C2] pt-6 text-xs text-[#8A8175] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Ecowish Craft India Pvt. Ltd. All
                        rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-[#8B7355]"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="transition-colors hover:text-[#8B7355]"
                        >
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

