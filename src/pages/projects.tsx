import { getSortedProjectsData } from "@/lib/projects";
import React from "react";
import { Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { Project } from "@/types";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

const Projects = ({ allProjectsData }: {allProjectsData: Project[]}) => {
  return (
    <Flex flexDir={'column'}>
      <Text fontSize='3xl'>Projects</Text>
      <OrderedList>
        {allProjectsData.map(({ id, title, date, github }) => (
          <ListItem key={id}>
            <a href={`projects/${id}`}>{title}</a>
            <br />
            <p>{date}</p>
            <a href={github}>{github}</a>
          </ListItem>
        ))}
      </OrderedList>
    </Flex>
  );
};

export default Projects;
