import MainNavigation from "../components/Navigation"
import CodingScreen from "../assets/coding-screen.png"
import BlackDev from "../assets/black-smiling.png"
import guyWithLaptop from "../assets/guy-with-laptop.png"
import Founder from "../assets/founder.png"
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  IconButton,
  Button,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  BsArrowRight,
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import { Android, BriefCase, Bookmark, Charts } from "../assets/icons/index";
import { Link as ReactRouterLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ApplicationCTA } from "../components/ApplicationCTA";

export default function Home() {
  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Box paddingTop={{ base: "0px", lg: "none" }} bg={"white"}>
        <Stack
          pos={"relative"}
          h={{ base: "50vh", lg: "75vh" }}
          direction={{ base: "column", md: "row" }}
          bg={"brand.lightpink"}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack alignItems={"center"} spacing={6} maxW="85%">
              <Heading
                color={"brand.darkergrey"}
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              >
                Become a Skilled Software Engineer
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Gain the skills you need to land a job in the tech industry. Our
                academy trains and mentors you to become an industry standard
                software engineer.
              </Text>
              <Button
                display={{ lg: "none" }}
                variant={"solid"}
                bg={"brand.gold"}
                w="150px"
                size={"lg"}
              >
                <ReactRouterLink to="/application">Apply now</ReactRouterLink>
              </Button>
            </Stack>
          </Flex>
          <Flex flex={1} justifyContent={"center"}>
            <Box
              boxSize={{ base: "300px", lg: "100%" }}
              backgroundImage={CodingScreen}
              backgroundSize={"cover"}
              backgroundPosition={"bottom"}
              backgroundRepeat={"no-repeat"}
              borderRadius={{ base: "15px", lg: "none" }}
            ></Box>
          </Flex>
          <Box
            display={{ base: "none", lg: "flex" }}
            alignItems={"center"}
            justifyContent={"space-around"}
            pos={"absolute"}
            bottom={"-10%"}
            left={"40px"}
            w={"1080px"}
            h={"155px"}
            bg={"brand.white"}
            borderRadius="12px"
            boxShadow={"lg"}
          >
            <HStack h={"70%"}>
              <Stack spacing={4} w={"220px"}>
                <Heading fontSize={"lg"} color={"brand.fuscia"}>
                  Apply
                </Heading>
                <Text fontSize={"12px"} color={"brand.textgrey"}>
                  We screen all submissions to identify high-potential
                  candidates
                </Text>
              </Stack>
              <Divider
                orientation="vertical"
                bg={"brand.deepgrey"}
                color={"brand.deepgrey"}
              />
              <Stack spacing={4} pl={4} w={"220px"}>
                <Heading fontSize={"lg"} color={"brand.fuscia"}>
                  Get Selected{" "}
                </Heading>
                <Text fontSize={"12px"} color={"brand.textgrey"}>
                  You get a call from us because you made it into the Academy
                 
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack spacing={4} pl={4} w={"220px"}>
                <Heading fontSize={"lg"} color={"brand.fuscia"}>
                  Join Training
                </Heading>
                <Text fontSize={"12px"} color={"brand.textgrey"}>
                  You will join the our intensive six-months training program
                </Text>
              </Stack>
            </HStack>

            <VStack
              h={"80%"}
              color={"white"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"140px"}
              bg={"brand.fuscia"}
              borderRadius="12px"
              boxShadow={"md"}
              cursor={"pointer"}
            >
              <BsArrowRight size={"30px"} />
              <ReactRouterLink to="/application">
                <Text fontSize={"sm"}>Get started</Text>
              </ReactRouterLink>
            </VStack>
          </Box>
        </Stack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          h={{ base: "auto", lg: "750px" }}
          pt={{ base: "300px", lg: "150px" }}
          justifyContent={"space-around"}
          alignItems={{ base: "center", lg: "baseline" }}
        >
          <VStack
            textAlign={{ base: "center", lg: "left" }}
            spacing={{ base: "15px", lg: "50px" }}
            w={{ base: "75%", lg: "380px" }}
            mb={{ base: "40px", lg: "none" }}
            mt={{ base: "50px", lg: "none" }}
          >
            <Heading fontSize={"36px"}>
            Why Zulfah is the #1
            choice for you
            </Heading>
            <Text fontSize={"16px"}>
              We work with employers to understand their needs, then teach you
              those in-demand skills. At Zulfah, you'll get the work experience
              to grow a rewarding career.
            </Text>
          </VStack>
          <SimpleGrid
            w={{ base: "75%", lg: "750px" }}
            h={{ base: "auto", lg: "500px" }}
            spacing={"20px"}
            justifyContent={"space-around"}
            columns={[1, 1, 2]}
          >
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={4}
              bg="brand.lightpink"
              w={"320px"}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<BriefCase />}
              />
              <Heading fontSize={"14px"}>
                Take online classes with live instruction
              </Heading>
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                mattis in ornare nisl in.
              </Text>
            </VStack>
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={4}
              bg="brand.lightpink"
              w={"320px"}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<Bookmark />}
              />
              <Heading fontSize={"14px"}>
                Practice professional skills that help you get hired
              </Heading>
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                mattis in ornare nisl in.
              </Text>
            </VStack>
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={4}
              bg="brand.lightpink"
              w={"320px"}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<Android />}
              />
              <Heading fontSize={"14px"}>
                Monthly meetout session with Industry experts
              </Heading>
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                mattis in ornare nisl in.
              </Text>
            </VStack>
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={8}
              bg="brand.lightpink"
              w={"320px"}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<Charts />}
              />
              <Heading fontSize={"14px"}>
                Complete hands-on coding projects with personalized feedback
              </Heading>
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                mattis in ornare nisl in.
              </Text>
            </VStack>
          </SimpleGrid>
        </Stack>
        <Stack
          pos={"relative"}
          h={{ base: "50vh", lg: "75vh" }}
          direction={{ base: "column", md: "row" }}
          bg={"brand.white"}
          mb={{ base: "70px", lg: "none" }}
        >
          <Flex p={8} flex={1} alignItems={"center"} justifyContent={"center"}>
            <Stack
              alignItems={{ base: "center", lg: "left" }}
              spacing={6}
              maxW={{ base: "95%", lg: "85%" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading color={"#000000"} fontSize={"36px"}>
                Graduate job-ready with the confidence to get hired.
              </Heading>
              <Text fontSize={"16px"} color={"#000000"}>
                We'll work with you throughout your program and after graduation
                to help you polish your portfolio, practice interviewing and
                more to land a job that fits your goals.
              </Text>
              <Button
                variant={"solid"}
                bg={"brand.fuscia"}
                color={"white"}
                w="150px"
                size={"lg"}
              >
                <ReactRouterLink to="/about">Learn more</ReactRouterLink>
              </Button>
            </Stack>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              boxSize={"460px"}
              backgroundImage={BlackDev}
              backgroundSize={"cover"}
              backgroundPosition={"bottom"}
              backgroundRepeat={"no-repeat"}
              borderRadius={{ base: "15px", lg: "none" }}
            ></Box>
          </Flex>
        </Stack>
        <Flex width={"100%"} bg={"white"} justifyContent={"center"}>
          <Stack
            pos={"relative"}
            // h={{ base: "650px", lg: "1059px" }}
            w={{ base: "90%", lg: "100%" }}
            direction={{ base: "column", md: "row" }}
            bg={"brand.deepgrey"}
            borderRadius={{ base: "15px", lg: "none" }}
            style={{ padding: '50px' }}
          >
             <Flex
              p={{ base: 4, lg: 8 }}
              flex={1}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack
                alignItems={{ base: "center", lg: "flex-start" }}
                justifyContent={"space-between"}
                spacing={{ base: 4, lg: 8 }}
                maxW={{ base: "95%", lg: "85%" }}
                textAlign={{ base: "center", lg: "left" }}
                color={"white"}
               
              >
                <Heading fontSize={"36px"}>
                Why Zulfah is the #1 choice <br /> for you
                </Heading>
                <Text
                  fontSize={"16px"}
                  w={{ base: "95%", lg: "475px" }}
                  textAlign={{ base: "center", lg: "justify" }}
                  lineHeight={{ base: 1.6, lg: 2 }}
                  color={"brand.lightgrey"}
                >
                  We deliver an intensive 6-month program where our software developers
                learn both full-stack software development and additional soft skills
                in an immersive environment. Through an agile delivery methodology,
                mentor matching and leadership modules, our elite engineers are equipped
                with techniques and a leadership mindset that enables them to work
                competitively in any team globally.
                As part of our curriculum, we expose our engineers to real-life applications
                and projects. During these projects, we ensure they are well-equipped to
                design programs both individually and in teams.
                This aspect of our program provides our engineers with verifiable work
                experience and the confidence to excel in their jobs after the training.

               {/* At the end of the program, the best among our developers are matched with our
                company partners to join their development teams fulltime, either remotely or
                in person.
             
              There are 3-phases to get into the programme  
              - Application  submission
              - Interview with applicants
              - Selection process 

              We also have a waiting list for our prospective students who do not make the selection process. Such students, are then given the opportunity to join the programme, if performance of any of the previously selected is below expectation
              */}
                </Text>
                {/* <Button
                  variant={"solid"}
                  bg={"brand.fuscia"}
                  color={"white"}
                  w="150px"
                  size={"lg"}
                  py={{ base: "10px", lg: "none" }}
                >
                  <ReactRouterLink to="/about">Contact us</ReactRouterLink>
                </Button> */}
              </Stack>
            </Flex>
            <Flex
              display={{ base: "none", lg: "flex" }}
              flex={1}
              justifyContent={"right"}
              alignItems={"center"}
            >
             <Box
                pos={"relative"}
                display={{ base: "none", lg: "block" }}
                w="100%"
                h="600px"
                backgroundImage={guyWithLaptop}
                backgroundSize={"cover"}
                backgroundPosition={"bottom"}
                backgroundRepeat={"no-repeat"}
                borderRadius={{ lg: "12px" }}
              >
              {/*  <Stack
                  position={"absolute"}
                  w={"218px"}
                  h={"221px"}
                  bg={"white"}
                  top={"-90px"}
                  left={"-130px"}
                  borderRadius={{ lg: "12px" }}
                  overflow={"hidden"}
                >
                {
                  <VStack p={4} h={"80%"} justifyContent={"space-between"}>
                    <Flex
                      w={"100%"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                    >
                       <Image
                        boxSize="41px"
                        objectFit="cover"
                        src={Founder}
                        alt="Founder"
                        borderRadius="4px"
                      />
                      <Stack spacing={0}>
                        <Heading fontSize={"14px"}>Abayomi Rosh</Heading>
                        <Text fontSize={"12px"} color={"brand.fuscia"}>
                          Founder
                        </Text>
                      </Stack> 
                    </Flex>
                    <Text fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lirisus, duis accumsan .
                    </Text>
                  </VStack> 
                  <Flex
                    h={"20%"}
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"brand.lightgrey"}
                  >
                    <Link to="/#">View profile</Link>
                  </Flex>
                </Stack> */}
              </Box> 
            </Flex>
           
          </Stack>
        </Flex>
        <VStack justifyContent={"center"}>
          <Stack
            w={{ base: "90%", lg: "85%" }}
            h={"750px"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"brand.white"}
            borderRadius={{ base: "none", lg: "15px" }}
            boxShadow={{ base: "none", lg: "md" }}
            spacing={{ base: "20px", lg: "80px" }}
            textAlign={"center"}
          >
            <Heading w={{ base: "85%", lg: "405px" }} fontSize={"36px"}>
              Take a look at reviews by some of our students
            </Heading>
            <Stack alignItems={"center"} w={"100%"}>
              <HStack w={"100%"} justifyContent={"space-around"}>
                <Stack
                  w={"338px"}
                  bg={"white"}
                  h={"342px"}
                  borderRadius={"16px"}
                  boxShadow={"md"}
                  p={8}
                  spacing={4}
                >
                  <Flex
                    h={"70px"}
                    alignItems={"flex-start"}
                    borderBottomWidth={"1px"}
                    borderBottomColor={"brand.fuscia"}
                  >
                    <Image src={Founder} boxSize={"47px"} />
                    <Stack ml={"30px"} spacing={"1px"} textAlign={"left"}>
                      <Heading fontSize={"14px"}>Ibrahim Olalere</Heading>
                      <Text fontSize={"12px"}>Public Administrator</Text>
                    </Stack>
                  </Flex>
                  <Stack textAlign={"left"} spacing={4}>
                    <Heading fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing arcu.
                    </Heading>
                    <Text fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lirisus, dignissim netus nulla commodo tellus. nte.
                      Scelerisque duis accumsan in lobortis massa eu sed id. Sit
                      aliquam lectus accumsan morbi nulla quis suscipit.{" "}
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  w={"345px"}
                  bg={"brand.deepgrey"}
                  h={"355px"}
                  borderRadius={"16px"}
                  boxShadow={"md"}
                  p={8}
                  spacing={4}
                  color={"white"}
                  display={{ base: "none", lg: "flex" }}
                >
                  <Flex
                    h={"70px"}
                    alignItems={"flex-start"}
                    borderBottomWidth={"1px"}
                    borderBottomColor={"brand.fuscia"}
                  >
                    <Image src={Founder} boxSize={"47px"} />
                    <Stack ml={"30px"} spacing={"1px"} textAlign={"left"}>
                      <Heading fontSize={"14px"}>Ibrahim Olalere</Heading>
                      <Text fontSize={"12px"}>Public Administrator</Text>
                    </Stack>
                  </Flex>
                  <Stack textAlign={"left"} spacing={4}>
                    <Heading fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing arcu.
                    </Heading>
                    <Text fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lirisus, dignissim netus nulla commodo tellus. nte.
                      Scelerisque duis accumsan in lobortis massa eu sed id. Sit
                      aliquam lectus accumsan morbi nulla quis suscipit.{" "}
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  w={"338px"}
                  bg={"white"}
                  h={"342px"}
                  borderRadius={"16px"}
                  boxShadow={"md"}
                  p={8}
                  spacing={4}
                  display={{ base: "none", lg: "flex" }}
                >
                  <Flex
                    h={"70px"}
                    alignItems={"flex-start"}
                    borderBottomWidth={"1px"}
                    borderBottomColor={"brand.fuscia"}
                  >
                    <Image src={Founder} boxSize={"47px"} />
                    <Stack ml={"30px"} spacing={"1px"} textAlign={"left"}>
                      <Heading fontSize={"14px"}>Ibrahim Olalere</Heading>
                      <Text fontSize={"12px"}>Public Administrator</Text>
                    </Stack>
                  </Flex>
                  <Stack textAlign={"left"} spacing={4}>
                    <Heading fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing arcu.
                    </Heading>
                    <Text fontSize={"14px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lirisus, dignissim netus nulla commodo tellus. nte.
                      Scelerisque duis accumsan in lobortis massa eu sed id. Sit
                      aliquam lectus accumsan morbi nulla quis suscipit.{" "}
                    </Text>
                  </Stack>
                </Stack>
              </HStack>
              <Flex w="150px" justifyContent={"space-around"}>
                <Icon
                  cursor={"pointer"}
                  as={BsArrowLeftCircle}
                  w={"41px"}
                  h={"41px"}
                />
                <Icon
                  cursor={"pointer"}
                  as={BsArrowRightCircleFill}
                  w={"41px"}
                  h={"41px"}
                  color={"brand.fuscia"}
                />
              </Flex>
            </Stack>
          </Stack>
          <ApplicationCTA />
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
