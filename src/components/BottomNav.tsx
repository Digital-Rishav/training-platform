
"use client";

import Link from "next/link";
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
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-md items-center justify-around">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex h-full w-full flex-col items-center justify-center gap-1 text-gray-600 transition-colors hover:text-black"
                        >
                            <Icon className="h-5 w-5" />

                            <span className="text-xs font-medium">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

