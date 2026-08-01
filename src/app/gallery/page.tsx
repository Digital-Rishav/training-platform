"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Leaf, Sparkles } from "lucide-react";

const categories = [
    "All",
    "Upcycling",
    "Handcraft",
    "Home Decor",
    "Textile Art",
    "Sustainable Living",
];

const galleryItems = [
    {
        id: 1,
        title: "The Art of Giving Materials a Second Life",
        category: "Upcycling",
        image:
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=85",
        size: "large",
    },
    {
        id: 2,
        title: "Crafted by Hand",
        category: "Handcraft",
        image:
            "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85",
        size: "small",
    },
    {
        id: 3,
        title: "Natural Textures",
        category: "Home Decor",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
        size: "small",
    },
    {
        id: 4,
        title: "Hands That Create",
        category: "Handcraft",
        image:
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=85",
        size: "wide",
    },
    {
        id: 5,
        title: "The Beauty of Imperfection",
        category: "Textile Art",
        image:
            "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=900&q=85",
        size: "small",
    },
    {
        id: 6,
        title: "Designed With Nature in Mind",
        category: "Sustainable Living",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
        size: "small",
    },
    {
        id: 7,
        title: "From Material to Meaning",
        category: "Upcycling",
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
        size: "large",
    },
    {
        id: 8,
        title: "Crafting a More Conscious Future",
        category: "Sustainable Living",
        image:
            "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85",
        size: "small",
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter(
                  (item) => item.category === activeCategory
              );

    return (
        <main className="min-h-screen bg-[#F5F1E8] text-[#2E2A24]">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#2E2A24] px-5 pb-20 pt-20 text-[#F5F1E8] sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C9A96E]/20" />

                <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#C9A96E]/10" />

                <div className="relative mx-auto max-w-7xl">

                    <div className="max-w-4xl">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">

                            <span className="h-px w-8 bg-[#C9A96E]" />

                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
                                The EcoWish Gallery
                            </p>

                        </div>

                        {/* Heading */}
                        <h1 className="mt-7 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">

                            Where materials

                            <span className="block italic text-[#D8B878]">
                                find new meaning.
                            </span>

                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-base leading-8 text-[#C8C0B4] sm:text-lg">
                            Explore the world of sustainable creativity—where
                            discarded materials inspire new ideas, traditional
                            craftsmanship meets modern design, and every creation
                            carries a story.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                GALLERY NOTE
            ====================================================== */}
            <section className="px-5 pt-10 sm:px-8 lg:px-12 lg:pt-14">

                <div className="mx-auto max-w-3xl text-center">

                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAE3D6] text-[#8B7355]">
                        <Sparkles
                            size={18}
                            strokeWidth={1.5}
                        />
                    </div>

                    <p className="text-sm leading-7 text-[#6B645A]">

                        <span className="font-semibold text-[#8B7355]">
                            A Gallery in the Making
                        </span>

                        <br />

                        These visuals are temporary placeholders inspired by
                        sustainable craft and creativity. As our journey grows,
                        this space will be filled with our own creations,
                        artisans, learners, and workshop stories.

                    </p>

                </div>

            </section>


            {/* =====================================================
                CATEGORY FILTER
            ====================================================== */}
            <section className="px-5 pt-12 sm:px-8 lg:px-12 lg:pt-16">

                <div className="mx-auto max-w-7xl">

                    <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">

                        {categories.map((category) => {

                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? "bg-[#2E2A24] text-[#F5F1E8] shadow-md"
                                            : "border border-[#D8D0C2] bg-[#FAF8F3] text-[#6B645A] hover:border-[#8B7355] hover:text-[#2E2A24]"
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                GALLERY GRID
            ====================================================== */}
            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-16">

                <div className="mx-auto max-w-7xl">

                    <div className="grid auto-rows-55 grid-cols-2 gap-3 sm:auto-rows-70 sm:gap-5 lg:grid-cols-4">

                        {filteredItems.map((item) => (

                            <article
                                key={item.id}
                                className={`group relative overflow-hidden rounded-3xl ${
                                    item.size === "large"
                                        ? "col-span-2 row-span-2"
                                        : item.size === "wide"
                                          ? "col-span-2"
                                          : "col-span-1"
                                }`}
                            >

                                {/* Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">

                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8B878]">
                                        {item.category}
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl leading-tight sm:text-2xl">
                                        {item.title}
                                    </h3>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                STORY
            ====================================================== */}
            <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">

                    <div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2E2A24] text-[#D8B878]">

                            <Leaf
                                size={21}
                                strokeWidth={1.5}
                            />

                        </div>

                        <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">

                            From waste

                            <span className="block italic text-[#8B7355]">
                                to wonder.
                            </span>

                        </h2>

                    </div>


                    <div>

                        <p className="text-lg leading-8 text-[#4F4941]">
                            Every material has a story. Sometimes that story
                            seems to end when something is discarded.
                        </p>

                        <p className="mt-6 text-base leading-8 text-[#6B645A]">
                            But with imagination, craftsmanship, and care,
                            that same material can become the beginning of
                            something completely new.
                        </p>

                        <p className="mt-6 text-base leading-8 text-[#6B645A]">
                            This is the spirit behind EcoWish. We believe
                            creativity can change how we see waste—and how
                            we see what is possible.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUOTE
            ====================================================== */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

                <div className="mx-auto max-w-5xl rounded-3xl bg-[#EAE3D6] px-6 py-14 text-center sm:px-10 lg:px-20 lg:py-20">

                    <Sparkles
                        className="mx-auto text-[#8B7355]"
                        size={28}
                        strokeWidth={1.3}
                    />

                    <blockquote className="mt-6 font-serif text-3xl leading-tight text-[#2E2A24] sm:text-4xl lg:text-5xl">

                        "What we call waste today

                        <span className="italic text-[#8B7355]">
                            {" "}
                            may become someone's masterpiece tomorrow.
                        </span>

                    </blockquote>

                    <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-[#8B7355]">
                        The EcoWish Philosophy
                    </p>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#2E2A24] px-6 py-16 text-center text-[#F5F1E8] sm:px-10 lg:px-20 lg:py-24">

                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
                        Create With Us
                    </p>

                    <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">

                        Your creativity could be

                        <span className="block italic text-[#D8B878]">
                            the beginning of something beautiful.
                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#C8C0B4]">
                        Learn sustainable craft, discover your creative
                        potential, and become part of a journey that believes
                        in giving materials—and people—a second chance.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <Link
                            href="/courses"
                            className="inline-flex items-center rounded-full bg-[#C9A96E] px-8 py-4 text-sm font-medium text-[#2E2A24] transition-all hover:-translate-y-1 hover:bg-[#D8B878]"
                        >
                            Explore Our Courses

                            <ArrowUpRight
                                size={17}
                                className="ml-2"
                            />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full border border-[#8A8175] px-8 py-4 text-sm font-medium text-[#F5F1E8] transition-all hover:border-[#D8B878] hover:text-[#D8B878]"
                        >
                            Talk to EcoWish
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}