import { Container, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavbarItem {
  label: string;
  path: string;
}

const NavbarItems: NavbarItem[] = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "SKILLS",
    path: "#skills",
  },
  {
    label: "PROJECTS",
    path: "#projects",
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
        py={3}
        _hover={{
          color: 'black',
          fontWeight: 'semibold',
        }}
      >
        {label}
      </Text>
    </Link>
  );
};

const Navbar = ({}) => {
  return (
    <Flex borderBottom='1px' borderColor='gray.200'>
      <Container maxW='container.lg'>
        <Flex mx={-4}>
          {NavbarItems.map(({ label, path }, index) => (
            <NavbarItem key={index} label={label} path={path} />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
