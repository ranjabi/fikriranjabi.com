import { ProjectsProps } from "@/interfaces";
import { getSortedProjectsData } from "@/lib/projects";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export async function getStaticProps() {
  const projects = await getSortedProjectsData();

  return {
    props: {
      projects,
    },
  };
}

const skills = [
  "ReactJS",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "JavaScript",
  "TypeScript",
  "Jest",
  "Cypress",
  "ChakraUI",
  "TailwindCSS",
  "Formik",
  "useSWR",
  "Docker",
  "CI/CD",
  "MongoDB",
  "MySQL",
];

export default function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Fikri Ranjabi</title>
        <meta name="description" content="Fikri Ranjabi Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex flexDirection={"column"}>
          <Hero />
          <Flex id="#projects" flexDirection={"column"}>
            <Flex id="#skills" flexDir="column">
              <Text fontSize="4xl" mt={2}>
                My Skills
              </Text>
              <Flex
                flexDir={["column", null, "row"]}
                justifyContent={"space-between"}
                mt={[2]}
              >
                <Text lineHeight={1.8} mr={[null, null, 4]}>
                  With two years of learning frontend web development, I've
                  gained an understanding to build a production ready website
                  application with the importance of reusability and
                  scalability.
                </Text>
                <Flex
                  wrap="wrap"
                  justifyContent={["flex-start", null, "flex-end"]}
                  mt={[4, null, 0]}
                >
                  {skills.map((skill, index) => (
                    <Flex
                      justifyContent={"center"}
                      key={index}
                      bgColor="gray.100"
                      px={2}
                      py={1}
                      m={1}
                    >
                      {skill}
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Projects projects={projects} />
        </Flex>
      </motion.div>
    </>
  );
}
