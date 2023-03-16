import {
  Box,
  chakra,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      pb='70px'
    >
      <Heading
        as="h1"
        textAlign="center"
        size="2xl"
        mt="80px"
        fontWeight="black"
        mb="10px"
      >
        Our
        <chakra.span bgGradient="linear(to-br, #F09819, #FF512F)" bgClip="text">
          {" "}
          Team{" "}
        </chakra.span>{" "}
      </Heading>
      <Box
        mt="80px"
        mb="50px"
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(https://webneel.com/daily/sites/default/files/images/daily/01-2013/3-realistic-oil-portraits.jpg)`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src="https://webneel.com/daily/sites/default/files/images/daily/01-2013/3-realistic-oil-portraits.jpg"
          />
        </Box>
        <Stack pt={10} align={"center"} mb="30px">
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Dosen Pembimbing
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            align="center"
          >
            Dr. Eng. Anjar Dimara Sakti, S.T., M.Sc.
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight="normal" fontSize={"sm"}>
              Center for Remote Sensing ITB
            </Text>
          </Stack>
        </Stack>
      </Box>
      <HStack py={12} spacing="30px">
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBTQlC7yeERH2OdNAQHXHOAMXRRwXwWyNe3E169PqvLSCUn37Y7X7FdMF0rac0n4FMO0&usqp=CAU)`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBTQlC7yeERH2OdNAQHXHOAMXRRwXwWyNe3E169PqvLSCUn37Y7X7FdMF0rac0n4FMO0&usqp=CAU"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Peneliti
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Farell Faiz Firmansyah
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight="normal" fontSize={"sm"}>
                Teknik Geodesi dan Geomatika ITB
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(https://paintingportraittips.com/wp-content/uploads/2018/01/IMG_3813.jpg)`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src="https://paintingportraittips.com/wp-content/uploads/2018/01/IMG_3813.jpg"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Peneliti
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Cokro Santoso
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight="normal" fontSize={"sm"}>
                Teknik Geodesi dan Geomatika ITB
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(https://webneel.com/daily/sites/default/files/images/daily/01-2013/19-hyper-realistic-portraits.jpg)`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src="https://webneel.com/daily/sites/default/files/images/daily/01-2013/19-hyper-realistic-portraits.jpg"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Peneliti
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Naura Fadiya Hanan
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight="normal" fontSize={"sm"}>
                Teknik Geodesi dan Geomatika ITB
              </Text>
            </Stack>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
};

export default About;
