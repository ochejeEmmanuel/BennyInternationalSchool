import React from "react";
import {
  Box,
  Input,
  Flex,
  Grid,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiSearch, FiChevronDown } from "react-icons/fi";
import blogImage from '../../assets/Image.png';
import avatarImage from '../../assets/Avatar.png';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: "Practicals on making Doughnuts and Fish Pie",
  description:
    "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  image: blogImage,
  author: "Alec Whitten",
  date: "17 Jan 2022",
}));

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      transition="all 0.2s ease"
      _hover={{ transform: "translateY(-3px)", boxShadow: "md" }}
    >
      {post.id === 1 ? (
        <Link to="/blog/practicals">
          <Image
            src={post.image}
            alt={post.title}
            w="100%"
            h="180px"
            objectFit="cover"
            cursor="pointer"
          />
        </Link>
      ) : (
        <Image
          src={post.image}
          alt={post.title}
          w="100%"
          h="180px"
          objectFit="cover"
        />
      )}

      <Box p={5}>
        <Heading as="h3" fontSize="lg" mb={2}>
          {post.title}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {post.description}
        </Text>

        <Flex gap={3} align="center">
          <Box
            w="40px"
            h="40px"
            borderRadius="full"
            overflow="hidden"
            flexShrink={0}
          >
            <Image src={avatarImage} alt={post.author} w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box>
            <Text fontWeight="medium" fontSize="sm">
              {post.author}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {post.date}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const Blog: React.FC = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={16}>
      {/* ===== Header Section ===== */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mb={{ base: 10, md: 16 }}>
        <Flex direction="column" align={{ base: "stretch", md: "flex-start" }} gap={3}>
          <Heading 
            as="h1" 
            fontSize={{ base: "3xl", md: "4xl" }} 
            fontWeight="bold"
            lineHeight="shorter"
          >
            Recent Articles
          </Heading>

          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            Keep yourself always in the loop
          </Text>

          <Flex
            mt={{ base: 3, md: 4 }}
            gap={3}
            align="stretch"
            direction={{ base: "column", sm: "row" }}
            w="100%">
            <Input
              placeholder="Enter your email"
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              maxW={{ base: "100%", sm: "300px" }}
              h={{ base: "40px", md: "44px" }}
              fontSize={{ base: "sm", md: "md" }}
            />
            <Button
              colorScheme="blue"
              borderRadius="md"
              px={6}
              h={{ base: "40px", md: "44px" }}
              flexShrink={0}
              w={{ base: "100%", sm: "auto" }}
            >
              Get started
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* ===== Search and Filter Bar ===== */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex
          justify="space-between"
          align="stretch"
          mb={10}
          direction={{ base: "column", md: "row" }}
          gap={4}
          w="100%"
        >
          {/* Search Bar */}
          <Box position="relative" maxW={{ base: "100%", md: "320px" }}>
            <Box
              position="absolute"
              left="12px"
              top="50%"
              transform="translateY(-50%)"
              pointerEvents="none"
              color="gray.400"
            >
              <FiSearch />
            </Box>
            <Input
              placeholder="Search articles..."
              bg="white"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
              fontSize={{ base: "sm", md: "md" }}
              pl="40px"
            />
          </Box>

          {/* Filter Dropdown */}
          <Box position="relative" maxW={{ base: "100%", md: "200px" }}>
            <select
              defaultValue="newest"
              style={{
                width: "100%",
                height: "44px",
                padding: "0 40px 0 12px",
                backgroundColor: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "6px",
                fontSize: "14px",
                appearance: "none",
                cursor: "pointer"
              }}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
            <Box
              position="absolute"
              right="12px"
              top="50%"
              transform="translateY(-50%)"
              pointerEvents="none"
              color="gray.400"
            >
              <FiChevronDown />
            </Box>
          </Box>
        </Flex>

        {/* ===== Blog Grid ===== */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Grid>

        <Flex 
          justify="center"
          align="center" 
          mt={12}
          gap={4}
        >
          <Button
            variant="outline"
            borderColor="gray.300"
            borderRadius="lg"
            size={{ base: "sm", md: "md" }}
          >
            <Flex align="center" gap={2}>
              <FiChevronLeft />
              <Text>Previous</Text>
            </Flex>
          </Button>

          <Text 
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            fontWeight="medium"
          >
            1 of 10
          </Text>

          <Button
            variant="outline"
            borderColor="gray.300"
            borderRadius="lg"
            size={{ base: "sm", md: "md" }}
          >
            <Flex align="center" gap={2}>
              <Text>Next</Text>
              <FiChevronRight />
            </Flex>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Blog;