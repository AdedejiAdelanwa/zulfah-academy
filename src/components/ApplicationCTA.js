import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

export const ApplicationCTA = () => {
  return (
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
        Become a student at Bloom Institute of Technology. The next application
        deadline is: December 10, 2021
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
  );
};
