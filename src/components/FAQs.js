import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

export const FAQs = () => {
  return (
    <Stack
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      id="frequently-asked"
    >
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
            px={{ base: "10px", lg: "15px" }}
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
            py={{ base: "5px", lg: "10px" }}
            px={{ base: "10px", lg: "15px" }}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
