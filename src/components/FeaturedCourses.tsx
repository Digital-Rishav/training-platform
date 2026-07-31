
import Link from "next/link";
import CourseCard from "./CourseCard";
import { courses } from "@/data/courses";

export default function FeaturedCourses() {
  return (
    <section className="bg-[#F5F1E8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8B7355]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B7355]">
                Our Creative Courses
              </p>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#2E2A24] sm:text-5xl">
              Learn a skill.
              <span className="block italic text-[#8B7355]">
                Create something meaningful.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#6B645A]">
              Explore practical, creative training designed to help you
              develop new skills, express your imagination, and turn your
              ideas into beautiful handmade creations.
            </p>
          </div>

          {/* Desktop Link */}
          <Link
            href="/courses"
            className="hidden items-center text-sm font-medium text-[#2E2A24] transition-colors hover:text-[#8B7355] sm:flex"
          >
            View All Courses
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
          
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              slug={course.slug}
              title={course.title}
              category={course.category}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/courses"
            className="rounded-full border border-[#B7A58A] px-7 py-3 text-sm font-medium text-[#2E2A24] transition-all hover:bg-[#E9E2D5]"
          >
            View All Courses
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
            
          </Link>
        </div>
      </div>
    </section>
  );
}

