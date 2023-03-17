import {
  Box,
  Stack,
  Button,
  Text,
  HStack,
  Circle,
  Collapse,
  chakra,
  Icon,
  Heading,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import * as React from "react";
import { useContext, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const probs = [
  {
    image: "/research/gempaprob.png",
    legend:
      "Probabilitas gempa",
  },
  {
    image: "/research/banjirprob.png",
    legend:
      "Probabilitas banjir",
  },
  {
    image: "/research/longsorprob.png",
    legend:
      "Probabilitas longsor",
  }
];

const absoluts = [
    {
      image: "/research/abssr.png",
      legend:
        "Sangat rendah",
    },
    {
      image: "/research/absr.png",
      legend:
        "Rendah",
    },
    {
      image: "/research/abssed.png",
      legend:
        "Sedang",
    },
    {
      image: "/research/abst.png",
      legend:
        "Tinggi",
    },
    {
      image: "/research/absst.png",
      legend:
        "Sangat tinggi",
    }
  ];

  const relatifs = [
    {
      image: "/research/relsr.png",
      legend:
        "Sangat rendah",
    },
    {
      image: "/research/relr.png",
      legend:
        "Rendah",
    },
    {
      image: "/research/relsed.png",
      legend:
        "Sedang",
    },
    {
      image: "/research/relt.png",
      legend:
        "Tinggi",
    },
    {
      image: "/research/relst.png",
      legend:
        "Sangat tinggi",
    }
  ];

  const evals = [
    {
      image: "/research/vigempa.png",
      legend:
        "Variable Importance Gempa",
    },
    {
      image: "/research/vibanjir.png",
      legend:
        "Variable Importance Banjir",
    },
    {
      image: "/research/vilongsor.png",
      legend:
        "Variable Importance Longsor",
    },
    {
      image: "/research/aucrf.png",
      legend:
        "Area under curve RF",
    },
    {
      image: "/research/aucgtb.png",
      legend:
        "Area under curve GTB",
    },
    {
      image: "/research/auccart.png",
      legend:
        "Area under curve CART",
    },
    {
      image: "/research/validasi.png",
      legend:
        "Uji validasi",
    }
  ];

const Step = (props) => {
  const { title, children, ...boxProps } = props;
  const { isActive, isCompleted, step } = useStep();
  const accentColor = useColorModeValue("orange.500", "orange.300");
  const mutedColor = useColorModeValue("gray.600", "whiteAlpha.800");
  const activeColor = useColorModeValue("white", "black");
  return (
    <Box {...boxProps}>
      <HStack spacing="4">
        <Circle
          size="8"
          fontWeight="bold"
          color={
            isActive ? activeColor : isCompleted ? accentColor : mutedColor
          }
          bg={isActive ? accentColor : "transparent"}
          borderColor={isCompleted ? accentColor : "inherit"}
          borderWidth={isActive ? "0px" : "1px"}
        >
          {isCompleted ? <Icon as={CheckIcon} /> : step}
        </Circle>
        <Heading
          fontSize="lg"
          fontWeight="semibold"
          color={isActive || isCompleted ? "inherit" : mutedColor}
        >
          {title}
        </Heading>
      </HStack>
      <Collapse in={isActive}>{children}</Collapse>
    </Box>
  );
};

export const Steps = (props) => {
  const { activeStep, children } = props;
  const steps = React.useMemo(
    () =>
      React.Children.toArray(children).map((step, i, arr) => (
        <StepContext.Provider
          key={i}
          value={{
            isActive: activeStep === i,
            isCompleted: activeStep > i,
            isLastStep: arr.length !== i + 1,
            step: i + 1,
          }}
        >
          {step}
          {arr.length !== i + 1 && <StepConnector />}
        </StepContext.Provider>
      )),
    [activeStep, children]
  );
  return <>{steps}</>;
};

const StepConnector = () => {
  const { isCompleted, isActive } = useStep();
  const accentColor = useColorModeValue("orange.500", "orange.300");
  return (
    <Box
      borderStartWidth="1px"
      borderStartColor={isCompleted ? accentColor : "inherit"}
      height="6"
      mt={isActive ? "0" : "2"}
      mb="2"
      ms="4"
      ps="4"
    />
  );
};

const StepContent = (props) => {
  const { isLastStep } = useStep();
  return (
    <Box
      color={useColorModeValue("gray.600", "gray.400")}
      borderStartWidth={isLastStep ? "1px" : "0"}
      ms="4"
      mt="2"
      ps="8"
      pb="3"
      fontSize="sm"
      {...props}
    />
  );
};

const StepContext = React.createContext(null);

const useStep = () => {
  const context = useContext(StepContext);

  if (!context) {
    throw Error("Wrap your step with `<Steps />`");
  } else {
    return context;
  }
};

const useSteps = (options) => {
  const { initialStep } = options;
  const [activeStep, setActiveStep] = useState(initialStep);

  const nextStep = () => setActiveStep(activeStep + 1);

  const prevStep = () => setActiveStep(activeStep - 1);

  const reset = () => setActiveStep(0);

  return {
    nextStep,
    prevStep,
    reset,
    activeStep,
  };
};

const Proses = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Box w="100%" h='auto' mb='70px'>
      <Box
        mx="auto"
        mb='60px'
        maxW="2xl"
        py="10"
        px={{
          base: "6",
          md: "8",
        }}
        minH="400px"
        h="auto"
      >
        <Heading
          as="h1"
          textAlign="center"
          size="2xl"
          mt="30px"
          fontWeight="black"
          mb="50px"
        >
          <chakra.span
            bgGradient="linear(to-br, #F09819, #FF512F)"
            bgClip="text"
          >
            {" "}
            Research{" "}
          </chakra.span>{" "}
          Roadmap
        </Heading>
        <Box bg="white" py="30px" px="30px" borderRadius="lg" shadow="md">
          <Steps activeStep={activeStep}>
            <Step title="Pengumpulan Data Parameter">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Pada penelitian yang dilakuan dalam mengidentifikasi
                    probabilitas bencana di Indonesia, kami menggunakan data
                    parameter pada masing-masing bencana yang bersumber pada
                    data satelit penginderaan jauh multisumber. Sumber-sumber
                    tersebut antara lain, NASA, JAXA, OpenLandMap, ESA, UCSB,
                    BIG, BMKG, dan lain-lain. Penggunaan data dibedakan sesuai
                    dengan kebutuhan dalam mengidentifikasi area tingkat
                    probabilitas bencana di Indonesia.
                  </Text>
                  <HStack>
                    <Button size="sm" variant="ghost" isDisabled>
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>

            {/* Iteration Steps */}
            <Step title="Melakukan Metode Machine Learning">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Machine Learning digunakan untuk menentukan probabilitas
                    multibencana yang ada di tiap titik di Indonesia. Data
                    parameter yang ada diperlakukan sebagai data training dan
                    testing untuk machine learning classification and regression
                    tree, random forest dan gradient tree boosting.
                    <br />
                    <br />
                    CART adalah sebuah algoritma decision tree yang dapat
                    digunakan untuk melakukan klasifikasi atau regresi. Decision
                    tree adalah struktur pohon yang terdiri dari serangkaian
                    keputusan dan cabang-cabang yang digunakan untuk
                    mengklasifikasikan atau memprediksi data. Kelebihan CART
                    adalah mudah diinterpretasikan dan memiliki performa yang
                    baik pada data yang linear atau tidak linier. Namun,
                    kelemahan CART adalah sensitif terhadap overfitting.
                    <br />
                    <br />
                    RF adalah algoritma ensemble learning yang terdiri dari
                    banyak decision tree yang dibangun secara acak. Dalam RF,
                    setiap decision tree dibangun dengan subset data yang
                    berbeda dan subset fitur yang berbeda. Setelah decision tree
                    dibangun, prediksi dilakukan dengan mengambil rata-rata
                    hasil prediksi dari semua decision tree. Kelebihan RF adalah
                    mampu mengatasi overfitting, memiliki performa yang baik
                    pada data yang kompleks, dan dapat mengekstraksi fitur
                    penting dari data. Namun, kelemahan RF adalah sulit
                    diinterpretasikan dan membutuhkan komputasi yang lebih
                    banyak.
                    <br />
                    <br />
                    GTB adalah algoritma ensemble learning yang membangun
                    decision tree secara bertahap dengan meminimalkan kesalahan
                    prediksi pada setiap iterasi. Dalam GTB, setiap decision
                    tree dibangun berdasarkan residual dari prediksi sebelumnya.
                    Kelebihan GTB adalah mampu mengatasi overfitting, memiliki
                    performa yang sangat baik pada data yang kompleks, dan dapat
                    mengekstraksi fitur penting dari data. Namun, kelemahan GTB
                    adalah sensitif terhadap noise pada data dan membutuhkan
                    komputasi yang lebih banyak dibandingkan dengan algoritma
                    lainnya.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>

            <Step title="Evaluasi Machine Learning">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Evaluasi merupakan salah satu tahap yang sangat penting
                    dalam menggunakan Machine Learning. Evaluasi bertujuan untuk
                    mengukur seberapa baik model Machine Learning yang telah
                    dibuat dalam memprediksi data yang belum dilihat sebelumnya.
                    Evaluasi juga dapat membantu kita memahami performa model,
                    menentukan apakah model sudah cukup baik untuk digunakan
                    atau masih perlu diperbaiki, serta mengevaluasi fitur yang
                    paling penting dalam model.
                    <br />
                    <br />
                    Dalam Machine Learning, terdapat beberapa metrik evaluasi
                    yang digunakan untuk mengevaluasi performa model, salah
                    satunya adalah Variable Importance dan Area Under Curve
                    (AUC). Kedua metrik evaluasi tersebut sangat penting untuk
                    mengevaluasi performa model Machine Learning dan
                    mengevaluasi fitur yang paling penting dalam model. Dengan
                    melakukan evaluasi, kita dapat memastikan bahwa model yang
                    dibuat sudah cukup baik dan dapat digunakan untuk
                    memprediksi data baru dengan akurasi yang tinggi.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>

            <Step title="Analisis Raster Probabilitas Multibencana">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Hasil dari machine learning merupakan data raster (dapat
                    dilihat di segmen selanjutnya atau pada dashboard) yang
                    merupakan probabilitas terjadinya bencana pada setiap titik
                    yang ada di area yang dimodelkan, dalam hal ini adalah
                    Indonesia. Probabilitas tersebut diperoleh dari hasil
                    prediksi dari masing-masing model machine learning yang
                    digunakan.
                    <br />
                    <br />
                    Probabilitas tersebut kemudian diolah menjadi data raster
                    dengan nilai pixel yang merepresentasikan tingkat
                    probabilitas bencana yang terjadi pada titik tersebut.
                    Tingkat probabilitas bencana tersebut diperoleh dari hasil
                    prediksi dari masing-masing model machine learning yang
                    digunakan. Probabilitas tersebut kemudian diolah menjadi
                    data raster dengan nilai pixel yang merepresentasikan
                    tingkat probabilitas bencana yang terjadi pada titik
                    tersebut.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>

            <Step title="Dekomposisi RGB">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Data raster pada tiap-tiap bencana yang dihasilkan dari
                    proses sebelumnya, dikalkulasi agar menghasilkan
                    probabilitas multibencana. Data-data probabilitas yang ada
                    kemudian diolah lebih lanjut untuk dilakukan dekomposisi
                    RGB. Dekomposisi RGB merupakan proses pengelompokan data
                    raster berdasarkan nilai pixelnya. Hasil dekomposisi RGB
                    dapat dilihat di segmen selanjutnya, di mana masing-masing
                    bencana memiliki nilai RGB-nya masing-masing dan ketika
                    terdapat titik yang memiliki probabilitas multibencana yang
                    tinggi, maka warna tersebut akan bersatu menjadi warna
                    putih. Berarti, daerah atau area yang memiliki warna putih
                    memiliki probabilitas terjadinya multibencana yang tinggi.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>

            <Step title="Analisis Indeks Prioritas Mitigasi Multibencana">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Data probabilitas akan diolah lebih lanjut menjadi indeks
                    prioritas mitigasi multibencana yang diharapkan akan
                    membantu para stakeholder ataupun masyarakat secara umum
                    untuk melakukan strategi mitigasi multibencana. Indeks yang
                    diolah adalah indeks absolut dan indeks relatif. Indeks
                    absolut hanya memperhatikan luas area yang memiliki
                    probabilitas multibencana yang tinggi tiap provinsi.
                    Sedangkan indeks relatif memperhatikan luas areanya.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>

            <Step title="Uji Validasi">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Uji validasi dilakukan menggunakan metode uji statistik
                    regresi linier untuk data spasial. Uji validasi ini
                    menggunakan data training dan data testing yang telah
                    dilakukan klasifikasi 70% dan 30%. Hasil yang didapatkan
                    berupa nilai korelasi yang menandakan bahwasannya hasil
                    klasifikasi atau probabilitas memiliki nilai yang mendekati
                    pada area kejadian.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selanjutnya
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>
            {/* Last Step */}
            <Step title="Publikasi">
              <StepContent>
                <Stack shouldWrapChildren spacing="4">
                  <Text>
                    Hasil dari riset ini tidak mungkin akan berdampak banyak
                    jika publikasi yang menarik tidak dilakukan. Publikasi dan
                    hasil riset berupa data, informasi geospasial, indeks, dan
                    lain-lain dilakukan via dashboard dan portal yang
                    terintegrasi. Harapannya, stakeholder maupun masyarakat
                    secara umum dapat lebih memahami dan menikmati hasil riset
                    dengan platform yang mudah, menarik, nyaman, dan
                    terintegrasi sehingga dapat membantu mereka untuk melakukan
                    dan menyusun strategi mitigasi multibencana, baik secara
                    lokal maupun nasional.
                  </Text>
                  <HStack>
                    <Button size="sm" onClick={prevStep} variant="ghost">
                      Kembali
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                      Selesai
                    </Button>
                  </HStack>
                </Stack>
              </StepContent>
            </Step>
          </Steps>
          <HStack
            display={activeStep === 8 ? "flex" : "none"}
            mt="10"
            spacing="4"
            shouldWrapChildren
            flexDir='column'
          >
            <Text>Selamat! Kamu telah mengarungi roadmap penelitian ini!</Text>
            <Button
              size="sm"
              onClick={reset}
              variant="outline"
              verticalAlign="baseline"
            >
              Lihat kembali dari awal
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box
        w="80%"
        mt="60px"
        bg="white"
        py="30px"
        px="30px"
        borderRadius="lg"
        shadow="md"
        margin="0 auto"
      >
        <Tabs variant="soft-rounded" colorScheme="orange" isFitted>
          <TabList>
            <Tab>Probabilitas</Tab>
            <Tab>Dekomposisi RGB</Tab>
            <Tab>Indeks Mitigasi Absolut</Tab>
            <Tab>Indeks Mitigasi Relatif</Tab>
            <Tab>Evaluasi ML</Tab>
          </TabList>
          <TabPanels>
            <TabPanel align='center'>
              <Carousel showArrows={true} width="50%">
                {probs.map((probs, index) => (
                  <div key={index}>
                    <img alt={probs.legend} src={probs.image} />
                    <p className="legend">{probs.legend}</p>
                  </div>
                ))}
              </Carousel>
            </TabPanel>
            <TabPanel align='center'>
              <Image src="/research/rgb.png" w='50%' alt="Dekomposisi RGB" />
            </TabPanel>
            <TabPanel align='center'>
              <Carousel showArrows={true} width="50%">
                {absoluts.map((abs, index) => (
                  <div key={index}>
                    <img alt={abs.legend} src={abs.image} />
                    <p className="legend">{abs.legend}</p>
                  </div>
                ))}
              </Carousel>
            </TabPanel>
            <TabPanel align='center'>
              <Carousel showArrows={true} width="50%">
                {relatifs.map((rel, index) => (
                  <div key={index}>
                    <img alt={rel.legend} src={rel.image} />
                    <p className="legend">{rel.legend}</p>
                  </div>
                ))}
              </Carousel>
            </TabPanel>
            <TabPanel align='center'>
              <Carousel showArrows={true} width="50%">
                {evals.map((ujiml, index) => (
                  <div key={index}>
                    <img alt={ujiml.legend} src={ujiml.image} />
                    <p className="legend">{ujiml.legend}</p>
                  </div>
                ))}
              </Carousel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Proses;
