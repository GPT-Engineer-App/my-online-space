import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">Hi, I'm [Your Name], a passionate web developer.</Text>
        </Box>
        <Box boxSize="150px">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Box textAlign="center">
          <Text fontSize="md" mb={4}>Connect with me:</Text>
          <Button as="a" href="https://github.com/yourusername" leftIcon={<FaGithub />} colorScheme="teal" variant="outline" m={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/yourusername" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline" m={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:your.email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline" m={2}>
            Email
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;