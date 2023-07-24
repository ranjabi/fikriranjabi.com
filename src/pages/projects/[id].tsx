import { getAllProjectsIds, getProjectData } from "@/lib/projects";
import { ProjectProps } from "@/types";
import Head from "next/head";
import React from "react";
import styles from "../../styles/remark.module.css";

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

const Project = ({ projectData }: { projectData: ProjectProps }) => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <div className="flex flex-col w-screen-sm">
        <p className="text-2xl">{projectData.title}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </div>
    </div>
  );
};

export default Project;
