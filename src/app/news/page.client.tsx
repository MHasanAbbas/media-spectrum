"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// Curated headlines focused on inclusive and multicultural media
const newsItems = [
  {
    title: "Diverse media investment trends in 2024 and 2025",
    source: "Ad Age",
    date: "Mar 12, 2025",
    link: "https://adage.com/article/media/diverse-media-investment-trends-2024-and-2025/2604991/",
    summary:
      "Ad Age highlights how increased competition, evolving terminology, and shifting economic policies are reshaping the market for diverse-owned media.",
  },
  {
    title:
      "Raptive and BOMESI partner to unlock large-scale investment in diverse-owned media",
    source: "Raptive Newsroom",
    date: "Apr 25, 2024",
    link: "https://raptive.com/newsroom/raptive-and-bomesi-partner-to-unlock-large-scale-investment-in-diverse-owned-media/",
    summary:
      "The partnership creates a verified, curated marketplace that makes it easier for advertisers to fund diverse-owned publishers at scale.",
  },
  {
    title: "The Rise of Multicultural Marketing",
    source: "WARC",
    link: "https://www.warc.com/newsandopinion/opinion/the-rise-of-multicultural-marketing/6349",
    summary:
      "An in-depth look at how major brands are increasing investment in multicultural media to reach diverse audiences more meaningfully.",
  },
];

export default function NewsPage() {
  return (
    <Box
      px={{ base: 5, md: 40 }}
      py={{ base: 10, md: 20 }}
      bgGradient="linear(to-b, #f8fbff, white)"
      minH="100vh"
    >
      <Heading
        size="2xl"
        mb={3}
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
        mb={4}
        textAlign={{ base: "center", md: "left" }}
      >
        Explore important developments and insights in multicultural and
        inclusive media trends around the world.
      </Text>

      <Text
        fontSize="sm"
        textTransform="uppercase"
        letterSpacing="0.08em"
        color="#126C36"
        fontWeight="semibold"
        mb={10}
        textAlign={{ base: "center", md: "left" }}
      >
        Curated headlines from trusted industry sources
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        {newsItems.map((item) => (
          <Box
            key={item.title}
            p={8}
            border="1px solid"
            borderColor="gray.100"
            borderRadius="xl"
            bg="white"
            shadow="sm"
            transition="all 0.25s ease"
            _hover={{
              transform: "translateY(-6px)",
              shadow: "lg",
              borderColor: "#1D63AF",
            }}
          >
            <VStack align="start" spacing={4}>
              <Heading size="lg" color="#1D63AF">
                {item.title}
              </Heading>

              <HStack spacing={3} color="gray.500" fontWeight="semibold">
                <Text>{item.source}</Text>
                {item.date && (
                  <>
                    <Box
                      w="8px"
                      h="8px"
                      bg="#E34234"
                      borderRadius="full"
                      as="span"
                    />
                    <Text fontSize="sm" fontWeight="medium" color="gray.600">
                      {item.date}
                    </Text>
                  </>
                )}
              </HStack>

              <Text fontSize="md" color="gray.700" lineHeight="1.7">
                {item.summary}
              </Text>

              <HStack pt={2}>
                <Link
                  href={item.link}
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
        ))}
      </SimpleGrid>
    </Box>
  );
}
