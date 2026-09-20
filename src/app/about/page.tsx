import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  Recycle,
  Users,
  Heart,
  Sparkles,
  GraduationCap,
  HandHeart,
} from "lucide-react";

const values = [
  {
    icon: Recycle,
    title: "Waste Into Value",
    description:
      "We look at discarded materials differently. Through creativity and upcycling, we give waste a new purpose and transform it into something beautiful, useful, and valuable.",
  },
  {
    icon: Leaf,
    title: "The Environment Comes First",
    description:
      "Our work is rooted in sustainable living. Every idea begins with the question: how can we create something meaningful while being kinder to our planet?",
  },
  {
    icon: Users,
    title: "People Make the Difference",
    description:
      "We believe in the hands and minds behind every creation. We support local artisans and help rural workers and women develop skills that can open new possibilities.",
  },
  {
    icon: Heart,
    title: "Trust Over Transactions",
    description:
      "We value the people who believe in us. Whether you are a student, artisan, partner, or customer, we want every relationship to be built on trust, respect, and loyalty.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#2E2A24]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#2E2A24] px-5 pb-20 pt-20 text-[#F5F1E8] sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">

        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C9A96E]/20" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#C9A96E]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A96E]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
                The EcoWish Story
              </p>
            </div>

            <h1 className="mt-7 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
              We see
              <span className="block italic text-[#D8B878]">
                possibility
              </span>
              where others see waste.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#C8C0B4] sm:text-lg">
              EcoWish Craft India Pvt. Ltd. is an eco-conscious company
              built on a simple belief: waste is not the end of a story.
              Sometimes, it is where a new story begins.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">

          {/* Left */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
              Who We Are
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Creating value
              <span className="block italic text-[#8B7355]">
                beyond the product.
              </span>
            </h2>

          </div>


          {/* Right */}
          <div>

            <p className="text-lg leading-8 text-[#4F4941]">
              EcoWish Craft India Pvt. Ltd. transforms waste materials into
              beautiful and valuable products while promoting a more
              sustainable way of living.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B645A]">
              We create home decor, handicrafts, interior design solutions,
              customized products, and eco-friendly gifts using recyclable
              and discarded materials.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B645A]">
              Our work brings together traditional Indian craftsmanship and
              modern creativity. Every creation carries a story—a story of
              sustainability, imagination, innovation, and the people who
              bring it to life.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B645A]">
              But for us, the real value is not only in what we create.
              It is in the opportunities we can create along the way.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ====================================================== */}
      <section className="bg-[#EAE3D6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E2A24] text-[#D8B878]">
              <Leaf size={24} strokeWidth={1.5} />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
              Our Vision
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A world where waste is not a problem,
              <span className="block italic text-[#8B7355]">
                but an opportunity.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6B645A]">
              We imagine a future where discarded materials become the
              starting point for innovation, creativity, sustainable
              products, and meaningful livelihoods.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PURPOSE
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
              What Drives Us
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Our purpose is bigger
              <span className="block italic text-[#8B7355]">
                than business.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#6B645A]">
              We want to create a place where environmental responsibility,
              creativity, and human potential can grow together.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2E2A24] text-[#D8B878]">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#6B645A]">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          EMPOWERMENT
      ====================================================== */}
      <section className="bg-[#2E2A24] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
              Our Social Purpose
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              When you teach a skill,
              <span className="block italic text-[#D8B878]">
                you give someone a possibility.
              </span>
            </h2>

          </div>


          <div>

            <p className="text-lg leading-8 text-[#C8C0B4]">
              At EcoWish, we believe empowerment begins with opportunity.
            </p>

            <p className="mt-6 text-base leading-8 text-[#AFA79B]">
              We work to upgrade traditional artisans with modern upcycling
              techniques, sustainable design practices, and market-ready
              skills—helping transform creativity and waste into valuable,
              eco-friendly products.
            </p>

            <p className="mt-6 text-base leading-8 text-[#AFA79B]">
              Our training initiatives are designed to support students,
              local artisans, rural workers, and women as they learn new
              skills, explore their creativity, and discover possibilities
              for greater independence.
            </p>

            <p className="mt-6 text-base leading-8 text-[#AFA79B]">
              We do not want people to simply complete a course and walk
              away. We want them to leave with something more valuable:
              confidence in what they can create and the knowledge that
              their skills have worth.
            </p>

            <Link
              href="/courses"
              className="mt-8 inline-flex items-center rounded-full bg-[#C9A96E] px-7 py-4 text-sm font-medium text-[#2E2A24] transition-all hover:-translate-y-1 hover:bg-[#D8B878]"
            >
              Explore Our Training

              <ArrowUpRight
                size={17}
                className="ml-2"
              />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDERS
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
              The People Behind EcoWish
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Meet Our
              <span className="italic text-[#8B7355]">
                {" "}
                Founders.
              </span>
            </h2>

            <p className="mx-auto mt-6 text-base leading-7 text-[#6B645A]">
              EcoWish brings together design, creativity, technical
              understanding, and business strategy with one shared purpose:
              creating value for people and the planet.
            </p>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-2">


            {/* Sudhanshu */}
            <article className="overflow-hidden rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3]">

              <div className="p-7 sm:p-10">

                <div className="flex flex-col items-center text-center">

                  <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#C9A96E] sm:h-44 sm:w-44">

                    <Image
                      src="/images/founders/OurFounder.jpg"
                      alt="Sudhanshu Pandey"
                      fill
                      sizes="176px"
                      className="object-cover"
                    />

                  </div>

                  <h3 className="mt-7 font-serif text-3xl">
                    Sudhanshu Pandey
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#8B7355]">
                    Founder | Designer & Artist
                  </p>

                  <p className="mt-6 text-sm leading-7 text-[#6B645A]">
                    NIFT graduate in Textile Design and a passionate fine
                    arts artist, Sudhanshu believes design is a powerful
                    problem-solving tool. Through EcoWish, he transforms
                    waste into meaningful, artistic products while
                    empowering artisans with modern skills and sustainable
                    practices.
                  </p>

                </div>

              </div>

            </article>


            {/* Amiya */}
            <article className="overflow-hidden rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3]">

              <div className="p-7 sm:p-10">

                <div className="flex flex-col items-center text-center">

                  <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#C9A96E] sm:h-44 sm:w-44">

                    <Image
                      src="/images/founders/cofounder.jpeg"
                      alt="Amiya Swarup"
                      fill
                      sizes="176px"
                      className="object-cover"
                    />

                  </div>

                  <h3 className="mt-7 font-serif text-3xl">
                    Amiya Swarup
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#8B7355]">
                    Co-Founder | Marketing & Strategy
                  </p>

                  <p className="mt-6 text-sm leading-7 text-[#6B645A]">
                    A Mechanical Engineer with strong marketing expertise,
                    Amiya bridges technical understanding with business
                    strategy. He leads brand growth, market expansion, and
                    client relationships, ensuring EcoWish reaches the right
                    audience with impactful eco-friendly solutions.
                  </p>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING
      ====================================================== */}
      <section className="bg-[#EAE3D6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2E2A24] text-[#D8B878]">
                <GraduationCap
                  size={25}
                  strokeWidth={1.5}
                />
              </div>

              <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl">
                Learn a skill.
                <span className="block italic text-[#8B7355]">
                  Create a future.
                </span>
              </h2>

            </div>


            <div>

              <p className="text-lg leading-8 text-[#4F4941]">
                Our training programs are created to connect traditional
                craftsmanship with modern design, sustainable practices,
                and practical skills.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  "Learn to convert waste into valuable handicrafts",
                  "Blend traditional craft with modern design",
                  "Develop practical upcycling techniques",
                  "Learn eco-friendly finishing and presentation",
                  "Understand packaging and product presentation",
                  "Build entrepreneurship and creative skills",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-[#D3C8B8] bg-[#F5F1E8] p-4"
                  >

                    <span className="mt-1 text-[#8B7355]">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-[#6B645A]">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              <Link
                href="/courses"
                className="mt-8 inline-flex items-center text-sm font-medium text-[#8B7355] hover:text-[#2E2A24]"
              >
                Explore Training Programs

                <ArrowUpRight
                  size={17}
                  className="ml-2"
                />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST / LOYALTY
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E2A24] text-[#D8B878]">
            <HandHeart
              size={24}
              strokeWidth={1.5}
            />
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
            Our Promise
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your trust is more valuable
            <span className="block italic text-[#8B7355]">
              than any transaction.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6B645A]">
            Whether you join us as a student, learn with us as an artisan,
            work with us as a partner, or choose something created by our
            hands, we are grateful for your trust.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B645A]">
            Our promise is to keep learning, keep creating, and keep
            working towards a future where sustainability and human
            potential can grow together.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#2E2A24] px-6 py-16 text-center text-[#F5F1E8] sm:px-10 lg:px-20 lg:py-24">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
            Be Part of the Change
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Let's turn waste into value,
            <span className="block italic text-[#D8B878]">
              and potential into possibility.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#C8C0B4]">
            Learn a skill. Support sustainable creativity. Discover what
            you can create. And join a community that believes a better
            future can begin with the choices we make today.
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