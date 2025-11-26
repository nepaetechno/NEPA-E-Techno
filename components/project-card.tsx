import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/lib/utils/get-image-path"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  const Content = (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src={getImagePath(image || "/placeholder.svg")}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
            {tags[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(1).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium text-primary/80 bg-primary/10 rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-auto">
          <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform duration-300">
            View Project <span className="ml-2">→</span>
          </span>
        </div>
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {Content}
      </Link>
    )
  }

  return Content
}
