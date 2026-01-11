"use client";

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
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
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
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
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 8, md: 10 }}
          alignItems="stretch"
        >
          {newsItems.map((item) => (
            <LinkBox
              as="article"
              key={item.title}
              role="group"
              h="100%"
              borderRadius="2xl"
              overflow="hidden"
              bg="white"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.100"
              borderTopWidth="6px"
              borderTopColor={item.accent}
              display="flex"
              flexDirection="column"
              transition="all 0.25s ease"
              _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
              _focusWithin={{
                boxShadow: "0 0 0 3px rgba(29,99,175,0.4)",
                transform: "translateY(-4px)",
              }}
            >
              <Box position="relative" overflow="hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  w="100%"
                  h={{ base: "200px", md: "210px", lg: "220px" }}
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
                  h="24"
                  bgGradient="linear(to-t, rgba(0,0,0,0.4), transparent)"
                />
              </Box>

              <VStack
                align="start"
                gap={4}
                p={{ base: 5, md: 6 }}
                flex="1"
              >
                <HStack gap={3} color="gray.600" fontWeight="semibold">
                  <Box
                    w="10px"
                    h="10px"
                    bg={item.accent}
                    borderRadius="full"
                    as="span"
                  />
                  <Text fontSize="sm" color="gray.700">
                    {item.source}
                  </Text>
                  {item.date && (
                    <>
                      <Box w="1px" h="16px" bg="gray.200" />
                      <Text fontSize="sm" fontWeight="medium" color="gray.500">
                        {item.date}
                      </Text>
                    </>
                  )}
                </HStack>

                <Heading
                  size="md"
                  color="#1D63AF"
                  lineHeight="1.3"
                  noOfLines={2}
                >
                  <LinkOverlay
                    href={item.link}
                    isExternal
                    aria-label={`Read full article: ${item.title}`}
                    rel="noreferrer noopener"
                  >
                    {item.title}
                  </LinkOverlay>
                </Heading>

                <Text
                  fontSize="sm"
                  color="gray.700"
                  lineHeight="1.6"
                  noOfLines={{ base: 3, md: 4 }}
                >
                  {item.summary}
                </Text>

                <Flex
                  pt={2}
                  w="full"
                  justify="space-between"
                  align="center"
                  color="#126C36"
                  fontWeight="semibold"
                  fontSize="sm"
                  gap={2}
                  mt="auto"
                >
                  <Text>Read full article {"\u2192"}</Text>
                  <ExternalLinkIcon />
                </Flex>
              </VStack>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
