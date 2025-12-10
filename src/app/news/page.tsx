"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// ----------------------
// Single News Item
// ----------------------
const newsItem = {
  title: "The Rise of Multicultural Marketing",
  source: "WARC",
  link: "https://www.warc.com/newsandopinion/opinion/the-rise-of-multicultural-marketing/6349",
  summary:
    "An in-depth look at how major brands are increasing investment in multicultural media to reach diverse audiences more meaningfully.",
};

export default function NewsPage() {
  return (
    <Box px={{ base: 5, md: 40 }} py={{ base: 10, md: 20 }}>
      {/* Page Title */}
      <Heading
        size="2xl"
        mb={6}
        color="#1D63AF"
        fontWeight="bold"
        textAlign={{ base: "center", md: "left" }}
      >
        News & Insights
      </Heading>

      <Text
        fontSize="lg"
        color="gray.600"
        maxW="3xl"
        mb={12}
        textAlign={{ base: "center", md: "left" }}
      >
        Explore important developments and insights in multicultural and
        inclusive media trends around the world.
      </Text>

      {/* News Card */}
      <SimpleGrid columns={{ base: 1, md: 1 }} gap={10}>
        <Box
          p={8}
          border="1px solid #e5e5e5"
          borderRadius="lg"
          bg="white"
          _hover={{
            transform: "translateY(-4px)",
            transition: ".25s ease",
            shadow: "md",
          }}
        >
          <VStack align="start" gap={4}>
            {/* Title */}
            <Heading size="lg" color="#1D63AF">
              {newsItem.title}
            </Heading>

            {/* Source */}
            <Text fontSize="sm" color="gray.500">
              Source: {newsItem.source}
            </Text>

            {/* Summary */}
            <Text fontSize="md" color="gray.700" lineHeight="1.7">
              {newsItem.summary}
            </Text>

            <Divider my={4} />

            {/* Read More */}
            <HStack pt={2}>
              <Link
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                color="#126C36"
                fontWeight="semibold"
                fontSize="md"
                _hover={{ color: "#0e512a" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                Read full article <ExternalLinkIcon />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
