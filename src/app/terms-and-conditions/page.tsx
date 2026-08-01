import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
    title: "Terms and Conditions | EcoWish Craft India Academy",
    description:
        "Read the Terms and Conditions governing the use of the EcoWish Craft India Academy website, course information, enquiries, and services.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#FCFAF7] text-[#2C241E]">

            {/* Hero */}
            <section className="bg-[#2C241E] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-5xl">

                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C6A15B]" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#C6A15B]">
                            Please Read Carefully
                        </span>
                    </div>

                    <h1 className="mt-7 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
                        Terms &
                        <span className="block italic text-[#D8B878]">
                            Conditions
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-[#C8C0B4] sm:text-lg">
                        These Terms and Conditions explain the rules and
                        guidelines for using the EcoWish Craft India Academy
                        website and interacting with our services.
                    </p>

                    <p className="mt-5 text-sm text-[#AFA69A]">
                        Last updated: August 2026
                    </p>

                </div>
            </section>


            {/* Content */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-4xl">

                    <div className="mb-14 rounded-3xl border border-[#E6DED2] bg-[#F5F0E8] p-6 sm:p-8">
                        <div className="flex gap-4">
                            <FileText
                                className="mt-1 shrink-0 text-[#8B7355]"
                                size={25}
                                strokeWidth={1.5}
                            />

                            <p className="text-sm leading-7 text-[#5B5349]">
                                By accessing or using this website, you agree
                                to comply with these Terms and Conditions. If
                                you do not agree with these terms, please do
                                not use the website.
                            </p>
                        </div>
                    </div>


                    <div className="space-y-12">

                        <TermsSection title="1. About EcoWish Craft India Academy">
                            <p>
                                EcoWish Craft India Academy is a training
                                initiative associated with EcoWish Craft India
                                Pvt. Ltd. that provides information about
                                creative, craft, design, and related learning
                                opportunities.
                            </p>

                            <p>
                                Course information, availability, schedules,
                                fees, and other details may change from time
                                to time.
                            </p>
                        </TermsSection>


                        <TermsSection title="2. Use of This Website">
                            <p>
                                You agree to use this website only for lawful
                                purposes and in a manner that does not harm,
                                disrupt, or interfere with the website or its
                                users.
                            </p>

                            <ul>
                                <li>
                                    Do not attempt to gain unauthorised access
                                    to the website or its systems.
                                </li>

                                <li>
                                    Do not knowingly introduce malicious code,
                                    viruses, or harmful content.
                                </li>

                                <li>
                                    Do not use the website for fraudulent or
                                    unlawful activities.
                                </li>
                            </ul>
                        </TermsSection>


                        <TermsSection title="3. Course and Training Information">
                            <p>
                                Information displayed about courses and
                                training programs is provided for general
                                informational purposes.
                            </p>

                            <p>
                                Admission, course availability, schedules,
                                duration, fees, and other details may be
                                subject to change. Final details will be
                                communicated directly by EcoWish Craft India
                                Academy.
                            </p>
                        </TermsSection>


                        <TermsSection title="4. Enquiries and Admission">
                            <p>
                                Submitting an enquiry form or contacting us does
                                not automatically guarantee admission or
                                enrollment in any course.
                            </p>

                            <p>
                                Admission is subject to availability and any
                                eligibility requirements or conditions
                                communicated by the Academy.
                            </p>
                        </TermsSection>


                        <TermsSection title="5. Intellectual Property">
                            <p>
                                Unless otherwise stated, the content of this
                                website—including text, logos, graphics,
                                photographs, branding, design elements, and
                                other materials—is owned by or licensed to
                                EcoWish Craft India Pvt. Ltd.
                            </p>

                            <p>
                                You may not reproduce, copy, modify, distribute,
                                publish, or commercially exploit website content
                                without prior written permission.
                            </p>
                        </TermsSection>


                        <TermsSection title="6. User-Submitted Information">
                            <p>
                                When submitting information through our website,
                                you agree that the information provided is
                                accurate and does not knowingly violate the
                                rights of another person.
                            </p>
                        </TermsSection>


                        <TermsSection title="7. Third-Party Links">
                            <p>
                                This website may contain links to third-party
                                websites or services. These links are provided
                                for convenience and informational purposes.
                            </p>

                            <p>
                                We do not control or guarantee the content,
                                availability, security, or privacy practices of
                                third-party websites.
                            </p>
                        </TermsSection>


                        <TermsSection title="8. Website Availability">
                            <p>
                                We aim to keep the website available and
                                functioning properly. However, we do not
                                guarantee that the website will always be
                                available, uninterrupted, secure, or free from
                                errors.
                            </p>
                        </TermsSection>


                        <TermsSection title="9. Disclaimer">
                            <p>
                                The information provided on this website is for
                                general informational purposes and should not be
                                considered a guarantee of any particular
                                educational, professional, financial, or
                                employment outcome.
                            </p>
                        </TermsSection>


                        <TermsSection title="10. Limitation of Liability">
                            <p>
                                To the extent permitted by applicable law,
                                EcoWish Craft India Pvt. Ltd. shall not be
                                responsible for losses or damages arising from
                                the use of, or inability to use, this website
                                or reliance on information provided through it.
                            </p>
                        </TermsSection>


                        <TermsSection title="11. Changes to These Terms">
                            <p>
                                We may update these Terms and Conditions from
                                time to time. Updated terms will be published
                                on this page with a revised date.
                            </p>
                        </TermsSection>


                        <TermsSection title="12. Governing Law">
                            <p>
                                These Terms and Conditions shall be governed by
                                and interpreted in accordance with the
                                applicable laws of India.
                            </p>

                            <p>
                                Any disputes shall be subject to the
                                jurisdiction of the appropriate courts having
                                jurisdiction over the business.
                            </p>
                        </TermsSection>


                        <TermsSection title="13. Contact Us">
                            <p>
                                If you have questions regarding these Terms and
                                Conditions, please contact:
                            </p>

                            <div className="mt-5 rounded-2xl bg-[#F5F0E8] p-6">
                                <p className="font-medium text-[#2C241E]">
                                    EcoWish Craft India Pvt. Ltd.
                                </p>

                                <p className="mt-2 text-sm leading-7 text-[#6B645A]">
                                    Email: Add your official email address
                                    <br />
                                    Phone: Add your official phone number
                                    <br />
                                    Address: Add your official business address
                                </p>
                            </div>
                        </TermsSection>

                    </div>


                    <Link
                        href="/"
                        className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-[#254B3A] transition hover:text-[#A27B3F]"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                </div>
            </section>

        </main>
    );
}


function TermsSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="font-serif text-2xl text-[#2C241E] sm:text-3xl">
                {title}
            </h2>

            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[#5B5349] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                {children}
            </div>
        </section>
    );
}