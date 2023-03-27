import { Divider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const dynamicText = ["Fikri Ranjabi", "Software Engineer", "Comp Sci Student"];

const Hero = ({}) => {
  const isLineBreak = useBreakpointValue({ base: true, md: false });
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % dynamicText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [position]);

  const variants = {
    visible: {
      opacity: 1,
      transition: {},
    },
    hidden: {
      opacity: 0,
      transition: {},
    },
  };

  return (
    <>
      <Flex flexDirection={"column"} py={[0, 4, 8]} mb="4">
        <Flex flexDirection={isLineBreak ? 'column' : 'row'}>
          <Text
            fontSize={["4xl", "5xl"]}
            fontWeight={"semibold"}
            color="blackAlpha.400"
          >
            Hello, I'm
          </Text>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              key={position}
            >
              <Text fontSize={["4xl", "5xl"]} color="black" ml={isLineBreak ? 0 : 4}>
                {dynamicText[position]}
              </Text>
            </motion.div>
          </AnimatePresence>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Hero;
