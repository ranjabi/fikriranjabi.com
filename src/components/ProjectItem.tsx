import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import { ProjectItemProps } from "@/interfaces";
import {FaNodeJs, FaPhp} from "react-icons/fa";
import Link from "next/link";

interface StackIconsProps {
  [key: string]: {
    icon: any;
    alt: string;
  };
}

const stackIcons: StackIconsProps = {
  ReactJS: {
    icon: SiReact,
    alt: "ReactJS",
  },
  NodeJS: {
    icon: FaNodeJs,
    alt: "NodeJS",
  },
  ExpressJS: {
    icon: SiExpress,
    alt: "ExpressJS"
  },
  MongoDB: {
    icon: SiMongodb,
    alt: "MongoDB"
  },
  NextJS: {
    icon: SiNextdotjs,
    alt: "NextJS",
  },
  TypeScript: {
    icon: SiTypescript,
    alt: "TypeScript",
  },
  JavaScript: {
    icon: SiJavascript,
    alt: "JavaScript",
  },
  PHP: {
    icon: FaPhp,
    alt: "PHP",
  }
};

const ProjectItem = ({
  title,
  description,
  thumbnail,
  stack,
  github,
  demo,
}: ProjectItemProps) => {
  const parsedStack = stack ? JSON.parse(stack) : null;

  return (
    <div className="flex flex-col border border-gray-300 px-4 py-3 mt-0 rounded-lg"
    >
      <div className="text-lg font-semibold">
        {title}
      </div>
      <div className="h-full mt-2">{description}</div>
      {thumbnail && (
        <img className="mt-2 border boder-gray-100 object-cover" alt={title}
          src={thumbnail}
        />
      )}
      <div className="flex mt-2">
        <Link
          href={`/projects/${title.toLowerCase().replace(/\s/g, "-")}`}
        >
          <div className="hover:text-black hover:font-semibold hover:underline"
          >
            See More →
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
