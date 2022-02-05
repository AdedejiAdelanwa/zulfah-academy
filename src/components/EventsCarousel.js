import React from "react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FireChat from "../assets/firechat-withYellow.jpeg";
import HandsOn from "../assets/handson.jpeg";
import WithGuest from "../assets/withguest.jpeg";

export default function EventsCarousel() {
  return (
    <HStack
      w={"100%"}
      paddingTop={{ base: "100px", lg: "90px" }}
      justifyContent={"center"}
      bg={"whiteAlpha.100"}
    >
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        <HStack h={{ base: "350px", lg: "700px" }}>
          <VStack w={"45%"}>
            <Heading>Hello</Heading>
            <Text>Lorem</Text>
          </VStack>
          <img
            src={FireChat}
            style={{ display: "block", width: "55%", height: "100%" }}
            alt="hello"
          />
        </HStack>
        <HStack h={{ base: "350px", lg: "700px" }}>
          <VStack w={"45%"}>
            <Heading>Hello</Heading>
            <Text>Lorem</Text>
          </VStack>
          <img
            src={HandsOn}
            style={{ display: "block", width: "55%", height: "100%" }}
            alt="hello"
          />
        </HStack>
        <HStack h={{ base: "350px", lg: "700px" }}>
          <VStack w={"45%"}>
            <Heading>Hello</Heading>
            <Text>Lorem</Text>
          </VStack>
          <img
            src={WithGuest}
            style={{ display: "block", width: "55%", height: "100%" }}
            alt="hello"
          />
        </HStack>
      </Carousel>
    </HStack>
  );
}
