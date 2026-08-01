"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Palette, Images, Phone } from "lucide-react";

const navItems = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "Courses",
        href: "/courses",
        icon: Palette,
    },
    {
        name: "Gallery",
        href: "/gallery",
        icon: Images,
    },
    {
        name: "Contact",
        href: "/contact",
        icon: Phone,
    },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <div className="mx-auto flex h-18 max-w-md items-center justify-around rounded-2xl border border-[#E5DED3] bg-[#FDFCF9]/95 px-2 shadow-[0_8px_30px_rgba(41,35,30,0.12)] backdrop-blur-xl">

                {navItems.map((item) => {
                    const Icon = item.icon;

                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group relative flex h-full min-w-16 flex-1 flex-col items-center justify-center gap-1.5 transition-all duration-300 ${
                                isActive
                                    ? "text-[#254B3A]"
                                    : "text-[#81776B] hover:text-[#254B3A]"
                            }`}
                        >
                            {/* Active Background */}
                            <span
                                className={`absolute top-1/2 -translate-y-1/2 rounded-xl transition-all duration-300 ${
                                    isActive
                                        ? "h-12 w-14 bg-[#F1EBE1]"
                                        : "h-0 w-0 bg-transparent"
                                }`}
                            />

                            {/* Icon */}
                            <span className="relative z-10">
                                <Icon
                                    className={`h-5.25 w-5.25 transition-all duration-300 ${
                                        isActive
                                            ? "stroke-[2.2] text-[#254B3A]"
                                            : "stroke-[1.7]"
                                    }`}
                                />
                            </span>

                            {/* Label */}
                            <span
                                className={`relative z-10 text-[11px] tracking-wide transition-all duration-300 ${
                                    isActive
                                        ? "font-semibold text-[#254B3A]"
                                        : "font-medium"
                                }`}
                            >
                                {item.name}
                            </span>

                            {/* Active Gold Dot */}
                            {isActive && (
                                <span className="absolute bottom-2 h-1 w-1 rounded-full bg-[#C6A15B]" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}