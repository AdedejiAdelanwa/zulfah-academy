import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
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
      <Heading py={"15px"}>Frequently Asked Questions</Heading><br />
      <Tabs variant="unstyled" w={{ base: "80%", lg: "70%" }}>
        <TabList justifyContent={"center"}>
          {/* <Tab
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
          Frequently Asked Questions
          </Tab> */}
          {/* <Tab
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
            Others
          </Tab> */}
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
                    What is Zulfah Academy ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                   We are an Innovative Software company &#128077; &nbsp;. Dont just take
                  that as we have said it. check what we do <a style={{color: '#CF3A5C'}}href="https://zulfahgroup.com">here</a>.
                  The Academy is our "secret sauce." as a software company. The Bootcamp is a  6-months immersive training program that gives you
                  the tools and training you need to launch a new career. The program trains people
                  on-campus and online on fullstack engineering. It's a part of our 
                  curriculum that gives you hands-on experience .This makes us smile &#128522;
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
                       Who can Apply ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                  Any one who is motivated, committed and has the zeal to learn,
                  must be willing to commit fulltime to the programme
                
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
                     Is the training on-campus or remote?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We offer both physical and remote options.
                  Learners can either choose to work out of our physical location,
                  or take classes from anywhere via our remote channels.
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
                      How long is training Programme ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                  The program runs for Mondays, Wednesdays and Fridays for a period of 6 months.
      
                
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
                      How much does the program cost ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                  At the moment, the fee is #500,000
      
                
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
                   Can we partner with Zulfah ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                  Yes, you can. Kindly reach out to us via info@zulfahgroup.com or +2348115371014
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
                    Who can we contact if we have more questions ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                 Please reach out to support@zulfahgroup.com for any further questions or  +2348115371014
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
                    Is learning coding hard ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                  No, coding is not hard to learn. However, like anything new,
                  it's not easy to start, and how difficult a time one has with
                  learning to code will vary across a number of factors.
                  The point is, learning to code isn't impossible; or,
                  it's not as impossible as it might seem when it comes to
                  getting involved.
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
                      Do I need to be good at math to code?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               
                  Math is great, but it is not an essential skill for the modern
                  day programmer. The modern day programmer needs to be good at
                  one or two programing languages, be proficient with their data
                  structures, design patterns and databases.
                  This is the typical stack of knowledge that they need to have,
                  to be a good programmer.
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
                     Do coders make good money ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               
                  The national average for an entry-level coder is $53,000,
                  but depending on your location you can earn an average of
                  up to $80,000 a year. With more experience and a higher
                  job title, the average salary drastically increases.
                </AccordionPanel>
              </AccordionItem>

            </Accordion>
          </TabPanel>
          {/* <TabPanel px={0} py={8}>
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
                    Is learning coding hard ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                  No, coding is not hard to learn. However, like anything new,
                  it's not easy to start, and how difficult a time one has with
                  learning to code will vary across a number of factors.
                  The point is, learning to code isn't impossible; or,
                  it's not as impossible as it might seem when it comes to
                  getting involved.
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
                      Do I need to be good at math to code?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               
                  Math is great, but it is not an essential skill for the modern
                  day programmer. The modern day programmer needs to be good at
                  one or two programing languages, be proficient with their data
                  structures, design patterns and databases.
                  This is the typical stack of knowledge that they need to have,
                  to be a good programmer.
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
                     Do coders make good money ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               
                  The national average for an entry-level coder is $53,000,
                  but depending on your location you can earn an average of
                  up to $80,000 a year. With more experience and a higher
                  job title, the average salary drastically increases.
                </AccordionPanel>
              </AccordionItem>


            </Accordion>
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
