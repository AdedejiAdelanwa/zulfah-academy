import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import logo from "../assets/zulfah-logo.png";

const Links = [  "Courses", "Application-status", "FAQs", "HIRE"];

export const NavLink = ({ children }) => (
  <Link
    py="10px"
    px="35px"
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children === "FAQs" ? "/about#frequently-asked" : children}
  >
    {children}
  </Link>
);

export default function MainNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={"sticky"} top={0} left={0} zIndex={20} width={"100%"}>
      <Box bg={{ base: "#DFEAEF", lg: "brand.white" }} px={{ base: 4, lg: 20 }}>
        <Flex
          h={{ sm: 16, lg: 100 }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <ReactRouterLink to="/">
            <Box>
              <Image h={45} objectFit="cover" src={logo} alt="Zulfah" />
            </Box>
          </ReactRouterLink>

          <HStack
            as={"nav"}
            w="65%"
            spacing={4}
            display={{ base: "none", md: "flex" }}
            justifyContent="space-between"
          >
            <Box w="100%" display={"flex"} justifyContent={"flex-end"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Box>

            <Button variant={"solid"} bg={"brand.gold"} size={"md"}>
              <ReactRouterLink to="/application">Apply now</ReactRouterLink>
            </Button>
          </HStack>

          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon
                  p={1}
                  borderRadius="50%"
                  color={"brand.white"}
                  bg={"brand.deepgrey"}
                />
              ) : (
                <HamburgerIcon />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="#DFEAEF"
            variant={"solid"}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}

              <Button bg={"brand.gold"} size={"md"} borderRadius={4}>
                <Link to="/application">Apply now</Link>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
