import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py='6'>
        {children}
      </Container>
    </>
  );
};

export default Layout;
