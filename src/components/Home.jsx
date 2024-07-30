// src/components/Home.jsx
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Image,
    Container,
    SimpleGrid,
    useBreakpointValue,
    IconButton,
    Divider,
  } from '@chakra-ui/react';
import { motion } from 'framer-motion';
  import { FaArrowRight } from 'react-icons/fa';
  const MotionHeading = motion(Heading);
  export default function Home() {
    const headingSize = useBreakpointValue({ base: '2xl', md: '3xl' });
    const buttonSize = useBreakpointValue({ base: 'md', lg: 'lg' });
  
    return (
      <Box>
        {/* Hero Section */}
        <Box
          bgGradient="linear(to-r, teal.300, blue.500)"
          color="white"
          minH="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          py={{ base: '8', md: '16' }}
        >
          <Container maxW="container.lg">
          <MotionHeading
            as="h1"
            size={headingSize}
            mb="4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Elevate Your Business with Us
          </MotionHeading>
            <Text fontSize="lg" mb="8">
              Experience a premium design with exceptional features and seamless integration.
            </Text>
            <Button
              size={buttonSize}
              colorScheme="teal"
              variant="solid"
              rightIcon={<FaArrowRight />}
              _hover={{ bg: 'teal.600' }}
            >
              Learn More
            </Button>
          </Container>
        </Box>
  
        {/* Features Section */}
        <Container maxW="container.lg" py="16">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
            <FeatureCard
              title="Innovative Design"
              description="Utilize the latest design trends and technologies to make your product stand out."
              imageUrl="https://s7280.pcdn.co/wp-content/uploads/2021/05/CPP-1-150x150.png"
            />
            <FeatureCard
              title="Responsive Layout"
              description="Ensure a seamless experience across all devices with our adaptive designs."
              imageUrl="https://browserstack.wpenginepowered.com/wp-content/uploads/2024/06/JavaScript-150x150.png"
            />
            <FeatureCard
              title="Fast Performance"
              description="Experience lightning-fast performance with optimized and efficient code."
              imageUrl="https://101blockchains.com/wp-content/uploads/2022/09/Python-150x150.png"
            />
          </SimpleGrid>
        </Container>
  
        {/* Footer Section */}
        <Box
          bg="gray.800"
          color="white"
          py="8"
          textAlign="center"
        >
          <Text mb="4">
            © 2024 learnify. All rights reserved.
          </Text>
          <HStack spacing="4" justify="center">
            <IconButton
              aria-label="Facebook"
              icon={<FaArrowRight />}
              variant="outline"
              colorScheme="teal"
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaArrowRight />}
              variant="outline"
              colorScheme="teal"
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaArrowRight />}
              variant="outline"
              colorScheme="teal"
            />
          </HStack>
        </Box>
      </Box>
    );
  }
  
  function FeatureCard({ title, description, imageUrl }) {
    return (
      <Box
        bg="white"
        shadow="md"
        borderRadius="md"
        overflow="hidden"
        p="6"
        textAlign="center"
        _hover={{ shadow: 'lg' }}
      >
        <Image
          borderRadius="full"
          boxSize="100px"
          src={imageUrl}
          alt={title}
          mb="4"
          mx="auto"
        />
        <Heading as="h3" size="md" mb="2">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    );
  }
  