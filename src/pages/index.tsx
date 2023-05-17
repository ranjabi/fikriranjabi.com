import { ProjectsProps } from "@/interfaces";
import { getSortedProjectsData } from "@/lib/projects";
import { Flex } from "@chakra-ui/react";
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

export default function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Fikri Ranjabi</title>
        <meta name="description" content="Fikri Ranjabi Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Flex flexDirection={"column"}>
        <Hero />
        <Projects projects={projects} />
      </Flex>
    </>
  );
}
