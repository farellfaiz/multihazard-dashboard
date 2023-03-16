import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  chakra,
  Text,
} from "@chakra-ui/react";
import Iframe from "react-iframe";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";

const photos = [
  {
    image: "/tutorial/detail.png",
    legend:
      "Silakan klik provinsi yang diinginkan untuk melihat data detail per provinsi.",
  },
  {
    image: "/tutorial/legend.png",
    legend:
      "Silakan klik tombol yang diberi kotak jingga untuk melihat legenda dari peta atau layer yang ada.",
  },
  {
    image: "/tutorial/layer.png",
    legend:
      "Silakan klik tombol yang diberi kotak jingga untuk melihat list layer dan untuk mengaktifkan atau menonaktifkan layer.",
  },
  {
    image: "/tutorial/fullscreen.png",
    legend:
      "Silakan klik tombol yang diberi kotak jingga untuk melihat peta atau grafik secara fullscreen.",
  },
  {
    image: "/tutorial/scrollbar.png",
    legend:
      "Silakan klik dan atur scrollbar yang diberi kotak jingga untuk mengatur jumlah data yang ingin ditampilkan.",
  },
  {
    image: "/tutorial/detailgraph.png",
    legend:
      "Silakan klik bagian tertentu pada grafik untuk melihat detail dari masing-masing komponen yang ada.",
  },
];

const Dashboard = () => {
  return (
    <Box
      bg="#2B2B2B"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Tabs
        variant="soft-rounded"
        colorScheme="gray"
        pt="20px"
        w="100%"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <TabList alignItems="center">
          <Tab color="white">Welcome</Tab>
          <Tab color="white">Dashboard</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box
              w="100%"
              minH="100vh"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="flex-start"
              mb='50px'
            >
              <Heading as="h1" size="xl" mt="12" fontWeight="black" shadow="md">
                Selamat datang di{" "}
                <chakra.span
                  bgGradient="linear(to-br, #F09819, #FF512F)"
                  bgClip="text"
                >
                  {" "}
                  Multihazard Mitigation{" "}
                </chakra.span>{" "}
                Dashboard
              </Heading>
              <Text mt="10px" mb="40px" color="gray.300">
                Silakan baca panduan di bawah ini untuk memahami bagaimana cara
                menggunakan dashboard ini.
              </Text>
              <Box w='50%' p='30px' bg='gray.800' borderRadius='lg'>
                <Carousel showArrows={true} width="100%">
                  {photos.map((photo, index) => (
                    <div key={index}>
                      <img alt={photo.legend} src={photo.image} />
                      <p className="legend">{photo.legend}</p>
                    </div>
                  ))}
                </Carousel>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel w="100%" mb="20vh">
            <Iframe
              url="https://khadijahnurul.maps.arcgis.com/apps/dashboards/6c85b090c71c43c09d8a7db1aa6a28cb"
              width="100%"
              height="700px"
              display="initial"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
