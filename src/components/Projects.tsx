import { ProjectItemProps } from "@/interfaces";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }: { projects: ProjectItemProps[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Flex id="#projects" flexDirection={"column"}>
        <Text fontSize="2xl" mt="3">
          Projects
        </Text>
        <SimpleGrid columns={[1, null, 2, null, 3]} spacing="4" mt="6">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </SimpleGrid>
      </Flex>
    </motion.div>
  );
};

export default Projects;
