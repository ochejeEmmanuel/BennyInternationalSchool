import { Image, Flex, Box, Heading, Text, Input, Stack, HStack, Button, Textarea } from "@chakra-ui/react"
import contactImage from '../assets/Card (1).png'

const Contact = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      p={4}
    >
      {/* Form Container */}
      <Box w={{ base: "100%", md: "480px" }} mt={{ base: "1em", md: 0 }} h={{ base: "auto", md: "664px" }} mr={{ md: "2em" }}>
        <Box mb={4}>
          <Heading size="lg">Get in touch</Heading>
        </Box>
        <Box mb={8}>
          <Text color="rgba(102, 112, 133, 1)">
            Our friendly team would love to hear from you
          </Text>
        </Box>
        <Stack gap={4} align="stretch">
          {/* First Name and Last Name side by side on larger screens, stacked on mobile */}
          <HStack gap={4} flexWrap="wrap" justify="space-between" flexDir={{ base: "column", md: "row" }}>
            <Box flex={1}>
              <Text mb={2} fontWeight="medium" fontSize="sm">First Name</Text>
              <Input placeholder="First name" height="44px" />
            </Box>
            <Box flex={1}>
              <Text mb={2} fontWeight="medium" fontSize="sm">Last Name</Text>
              <Input placeholder="Last name" height="44px" />
            </Box>
          </HStack>

          {/* Email */}
          <Box>
            <Text mb={2} fontWeight="medium" fontSize="sm">Email</Text>
            <Input placeholder="you@company.com" height="44px" />
          </Box>

          {/* Phone number */}
          <Box>
            <Text mb={2} fontWeight="medium" fontSize="sm">Phone Number</Text>
            <Input placeholder="NGN +234-000-0000" height="44px" />
          </Box>

          {/* Message textarea */}
          <Box>
            <Text mb={2} fontWeight="medium" fontSize="sm">Message</Text>
            <Textarea placeholder="Leave us a message..." rows={4} height="134px" resize="none" />
          </Box>

          {/* Send message button */}
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            height="48px"
            mt={4}
          >
            Send message
          </Button>
        </Stack>
      </Box>

      {/* Image Container (hidden on mobile) */}
      <Box 
        w={{ base: "100%", md: "576px" }} 
        mt={{ base: "2em", md: 0 }} 
        display={{ base: "none", md: "block" }}
      >
        <Image src={contactImage} w="100%" h="45em" objectFit="contain" />
      </Box>
    </Flex>
  );
}

export default Contact;