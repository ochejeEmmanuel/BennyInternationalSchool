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
import { BiError } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import loadingIcon from '../assets/45.svg';
import schoolImage from '../assets/welcome_md.jpeg';
import schoolLogo from '../assets/benny_logo_300x300.png';

export default function SchoolLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Sorry, an error occurred. Please try again later.");
      return;
    }
    setError("");
  };

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

  return (
    <Flex
      minH="100vh"
      direction={{ base: "column", md: "row" }}
      bg="gray.50"
    >
      {/* Left Section (Image) */}
      <Box
        flex="1"
        order={{ base: 0, md: 0 }}
        position="relative"
        h={{ base: "40vh", md: "100vh" }}
      >
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

      {/* Right Section (Form) */}
      <Flex
        flex="1.9"
        align="center"
        justify="center"
        p={{ base: 6, md: 8 }}
        bg="white"
        order={{ base: 1, md: 1 }}
      >
        <Box w="full" maxW="md">
          <Flex direction="column" gap={6} align="stretch">
            {/* Logo & School Name */}
            <Flex direction="column" gap={2} align="center">
              <Image
                src={schoolLogo}
                alt="School Logo"
                boxSize="100px"
              />
              <Heading
                color="blue.700"
                size="lg"
                textAlign="center"
                fontFamily="'Playfair Display', serif"
              >
                Benny International Schools
              </Heading>
            </Flex>

            {/* Error Alert */}
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

            {/* Form */}
            <Box as="form" mt={2}>
              <Flex direction="column" gap={5}>
                {/* Email Field */}
                <Box>
                  <Text mb={2} fontWeight="medium" fontSize="sm">Email</Text>
                  <Input
                    size="lg"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>

                {/* Password Field */}
                <Box>
                  <Text mb={2} fontWeight="medium" fontSize="sm">Password</Text>
                  <Box position="relative">
                    <Input
                      size="lg"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      pr="48px"
                    />
                    <Box
                      position="absolute"
                      right="12px"
                      top="50%"
                      transform="translateY(-50%)"
                      cursor="pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      color="gray.500"
                      _hover={{ color: "gray.700" }}
                    >
                      {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </Box>
                  </Box>
                </Box>

                <Button colorScheme="blue" w="full" size="lg" onClick={handleSignIn}>
                  Sign In
                </Button>

                <Flex justify="space-between" w="full" fontSize="lg" align="center">
                  <Link
                    as={RouterLink}
                    to="/ForgotPassword"
                    color="blue.500"
                    fontWeight="medium"
                    _hover={{ textDecoration: "underline", color: "blue.600" }}
                  >
                    Forgot Password?
                  </Link>

                  <Flex align="center" gap={1}>
                    <IoArrowBackOutline color="#2B6CB0" />
                    <Link
                      as={RouterLink}
                      to="/"
                      color="blue.500"
                      fontWeight="medium"
                      _hover={{ textDecoration: "underline", color: "blue.600" }}
                    >
                      Back to Homepage
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}