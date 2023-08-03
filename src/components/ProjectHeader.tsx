import { ProjectItemProps } from '@/interfaces';
import Link from 'next/link';

export default function ProjectHeader({
  title,
  description,
  thumbnail,
  stack,
  github,
  demo,
}: ProjectItemProps) {
  return (
    <div className="">
      <p className="project-header-title"><Link href={`/projects/${title.toLowerCase().replace(/\s/g, '-')}`}>
        {title}
      </Link></p>
      <div className="flex justify-between">
        <p className="mt-1">{description}</p>
        <Link href={`/projects/${title.toLowerCase().replace(/\s/g, '-')}`}>
          <div className="mt-1 hover:bg-gray-200  bg-gray-100 w-fit px-3 py-1 rounded-sm text-sm hidden lg:block">
            See More →
          </div>
        </Link>
      </div>
      {thumbnail && (
        <img
          className="mt-2 border boder-gray-200 object-contain w-full rounded-md h-fit sm:h-96"
          alt={title}
          src={thumbnail}
        />
      )}
    </div>
  );
}
