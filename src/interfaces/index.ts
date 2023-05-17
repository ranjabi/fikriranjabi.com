export interface ProjectItemProps {
  title: string;
  description: string;
  thumbnail: string;
  stack: string;
  github?: string;
  demo?: string;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
