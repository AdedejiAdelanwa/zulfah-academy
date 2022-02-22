import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/Url";

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  GridItem,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
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
  const tokenEmail = "roshbon@gmail.com";
  const tokenPassword = "Pass123@#";
  const [token, setToken] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [numOfEngineers, setNumOfEngineers] = useState("");
  const [message, setMessage] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const toast = useToast();

  function showToast(title, desc, status) {
    toast({
      title,
      description: desc,
      status,
      duration: 9000,
      isClosable: true,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsRequesting(true);
    try {
      await axios({
        method: "post",
        url: `${BaseUrl}/application/hire`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          fullname,
          email,
          company_name: companyName,
          phone: phoneNumber,
          location,
          message,
          no_of_engineers: numOfEngineers,
        },
      });
      setIsRequesting(false);
      setFullname("");
      setEmail("");
      setCompanyName("");
      setPhoneNumber("");
      setLocation("");
      setNumOfEngineers("");
      setMessage("");

      onClose();
      showToast("Successful", "We will be in touch", "success");
    } catch (error) {
      setIsRequesting(false);
      if (error.response) {
        onClose();
        showToast("Oops!", "There seems to be an issue", "error");
      }
      showToast("Oops!", "There seems to be an issue", "error");
      onClose();
    }
  }

  useEffect(() => {
    const getToken = async () => {
      try {
        const { data } = await axios({
          method: "post",
          url: `${BaseUrl}/get-token`,
          data: {
            email: tokenEmail,
            password: tokenPassword,
          },
        });
        setToken(data.token);
      } catch (error) {
        if (error.repsonse) {
          console.log(error.repsonse);
        }
        console.log(error);
      }
    };
    getToken();
  }, []);
  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems={"center"}>
          <ModalHeader>
            <span style={{ color: "#3C9A9D" }}>Talent</span> Hire Form
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody width="100%">
            <form onSubmit={handleSubmit}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                columnGap={4}
                rowGap={4}
                w="100%"
              >
                <GridItem colSpan={2}>
                  <Input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Full Name"
                    required
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name"
                    required
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    required
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <Input
                    type="text"
                    value={numOfEngineers}
                    onChange={(e) => setNumOfEngineers(e.target.value)}
                    placeholder="Number of Engineers"
                    required
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any question for us?"
                    size="sm"
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Button
                    color={"white"}
                    w="100%"
                    bg={"brand.fuscia"}
                    py="30px"
                    my="15px"
                    onClick={handleSubmit}
                  >
                    {isRequesting ? "Requesting..." : "Hire"}
                  </Button>
                </GridItem>
              </SimpleGrid>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
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
                onClick={onOpen}
              >
                Hire engineers
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
