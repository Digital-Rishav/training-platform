
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <>
      

      <main>
        {/* Page Header */}
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
                  Explore Our Courses
                </p>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Learn something
                <span className="block italic text-[#D8B878]">
                  worth creating.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#C8C0B4] sm:text-lg">
                Explore our creative training programs and discover practical
                skills in art, craft, design, and handmade creativity.
              </p>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="bg-[#F5F1E8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Course Count */}
            <div className="mb-10 flex items-center justify-between border-b border-[#D8D0C2] pb-5">
              <p className="text-sm text-[#6B645A]">
                Explore our creative programs
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-[#8B7355]">
                {courses.length} Courses
              </p>
            </div>

            {/* Course Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>
      </main>

     
    </>
  );
}

