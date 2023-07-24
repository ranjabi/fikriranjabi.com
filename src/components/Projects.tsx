import { ProjectItemProps } from "@/interfaces";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }: { projects: ProjectItemProps[] }) => {
  return (
    <div className="flex flex-col mt-8" id="#projects">
      <div className="text-4xl mb-1">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
