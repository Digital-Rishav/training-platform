
export default function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Learn by Doing",
      description:
        "Move beyond theory with practical, hands-on learning that helps you understand techniques by creating real artwork and crafts.",
    },
    {
      number: "02",
      title: "Explore Your Creativity",
      description:
        "Discover your unique creative voice, experiment with materials, and develop the confidence to turn your ideas into beautiful creations.",
    },
    {
      number: "03",
      title: "Build Practical Skills",
      description:
        "Develop useful artistic and creative skills that can become a foundation for personal projects, creative work, or future opportunities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#2E2A24] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:px-12 lg:py-28">
      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full border border-[#B7A58A]/20" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B7A58A]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#B7A58A]">
                Why Learn With Us
              </p>
            </div>

            <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Where creativity
              <span className="block italic text-[#B7A58A]">
                becomes a skill.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#C8C0B4] lg:ml-auto">
            We believe creativity grows through practice. Our training
            encourages you to explore, experiment, and create while developing
            practical skills that stay with you beyond the classroom.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 border-t border-[#B7A58A]/25">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group grid gap-5 border-b border-[#B7A58A]/25 py-8 transition-all duration-300 sm:grid-cols-[80px_1fr_1.5fr] sm:items-center sm:gap-8 lg:py-10"
            >
              {/* Number */}
              <span className="font-serif text-sm italic text-[#B7A58A]">
                {benefit.number}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl text-[#F5F1E8] transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="max-w-lg text-sm leading-6 text-[#B8B0A4] sm:ml-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-serif text-xl italic text-[#D8D0C2]">
            "Every creation begins with the courage to try."
          </p>

          <div className="h-px w-20 bg-[#B7A58A] sm:w-32" />
        </div>
      </div>
    </section>
  );
}
