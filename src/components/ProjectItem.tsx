import { Flex, Text, Link, Icon, HStack, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import { ProjectItemProps } from "@/interfaces";
import {FaNodeJs, FaPhp} from "react-icons/fa";
import { Image } from "@chakra-ui/react";
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
  JavaScript: {
    icon: SiJavascript,
    alt: "JavaScript",
  },
  PHP: {
    icon: FaPhp,
    alt: "PHP",
  }
};

const ProjectItem = ({
  title,
  description,
  thumbnail,
  stack,
  github,
  demo,
}: ProjectItemProps) => {
  const parsedStack = stack ? JSON.parse(stack) : null;

  return (
    <Flex
      flexDirection={"column"}
      border="1px"
      borderColor={"gray.300"}
      px="4"
      py="3"
      mt="0"
      borderRadius={"lg"}
    >
      <Text fontSize="lg" fontWeight={"semibold"}>
        {title}
      </Text>
      <Text h="full" mt='2'>{description}</Text>
      {thumbnail && (
        <Image
          mt={2}
          border="1px"
          borderColor={"gray.100"}
          objectFit="cover"
          src={thumbnail}
          alt="Dan Abramov"
        />
      )}
      <Flex mt="2">
        <Link
          as={NextLink}
          href={`/projects/${title.toLowerCase().replace(/\s/g, "-")}`}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            _hover={{
              color: "black",
              fontWeight: "semibold",
              textDecoration: "underline",
            }}
          >
            See More →
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ProjectItem;
