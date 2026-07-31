
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="bg-[#F5F1E8]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#2E2A24] px-5 pb-20 pt-16 text-[#F5F1E8] sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
                {/* Decorative Circles */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C9A96E]/20" />

                <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#C9A96E]/20" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#C9A96E]" />

                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
                                Contact & Admission
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                            Let's begin your
                            <span className="block italic text-[#D8B878]">
                                creative journey.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-[#C8C0B4] sm:text-lg">
                            Interested in joining one of our creative training programs?
                            Get in touch with us and we'll help you find the right course
                            for your creative journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    {/* Contact Information */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
                            Get In Touch
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2E2A24] sm:text-5xl">
                            We'd love to
                            <span className="block italic text-[#8B7355]">
                                hear from you.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-[#6B645A]">
                            Whether you have questions about a course, admission, training
                            schedule, or anything else, feel free to reach out.
                        </p>

                        {/* Contact Details */}
                        <div className="mt-10 space-y-7">
                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8BBA8] text-[#8B7355]">
                                    ☎
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-[#8B7355]">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+910000000000"
                                        className="mt-1 block text-base text-[#2E2A24] hover:text-[#8B7355]"
                                    >
                                        +91 00000 00000
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8BBA8] text-[#8B7355]">
                                    @
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-[#8B7355]">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:info@ecowishcraft.com"
                                        className="mt-1 block text-base text-[#2E2A24] hover:text-[#8B7355]"
                                    >
                                        info@ecowishcraft.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8BBA8] text-[#8B7355]">
                                    ⌖
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-[#8B7355]">
                                        Visit Us
                                    </p>

                                    <p className="mt-1 text-base leading-6 text-[#2E2A24]">
                                        Harnichak, Anishabad
                                        <br />
                                        Bihar, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/910000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#8B7355] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F5A42] sm:w-auto"
                        >
                            Chat With Us on WhatsApp
                            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                    {/* Admission Form */}
                    <div className="rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3] p-6 sm:p-8 lg:p-10">
                        <div className="mb-8">
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
                                Admission Enquiry
                            </p>

                            <h2 className="mt-3 font-serif text-3xl text-[#2E2A24] sm:text-4xl">
                                Tell us about your interest.
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#6B645A]">
                                Fill in the form and our team will get back to you with
                                information about the course and admission process.
                            </p>
                        </div>

                        <form className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-[#2E2A24]"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-sm text-[#2E2A24] outline-none transition focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium text-[#2E2A24]"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-sm text-[#2E2A24] outline-none transition focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]"
                                />
                            </div>

                            {/* Course */}
                            <div>
                                <label
                                    htmlFor="course"
                                    className="mb-2 block text-sm font-medium text-[#2E2A24]"
                                >
                                    Course Interested In
                                </label>

                                <select
                                    id="course"
                                    name="course"
                                    defaultValue=""
                                    className="w-full rounded-xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-sm text-[#2E2A24] outline-none transition focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]"
                                >
                                    <option value="" disabled>
                                        Select a course
                                    </option>
                                    <option value="portrait-making">
                                        Portrait Making
                                    </option>
                                    <option value="handicraft">
                                        Handicraft
                                    </option>
                                    <option value="home-decor">
                                        Home Decor
                                    </option>
                                    <option value="textile-design">
                                        Textile Design
                                    </option>
                                    <option value="fashion-art">
                                        Fashion Art
                                    </option>
                                    <option value="festive-crafts">
                                        Festive Crafts
                                    </option>
                                    <option value="other">
                                        Other (Please specify in the message)
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-[#2E2A24]"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us how we can help..."
                                    className="w-full resize-none rounded-xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-sm text-[#2E2A24] outline-none transition focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-full bg-[#2E2A24] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B7355]"
                            >
                                Send Admission Enquiry
                                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                            </button>

                            <p className="text-center text-xs leading-5 text-[#8A8175]">
                                By submitting this form, you agree to be contacted regarding
                                your enquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

