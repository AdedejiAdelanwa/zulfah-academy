import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  //Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import MainNavigation from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ApplicationCTA } from "../components/ApplicationCTA";
import HireHero1 from "../assets/hire-hero1.png";
import HireHero2 from "../assets/hire-hero2.png";
import WhiteHair from "../assets/white-hair-guy.png";
import Aneezah from "../assets/aneezah.png";
import Sancho from "../assets/sancho.png";
import { HireFAQs } from "../components/HireFAQs";
import { AiFillCheckCircle } from "react-icons/ai";
import { OneStar } from "../assets/icons";
// import { Carousel } from "react-responsive-carousel";
import Partner1 from "../assets/partner1.png";
import Partner2 from "../assets/partner2.png";
import { RatingStars } from "../assets/icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const reviews = [
  <HStack
    w={{ base: "350px", lg: "466px" }}
    h={"200px"}
    justifyContent={"space-between"}
    borderRadius={4}
    bg={"brand.lightpink"}
    p={4}
  >
    <img
      src={Partner1}
      style={{ height: "165px", width: "120px" }}
      alt="Partner 1"
      display={"block"}
    />
    <VStack alignItems={"left"} w="266px" textAlign="left" spacing={4}>
      <Icon as={RatingStars} />
      <Heading fontSize={"18px"}>Best Learning Platform</Heading>
      <Text fontSize={"14px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna
        sapien
      </Text>
      <Stack spacing={0}>
        <Heading fontSize={"12px"}>Tobi Foluso</Heading>
        <Text fontSize={"10px"}>Vp, Adasi Inc.</Text>
      </Stack>
    </VStack>
  </HStack>,
  <HStack
    w={{ base: "350px", lg: "466px" }}
    h={"200px"}
    justifyContent={"space-between"}
    borderRadius={4}
    bg={"brand.lightpink"}
    p={4}
  >
    <img
      src={Partner2}
      style={{ height: "165px", width: "120px" }}
      alt="Partner 1"
      display={"block"}
    />
    <VStack alignItems={"left"} w="266px" textAlign="left" spacing={4}>
      <Icon as={RatingStars} />
      <Heading fontSize={"18px"}>Best Learning Platform</Heading>
      <Text fontSize={"14px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna
        sapien
      </Text>
      <Stack spacing={0}>
        <Heading fontSize={"12px"}>Tobi Foluso</Heading>
        <Text fontSize={"10px"}>Vp, Adasi Inc.</Text>
      </Stack>
    </VStack>
  </HStack>,
  <HStack
    w={{ base: "350px", lg: "466px" }}
    h={"200px"}
    justifyContent={"space-between"}
    borderRadius={4}
    bg={"brand.lightpink"}
    p={4}
  >
    <img
      src={Partner1}
      style={{ height: "165px", width: "120px" }}
      alt="Partner 1"
      display={"block"}
    />
    <VStack alignItems={"left"} w="266px" textAlign="left" spacing={4}>
      <Icon as={RatingStars} />
      <Heading fontSize={"18px"}>Best Learning Platform</Heading>
      <Text fontSize={"14px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna
        sapien
      </Text>
      <Stack spacing={0}>
        <Heading fontSize={"12px"}>Tobi Foluso</Heading>
        <Text fontSize={"10px"}>Vp, Adasi Inc.</Text>
      </Stack>
    </VStack>
  </HStack>,
];

export const Hire = () => {
  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Box paddingTop={{ base: "25px", lg: "none" }} bg={"white"}>
        <Stack
          pos={"relative"}
          h={{ base: "auto", lg: "75vh" }}
          direction={{ base: "column", md: "row" }}
          bg={"brand.white"}
          mb={{ base: "0px", lg: "40px" }}
        >
          <Flex p={8} flex={1} alignItems={"center"} justifyContent={"center"}>
            <Stack
              alignItems={{ base: "center", lg: "left" }}
              spacing={8}
              maxW={{ base: "95%", lg: "90%" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                color={"#000000"}
                fontSize={{ base: "36px", lg: "64px" }}
              >
                Build your <span style={{ color: "#3C9A9D" }}>workforce</span>{" "}
                with non-traditional talent
              </Heading>
              <Text fontSize={"16px"} color={"#000000"}>
                You already know the cost of having unfilled critical positions
                in your business, not to mention the huge investment of
                resources required for recruiting, hiring and training. You
                might not know how Bloom Institute of Technology can help.
              </Text>
              <Button
                variant={"solid"}
                bg={"brand.gold"}
                w="150px"
                size={"lg"}
                alignSelf={{ lg: "flex-start" }}
              >
                <ReactRouterLink to="/about">Hire engineers</ReactRouterLink>
              </Button>
            </Stack>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            flex={1}
            justifyContent={"center"}
          >
            <div
              style={{
                height: "399px",
                width: "246px",
                alignSelf: "center",
                marginRight: "30px",
              }}
            >
              <img
                src={HireHero1}
                alt="demo"
                style={{
                  objectFit: "cover",
                  display: "block",
                  maxWidth: "100%",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div
              style={{ height: "399px", width: "246px", alignSelf: "flex-end" }}
            >
              <img
                src={HireHero2}
                alt="demo"
                style={{
                  objectFit: "cover",
                  display: "block",
                  maxWidth: "100%",
                  borderRadius: "15px",
                }}
              />
            </div>
          </Flex>
        </Stack>
        <Stack
          alignItems={"center"}
          mt={{ base: "40px", lg: "100px" }}
          mb={{ base: "0px", lg: "150px" }}
          spacing={{ base: "8", lg: "24" }}
        >
          <Stack alignItems={"center"}>
            <Heading>Find the right hires—fast.</Heading>
            <Text
              textAlign="center"
              fontSize={"20px"}
              w={{ base: "70%", lg: "85%" }}
              color={"#7B7C7C"}
            >
              Zulfah can transform the hiring process so you can continue to
              grow your business.
            </Text>
          </Stack>

          <Stack
            pos={"relative"}
            h={{ base: "auto", lg: "65vh" }}
            direction={{ base: "column", md: "row" }}
            bg={"brand.white"}
            mb={{ base: "0px", lg: "40px" }}
          >
            <Flex
              p={8}
              flex={1}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack
                alignItems={{ base: "center", lg: "left" }}
                spacing={8}
                maxW={{ base: "95%", lg: "90%" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                <List
                  spacing={12}
                  w={{ base: "90%", lg: "70%" }}
                  textAlign="left"
                  fontSize={{ base: "18px", lg: "24px" }}
                >
                  <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="brand.green" />
                    Tap into a pipeline of trained, ready-to-work professionals
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="brand.green" />
                    Fill openings during a hiring surge with BloomTech-hosted
                    hiring days
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiFillCheckCircle} color="brand.green" />
                    Choose from candidates who graduate every month, independent
                    of traditional graduation schedules
                  </ListItem>
                </List>
              </Stack>
            </Flex>
            <Flex
              display={{ base: "none", lg: "flex" }}
              flex={1}
              justifyContent={"fflex-start"}
              alignItems={"center"}
            >
              <div
                style={{
                  position: "relative",
                  height: "555px",
                  width: "400px",
                  alignSelf: "center",

                  marginLeft: "30px",
                }}
              >
                <HStack
                  pos={"absolute"}
                  top={"5%"}
                  left={"-25%"}
                  w="300px"
                  py={"10px"}
                  px={"15px"}
                  bg="white"
                  borderRadius={"100px"}
                  boxShadow={"xl"}
                >
                  <Image boxSize={"60px"} src={Aneezah} alt="Girl" />
                  <Stack spacing={0}>
                    <Text fontSize={"18px"}>Aneezah Buju</Text>
                    <Flex alignItems={"center"} spacing={0}>
                      <Icon as={OneStar} />
                      <Text fontSize={"12px"}>5.0</Text>
                    </Flex>
                  </Stack>
                </HStack>
                <HStack
                  pos={"absolute"}
                  bottom={"22%"}
                  right={"-43%"}
                  w="300px"
                  py={"10px"}
                  px={"15px"}
                  bg="white"
                  borderRadius={"100px"}
                  boxShadow={"xl"}
                >
                  <Image boxSize={"60px"} src={Aneezah} alt="Girl" />
                  <Stack spacing={0}>
                    <Text fontSize={"18px"}>Aneezah Buju</Text>
                    <Flex alignItems={"center"} spacing={0}>
                      <Icon as={OneStar} />
                      <Text fontSize={"12px"}>5.0</Text>
                    </Flex>
                  </Stack>
                </HStack>
                <HStack
                  pos={"absolute"}
                  bottom={"15%"}
                  left={"-25%"}
                  w="300px"
                  py={"10px"}
                  px={"15px"}
                  bg="white"
                  borderRadius={"100px"}
                  boxShadow={"xl"}
                >
                  <Image boxSize={"60px"} src={Sancho} alt="Girl" />
                  <Stack spacing={0}>
                    <Text fontSize={"18px"}>Pulisic Sancho</Text>
                    <Flex alignItems={"center"} spacing={0}>
                      <Icon as={OneStar} />
                      <Text fontSize={"12px"}>5.0</Text>
                    </Flex>
                  </Stack>
                </HStack>
                <img
                  src={WhiteHair}
                  alt="demo"
                  style={{
                    objectFit: "cover",
                    display: "block",
                    maxWidth: "100%",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </Flex>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} spacing={12}>
          <Stack
            spacing={8}
            width={{ base: "80%", lg: "40%" }}
            textAlign="center"
          >
            <Heading>What our partners say about us</Heading>
            <Text>
              Don't just take our word for it. Zulfah learners and graduates
              share their success stories of training, getting jobs and making
              more money.
            </Text>
          </Stack>
          <Stack width="80%">
            <AliceCarousel
              mouseTracking
              items={reviews}
              responsive={responsive}
              controlsStrategy="alternate"
              disableButtonsControls={true}
            />
          </Stack>
        </Stack>
        <HireFAQs />
        <ApplicationCTA />
      </Box>
      <Footer />
    </Box>
  );
};
