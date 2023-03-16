import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, HStack } from "@chakra-ui/layout";
import { FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box w="100%" bg="white" shadow="sm">
      <Box w="100%" h="3px" bgGradient="linear(to-br, #F09819, #FF512F)">
        {" "}
      </Box>
      <Container py="15px" maxW="80%">
        <HStack justify="space-between">
          <Image src="/login.png" alt="Logo Login" cursor="pointer" h="40px" />
          <HStack spacing={4}>
            <Link to="/">
              <Button variant="ghost" fontWeight="normal">
                Home
              </Button>
            </Link>
            <Link to="/research">
              <Button variant="ghost" fontWeight="normal">
                Research
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" fontWeight="normal">
                About
              </Button>
            </Link>
          </HStack>
          <Link to={"/dashboard"}>
            <Button
              bgGradient="linear(to-br, #FF512F, #F09819)"
              _hover={{ bgGradient: "linear(to-br, #F09819, #FF512F)" }}
              _active={{ bgGradient: "linear(to-br, #bd7713, #cc4025)" }}
              leftIcon={<FaGlobeAsia />}
              color="white"
            >
              Dashboard
            </Button>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;
