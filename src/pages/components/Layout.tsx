import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        {children}
      </Container>
    </>
  );
};

export default Layout;
