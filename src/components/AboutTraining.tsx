import Image from "next/image";
import Link from "next/link";

export default function AboutTraining() {
  return (
    <section className="overflow-hidden bg-[#E9E2D5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Image */}
        <div className="relative">
          {/* Decorative Element */}
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#8B7355]/30" />

          <div className="relative aspect-4/5 overflow-hidden rounded-[1.5rem_8rem_1.5rem_8rem] bg-[#D3C5B1]">
            <Image
              src="/images/OurFounder.jpeg"
              alt="Creative craft training at Ecowish Craft"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Floating Quote */}
          <div className="absolute -bottom-6 right-3 max-w-[15.625rem] rounded-2xl border border-[#C9A96E]/40 bg-[#8B7355] p-5 shadow-xl sm:right-6">
            <p className="font-serif text-lg italic leading-6 text-[#FFF8E7]">
              "Creativity is not just something we learn. It is something we
              practice."
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#D8B878]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#F3D9A2]">
                Sudhanshu Ranjan Pandey
              </p>
            </div>

            <p className="mt-1 pl-8 text-[9px] uppercase tracking-[0.15em] text-[#E8D2A5]/70">
              Founder
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="pt-6 lg:pt-0">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#8B7355]" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
              About Ecowish Craft
            </p>
          </div>

          <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-[#2E2A24] sm:text-5xl">
            A space to
            <span className="block italic text-[#8B7355]">
              learn, create & grow.
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-base leading-7 text-[#6B645A]">
            <p>
              Ecowish Craft India Pvt. Ltd. is a creative space where art,
              craftsmanship, and imagination come together. We believe that
              every individual has the potential to create something meaningful.
            </p>

            <p>
              Through practical and hands-on training, we encourage students to
              explore creative techniques, develop artistic skills, and discover
              the joy of making something with their own hands.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-6 border-y border-[#B7A58A]/40 py-6">
            <div>
              <p className="font-serif text-2xl text-[#2E2A24]">
                Hands-On
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#8B7355]">
                Practical Learning
              </p>
            </div>

            <div>
              <p className="font-serif text-2xl text-[#2E2A24]">
                Creative
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#8B7355]">
                Skill Development
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="mt-8 inline-flex items-center text-sm font-medium text-[#2E2A24] transition-colors hover:text-[#8B7355]"
          >
            Discover Our Story
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}