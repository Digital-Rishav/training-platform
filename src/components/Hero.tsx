import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#F8F3EB]">
            {/* Paper texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')] mix-blend-multiply" />

            {/* Ambient gradients */}
            <div className="absolute -top-32 -right-20 h-128 w-lg rounded-full bg-[#D7B58A]/18 blur-[120px]" />
            <div className="absolute bottom-0 -left-24 h-104 w-104 rounded-full bg-[#E7D4BF]/28 blur-[120px]" />
            <div className="absolute top-28 left-1/3 h-72 w-72 rounded-full bg-[#C8A87A]/10 blur-[100px]" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -left-10 top-24 h-44 w-44 rounded-full border border-[#D7C3A6]/40" />
            <div className="pointer-events-none absolute right-8 top-20 h-72 w-72 rounded-full border border-[#D7C3A6]/25" />

            <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-28 lg:px-12 lg:py-16">
                {/* LEFT CONTENT */}
                <div className="z-10 flex-1">
                    {/* Eyebrow */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="h-px w-12 bg-[#B68652]" />
                        <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#9B7750]">
                            Craft • Art • Creativity
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.06em] text-[#241C17] sm:text-6xl lg:text-[5.8rem]">
                        Create today,
                        <span className="mt-3 block italic font-normal text-[#A67848]">
                            inspire forever.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-lg text-lg leading-9 text-[#6B6258]">
                        Discover your creative potential through immersive workshops in
                        portrait making, handicrafts, textile design, home décor, fashion
                        art, and festive crafts.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/courses"
                            className="group inline-flex items-center justify-center rounded-full bg-[#241C17] px-9 py-5 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(36,28,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A67848]"
                        >
                            Explore Courses
                            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-[#D6C2A7] bg-white/60 px-9 py-5 text-sm font-semibold text-[#241C17] backdrop-blur-lg transition-all duration-300 hover:bg-white/80"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative mt-14 flex-1 lg:mt-0">
                    {/* Soft glow behind image */}
                    <div className="absolute inset-0 -z-10 rounded-[200px] bg-[#C9A679]/18 blur-3xl" />

                    {/* Image */}
                    <div className="group relative mx-auto aspect-[0.78] w-full max-w-155 overflow-hidden rounded-[180px_180px_40px_40px] border border-[#E3D3BF] bg-[#D8CCBA] shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
                        <Image
                            src="/images/art.jpg"
                            alt="Students creating handmade artwork"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Rich overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />

                        {/* Glass card */}
                        <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/25 bg-white/12 px-8 py-7 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/85">
                                Learn by creating
                            </p>
                            <h3 className="mt-2 font-serif text-2xl leading-tight text-white">
                                Turn imagination into art.
                            </h3>
                        </div>
                    </div>

                    {/* Floating medallion */}
                    <div className="absolute -bottom-8 right-4 z-20 sm:-right-2 lg:-right-6">
                        <div className="relative h-28 w-28 rounded-full border border-[#D7B889] bg-[#8B6946] p-2 shadow-[0_18px_40px_rgba(70,48,24,0.28)] ring-4 ring-[#F8F3EB]">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image
                                    src="/images/button.png"
                                    alt="Create Your Story"
                                    fill
                                    className="object-cover"
                                    sizes="112px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
