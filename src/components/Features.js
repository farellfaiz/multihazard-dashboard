import {
  Container,
  Box,
  chakra,
  Text,
  Heading,
  SimpleGrid,
  Flex,
  Icon
} from "@chakra-ui/react";
import { FaGlobeAsia, FaLaptopCode, FaSatellite } from "react-icons/fa";

const features = [
  {
    heading: "Remote Sensing",
    content:
      "Penggunaan data satelit untuk sebagai parameter untuk pengolahan data probabilitas multibencana.",
    icon: FaSatellite ,
  },
  {
    heading: "Machine Learning",
    content:
      "Training dan testing data untuk menentukan probabilitas terjadinya multibencana.",
    icon: FaLaptopCode ,
  },
  {
    heading: "GIS",
    content:
      "Integrasi data dan informasi geospasial multihazard dalam dashboard.",
    icon: FaGlobeAsia ,
  },
];

const Features = () => {
  return (
    <Box w="100%" bg="white" py='5vh' shadow='inner'>
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <Heading fontSize="4xl" fontWeight='bold' mb={20} textAlign="center">
          Integrasi&nbsp;
          <chakra.span bgGradient="linear(to-br, #F09819, #FF512F)" bgClip="text">
            Teknologi Geospasial
          </chakra.span>
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          placeItems="center"
          spacing={10}
          mb={4}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="gray.50"
              p={6}
              mb="10px"
              rounded="lg"
              textAlign="center"
              pos="relative"
              shadow='md'
            >
              <Flex
                p='10px'
                w="max-content"
                color="white"
                bgGradient="linear(to-br, #FF512F, #F09819)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-1.5rem"
                boxShadow="lg"
              >
                <Icon as={feature.icon} boxSize={6} />
              </Flex>
              <chakra.h3 fontWeight="bold" fontSize="2xl" mt={6}>
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md" color='gray.600' mt={4} mb={5}>
                {feature.content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features;
