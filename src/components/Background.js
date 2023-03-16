import { Link } from 'react-router-dom';
import {
  Container,
  Stack,
  Text,
  Image,
  Skeleton,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";

const QnAs = [
  {
    heading: "Kondisi geografis Indonesia",
    content:
      "Indonesia merupakan negara yang terletak pada pertemuan tiga lempeng tektonik yaitu lempeng Indo-Australia, lempeng Eurasia, dan lempeng Pasifik yang memposisikan Indonesia sebagai negara rawan bencana baik dari aktivitas tektonik maupun vulkanik (Rahma, 2018).",
    // icon: FaSatellite,
  },
  {
    heading: "Kondisi tektonik di Indonesia",
    content:
      "Pada bagian selatan dan timur Indonesia terdapat sabuk vulkanik (volcanic arc) yang memanjang dari Pulau Sumatera, Jawa, Nusa Tenggara, hingga Sulawesi, yang sisinya berupa pegunungan vulkanik tua dan dataran rendah yang sebagian didominasi oleh rawa-rawa. Kondisi tersebut sangat berpotensi sekaligus rawan bencana seperti letusan gunung berapi, gempa bumi, tsunami, banjir dan tanah longsor (Siswanto, 2017).",
    // icon: FaLaptopCode,
  },
  {
    heading: "Hidrometeorologi dan kondisinya",
    content:
      "Kondisi iklim di Indonesia yang bersifat tropis menyebabkan Indonesia memiliki curah hujan yang tinggi (Hidayat dan Farihah, 2020). Kondisi iklim seperti ini ditambah dengan perubahan cuaca, suhu, dan arah angin yang cukup ekstrim serta dengan kondisi topografi permukaan dan batuan yang relatif beragam dapat meningkatkan potensi bencana hidrometeorologi seperti banjir dan tanah longsor (Sadat, 2019). Bencana hidrometeorologi adalah bencana alam yang dipengaruhi oleh faktor cuaca, yang dipengaruhi oleh curah hujan, suhu, kelembapan, dan angin. BNPB mencatat bencana hidrometeorologi mendominasi bencana alam di Indonesia.",
    // icon: FaLaptopCode,
  },
  {
    heading: "Apa akibatnya?",
    content:
      "Pada tahun 2022, tercatat sebanyak 3.461 bencana di Indonesia yang didominasi oleh bencana hidrometeorologi yakni 1.493 kejadian banjir, 1.033 cuaca ekstrem, dan 628 tanah longsor. Akibat bencana tersebut, muncul kerugian baik material maupun nonmaterial. Tercatat bahwa total rumah rusak akibat bencana alam sebanyak 95.324 dan fasilitas yang rusak sebanyak 1.980 serta tercatat 844 orang meninggal dunia, 48 orang hilang, 5.330.351 orang menderita dan mengungsi, dan 8,724 luka-luka. Meskipun demikian, gempa bumi mendominasi penyebab kematian 844 jiwa sepanjang 2022 dengan angka sekitar 80 persen (BNPB, 2022).",
    // icon: FaLaptopCode,
  },
  {
    heading: "Climate Outlook 2023",
    content:
      "Pada akhir tahun 2022, Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) menyampaikan Pandangan Iklim tahun 2023 atau Climate Outlook 2023. Di dalam Climate Outlook tersebut, dijelaskan bahwa potensi curah hujan tahunan pada tahun 2023 diprediksi melebihi rata-rata yang dapat memicu bencana seperti banjir dan tanah longsor. Selain itu, BMKG juga mewaspadai masyarakat akan potensi gempa karena dalam 3 tahun terakhir, terdapat peningkatan aktivitas kegempaan (BMKG, 2022).",
    // icon: FaLaptopCode,
  },
  {
    heading: "Machine Learning",
    content:
      "Berdasarkan tingginya potensi kejadian dan tingginya potensi kerusakan, diperlukan pemodelan optimalisasi lebih lanjut untuk memodelkan kawasan multibencana yang mencakup bencana banjir, longsor, dan gempa bumi dengan mengintegrasikan metode machine learning. Fokus besar metode machine learning adalah bagaimana mengenali secara otomatis pola kompleks dan membuat keputusan cerdas berdasarkan data (Fitriyaningsih dkk., 2018). Machine learning diaplikasikan agar dapat diprediksi daerah-daerah rawan bencana berdasarkan data-data dan parameter-parameter kebencanaan agar didapatkan informasi tentang masalah kebencanaan meminimalisasi risiko bencana.",
    // icon: FaLaptopCode,
  }
];

const Background = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Box mr={{ base: 0, md: 9 }} pos="relative">
          <DottedBox />
          <Image
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            maxH="20rem"
            objectFit="cover"
            src={`https://thumbs.dreamstime.com/b/indonesia-city-lights-map-elements-image-furnished-nasa-35862993.jpg`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <Heading
            fontSize="4xl"
            lineHeight={1}
            fontWeight="normal"
            textAlign="left"
          >
            Ada Apa dengan <Text color='#d65249' display='inline-block' fontWeight='bold'>Indonesia</Text>?
          </Heading>
          <Box>
            <Accordion defaultIndex={[0]} borderRadius='md' bg='white' shadow='md' w='600px' >
                {QnAs.map((QnA, index) => (
              <AccordionItem borderWidth='0' borderRadius='md'>
                <h2>
                  <AccordionButton fontWeight='bold' _expanded={{ fontWeight: 'bold', bg:'#d65249', color:'white' }} borderRadius='md'>
                    <Box as="span" flex="1" textAlign="left">
                      {QnA.heading}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={4}>
                  <Text align='justify' mx='10px'>{QnA.content}</Text>
                  <Divider h='5px' borderColor='gray.200' mt='20px' />
                </AccordionPanel>
              </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Link to='/research'>
            <Text fontSize="sm" color="blue.400">Pelajari lebih lengkap →</Text>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg color="rgba(55,65,81, 0.1)" width="350" height="420" fill="none">
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default Background;
