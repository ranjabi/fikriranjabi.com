import { Container, Flex, Link, Text } from "@chakra-ui/react";
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
        color='blackAlpha.600'
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
    <Flex borderBottom='1px' borderColor='blackAlpha.700'>
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
