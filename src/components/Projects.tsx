import { ProjectItemProps } from "@/interfaces";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }: { projects: ProjectItemProps[] }) => {
  return (
    <Flex id="#projects" flexDirection={"column"} mt={8}>
      <Text fontSize="4xl">
        Projects
      </Text>
      <SimpleGrid columns={[1, null, 2, null, 3]} spacing="4" mt="4">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
