import { ProjectsProps } from "@/interfaces";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

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
        <Projects />
      </Flex>
    </>
  );
}
