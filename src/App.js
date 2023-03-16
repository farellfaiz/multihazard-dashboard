import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Background from "./components/Background";
import CTA from "./components/CTA";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Proses from "./components/Proses";
import Scroll from "./components/Scroll";
import { Box } from "@chakra-ui/react";
import "@fontsource/raleway/";
import "@fontsource/ubuntu/";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Background />
      <CTA />
    </>
  );
};

function App() {
  return (
    <Box w="100%" bg="gray.50" fontFamily="Ubuntu">
      <BrowserRouter>
        <Navigation />
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Proses />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
