import { Flex, Text, Link, Icon, HStack, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { SiReact, SiNextdotjs, SiTypescript, SiGithub, SiExpress, SiMongodb } from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import { ProjectItemProps } from "@/interfaces";
import {FaNodeJs} from "react-icons/fa";

interface StackIconsProps {
  [key: string]: {
    icon: any;
    alt: string;
  };
}

const stackIcons: StackIconsProps = {
  ReactJS: {
    icon: SiReact,
    alt: "ReactJS",
  },
  NodeJS: {
    icon: FaNodeJs,
    alt: "NodeJS",
  },
  ExpressJS: {
    icon: SiExpress,
    alt: "ExpressJS"
  },
  MongoDB: {
    icon: SiMongodb,
    alt: "MongoDB"
  },
  NextJS: {
    icon: SiNextdotjs,
    alt: "NextJS",
  },
  TypeScript: {
    icon: SiTypescript,
    alt: "TypeScript",
  },
};

const ProjectItem = ({
  title,
  description,
  stack,
  githubLink,
  demoLink,
}: ProjectItemProps) => (
  <Flex
    flexDirection={"column"}
    border="1px"
    borderColor={"blackAlpha.500"}
    px="4"
    py="3"
    mt="0"
    borderRadius={"lg"}
  >
    <Text fontSize="lg" fontWeight={"semibold"}>
      {title}
    </Text>
    <Text>{description}</Text>
    <Flex mt="1">
      <Link as={NextLink} href={githubLink} target='_blank'>
        <HStack>
          <Icon as={SiGithub} />
          <Text
            textDecoration={"underline"}
            mr="2"
            color="blackAlpha.600"
            _hover={{ textDecoration: "none", color: "black" }}
          >
            Github
          </Text>
        </HStack>
      </Link>
      {demoLink && (
        <>
          <Text mx="2">-</Text>
          <Link as={NextLink} href={demoLink} target='_blank'>
            <HStack>
              <Icon as={AiOutlineLink} />
              <Text
                textDecoration={"underline"}
                color="blackAlpha.600"
                _hover={{ textDecoration: "none", color: "black" }}
              >
                Preview
              </Text>
            </HStack>
          </Link>
        </>
      )}
    </Flex>
    <Divider mt="2" />
    <Flex mt="3">
      {stack.map((stackItem, index) => (
        <Icon as={stackIcons[stackItem.toString()].icon} key={index} mr="2" />
      ))}
    </Flex>
  </Flex>
);

export default ProjectItem;
