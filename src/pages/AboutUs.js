import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/Navigation";
import { Link as ReactRouterLink } from "react-router-dom";
import LadyWithTab from "../assets/ladywithpad.png";
import LadyWithTabLarge from "../assets/ladywithLarge.png";
import MemberA from "../assets/memberA.png";
import MemberB from "../assets/memberB.png";
import MemberC from "../assets/memberC.png";
import { Hourglass, Tuition } from "../assets/icons";
import { BsArrowRight } from "react-icons/bs";

export default function AboutUs() {
  const team = [
    { name: "Abdurasheed Ajao", img: MemberA },
    { name: "Abdurasheed Ajao", img: MemberB },
    { name: "Abdurasheed Ajao", img: MemberC },
  ];
  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Box paddingTop={{ base: "45px", lg: "none" }} bg={"white"}>
        <Stack
          pos={"relative"}
          paddingTop={{ base: "40px", lg: "none" }}
          alignItems={"center"}
          justifyContent={{ base: "flex-start", lg: "center" }}
          bg={"brand.lightpink"}
          h={"75vh"}
          textAlign={"center"}
          spacing={{ base: 4, lg: 8 }}
        >
          <Heading
            w={{ base: "80%", lg: "395px" }}
            fontSize={{ base: "48px", lg: "64px" }}
          >
            Software Development
          </Heading>
          <Text w={{ base: "90%", lg: "800px" }}>
            Begin your career in software development by starting with the
            foundations of software engineering. Afterward, you would choose a
            specialization in either Back-end Development or Front-end
            Development. By the end of the program you would have a job ready
            portfolio and learn the art of effective collaboration to solve real
            world problems.
          </Text>
          <Button variant={"solid"} bg={"brand.gold"} w="150px" size={"lg"}>
            <ReactRouterLink to="/about">Get started</ReactRouterLink>
          </Button>
          <Box
            position={"absolute"}
            bottom={"-40%"}
            display={{ base: "block", lg: "none" }}
            boxSize={"341px"}
            backgroundImage={LadyWithTab}
            backgroundSize={"contain"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            borderRadius={{ base: "15px", lg: "none" }}
            zIndex={10}
          ></Box>
        </Stack>
        <Stack
          w={"100%"}
          alignItems={"center"}
          paddingTop={{ base: "300px", lg: "90px" }}
        >
          <HStack
            w={"80%"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Stack
              w={"353px"}
              display={{ base: "none", lg: "flex" }}
              spacing={8}
              p={4}
              borderWidth={"thin"}
              borderColor={"brand.lightgrey"}
              borderRadius={4}
            >
              <Heading
                fontSize={"16px"}
                py={4}
                color={"brand.lightertextgrey"}
                borderBottomWidth={"1px"}
                borderBottomColor={"brand.lightgrey"}
              >
                SOFTWARE ENGINEERING TRAINING
              </Heading>
              <List spacing={4}>
                <ListItem>Overview</ListItem>
                <ListItem>Curriculum</ListItem>
                <ListItem>Meet the team</ListItem>
                <ListItem>Payment & Sponsorship</ListItem>
                <ListItem>Next application</ListItem>
              </List>
              <Button
                variant={"solid"}
                bg={"brand.fuscia"}
                w="150px"
                color={"white"}
                size={"lg"}
                borderRadius={4}
              >
                <ReactRouterLink to="/application">Enrol now</ReactRouterLink>
              </Button>
            </Stack>
            <Stack
              w={{ base: "100%", lg: "630px" }}
              spacing={8}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading fontSize={{ base: "36px", lg: "48px" }}>
                Overview of Zulfah Software Engineering Training
              </Heading>
              <Text lineHeight={"2"}>
                Backend web developers are responsible for designing, building,
                and maintaining a scalable “behind-the-scenes” infrastructure to
                support the user interfaces and user experiences built by
                frontend developers. This skill set is one of the most
                sought-after by major tech employers. We frequently have
                conversations with tech companies like Apple, Google, and
                Microsoft that have hired our graduates for full stack and
                frontend developer roles in the past, and they all say the same
                thing: "We need more engineers with back end web development
                skills."
              </Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack
          w={"100%"}
          alignItems={"center"}
          paddingTop={{ base: "90px", lg: "90px" }}
          bg={"whiteAlpha.100"}
        >
          <HStack w={"80%"} justifyContent={"space-between"}>
            <Box
              display={{ base: "none", lg: "block" }}
              boxSize={"549px"}
              backgroundImage={LadyWithTabLarge}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              backgroundRepeat={"no-repeat"}
            ></Box>
            <Stack
              justifyContent={{ base: "center", lg: "left" }}
              w={{ base: "100%", lg: "420px" }}
            >
              <Heading fontSize={{ base: "36px", lg: "48px" }}>
                What you will learn
              </Heading>
              <VStack>
                <Stack
                  h={"auto"}
                  borderLeftWidth={"4px"}
                  borderLeftStyle={"solid"}
                  borderLeftColor={"brand.fuscia"}
                  p={{ base: 4, lg: 8 }}
                  spacing={4}
                  boxShadow={"md"}
                  borderTopRightRadius={"12px"}
                  borderBottomRightRadius={"12px"}
                >
                  <Heading fontSize={"25px"}>Front-end development</Heading>
                  <Text fontSize={"16px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    semper magna sapien
                  </Text>
                </Stack>
                <Stack
                  h={"150px"}
                  borderLeftWidth={"4px"}
                  borderLeftStyle={"solid"}
                  borderLeftColor={"brand.gold"}
                  p={{ base: 4, lg: 8 }}
                  spacing={4}
                  boxShadow={"md"}
                  borderTopRightRadius={"12px"}
                  borderBottomRightRadius={"12px"}
                >
                  <Heading fontSize={"25px"}>Back-end development</Heading>
                  <Text fontSize={"16px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    semper magna sapien
                  </Text>
                </Stack>
                <Stack
                  h={"150px"}
                  borderLeftWidth={"4px"}
                  borderLeftStyle={"solid"}
                  borderLeftColor={"brand.green"}
                  p={{ base: 4, lg: 8 }}
                  spacing={4}
                  boxShadow={"md"}
                  borderTopRightRadius={"12px"}
                  borderBottomRightRadius={"12px"}
                >
                  <Heading fontSize={"25px"}>DevOps</Heading>
                  <Text fontSize={"16px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    semper magna sapien
                  </Text>
                </Stack>
              </VStack>
            </Stack>
          </HStack>
        </Stack>
        <HStack
          w={"100%"}
          paddingTop={{ base: "100px", lg: "90px" }}
          justifyContent={"center"}
          bg={"whiteAlpha.100"}
        >
          <Box
            w={"80%"}
            // h={{ base: "545", lg: "545px" }}
            borderRadius={"4px"}
            overflow={"hidden"}
          >
            <AspectRatio maxW="100%" ratio={{ base: 0.9, lg: 2.2 }}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </HStack>
        <Stack
          w={"100%"}
          alignItems={"center"}
          paddingTop={{ base: "90px", lg: "90px" }}
          bg={"whiteAlpha.100"}
        >
          <Heading w={"80%"} textAlign={{ base: "left", lg: "center" }}>
            Meet the team
          </Heading>
          <Flex
            direction={{ base: "column", lg: "row" }}
            width={{ base: "80%", lg: "75%" }}
            justifyContent={"space-around"}
          >
            {team.map((member) => (
              <Stack
                key={member.img}
                spacing={{ base: 4, lg: 8 }}
                marginBottom={{ base: 9, lg: 0 }}
              >
                <Box
                  boxSize={"287px"}
                  backgroundImage={member.img}
                  backgroundSize={"contain"}
                  backgroundPosition={"center"}
                  backgroundRepeat={"no-repeat"}
                  borderRadius={"4px"}
                ></Box>
                <Stack spacing={2}>
                  <Stack spacing={0}>
                    <Heading fontSize={"18px"}>{member.name}</Heading>
                    <Text fontSize={"12px"}>Chief Technical Officer</Text>
                  </Stack>
                  <Flex>
                    <Link href="https://chakra-ui.com" isExternal>
                      <Icon
                        as={AiFillLinkedin}
                        w={4}
                        h={4}
                        color={"brand.lightertextgrey"}
                      />
                    </Link>
                    <Link href="https://chakra-ui.com" isExternal>
                      <Icon
                        as={AiFillFacebook}
                        w={4}
                        h={4}
                        color={"brand.lightertextgrey"}
                      />
                    </Link>
                  </Flex>
                </Stack>
              </Stack>
            ))}
          </Flex>
        </Stack>
        <Stack w={"100%"} alignItems={{ base: "center", lg: "flex-start" }}>
          <Flex
            w={"85%"}
            direction={{ base: "column", lg: "row" }}
            justifyContent={{ base: "space-around", lg: "space-between" }}
            bg={"white"}
            mt={{ base: "50px", lg: "100px" }}
            mb={{ base: "50px", lg: "100px" }}
          >
            <Stack
              w={{ base: "350px", lg: "530px" }}
              h={{ base: "auto", lg: "541px" }}
              alignItems={"flex-end"}
              justifyContent={"space-around"}
              bg={"brand.deepgrey"}
              borderTopLeftRadius={{ base: "15px", lg: "0" }}
              borderBottomLeftRadius={{ base: "15px", lg: "0" }}
              borderTopRightRadius={"8px"}
              borderBottomRightRadius={"8px"}
              py={{ base: "60px", lg: "40px" }}
              spacing={4}
            >
              <Flex
                width={"350px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex
                  py={8}
                  width={{ base: "90px", lg: "114px" }}
                  h={{ base: "90px", lg: "114px" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  bg={"white"}
                >
                  <Icon as={Tuition} width={"57px"} h={"57px"} />
                </Flex>
                <Stack color={"white"} w={{ base: "40%", lg: "60%" }}>
                  <Heading>250,000</Heading>
                  <Text>Tuition Fee</Text>
                </Stack>
              </Flex>
              <Flex
                width={"350px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex
                  py={8}
                  width={{ base: "90px", lg: "114px" }}
                  h={{ base: "90px", lg: "114px" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  bg={"white"}
                >
                  <Icon as={Hourglass} width={"57px"} h={"57px"} />
                </Flex>
                <Stack color={"white"} w={{ base: "40%", lg: "60%" }}>
                  <Heading>265</Heading>
                  <Text>Days</Text>
                </Stack>
              </Flex>
            </Stack>
            <Stack
              w={{ base: "100%", lg: "541px" }}
              mt={{ base: "50px", lg: "none" }}
            >
              <Heading py={"15px"}>Financing Options</Heading>
              <Tabs variant="unstyled">
                <TabList>
                  <Tab
                    color="brand.deepgrey"
                    bg="brand.lightpink"
                    _focus={{ boxShadow: "none" }}
                    _selected={{
                      color: "brand.lightpink",
                      bg: "brand.deepgrey",
                    }}
                    borderWidth={"1px"}
                    borderStyle={"solid"}
                    borderColor={"brand.deepgrey"}
                    borderTopLeftRadius={4}
                    borderBottomLeftRadius={4}
                    py="10px"
                    px="15px"
                  >
                    Self Payment Plan
                  </Tab>
                  <Tab
                    color="brand.deepgrey"
                    bg="brand.lightpink"
                    _focus={{ boxShadow: "none" }}
                    _selected={{
                      color: "brand.lightpink",
                      bg: "brand.deepgrey",
                    }}
                    borderWidth={"1px"}
                    borderStyle={"solid"}
                    borderColor={"brand.deepgrey"}
                    borderTopRightRadius={4}
                    py="10px"
                    px="15px"
                  >
                    Financial support
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel px={0} py={8}>
                    <Text mb={"40px"}>
                      Unlike other courses who tuck away their prices, we are
                      totally transparent with our online Bootcamp pricing and
                      take pride in being accessible and affordable.Unlike other
                      courses who tuck away their prices, we are totally
                      transparent with our online Bootcamp pricing and take
                      pride in being accessible and affordable.
                    </Text>
                    <ReactRouterLink to="/application">
                      <Flex
                        w={"100%"}
                        alignItems={"center"}
                        fontSize={"18px"}
                        color={"brand.fuscia"}
                        fontWeight={"bold"}
                      >
                        <Text mr={2}>Enroll now</Text>{" "}
                        <BsArrowRight size={"20px"} />
                      </Flex>
                    </ReactRouterLink>
                  </TabPanel>
                  <TabPanel px={0} py={8}>
                    <Text mb={"40px"}>
                      Backend web developers are responsible for designing,
                      building, and maintaining a scalable “behind-the-scenes”
                      infrastructure to support the user interfaces and user
                      experiences built by frontend developers.This skill set is
                      one of the most sought-after by major tech employers.
                    </Text>
                    <ReactRouterLink to="/application">
                      <Flex
                        w={"100%"}
                        alignItems={"center"}
                        fontSize={"18px"}
                        color={"brand.fuscia"}
                        fontWeight={"bold"}
                      >
                        <Text mr={2}>Enroll now</Text>{" "}
                        <BsArrowRight size={"20px"} />
                      </Flex>
                    </ReactRouterLink>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </Flex>
        </Stack>
        <Stack w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Heading py={"15px"}>FAQs</Heading>
          <Tabs variant="unstyled" w={{ base: "80%", lg: "70%" }}>
            <TabList justifyContent={"center"}>
              <Tab
                color="brand.deepgrey"
                bg="brand.lightpink"
                _focus={{ boxShadow: "none" }}
                _selected={{
                  color: "brand.lightpink",
                  bg: "brand.deepgrey",
                }}
                borderWidth={"1px"}
                borderStyle={"solid"}
                borderColor={"brand.deepgrey"}
                borderTopLeftRadius={4}
                borderBottomLeftRadius={4}
                py={{ base: "5px", lg: "10px" }}
                px={{ base: "5px", lg: "15px" }}
              >
                About the process
              </Tab>
              <Tab
                color="brand.deepgrey"
                bg="brand.lightpink"
                _focus={{ boxShadow: "none" }}
                _selected={{
                  color: "brand.lightpink",
                  bg: "brand.deepgrey",
                }}
                borderWidth={"1px"}
                borderStyle={"solid"}
                borderColor={"brand.deepgrey"}
                borderTopRightRadius={4}
              >
                About the program
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0} py={8}>
                <Accordion allowToggle>
                  <AccordionItem
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    borderBottomWidth={1}
                    borderRadius={8}
                    py={{ base: "10px", lg: "15px" }}
                    px={{ base: "15px", lg: "30px" }}
                    marginBottom={"10px"}
                  >
                    <h2>
                      <AccordionButton
                        _focus={{ boxShadow: "none" }}
                        _expanded={{ color: "brand.fuscia" }}
                      >
                        <Box flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    borderBottomWidth={1}
                    borderRadius={8}
                    py={{ base: "10px", lg: "15px" }}
                    px={{ base: "15px", lg: "30px" }}
                    marginBottom={"10px"}
                  >
                    <h2>
                      <AccordionButton
                        _focus={{ boxShadow: "none" }}
                        _expanded={{ color: "brand.fuscia" }}
                      >
                        <Box flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel px={0} py={8}>
                <Accordion allowToggle>
                  <AccordionItem
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    borderBottomWidth={1}
                    borderRadius={8}
                    py={{ base: "10px", lg: "15px" }}
                    px={{ base: "15px", lg: "30px" }}
                    marginBottom={"10px"}
                  >
                    <h2>
                      <AccordionButton
                        _focus={{ boxShadow: "none" }}
                        _expanded={{ color: "brand.fuscia" }}
                      >
                        <Box flex="1" textAlign="left">
                          Section 3 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    borderBottomWidth={1}
                    borderRadius={8}
                    py={{ base: "10px", lg: "15px" }}
                    px={{ base: "15px", lg: "30px" }}
                    marginBottom={"10px"}
                  >
                    <h2>
                      <AccordionButton
                        _focus={{ boxShadow: "none" }}
                        _expanded={{ color: "brand.fuscia" }}
                      >
                        <Box flex="1" textAlign="left">
                          Section 4 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Stack w={"100%"} py={"50px"} alignItems={"center"}>
          <Stack
            pos={"relative"}
            w={{ base: "90%", lg: "80%" }}
            h={{ base: "470px", lg: "370px" }}
            justifyContent={{ base: "space-around", lg: "center" }}
            alignItems={"center"}
            color={"white"}
            textAlign={"center"}
            bg={"brand.deepgrey"}
            borderRadius={{ base: "15px", lg: "4px" }}
            spacing={{ base: 4, lg: 8 }}
            overflow={"hidden"}
          >
            <Box
              pos={"absolute"}
              top={0}
              left={0}
              display={{ base: "none", lg: "block" }}
              bg={"brand.gold"}
              boxSize={"100px"}
              style={{ clipPath: "polygon(0 0, 100% 0%,  0 100%)" }}
            ></Box>
            <Box
              pos={"absolute"}
              bottom={0}
              right={0}
              display={{ base: "none", lg: "block" }}
              bg={"brand.gold"}
              boxSize={"100px"}
              style={{ clipPath: "polygon(100% 0, 100% 100%,  0 100%)" }}
            ></Box>
            <Heading w={{ base: "80%", lg: "500px" }}>
              Start your application to become a software engineer
            </Heading>
            <Text w={{ base: "80%", lg: "600px" }}>
              Become a student at Bloom Institute of Technology. The next
              application deadline is: December 10, 2021
            </Text>
            <Button
              variant={"solid"}
              bg={"brand.gold"}
              color={"brand.deepgrey"}
              w="150px"
              size={"lg"}
            >
              <ReactRouterLink to="/about">Learn more</ReactRouterLink>
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
