import React from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/zulfah-mono.png";

const Links = ["About", "Courses", "Hire", "FAQs"];

export const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children}
  >
    {children}
  </Link>
);

export default function AppNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={"absolute"} top={0} left={0} zIndex={20} width={"100%"}>
      <Box
        px={{ base: 4, lg: 20 }}
        bg={{ base: "brand.bluishgrey", lg: "transparent" }}
        color={{ base: "white", lg: "transparent" }}
      >
        <Flex
          h={{ sm: 16, lg: 100 }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Image h={50} objectFit="cover" src={logo} alt="Zulfah group" />
          </Box>

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
            variant={"unstyled"}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
