
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type CoursePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CoursePage({
    params,
}: CoursePageProps) {
    const { slug } = await params;

    // Find the course that matches the URL slug
    const course = courses.find((course) => course.slug === slug);

    // Show 404 page if course doesn't exist
    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#F5F1E8]">
            {/* Hero */}
            <section className="bg-[#2E2A24] px-5 pb-16 pt-8 text-[#F5F1E8] sm:px-8 lg:px-12 lg:pb-24 lg:pt-12">
                <div className="mx-auto max-w-7xl">
                    {/* Back Link */}
                    <Link
                        href="/courses"
                        className="mb-10 inline-flex items-center text-sm text-[#C8C0B4] transition-colors hover:text-[#D8B878]"
                    >
                        <span className="mr-2">←</span>
                        Back to Courses
                    </Link>

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                        {/* Course Image */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                        {/* Course Information */}
                        <div>
                            <span className="inline-block rounded-full border border-[#C9A96E]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D8B878]">
                                {course.category}
                            </span>

                            <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
                                {course.title}
                            </h1>

                            <p className="mt-6 text-base leading-7 text-[#C8C0B4] sm:text-lg">
                                {course.description}
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex rounded-full bg-[#C9A96E] px-7 py-4 text-sm font-medium text-[#2E2A24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B878]"
                            >
                                Enquire About This Course
                                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
                    {/* Main Content */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
                            About This Course
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2E2A24] sm:text-5xl">
                            Learn, practice,
                            <span className="block italic text-[#8B7355]">
                                and create.
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-8 text-[#6B645A]">
                            This course is designed to help you explore your creativity
                            through practical and hands-on learning. You will learn
                            essential techniques, understand creative processes, and gain
                            confidence through practice and experimentation.
                        </p>

                        <p className="mt-5 text-base leading-8 text-[#6B645A]">
                            Whether you are beginning your creative journey or looking to
                            develop your existing skills, this training provides an
                            opportunity to learn, create, and discover your own artistic
                            expression.
                        </p>
                    </div>

                    {/* Course Info Card */}
                    <div className="h-fit rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3] p-7 sm:p-8">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8B7355]">
                            Course Information
                        </p>

                        <div className="mt-7 divide-y divide-[#D8D0C2]">
                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-[#8A8175]">
                                    Course
                                </span>

                                <span className="text-right font-medium text-[#2E2A24]">
                                    {course.title}
                                </span>
                            </div>

                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-[#8A8175]">
                                    Category
                                </span>

                                <span className="text-right font-medium text-[#2E2A24]">
                                    {course.category}
                                </span>
                            </div>

                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-[#8A8175]">
                                    Training
                                </span>

                                <span className="text-right font-medium text-[#2E2A24]">
                                    Hands-On
                                </span>
                            </div>

                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-[#8A8175]">
                                    Format
                                </span>

                                <span className="text-right font-medium text-[#2E2A24]">
                                    Offline
                                </span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-6 flex w-full items-center justify-center rounded-full bg-[#2E2A24] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#8B7355]"
                        >
                            Contact Us for Admission
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#E9E2D5] px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
                        Ready to Begin?
                    </p>

                    <h2 className="mt-4 font-serif text-4xl text-[#2E2A24] sm:text-5xl">
                        Start creating
                        <span className="italic text-[#8B7355]"> today.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#6B645A]">
                        Have questions about this course? Get in touch with us to learn
                        more about admission and training details.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-7 inline-flex rounded-full bg-[#2E2A24] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B7355]"
                    >
                        Get in Touch
                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                    </Link>
                </div>
            </section>
        </main>
    );
}

