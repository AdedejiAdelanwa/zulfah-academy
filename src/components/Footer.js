import React from "react";
import { Flex, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/zulfah-logo.png";
import { NavLink } from "./Navigation";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Footer = () => {
  const Links = ["About", "Courses", "Hire", "FAQs"];

  return (
    <Stack alignItems={"center"}>
      <Stack
        w={"80%"}
        h={{ base: "auto", lg: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        borderBottomWidth={{ base: "none", lg: "1px" }}
        borderBottomStyle={"solid"}
        borderBottomColor={"#86878B"}
        my={{ base: "50px", lg: "30px" }}
        textAlign={"center"}
      >
        <Image h={45} objectFit="cover" src={logo} alt="Zulfah group" />
        <Flex
          direction={{ base: "column", lg: "row" }}
          w={{ base: "60%", lg: "30%" }}
          justifyContent={"space-around"}
        >
          {Links.map((link) => (
            <p>{link}</p>
            // <NavLink key={link}>{link}</NavLink>
          ))}
        </Flex>
      </Stack>
      <Flex
        w={"80%"}
        h={{ base: "100px", lg: "auto" }}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "space-around", lg: "space-between" }}
      >
        <Text fontSize={"12px"}>
         
          © {new Date().getFullYear()} Zulfah Academy. All rights reserved
        </Text>
        <Flex w={{ base: "50%", lg: "auto" }} justifyContent={"space-between"}>
          <Link href="https://www.instagram.com/zulfahacademy/" isExternal>
            <Icon as={AiOutlineInstagram} w={8} h={8} color={"#1D3547"} />
          </Link>
          <Link href="https://facebook.com/Zulfah-Group-100605405733254" isExternal>
            <Icon as={AiFillFacebook} w={8} h={8} color={"#1D3547"} />
          </Link>
          <Link href="https://www.linkedin.com/company/zulfah-group/" isExternal>
            <Icon as={AiFillLinkedin} w={8} h={8} color={"#1D3547"} />
          </Link>
        </Flex>
      </Flex>
    </Stack>
  );
};
