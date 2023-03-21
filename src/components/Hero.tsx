import { Divider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const dynamicText = ["Fikri Ranjabi", "Software Engineer", "Comp Sci Student"];

const Hero = ({}) => {
  const isLineBreak = useBreakpointValue({ base: true, sm: true, md: false });
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % dynamicText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <>
    <Flex flexDirection={"column"} py={[0, 4, 8]} mb="4">
      <Text fontSize={["4xl", "5xl"]} fontWeight={"bold"} color="blackAlpha.500">
        Hello, I'm {isLineBreak ? <br /> : " "}
        <Text as={"span"} fontSize={["4xl", "5xl"]} color="black">
          {dynamicText[position]}
        </Text>
      </Text>
    </Flex>
      <Divider/>
    </>
  );
};

export default Hero;
