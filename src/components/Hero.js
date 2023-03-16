import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  chakra,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaFileContract, FaGlobeAsia } from "react-icons/fa";
import * as React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      as="section"
      overflow="hidden"
      h="90vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignContent="center"
    >
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Flex
          align="flex-start"
          direction={{
            base: "column",
            lg: "row",
          }}
          justify="space-between"
          // mb="20"
        >
          <Box
            flex="1"
            maxW={{
              lg: "xl",
            }}
            pt="6"
          >
            <Heading as="h1" size="2xl" mt="12" fontWeight="black">
              Indonesia
              <chakra.span
                bgGradient="linear(to-br, #F09819, #FF512F)"
                bgClip="text"
              >
                {" "}
                Multihazard Mitigation{" "}
              </chakra.span>{" "}
              Dashboard
            </Heading>
            <Text color={mode("gray.600", "gray.400")} mt="6" fontSize="xl">
              Optimalisasi prioritas mitigasi multibencana menggunakan data
              penginderaan jauh (remote sensing) multisumber berbasis Machine
              Learning
            </Text>
            <Link to='/dashboard'>
            <Button
              bgGradient="linear(to-br, #FF512F, #F09819)"
              _hover={{ bgGradient: "linear(to-br, #F09819, #FF512F)" }}
              _active={{ bgGradient: "linear(to-br, #bd7713, #cc4025)" }}
              leftIcon={<FaGlobeAsia />}
              color="white"
              size="lg"
              mt="6"
            >
              Dashboard
            </Button>
            </Link>
            <Link to="/research">
              <Button
                ml="15px"
                size="lg"
                leftIcon={<FaFileContract />}
                // variant='ghost'
                mt="6"
              >
                Research
              </Button>
            </Link>
          </Box>
          <Box
            boxSize={{
              base: "20",
              lg: "8",
            }}
          />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="60rem"
            src="/demo3.png"
            alt="Multihazard mitigation dashboard"
            borderRadius="lg"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
