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
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
  {
    title: "Local audio networks secure new multicultural dollars",
    source: "Inside Radio",
    date: "Jan 9, 2025",
    link: "https://www.insideradio.com/",
    summary:
      "Audio networks are packaging bilingual hosts, live events, and sponsorships to deliver measurable lift for community-first brands.",
    image: "/services/service-4.png",
    category: "Audio",
    accent: "#1D63AF",
  },
];

const signalPills = [
  { label: "Diverse-owned focus", value: "140+ publishers", accent: "#E34234" },
  { label: "Formats", value: "CTV / Digital / Audio", accent: "#126C36" },
  { label: "Regions", value: "US / CA / UK / APAC", accent: "#1D63AF" },
];

const BrandStripes = () => (
  <HStack gap={2} mb={4}>
    <Box w="32px" h="4px" bg="#E34234" borderRadius="full" />
    <Box w="32px" h="4px" bg="#126C36" borderRadius="full" />
    <Box w="32px" h="4px" bg="#1D63AF" borderRadius="full" />
  </HStack>
);

export default function NewsPage() {
  const featuredStory = newsItems[0];
  const latestStories = newsItems.slice(1);

  return (
    <Box
      bgGradient="linear(to-b, #f8fbff, white)"
      minH="100vh"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Box
          bgGradient="linear(to-r, rgba(29,99,175,0.96), rgba(18,108,54,0.96))"
          color="white"
          borderRadius="2xl"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 14 }}
          boxShadow="2xl"
          mb={{ base: 10, md: 12 }}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-br, rgba(0,0,0,0.35), rgba(0,0,0,0.18))"
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-br, rgba(227,66,52,0.35), transparent)"
          />
          <VStack align="start" gap={6} position="relative" zIndex={1}>
            <BrandStripes />
            <Badge
              colorScheme="whiteAlpha"
              bg="whiteAlpha.200"
              borderRadius="full"
              px={4}
              py={2}
              textTransform="none"
              fontWeight="semibold"
              letterSpacing="wide"
            >
              Fresh this week - Inclusive media signals
            </Badge>
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="extrabold"
              lineHeight="1.1"
            >
              Media Spectrum Newsroom
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl" opacity={0.95}>
              Curated headlines on multicultural media, brand partnerships, and
              the channels moving budgets right now.
            </Text>

            <Stack
              direction={{ base: "column", md: "row" }}
              gap={{ base: 3, md: 4 }}
              w="full"
            >
              {signalPills.map((pill) => (
                <HStack
                  key={pill.label}
                  gap={3}
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  borderRadius="xl"
                  px={4}
                  py={3}
                  minW={{ base: "full", md: "unset" }}
                >
                  <Box w="12px" h="12px" bg={pill.accent} borderRadius="full" />
                  <Box>
                    <Text fontSize="sm" color="whiteAlpha.800" fontWeight="medium">
                      {pill.label}
                    </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      {pill.value}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </Stack>
          </VStack>
        </Box>

        <Box
          bg="white"
          border="1px solid"
          borderColor="gray.100"
          borderRadius="xl"
          boxShadow="md"
          px={{ base: 3, md: 4 }}
          py={{ base: 3, md: 4 }}
          mb={{ base: 10, md: 12 }}
        >
          <HStack
            gap={6}
            overflowX="auto"
            pb={1}
          >
            {newsItems.map((item) => (
              <HStack key={`${item.title}-ticker`} gap={3} minW="260px">
                <Box w="10px" h="10px" bg={item.accent} borderRadius="full" />
                <Badge
                  bg="gray.50"
                  borderRadius="full"
                  px={3}
                  py={1}
                  textTransform="none"
                  color="gray.700"
                  fontWeight="semibold"
                >
                  {item.category}
                </Badge>
                <Text
                  fontSize="sm"
                  color="gray.700"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {item.title}
                </Text>
              </HStack>
            ))}
          </HStack>
        </Box>

        {featuredStory && (
          <LinkBox
            as="section"
            role="group"
            borderRadius="2xl"
            overflow="hidden"
            bg="white"
            boxShadow="2xl"
            border="1px solid"
            borderColor="gray.100"
            mb={{ base: 10, md: 12 }}
            _hover={{ boxShadow: "3xl" }}
            _focusWithin={{ boxShadow: "0 0 0 3px rgba(29,99,175,0.35)" }}
          >
            <Flex direction={{ base: "column", md: "row" }}>
              <VStack
                align="start"
                gap={5}
                p={{ base: 6, md: 8 }}
                flex="1"
              >
                <HStack gap={3}>
                  <Badge
                    bg={featuredStory.accent}
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    textTransform="none"
                  >
                    Spotlight
                  </Badge>
                  <Badge
                    bg="gray.100"
                    color="gray.800"
                    px={3}
                    py={1}
                    borderRadius="full"
                    textTransform="none"
                  >
                    {featuredStory.category}
                  </Badge>
                </HStack>

                <Heading size={{ base: "lg", md: "xl" }} color="#0E3A70" lineHeight="1.2">
                  <LinkOverlay
                    href={featuredStory.link}
                    aria-label={`Read full article: ${featuredStory.title}`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {featuredStory.title}
                  </LinkOverlay>
                </Heading>

                <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="1.6">
                  {featuredStory.summary}
                </Text>

                <HStack gap={4} color="gray.600" fontWeight="semibold">
                  <Text>{featuredStory.source}</Text>
                  {featuredStory.date && <Box w="1px" h="18px" bg="gray.200" />}
                  <Text fontWeight="medium" color="gray.500">
                    {featuredStory.date}
                  </Text>
                </HStack>

                <Flex
                  align="center"
                  gap={2}
                  color={featuredStory.accent}
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  <Text>Open story</Text>
                  <ExternalLinkIcon />
                </Flex>
              </VStack>

              <Box position="relative" w={{ base: "full", md: "45%" }} minH={{ base: "240px", md: "auto" }}>
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.4s ease"
                  _groupHover={{ transform: "scale(1.03)" }}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, rgba(0,0,0,0.35), transparent)"
                />
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg="blackAlpha.700"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  textTransform="none"
                  fontWeight="semibold"
                >
                  Featured read
                </Badge>
              </Box>
            </Flex>
          </LinkBox>
        )}

        <VStack
          align="start"
          gap={2}
          mb={{ base: 6, md: 8 }}
          px={{ base: 1, md: 2 }}
        >
          <BrandStripes />
          <Heading size={{ base: "xl", md: "2xl" }} color="#1D63AF">
            Latest coverage
          </Heading>
          <Text color="gray.600" maxW="3xl">
            Stories shaping inclusive media, fresh every week. Save, share, or open
            the ones that matter to your brief.
          </Text>
        </VStack>

        <Wrap gap={3} mb={{ base: 6, md: 8 }}>
          {[
            "CTV + Streaming",
            "Audio",
            "Strategy",
            "Partnerships",
            "Inclusive media",
          ].map((tag) => (
            <WrapItem key={tag}>
              <Badge
                bg="gray.100"
                color="gray.700"
                borderRadius="full"
                px={3}
                py={2}
                textTransform="none"
                border="1px solid"
                borderColor="gray.200"
              >
                {tag}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 8, md: 10 }}
          alignItems="stretch"
        >
          {latestStories.map((item) => (
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
              display="flex"
              flexDirection="column"
              transition="all 0.25s ease"
              _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
              _focusWithin={{
                boxShadow: "0 0 0 3px rgba(29,99,175,0.35)",
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
                <Badge
                  position="absolute"
                  top={4}
                  left={4}
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
                  fontSize="sm"
                  color="gray.700"
                  lineHeight="1.6"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                  }}
                >
                  {item.summary}
                </Text>

                <Box borderTop="1px solid" borderColor="gray.100" w="full" />

                <Flex
                  pt={1}
                  w="full"
                  justify="space-between"
                  align="center"
                  color="#126C36"
                  fontWeight="semibold"
                  fontSize="sm"
                  gap={2}
                  mt="auto"
                >
                  <HStack gap={2} color="gray.600">
                    <Box w="8px" h="8px" bg={item.accent} borderRadius="full" />
                    <Text fontWeight="semibold">Read full article</Text>
                  </HStack>
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
