export interface ProjectItemProps {
  title: string;
  description: string;
  image?: string;
  stack: string[];
  githubLink: string;
  demoLink: string;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
