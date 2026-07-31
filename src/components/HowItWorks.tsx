
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Course",
      description:
        "Explore our creative courses and find the one that matches your interests, passion, and creative goals.",
    },
    {
      number: "02",
      title: "Learn & Create",
      description:
        "Join our hands-on training and learn practical techniques while creating beautiful artwork and handmade pieces.",
    },
    {
      number: "03",
      title: "Start Your Journey",
      description:
        "Get in touch with us to learn more about admission, training details, and how you can begin your creative journey.",
    },
  ];

  return (
    <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#8B7355]" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
              Your Creative Journey
            </p>

            <span className="h-px w-8 bg-[#8B7355]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#2E2A24] sm:text-5xl">
            From curiosity
            <span className="block italic text-[#8B7355]">
              to creation.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6B645A]">
            Starting your creative journey is simple. Choose what inspires
            you, learn through practice, and take the first step toward
            developing your creative skills.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-0 lg:grid-cols-3">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-[#C8BBA8] lg:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center px-5 pb-12 text-center last:pb-0 lg:pb-0"
            >
              {/* Number */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#B7A58A] bg-[#F5F1E8]">
                <span className="font-serif text-lg italic text-[#8B7355]">
                  {step.number}
                </span>
              </div>

              {/* Mobile Connector */}
              {index !== steps.length - 1 && (
                <div className="h-12 w-px bg-[#C8BBA8] lg:hidden" />
              )}

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#2E2A24]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#6B645A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-5 border-t border-[#D8D0C2] pt-10 text-center sm:flex-row">
          <p className="font-serif text-lg italic text-[#6B645A]">
            Ready to begin creating?
          </p>

          <a
            href="/contact"
            className="rounded-full bg-[#2E2A24] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B7355]"
          >
            Get in Touch
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

