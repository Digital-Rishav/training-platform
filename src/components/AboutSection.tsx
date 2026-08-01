
import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";

const impactPoints = [
  {
    icon: Leaf,
    title: "We Give Waste a New Life",
    description:
      "We believe what is often thrown away can become something beautiful, useful, and meaningful.",
  },
  {
    icon: Users,
    title: "We Empower Local Artisans",
    description:
      "We celebrate the skills of local artisans and help traditional creativity find new opportunities.",
  },
  {
    icon: Heart,
    title: "We Support Women & Rural Workers",
    description:
      "Through creative training and meaningful work, we help women and rural communities build skills, confidence, and independence.",
  },
  {
    icon: Sparkles,
    title: "We Create With Purpose",
    description:
      "Every creation is an opportunity to bring together creativity, sustainability, and human potential.",
  },
];

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Main Story */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Left - Story Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A96E]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
                Our Purpose
              </p>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-[#2E2A24] sm:text-5xl lg:text-6xl">
              We believe every
              <span className="block italic text-[#8B7355]">
                discarded thing
              </span>
              can have another life.
            </h2>
          </div>

          {/* Right - Story */}
          <div>
            <p className="text-lg leading-8 text-[#4F4941]">
              At Ecowish Craft, we see possibilities where others may see
              waste. We transform discarded and overlooked materials into
              beautiful, thoughtful creations—giving them a new purpose while
              giving people a new opportunity.
            </p>

            <p className="mt-6 text-base leading-7 text-[#6B645A]">
              But our work is about more than what we create. It is about the
              people behind every creation. We believe that creativity can
              become a path to dignity, confidence, and independence.
            </p>

            <p className="mt-6 text-base leading-7 text-[#6B645A]">
              By supporting local artisans and providing creative training to
              rural workers and women, we aim to help people build skills,
              discover their potential, and stand on their own feet.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-medium text-[#8B7355] transition-colors hover:text-[#2E2A24]"
            >
              Discover Our Story

              <ArrowUpRight
                size={17}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {impactPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2E2A24] text-[#D8B878]">
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-7 font-serif text-2xl leading-tight text-[#2E2A24]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#6B645A]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emotional Closing */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#2E2A24] px-6 py-14 text-center sm:px-10 lg:mt-24 lg:px-20 lg:py-20">
          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#C9A96E]/20" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
              More Than Craft
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl">
              When we create
              <span className="italic text-[#D8B878]">
                {" "}
                differently,
              </span>
              we help build a better future.
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#C8C0B4] sm:text-base">
              A future where waste is valued, creativity is respected,
              artisans are supported, women have opportunities, and rural
              communities can grow with dignity.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center rounded-full bg-[#C9A96E] px-7 py-4 text-sm font-medium text-[#2E2A24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B878]"
              >
                Learn With Us

                <ArrowUpRight
                  size={17}
                  className="ml-2"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#8A8175] px-7 py-4 text-sm font-medium text-[#F5F1E8] transition-all duration-300 hover:border-[#D8B878] hover:text-[#D8B878]"
              >
                Be Part of the Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

