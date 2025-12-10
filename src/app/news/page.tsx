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

interface NewsItem {
  title: string;
  summary: string;
  link: string;
  source: string;
}

const newsItems: NewsItem[] = [
  {
    title: "The Rise of Multicultural Marketing",
    source: "WARC",
    link: "https://www.warc.com/newsandopinion/opinion/the-rise-of-multicultural-marketing/6349",
    summary:
      "An in-depth look at how global brands are increasing investment in multicultural media to reach diverse communities more meaningfully.",
  },
  {
    title: "Why Inclusive Advertising Is Now Essential",
    source: "The Drum",
    link: "https://www.thedrum.com/opinion/2024/02/16/why-inclusive-advertising-is-now-essential",
    summary:
      "Industry leaders explain why representation and inclusion are now required for modern advertising strategies—not optional add-ons.",
  },
  {
    title: "UK Advertising Still Falling Short on Diversity",
    source: "Campaign UK",
    link: "https://www.campaignlive.co.uk/article/uk-advertising-still-falling-short-diversity-representation/1813257",
    summary:
      "New data shows the UK advertising industry still lacks true representation, highlighting the need for better multicultural media investment.",
  },
];

export default function NewsPage() {
  return (
    <Box px={{ base: 5, md: 40 }} py={{ base: 10, md: 20 }}>
      {/* Page Heading */}
      <Heading
        size="2xl"
        mb={10}
        color="#1D63AF"
        fontWeight="bold"
        textAlign={{ base: "center", md: "left" }}
      >
        News & Insights
      </Heading>

      {/* News Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {newsItems.map((item, index) => (
          <Box
            key={index}
            p={6}
            border="1px solid #d9d9d9"
            borderRadius="lg"
            bg="white"
            _hover={{
              transform: "translateY(-6px)",
              transition: ".25s ease",
              shadow: "lg",
            }}
          >
            <VStack align="start" spacing={4}>
              {/* Title */}
              <Heading size="lg" color="#1D63AF">
                {item.title}
              </Heading>

              {/* Source */}
              <Text fontSize="sm" color="gray.500">
                Source: {item.source}
              </Text>

              {/* Summary */}
              <Text fontSize="md" color="gray.700">
                {item.summary}
              </Text>

              {/* Link */}
              <HStack pt={4}>
                <Link
                  href={item.link}
                  isExternal
                  color="#126C36"
                  fontWeight="semibold"
                  _hover={{ color: "#0e512a" }}
                >
                  Read full article <ExternalLinkIcon ml={1} />
                </Link>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
