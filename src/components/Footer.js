import { Box, ButtonGroup, Container, HStack, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => (
    <Box bg='white' w='100%' shadow='lg'>
        <Container
            py='3rem'
            maxW='60%'
        >
            <Stack
                spacing={{
                    base: '4',
                    md: '5',
                }}
            >
            <Box w='100%' justify="space-between" direction="row" align="center">
                <Box>
                    <HStack 
                        spacing='7' 
                        // bg='white' 
                        py='30px' 
                        borderRadius='lg' 
                        // shadow='lg' 
                        justify="space-between"
                        // bgImage={{
                        //     base: 'none',
                        //     md: 'url(/footer.png)'
                        //   }}
                    >
                        <Box display='flex' flexDir='row' alignItems='center' justifyContent='flex-start'
                            // bg='white'
                            // shadow='sm' 
                            // p='30px'
                            // borderRadius='lg'
                        >
                            <Image src='/ganesha.png' alt='' w='45px' h='auto' />
                            <Box 
                                ml='15px' 
                                textAlign='left'
                            >
                                <Text fontSize='xl' fontWeight='bold'>Ringgas 'Multihazard' Team</Text>
                                <Text fontSize='sm'>Institut Teknologi Bandung</Text>
                            </Box>
                        </Box>
                        <HStack bg='white' px='25px' borderRadius='10px'>
                            <Image src='/login.png' alt='' w='40px' h='auto' />
                            <Image src='/mercator.png' alt='' w='80px' h='auto' />
                            <Image src='/kmtg.png' alt='' w='40px' h='auto' />
                        </HStack>
                    </HStack>
                </Box>
            </Box>
            <Box display='flex' flexDir='row' justifyContent='space-between' alignContent='center'>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Ringgas Team ITB. All rights reserved.
                </Text>
                <ButtonGroup variant="ghost">
                    <IconButton
                        as="a"
                        href="https://www.instagram.com/mercatorkmtg/"
                        aria-label="Instagram"
                        icon={<FaInstagram fontSize="1.25rem" />}
                    />
                    <IconButton 
                        as="a" 
                        href="https://github.com/farellfaiz/multihazard-priority" 
                        aria-label="GitHub" 
                        icon={<FaGithub fontSize="1.25rem" />} 
                    />
                </ButtonGroup>
            </Box>
        </Stack>
        </Container>
        <Box w='100%' h='8px' bgGradient='linear(to-br, #F09819, #FF512F)'> </Box>
    </Box>
)

export default Footer;