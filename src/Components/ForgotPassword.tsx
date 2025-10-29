import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Input,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { IoArrowBackOutline } from "react-icons/io5";
import { BiError } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import loadingIcon from '../assets/45.svg';
import schoolImage from '../assets/welcome_md.jpeg';


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image
          src={loadingIcon}
          alt="Loading..."
          boxSize="50px"
        />
      </Flex>
    );
  }

  const handleContinue = () => {
    if (!email) {
      setError("Please enter your email before continuing.");
      return;
    }
    setError(""); 
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <Flex
      minH="100vh"
      direction={{ base: "column", md: "row" }}
      bg="gray.50"
    >
      {/* Left Section - Image */}
      <Box flex="1" position="relative" h={{ base: "40vh", md: "100vh" }}>
        <Image
          src={schoolImage}
          alt="School"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blue.900"
          opacity="0.7"
        />
      </Box>

      {/* Right Section - Reset Form */}
      <Flex
        flex="1.9"
        align="center"
        justify="center"
        p={{ base: 6, md: 8 }}
        bg="white"
      >
        <Box w="full" maxW="md">
          <Flex direction="column" gap={6} align="stretch">
            {/* Title */}
            <Heading
              color="blue.700"
              size="lg"
              textAlign="center"
              fontFamily="'Playfair Display', serif"
            >
              Reset Password
            </Heading>

            {/* Error Alert (shows when no email is entered) */}
            {error && (
              <Box
                bg="orange.50"
                border="1px solid"
                borderColor="orange.200"
                borderRadius="md"
                p={4}
              >
                <Flex align="center" gap={2}>
                  <BiError color="#C05621" size={20} />
                  <Text color="orange.700" fontWeight="medium">
                    {error}
                  </Text>
                </Flex>
              </Box>
            )}

            {/* Reset Form */}
            <Box as="form" mt={2}>
              <Flex direction="column" gap={5}>
                <Box>
                  <Text mb={2} fontWeight="medium" fontSize="sm">Email</Text>
                  <Input
                    size="lg"
                    type="email"
                    placeholder="e.g. james@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>

                <Button
                  colorScheme="blue"
                  w="full"
                  size="lg"
                  onClick={handleContinue}
                >
                  Continue
                </Button>

                {/* Navigation Link - Back to Login */}
                <Flex
                  justify="flex-start"
                  w="full"
                  fontSize="lg"
                  align="center"
                  gap={1}
                  mt={10}
                >
                  <IoArrowBackOutline color="#2B6CB0" />
                  <Link
                    as={RouterLink}
                    to="/login"
                    color="blue.500"
                    fontWeight="medium"
                    _hover={{
                      textDecoration: "underline",
                      color: "blue.600",
                    }}
                  >
                    Back to Login
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}