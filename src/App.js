import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Background from "./components/Background";
import CTA from "./components/CTA";
import { Box } from "@chakra-ui/react";
import "@fontsource/raleway/";
import "@fontsource/ubuntu/";

function App() {
  return (
    <Box w="100%" bg="gray.50" fontFamily="Ubuntu">
      <Navigation />
      <Hero />
      <Features />
      <Background />
      <CTA />
      <Footer />
    </Box>
  );
}

export default App;
