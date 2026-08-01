
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export default function CourseCard({
  slug,
  title,
  category,
  description,
  image,
}: CourseCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#D8D0C2] bg-[#FAF8F3] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-[#2E2A24]">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6B645A]">
          {description}
        </p>

        {/* Course Link */}
        <Link
          href={`/courses/${slug}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-[#8B7355] transition-colors hover:text-[#2E2A24]"
        >
          Discover Course

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}


