import { Container, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface NavbarItem {
  label: string;
  path: string;
}

const NavbarItems: NavbarItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Docs",
    path: "/",
  },
];

const NavbarItem = ({ label, path }: NavbarItem) => {
  return (
    <Link
      as={NextLink}
      href={path}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text
        px={4}
				py={4}
        _hover={{
          bgColor: "gray.300",
        }}
      >
        {label}
      </Text>
    </Link>
  );
};

const Navbar = ({}) => {
  return (
    <Flex bgColor="gray.100">
      <Container maxW='container.lg'>
        <Flex>
          {NavbarItems.map(({ label, path }, index) => (
            <NavbarItem key={index} label={label} path={path} />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
