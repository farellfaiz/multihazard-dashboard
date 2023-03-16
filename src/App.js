import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { Box } from '@chakra-ui/react'
import '@fontsource/raleway/'
import '@fontsource/ubuntu/'

function App() {

  return (
    <Box w='100%' bg='gray.50' fontFamily='Ubuntu'>
      <Navigation />
      <Hero />
      <Box h='1000px' w='100%'>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
