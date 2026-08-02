
"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccess("");
    setError("");

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const course = formData.get("course")?.toString() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // Basic validation
    if (!name || !phone || !course) {
      setError(
        "Please enter your name, phone number, and select a course."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Send enquiry to our Next.js API
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          course,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to submit your enquiry."
        );
      }

      // Show success message
      setSuccess(
        "Thank you! Your enquiry has been submitted successfully."
      );

      // Create WhatsApp message
      const whatsappMessage = `
Hello Ecowish Craft,

I am interested in joining your training program.

Name: ${name}
Phone: ${phone}
Course: ${course}

Message:
${message || "I would like to know more about this course."}
      `.trim();

      // IMPORTANT:
      // Replace this with Ecowish Craft's actual WhatsApp number.
      // Include country code without + or spaces.
      // Example for India: 919876543210
      const whatsappNumber = "919060628478";

      const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(whatsappMessage);

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form
      event.currentTarget.reset();
    } catch (error) {
      console.error("Admission enquiry error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <Phone size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8B7355]">
                    Phone
                  </p>

                  <a
                    href="tel:+919060628478"
                    className="mt-1 block text-base text-[#2E2A24] transition-colors hover:text-[#8B7355]"
                  >
                    +91 9709709717
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8BBA8] text-[#8B7355]">
                  <Mail size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8B7355]">
                    Email
                  </p>

                  <a
                    href="mailto:info@ecowishcraft.com"
                    className="mt-1 block text-base text-[#2E2A24] transition-colors hover:text-[#8B7355]"
                  >
                    info@ecowishcraft.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8BBA8] text-[#8B7355]">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8B7355]">
                    Visit Us
                  </p>

                  <p className="mt-1 text-base leading-6 text-[#2E2A24]">
                    Ward no-05, Murli Manjharia, Po-Belwa Bahuari PS-GAUNAHA , District-West Champaran
                    <br />
                    Bihar, India
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919060628478"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#8B7355] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F5A42] sm:w-auto"
            >
              <MessageCircle size={18} className="mr-2" />

              Chat With Us on WhatsApp

              <ArrowUpRight size={16} className="ml-2" />
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

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
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
                  required
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
                  required
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
                  required
                  className="w-full rounded-xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-sm text-[#2E2A24] outline-none transition focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]"
                >
                  <option value="" disabled>
                    Select a course
                  </option>

                  <option value="Portrait Making">
                    Portrait Making
                  </option>

                  <option value="Handicraft">
                    Handicraft
                  </option>

                  <option value="Home Decor">
                    Home Decor
                  </option>

                  <option value="Textile Design">
                    Textile Design
                  </option>

                  <option value="Fashion Art">
                    Fashion Art
                  </option>

                  <option value="Festive Crafts">
                    Festive Crafts
                  </option>
                  <option value="Others">
                    Others(Please specifies in Message.)
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-full bg-[#2E2A24] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B7355] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending Enquiry..."
                  : "Send Admission Enquiry"}

                {!isSubmitting && (
                  <ArrowUpRight size={17} className="ml-2" />
                )}
              </button>

              {/* Success Message */}
              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm text-green-700">
                  {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700">
                  {error}
                </div>
              )}

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

