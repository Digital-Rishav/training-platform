import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | EcoWish Craft India Academy",
    description:
        "Read the Privacy Policy of EcoWish Craft India Academy to understand how we collect, use, protect, and manage your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#FCFAF7] text-[#2C241E]">

            {/* Hero */}
            <section className="bg-[#2C241E] px-5 py-20 text-[#F5F1E8] sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-5xl">

                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C6A15B]" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#C6A15B]">
                            Your Privacy Matters
                        </span>
                    </div>

                    <h1 className="mt-7 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
                        Privacy
                        <span className="block italic text-[#D8B878]">
                            Policy
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-[#C8C0B4] sm:text-lg">
                        We respect your privacy and are committed to protecting
                        the personal information you share with EcoWish Craft
                        India Academy.
                    </p>

                    <p className="mt-5 text-sm text-[#AFA69A]">
                        Last updated: August 2026
                    </p>

                </div>
            </section>


            {/* Content */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-4xl">

                    {/* Introduction */}
                    <div className="mb-14 rounded-3xl border border-[#E6DED2] bg-[#F5F0E8] p-6 sm:p-8">
                        <div className="flex gap-4">
                            <ShieldCheck
                                className="mt-1 shrink-0 text-[#8B7355]"
                                size={25}
                                strokeWidth={1.5}
                            />

                            <p className="text-sm leading-7 text-[#5B5349]">
                                This Privacy Policy explains how EcoWish Craft
                                India Pvt. Ltd. and its training initiative,
                                EcoWish Craft India Academy, may collect, use,
                                store, and protect information provided by
                                visitors and prospective students through this
                                website.
                            </p>
                        </div>
                    </div>


                    <div className="space-y-12">

                        <PolicySection title="1. Information We May Collect">
                            <p>
                                When you interact with our website, we may
                                collect information that you voluntarily provide
                                to us, including:
                            </p>

                            <ul>
                                <li>Name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Course or training interests</li>
                                <li>Information submitted through enquiry or admission forms</li>
                                <li>Any other information you choose to provide</li>
                            </ul>

                            <p>
                                We may also automatically receive limited
                                technical information, such as browser type,
                                device information, approximate location, and
                                website usage data, where applicable.
                            </p>
                        </PolicySection>


                        <PolicySection title="2. How We Use Your Information">
                            <p>
                                Information you provide may be used to:
                            </p>

                            <ul>
                                <li>Respond to enquiries and admission requests</li>
                                <li>Provide information about courses and workshops</li>
                                <li>Communicate with you about your enquiry</li>
                                <li>Improve our website and user experience</li>
                                <li>Maintain website security</li>
                                <li>Meet applicable legal and regulatory requirements</li>
                            </ul>
                        </PolicySection>


                        <PolicySection title="3. How We Protect Your Information">
                            <p>
                                We take reasonable administrative, technical,
                                and organisational measures to protect the
                                information submitted through our website.
                            </p>

                            <p>
                                However, no method of transmitting or storing
                                information electronically can be guaranteed to
                                be completely secure. Therefore, we cannot
                                guarantee absolute security of information.
                            </p>
                        </PolicySection>


                        <PolicySection title="4. Sharing of Information">
                            <p>
                                We do not sell or rent your personal information
                                to third parties.
                            </p>

                            <p>
                                We may share information with trusted service
                                providers where reasonably necessary to operate
                                our website, communicate with you, or provide
                                requested services. We may also disclose
                                information where required by applicable law or
                                legal process.
                            </p>
                        </PolicySection>


                        <PolicySection title="5. Cookies and Similar Technologies">
                            <p>
                                Our website may use cookies or similar
                                technologies to improve functionality, understand
                                website usage, and enhance your experience.
                            </p>

                            <p>
                                You can manage or disable cookies through your
                                browser settings. Some website features may not
                                function properly if certain cookies are
                                disabled.
                            </p>
                        </PolicySection>


                        <PolicySection title="6. Third-Party Services">
                            <p>
                                Our website may contain links to third-party
                                websites or use third-party services. These
                                services operate under their own privacy
                                policies and terms.
                            </p>

                            <p>
                                EcoWish Craft India Pvt. Ltd. is not responsible
                                for the privacy practices or content of external
                                websites.
                            </p>
                        </PolicySection>


                        <PolicySection title="7. Data Retention">
                            <p>
                                We retain personal information only for as long
                                as reasonably necessary for the purposes described
                                in this Privacy Policy, to provide requested
                                services, maintain business records, resolve
                                disputes, or comply with legal obligations.
                            </p>
                        </PolicySection>


                        <PolicySection title="8. Your Choices and Rights">
                            <p>
                                Depending on applicable law, you may have rights
                                relating to your personal information, including
                                requesting access, correction, or deletion of
                                certain information.
                            </p>

                            <p>
                                To make a privacy-related request, please contact
                                us using the contact information provided on our
                                website.
                            </p>
                        </PolicySection>


                        <PolicySection title="9. Children's Privacy">
                            <p>
                                Our website is not intended to knowingly collect
                                personal information from children without
                                appropriate consent or involvement of a parent or
                                legal guardian where required by applicable law.
                            </p>
                        </PolicySection>


                        <PolicySection title="10. Changes to This Policy">
                            <p>
                                We may update this Privacy Policy from time to
                                time. Any changes will be posted on this page
                                with an updated effective or revision date.
                            </p>
                        </PolicySection>


                        <PolicySection title="11. Contact Us">
                            <p>
                                If you have questions about this Privacy Policy
                                or how your information is handled, please
                                contact EcoWish Craft India Pvt. Ltd.
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
                        </PolicySection>

                    </div>


                    {/* Back */}
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


function PolicySection({
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