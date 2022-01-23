import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/Navigation";
import { Link as ReactRouterLink } from "react-router-dom";
import LadyWithTab from "../assets/ladywithpad.png";

export default function AboutUs() {
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
      </Box>
      <Footer />
    </Box>
  );
}
