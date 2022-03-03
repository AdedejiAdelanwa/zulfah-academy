import React from "react";
import { Flex, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
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
        showStatus={true}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          h={{ base: "auto", lg: "700px" }}
        >
         {/* <Stack
            p={{ base: 0, lg: 4 }}
            w={"45%"}
            h={{ base: "100% ", lg: "80%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <VStack
              w={{ base: "100%", lg: "70%" }}
              h={{ base: "100%", lg: "95%" }}
              display={{ base: "none", lg: "flex" }}
              bg={"#fff"}
              boxShadow={"lg"}
              borderColor={"black"}
              borderWidth={{ base: 0, lg: "4px" }}
              borderStyle={"solid"}
              borderRadius={{ base: 0, lg: 8 }}
              textAlign="left"
              p={4}
            >
              <Heading>Hello</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor fermentum fermentum. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
                Pellentesque augue felis, dapibus ac ligula in, blandit lacinia
                metus. Curabitur posuere sapien quis tellus cursus posuere.
                Vivamus maximus erat eget sodales tincidunt. Aliquam erat
                volutpat.
              </Text>
            </VStack>
          </Stack>
            */}
          <img
            src={FireChat}
            style={{ display: "block", width: "70%", height: "100%" }}
            alt="hello"
          />
        </Flex>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          h={{ base: "auto", lg: "700px" }}
        >
         {/* <Stack
            p={{ base: 0, lg: 4 }}
            w={"45%"}
            h={{ base: "100% ", lg: "80%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <VStack
              w={{ base: "100%", lg: "70%" }}
              h={{ base: "100%", lg: "95%" }}
              display={{ base: "none", lg: "flex" }}
              bg={"#fff"}
              boxShadow={"lg"}
              borderColor={"black"}
              borderWidth={{ base: 0, lg: "4px" }}
              borderStyle={"solid"}
              borderRadius={{ base: 0, lg: 8 }}
              textAlign="left"
              p={4}
            >
              <Heading>Hello</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor fermentum fermentum. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
                Pellentesque augue felis, dapibus ac ligula in, blandit lacinia
                metus. Curabitur posuere sapien quis tellus cursus posuere.
                Vivamus maximus erat eget sodales tincidunt. Aliquam erat
                volutpat.
              </Text>
            </VStack>
          </Stack>
          */}
          <img
            src={HandsOn}
            style={{ display: "block", width: "70%", height: "100%" }}
            alt="hello"
          />
        </Flex>
        {/* <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          h={{ base: "auto", lg: "700px" }}
        >
         <Stack
            p={{ base: 0, lg: 4 }}
            w={"45%"}
            h={{ base: "100% ", lg: "80%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <VStack
              w={{ base: "100%", lg: "70%" }}
              h={{ base: "100%", lg: "95%" }}
              display={{ base: "none", lg: "flex" }}
              bg={"#fff"}
              boxShadow={"lg"}
              borderColor={"black"}
              borderWidth={{ base: 0, lg: "4px" }}
              borderStyle={"solid"}
              borderRadius={{ base: 0, lg: 8 }}
              textAlign="left"
              p={4}
            >
              <Heading>Hello</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor fermentum fermentum. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
                Pellentesque augue felis, dapibus ac ligula in, blandit lacinia
                metus. Curabitur posuere sapien quis tellus cursus posuere.
                Vivamus maximus erat eget sodales tincidunt. Aliquam erat
                volutpat.
              </Text>
            </VStack>
          </Stack>
          
          <img
            src={WithGuest}
            style={{ display: "block", width: "70%", height: "100%" }}
            alt="hello"
          />
      </Flex> 
        */}
      </Carousel>
    </HStack>
  );
}
