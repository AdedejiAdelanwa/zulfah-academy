import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { hireFaqs } from "../utils/lists";

export const HireFAQs = () => {
  return (
    <Stack
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      id="frequently-asked"
    >
      <Heading py={"15px"}>Hiring Company FAQs</Heading>
      <Stack w={{ base: "80%", lg: "70%" }}>
        <Accordion allowToggle px={0} py={8}>
          {hireFaqs.map((faq) => (
            <AccordionItem
              key={faq.title}
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
                    {faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.body}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Stack>
  );
};
