import { ProjectItemProps } from "@/interfaces";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({}) => {
  const [projects, setProjects] = useState<ProjectItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data.data);
    };
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Flex id="#projects" flexDirection={"column"}>
      <Text fontSize="2xl" mt='3'>Projects</Text>

      {projects.length > 0 ? (
        <SimpleGrid columns={[1, null, 2, null, 3]} spacing="4" mt='4'>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </SimpleGrid>
      ) : (
        <Text align={"center"}>Loading...</Text>
      )}
    </Flex>
  );
};

export default Projects;
