import {
  chakra,
  Stack,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaFileContract, FaGlobeAsia } from "react-icons/fa";

const CTA = () => {
  return (
    <Container maxW="5xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg="white"
      p={{ base: 8, md: 16 }}
      mb="60px"
    >
      <Box>
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          Pahami lebih dalam
        </chakra.h1>
        <chakra.h2
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          bgGradient="linear(to-l, #FE552E, #F1951A)"
          bgClip="text"
        >
          Berbagai bencana menghantui kita. Mari upayakan mitigasinya!
        </chakra.h2>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "auto" }}
      >
        <Button
          color="white"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          bgGradient="linear(to-br, #FF512F, #F09819)"
          _hover={{ bgGradient: "linear(to-br, #F09819, #FF512F)" }}
          _active={{ bgGradient: "linear(to-br, #bd7713, #cc4025)" }}
          leftIcon={<FaGlobeAsia />}
        >
          Lihat dashboard
        </Button>
        <Button
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          leftIcon={<FaFileContract />}
          lineHeight={1}
        >
          Baca riset lengkap
        </Button>
      </Stack>
    </Stack>
  );
};

export default CTA;
