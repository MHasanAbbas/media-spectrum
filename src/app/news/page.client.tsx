"use client";

import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const newsItems = [
  {
    title: "Agencies double down on diaspora storytelling",
    source: "Campaign",
    date: "Feb 18, 2025",
    link: "https://www.campaignlive.com/",
    summary:
      "Holding groups cite diaspora-led creative as a growth lever, pairing local voices with global reach across digital and CTV.",
    image: "/common/imgs/diversity-rep.png",
    category: "Strategy",
    accent: "#126C36",
  },
  {
    title: "CTV spend on diaspora audiences climbs",
    source: "AdExchanger",
    date: "Jan 29, 2025",
    link: "https://www.adexchanger.com/",
    summary:
      "Connected TV inventory from diverse-owned publishers is seeing double-digit budget shifts as brands look for incremental reach.",
    image: "/services/service-3.png",
    category: "CTV + Streaming",
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
    <Box bg="white" minH="100vh" py={{ base: 10, md: 16 }}>
      <Container maxW="7xl">
        <Box px={{ base: 4, md: "7em" }} mb={10}>
          <Heading
            size={{ base: "3xl", md: "5xl" }}
            color="#1D63AF"
            fontWeight="extrabold"
            mb={6}
          >
            Media Spectrum Newsroom
            <Box mt={5}>
              <BrandStripes />
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="medium"
            color="gray.600"
            maxW="3xl"
          >
            Curated headlines on multicultural media, brand partnerships, and
            the channels moving budgets right now.
          </Text>
        </Box>

        <Box px={{ base: 4, md: "7em" }} mb={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {newsItems.map((item, index) => (
              <LinkBox
                as="article"
                key={item.title}
                role="group"
                borderRadius="xl"
                overflow="hidden"
                bg="white"
                boxShadow="lg"
                borderTop="5px solid"
                borderTopColor={item.accent}
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s"
                _hover={{ boxShadow: "2xl", transform: "translateY(-4px)" }}
                display="flex"
                flexDirection="column"
                height="full"
              >
                <Box position="relative" overflow="hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    w="100%"
                    h={{ base: "180px", md: "200px" }}
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Badge
                    position="absolute"
                    top={3}
                    left={3}
                    bg={item.accent}
                    color="white"
                    fontSize="xs"
                    borderRadius="full"
                    px={3}
                    py={1}
                    textTransform="none"
                    fontWeight="semibold"
                  >
                    {item.category}
                  </Badge>
                </Box>

                <VStack
                  align="start"
                  gap={4}
                  p={5}
                  flex="1"
                >
                  <HStack gap={3} fontSize="sm" color="gray.600">
                    <Text fontWeight="medium" color="gray.700">
                      {item.source}
                    </Text>
                    {item.date && (
                      <>
                        <Box w="1px" h="14px" bg="gray.300" />
                        <Text fontWeight="medium" color="gray.500">
                          {item.date}
                        </Text>
                      </>
                    )}
                  </HStack>

                  <Heading
                    as="h3"
                    size="md"
                    color="#1D63AF"
                    lineHeight="1.3"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                    }}
                  >
                    <LinkOverlay
                      href={item.link}
                      aria-label={`Read full article: ${item.title}`}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {item.title}
                    </LinkOverlay>
                  </Heading>

                  <Text
                    color="gray.600"
                    lineHeight="tall"
                    fontSize="sm"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                    }}
                  >
                    {item.summary}
                  </Text>
                </VStack>
              </LinkBox>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}