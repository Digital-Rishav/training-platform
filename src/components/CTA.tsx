
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#2E2A24] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C9A96E]/20" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#C9A96E]/20" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#C9A96E]" />

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
            Begin Your Creative Journey
          </p>

          <span className="h-px w-8 bg-[#C9A96E]" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
          Your creativity is waiting
          <span className="block italic text-[#D8B878]">
            to take shape.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#C8C0B4] sm:text-lg">
          Whether you are discovering your creative passion or looking to
          develop a new skill, take the first step toward learning, creating,
          and growing with us.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-[#C9A96E] px-8 py-4 text-sm font-medium text-[#2E2A24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B878] sm:w-auto"
          >
            Contact Us for Admission
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
          </Link>

          <Link
            href="/courses"
            className="w-full rounded-full border border-[#C9A96E]/50 px-8 py-4 text-sm font-medium text-[#F5F1E8] transition-all duration-300 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 sm:w-auto"
          >
            Explore Courses
          </Link>
        </div>

        {/* Small Note */}
        <p className="mt-6 text-xs tracking-wide text-[#A9A196]">
          Have questions? We are happy to help you choose the right course.
        </p>
      </div>
    </section>
  );
}

