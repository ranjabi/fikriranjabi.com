import { getAllProjectsIds, getProjectData } from "@/lib/projects";
import Date from "@/components/Date";
import Head from "next/head";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "../../styles/remark.module.css";
import { Project } from "@/types";

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

const Project = ({ projectData }: { projectData: Project }) => {
  return (
    <Flex justifyContent={'center'}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <Flex flexDirection={"column"} w='container.sm'>
        <Text fontSize="2xl">{projectData.title}</Text>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </Flex>
    </Flex>
  );
};

export default Project;
