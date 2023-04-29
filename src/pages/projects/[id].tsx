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
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <Flex flexDirection={"column"}>
        <Text fontSize="2xl">{projectData.title}</Text>
        <Box mt="1">
          <Date dateString={projectData.date} />
        </Box>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </Flex>
    </>
  );
};

export default Project;
