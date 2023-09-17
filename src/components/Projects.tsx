import { ProjectItemProps } from '@/interfaces';
import ProjectHeader from './ProjectHeader';
import ProjectItem from './ProjectItem';

const Projects = ({ projects }: { projects: ProjectItemProps[] }) => {
  return (
    <div className="flex flex-col mt-8" id="projects">
      <div className="text-4xl font-semibold"># Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {projects.map((project, index) => {
          if (index < 3) {
            return (
              <div key={index} className="col-span-1 sm:col-span-2 xl:col-span-3 mt-3 first:mt-0">
                <ProjectHeader {...project} />
              </div>
            );
          } else {
            return <ProjectItem key={index} {...project} />;
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
