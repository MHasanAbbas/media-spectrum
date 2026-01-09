"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
  HStack,
  Image,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const newsItems = [
  {
    title: "Diverse media investment trends in 2025",
    source: "Ad Age",
    date: "Mar 12, 2025",
    link: "https://adage.com/article/media/diverse-media-investment-trends-2024-and-2025/2604991/",
    summary:
      "Ad Age highlights how evolving budgets, language choices, and economic policies are reshaping investment in diverse-owned media across global markets.",
    image: "/common/imgs/diversity.png",
    category: "Industry outlook",
    accent: "#1D63AF",
  },
  {
    title:
      "Raptive and BOMESI partner to unlock investment in diverse-owned media",
    source: "Raptive Newsroom",
    date: "Apr 25, 2024",
    link: "https://raptive.com/newsroom/raptive-and-bomesi-partner-to-unlock-large-scale-investment-in-diverse-owned-media/",
    summary:
      "The partnership creates a verified, curated marketplace that makes it easier for advertisers to fund diverse-owned publishers at scale.",
    image: "/services/service-2.png",
    category: "Partnerships",
    accent: "#E34234",
  },
];

const BrandStripes = () => (
  <HStack gap={2} mb={4}>
    <Box w="32px" h="4px" bg="#E34234" borderRadius="full" />
    <Box w="32px" h="4px" bg="#126C36" borderRadius="full" />
    <Box w="32px" h="4px" bg="#1D63AF" borderRadius="full" />
  </HStack>
);

export default function NewsPage() {
  return (
    <Box
      bgGradient="linear(to-b, #f8fbff, white)"
      minH="100vh"
      py={{ base: 10, md: 16 }}
    >
      <Container maxW="7xl">
        <Box
          bgGradient="linear(to-r, rgba(29,99,175,0.92), rgba(18,108,54,0.92))"
          color="white"
          borderRadius="2xl"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 14 }}
          boxShadow="xl"
          mb={{ base: 10, md: 12 }}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-br, rgba(227,66,52,0.3), transparent)"
          />
          <VStack align="start" gap={4} position="relative" zIndex={1}>
            <BrandStripes />
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="extrabold"
              lineHeight="1.15"
            >
              News & Insights
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl" opacity={0.95}>
              Fresh, curated headlines on multicultural and inclusive media -
              keeping you aligned with the conversations shaping the spectrum.
            </Text>
          </VStack>
        </Box>

        <VStack
          align="start"
          gap={2}
          mb={{ base: 6, md: 8 }}
          px={{ base: 1, md: 2 }}
        >
          <BrandStripes />
          <Heading size={{ base: "xl", md: "2xl" }} color="#1D63AF">
            Latest Headlines
          </Heading>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 8 }}
          justifyItems="center"
        >
          {newsItems.map((item) => (
            <Box
              key={item.title}
              role="group"
              borderRadius="2xl"
              overflow="hidden"
              bg="white"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.25s ease"
              maxW="520px"
              w="100%"
              _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
            >
              <Box position="relative" overflow="hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  w="100%"
                  h={{ base: "190px", md: "210px" }}
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _groupHover={{ transform: "scale(1.05)" }}
                />
                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  display="inline-flex"
                  gap={2}
                  alignItems="center"
                >
                  <Badge
                    bg="blackAlpha.700"
                    color="white"
                    fontSize="xs"
                    borderRadius="full"
                    px={3}
                    py={1}
                    textTransform="none"
                  >
                    {item.category}
                  </Badge>
                </Box>
                <Box
                  position="absolute"
                  insetX={0}
                  bottom={0}
                  h="28"
                  bgGradient="linear(to-t, rgba(0,0,0,0.45), transparent)"
                />
              </Box>

              <VStack align="start" gap={4} p={{ base: 6, md: 6 }}>
                <HStack gap={3} color="gray.600" fontWeight="semibold">
                  <Box
                    w="10px"
                    h="10px"
                    bg={item.accent}
                    borderRadius="full"
                    as="span"
                  />
                  <Text>{item.source}</Text>
                  {item.date && (
                    <>
                      <Box w="1px" h="16px" bg="gray.200" />
                      <Text fontSize="sm" fontWeight="medium" color="gray.500">
                        {item.date}
                      </Text>
                    </>
                  )}
                </HStack>

                <Heading size="lg" color="#1D63AF" lineHeight="1.25">
                  {item.title}
                </Heading>

                <Text fontSize="md" color="gray.700" lineHeight="1.6">
                  {item.summary}
                </Text>

                <Flex pt={2} w="full" justify="space-between" align="center">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#126C36"
                    fontWeight="semibold"
                    fontSize="md"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "#0e512a" }}
                  >
                    Read full article <ExternalLinkIcon />
                  </Link>
                </Flex>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
