import React from "react";
import {
  useDisclosure,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Avatar,
  Image,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/zulfah-logo.png";
import guyWithLaptop from "../assets/guy-with-laptop.png"
import { Android, BriefCase, Bookmark, Charts } from "../assets/icons/index";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/Navigation";
import { Link as ReactRouterLink } from "react-router-dom";
import MemberB from "../assets/rosh1.png";
import MemberA from "../assets/rosh2.png";
import MemberC from "../assets/rosh3.png";
import Interswitch from "../assets/_interswitch.jpeg";
import Flutterwave from "../assets/flutterwave.png";
import Meristem from "../assets/meristem.png";
import HerVest from "../assets/HerVest.png";
import App1 from "../assets/application1.png";
import { Hourglass, Tuition } from "../assets/icons";
import { BsArrowRight } from "react-icons/bs";
import { FAQs } from "../components/FAQs";
import { ApplicationCTA } from "../components/ApplicationCTA";
import { tableOfContent, students_reviews } from "../utils/lists";
import coffee from '../assets/coffee.webp'

export default function AboutUs() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: false })
  const team = [
    { name: "nerdy - knight", img: MemberA , linkedIn: ""},
    { name: "code - ninja", img: MemberB, linkedIn: "https://www.linkedin.com/in/abayomi-ajao-18458b7b/" },
    { name: "code - slayer", img: MemberC, linkedIn:"" },
  ]
  const Testimonial = ({ children }) => {
    return <Box>{children}</Box>
  }
  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  }
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  }
  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  }
  const TestimonialAvatar = ({
    src,
    name,
    title,
    company
  }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar name={ name} alt={name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {company}
          </Text>
        </Stack>
      </Flex>
    );
  }

  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Modal isOpen={isOpen} size={"lg"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                      <ModalBody>
                          <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={App1}
                            alt="Zulfah Applications are now open"
                            
                           />
                    </ModalBody>
                </ModalContent>
      </Modal>
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
                fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
              >
              Become a Skilled Software Engineer
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Gain the skills you need to land a job in the tech industry. Zulfah
                Academy trains and mentors you to become an excellent engineer.
              </Text>
              <Button
                          display={{ lg: "none" }}
                          variant={"solid"}
                          bg={"brand.gold"}
                          size={"lg"}
                          width={{ base: "100%", lg: "150px" }}
                    > 
                    <ReactRouterLink to="/application">👉🏾 Apply now</ReactRouterLink>
                </Button>
                {/* {new Date().getTime() > new Date('2022-08-10').getTime()
                 ?  <Button
                          display={{ lg: "none" }}
                          variant={"solid"}
                          bg={"brand.gold"}
                          size={"lg"}
                          width={{ base: "100%", lg: "150px" }}
                    > 
                    <ReactRouterLink to="/application">👉🏾 Apply now</ReactRouterLink>
                    </Button>
                  : <Text style={{ float: "left" }} textColor={"#CF3A5E"}>
                    👉🏾 Applications will open 26th September </Text>
                  } */}
               
               
              {/* <Text
                style={{float: "left"}}
                textColor={"#CF3A5E"}>
              {
                (new Date().getMonth() + 1) === 9 && new Date().getDate() === 26 ?
                 "👉🏾 Applications currently open"  : " 👉🏾 Join waitlist here"
              
              }
              </Text> */}
            </Stack>
          </Flex>
          {/* coffe icon */}
          <Flex flex={1} justifyContent={"center"}>
            <Box
              shadow="2xl"
              boxSize={{ base: "0px", md:"100%" }}
              backgroundImage={coffee}
              backgroundSize={"cover"}
              backgroundPosition={"bottom"}
              backgroundRepeat={"no-repeat"}
              borderRadius={{ base: "0px", md: "0px" }}
            ></Box>
          </Flex>
          {/* coffe icon */}
          
          <Box
            display={{ base: "none", lg: "flex" }}
            alignItems={"center"}
            justifyContent={"space-around"}
            pos={"absolute"}
            bottom={"-10%"}
            left={"40px"}
            w={"1080px" }
            h={"155px"}
            bg={"brand.white"}
            borderRadius="12px"
            boxShadow={"lg"}
          >
            <HStack h={"70%"}>
              <Stack spacing={4} w={"220px"}>
                <Heading fontSize={"lg"} color={"brand.fuscia"}>
                  Application
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
                  Interview - Selection{" "}
                </Heading>
                <Text fontSize={"12px"} color={"brand.textgrey"}>
                  You get a chance to convince us, then, we make our desicion
                 
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack spacing={4} pl={4} w={"220px"}>
                <Heading fontSize={"lg"} color={"brand.fuscia"}>
                  Training
                </Heading>
                <Text fontSize={"12px"} color={"brand.textgrey"}>
                 After six months, you will earn the title "Skilled Software Engineer"
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
              display={{ base: "none", lg: "flex" }}
            >
              <BsArrowRight size={"30px"} />
              <ReactRouterLink to="/application">
                <Text fontSize={"sm"}>Get started</Text>
              </ReactRouterLink>
            </VStack>
          </Box>
        </Stack>
      

       {/** 4 cards , equipped curriculum, Innovatiobe learning environment */}
        <Stack
          direction={{ base: "column", lg: "row" }}
          h={{ base: "auto", lg: "750px" }}
          pt={{ base: "0px", md:"0px", lg: "150px" }}
          justifyContent={"space-around"}
          alignItems={{ base: "center", lg: "baseline" }}
          spacing={6} maxW="100%"
          mb={{ base: "50px", lg: "0px" }}
       
        >
          <VStack
            textAlign={{ base: "justify", lg: "justify" }}
            spacing={{ base: "15px", lg: "50px" }}
            w={{ base: "75%", lg: "500px" }}
            mb={{ base: "40px", lg: "none" }}
            mt={{ base: "50px", lg: "none" }}
            justifyContent={{ base: "center", lg: "left" }}
            ml={{base:"0px", lg: "60px"}}
          >
            {/* <Heading fontSize={"36px"}>
            Why Zulfah is the #1
            choice for you
            </Heading> */}
            <Text fontSize={"16px"}>
             <p> We deliver an intensive 6-month program where our software developers
              learn both full-stack software development and additional soft skills
                in an immersive environment.</p><br />
              <p>Through an agile delivery methodology, mentor matching and leadership modules,
                our software engineers are equipped with techniques and a leadership mindset
                that enables them to work competitively in any team globally.</p><br />
              <p>As part of our curriculum, we expose our engineers to real-life
                applications and projects. During these projects, we ensure they are
                well-equipped to develop programs individually and in teams.</p>
              <p>This aspect of our program provides our engineers with verifiable work
                experience and the confidence to excel in their jobs after the training.
                Our graduates are mentored by various veterans in the 
                tech industry, we leverage on that network to match our graduate with  
                partner company.
              </p>
           
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
              w={{ base: "100%", md: "300px" }}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<BriefCase />}
              />
              <Heading fontSize={"14px"}>
              Equipped Curriculum
              </Heading>
              <Text fontSize={"12px"}>
              We enforce industry standard and best practices that match the dynamics of the tech industry.
              </Text>
            </VStack>
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={4}
              bg="brand.lightpink"
              w={{ base: "100%", md: "300px" }}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<Bookmark />}
              />
              <Heading fontSize={"14px"}>
              Complete hands-on coding projects with personalized feedback
              </Heading>
              <Text fontSize={"12px"}>
               Enhances tactical problem-solving techniques and gives a feel of reality.
              </Text>
            </VStack>
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={4}
              bg="brand.lightpink"
              w={{ base: "100%", md: "300px" }}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<Android />}
              />
              <Heading fontSize={"14px"}>
                Monthly session with Industry experts
              </Heading>
              <Text fontSize={"12px"}>
                Opportunity to engage tech veterans, network, and gain mentorship. 
              </Text>
            </VStack>
            <VStack
              borderRadius="12px"
              alignItems={"left"}
              justifyContent={"space-evenly"}
              p={8}
              bg="brand.lightpink"
              w={{ base: "100%", md: "300px" }}
              height="235px"
            >
              <IconButton
                bg={"brand.fuscia"}
                borderRadius={4}
                w={"9"}
                icon={<Charts />}
              />
              <Heading fontSize={"14px"}>
              Innovative learning culture
              </Heading>
              <Text fontSize={"12px"}>
                Peer-to-peer learning, with collaborative approach. And guess what? "Lunch is always on the house."
              </Text>
            </VStack>
          </SimpleGrid>
        </Stack>
       {/** 4 cards , equipped curriculum, Innovatiobe learning environment */}
       

      {/** What you wil learn */}
       
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
              <Stack
                justifyContent={{ base: "center", lg: "left" }}
                w={{ base: "100%", lg: "420px" }}
              >
              <Heading fontSize={{ base: "28px", lg: "48px" }}>
                What you will learn
              </Heading><br />
              <VStack>
                <Stack
                  h={"auto"}
                  borderLeftWidth={"4px"}
                  borderLeftStyle={"solid"}
                  borderLeftColor={"brand.fuscia"}
                  borderRightWidth={"4px"}
                  borderRightStyle={"solid"}
                  borderRightColor={"brand.fuscia"}
                  p={{ base: 4, lg: 8 }}
                  spacing={4}
                  boxShadow={"md"}
                  borderTopRightRadius={"12px"}
                  borderBottomLeftRadius={"12px"}
                  borderTopLeftRadius={"12px"}
                  borderBottomRightRadius={"12px"}
                >
                  <Heading fontSize={"22px"}>Front-end development</Heading>
                  <Text fontSize={"14px"}>
                    Core expertise in user interfaces, including visual elements like
                    layouts and aesthetics.
                    {/* HTML - CSS - CSS3 - BOOTSTRAP
                    - TAILWIND - SASS - JAVASCRIPT - REACTJS */}
                  </Text>
                </Stack>
                <Stack
                  h={"auto"}
                  borderLeftWidth={"4px"}
                  borderLeftStyle={"solid"}
                  borderLeftColor={"brand.gold"}
                  borderRightWidth={"4px"}
                  borderRightStyle={"solid"}
                  borderRightColor={"brand.gold"}
                  p={{ base: 4, lg: 8 }}
                  spacing={4}
                  boxShadow={"md"}
                  borderTopRightRadius={"12px"}
                  borderBottomLeftRadius={"12px"}
                  borderTopLeftRadius={"12px"}
                  borderBottomRightRadius={"12px"}
                >
                  <Heading fontSize={"22px"}>Back-end development</Heading>
                  <Text fontSize={"14px"}>
                    Core expertise in designing and implementing the core logic, 
                    keeping in mind scalability. 
                    {/* JAVASCRIPT - NODEJS - EXPRESSJS - 
                    MYSQL - MONGODB  */}
                  </Text>
                </Stack>
                <Stack
                  h={"auto"}
                  borderLeftWidth={"4px"}
                  borderLeftStyle={"solid"}
                  borderRightColor={"brand.green"}
                  borderRightWidth={"4px"}
                  borderRightStyle={"solid"}
                  borderLeftColor={"brand.green"}
                  p={{ base: 4, lg: 8 }}
                  spacing={4}
                  boxShadow={"md"}
                  borderTopRightRadius={"12px"}
                  borderBottomLeftRadius={"12px"}
                  borderTopLeftRadius={"12px"}
                  borderBottomRightRadius={"12px"}
                >
                  <Heading fontSize={"22px"}>DevOps</Heading>
                  <Text fontSize={"14px"}>
                    Familiar with the development of systems to build, deploy, integrate
                    and administer software
                  </Text>
                </Stack>
              </VStack>
            </Stack>
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
      {/** What you wil learn */}

      {/** Software Bootcamp */}
        <Stack
          w={"100%"}
          alignItems={"center"}
          paddingTop={{ base: "0px", lg: "90px" }}
        
        >
          <Tabs
            w={"80%"}
            display={{ base: "flex", lg: "flex" }}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            variant="unstyled"
          >
            <Stack
              w={"353px"}
              spacing={8}
              p={4}
              borderColor={"brand.lightgrey"}
              borderRadius={4}
            >
              <Heading
                fontSize={"16px"}
                py={4}
                color={"brand.lightertextgrey"}
                borderBottomWidth={"1px"}
                borderBottomColor={"brand.lightgrey"}
              >
                SOFTWARE ENGINEERING BOOTCAMP
              </Heading>
              <TabList
                spacing={4}
                display={"flex"}
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Tab pl={0} _selected={{ fontWeight: "bold" }}> Overview  </Tab>
                 <Tab pl={0} _selected={{ fontWeight: "bold" }}> Requirements</Tab>
                <Tab pl={0} _selected={{ fontWeight: "bold" }}>Curriculum</Tab>
                <Tab pl={0} _selected={{ fontWeight: "bold" }}> Payment & Sponsorship </Tab>
                <Tab pl={0} _selected={{ fontWeight: "bold" }}>  Next application</Tab>
              </TabList>

            </Stack>
            <TabPanels w={{ base: "100%", lg: "700px" }}>
              {tableOfContent.map((item) => (
                <TabPanel key={item.title}>
                  <Stack
                    spacing={8}
                    textAlign={{ base: "justify", lg: "left" }}
                    mt={{ base: "30px", lg: "0px" }}
                  >
                    <Heading fontSize={{ base: "20px", lg: "20px" }}>
                      {item.title}
                    </Heading><hr />
                    {
                      (item.title === 'Next Application' && `${new Date().getMonth() + 1}` === 9 && 
                      `${new Date().getDate() === 26}`) ? 
                     
                        <>
                          <Text lineHeight={"2"}>{item.body_out}</Text>         
                          <Button
                          variant={"solid"}
                          bg={"brand.fuscia"}
                          w="150px"
                          color={"white"}
                          size={"lg"}
                          borderRadius={4}
                        >
                          <ReactRouterLink to="/application">Enrol now</ReactRouterLink>
                            </Button>
                       </>
                      
                        : 
                        <Text style={{  whiteSpace: "pre-line"}}lineHeight={"2"}>{item.body}</Text>
                      
                    }
                  </Stack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Stack>
      {/** Software Bootcamp */}
        
        {/*  Meet the Team */}
          <Stack
                  w={"100%"}
                  alignItems={"center"}
                  paddingTop={{ base: "50px", lg: "90px" }}
                  bg={"whiteAlpha.100"}
                >
                  <Heading w={"80%"} textAlign={{ base: "center", lg: "center" }}>
                    Meet the team
                  </Heading><br />
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    width={{ base: "80%", lg: "80%" }}
            justifyContent={"space-around"}
            
            alignContent={"center"} 
                  >
            {team.map((member) => (
              <Stack
                key={member.img}
                spacing={{ base: 4, lg: 8 }}
                marginBottom={{ base: 9, lg: 0 }}
                      >
                        <Box
                          boxSize={"287px"}
                          backgroundImage={member.img}
                          backgroundSize={"contain"}
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                          borderRadius={"500px"}
                          backgroundColor={"pink"}
                          marginLeft={{ base: "0px", sm: "100px", md:"200px", lg: "0px" }}
                        ></Box>
                        <Stack spacing={2}>
                          <Stack spacing={0} >
                            <Heading style={{ textAlign: 'center' }} fontSize={"18px"}>{member.name}</Heading>
                            {/* <Text fontSize={"12px"}>Chief Technical Officer</Text> */}
                            
                          </Stack>
                          <Flex style={{
                            justifyContent: "center",
                            alignItems: "center"
                          }} >
                            {
                              (member.linkedIn !== "") ?
                                <Link href={member.linkedIn} isExternal>
                                  <Icon
                                    as={AiFillLinkedin}
                                    w={4}
                                    h={4}
                                    color={"brand.blue"}
                              
                                  />
                                </Link>
                                :
                                <Icon
                                  as={AiFillLinkedin}
                                  w={4}
                                  h={4}
                                  color={"brand.blue"}
                            
                                />
                            }
                              <Icon
                                as={AiFillFacebook}
                                w={4}
                                h={4}
                              color={"brand.blue"}
                              />
                          </Flex>
                        </Stack>
              </Stack>
                    ))}
                  </Flex>
          </Stack>
        {/*  Meet the Team */}


       {/*  Payment Options */}
        <Stack w={"100%"} alignItems={{ base: "center", lg: "flex-start" }}>
          <Flex
            w={"85%"}
            direction={{ base: "column", lg: "row" }}
            justifyContent={{ base: "space-around", lg: "space-between" }}
            bg={"white"}
            mt={{ base: "50px", lg: "100px" }}
          >
            <Stack
              display={{ sm: "none", md:"flex" }}
              w={{ base: "100%", lg: "530px" }}
              h={{ base: "auto", lg: "541px" }}
              alignItems={"flex-end"}
              justifyContent={"space-around"}
              bg={"brand.deepgrey"}
              borderTopLeftRadius={{ base: "15px", lg: "0" }}
              borderBottomLeftRadius={{ base: "15px", lg: "0" }}
              borderTopRightRadius={"8px"}
              borderBottomRightRadius={"8px"}
              py={{ base: "60px", lg: "40px" }}
              spacing={4}
            >
              <Flex
                width={"350px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex
                  py={8}
                  width={{ base: "90px", lg: "114px" }}
                  h={{ base: "90px", lg: "114px" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  bg={"white"}
                >
                  <Icon as={Tuition} width={"57px"} h={"57px"} />
                </Flex>
                <Stack color={"white"} w={{ base: "50%", lg: "60%" }}>
                  <Heading>500,000</Heading>
                  <Text>Tuition Fee</Text>
                </Stack>
              </Flex>
              <Flex
                width={"350px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex
                  py={8}
                  width={{ base: "90px", lg: "114px" }}
                  h={{ base: "90px", lg: "114px" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  bg={"white"}
                >
                  <Icon as={Hourglass} width={"57px"} h={"57px"} />
                </Flex>
                <Stack color={"white"} w={{ base: "40%", lg: "60%" }}>
                  <Heading>6</Heading>
                  <Text>Months</Text>
                </Stack>
              </Flex>
            </Stack>
            <Stack
              m={{ base: "20px", md: "20px", lg:"20px" }}></Stack>
            <Stack
              w={{ base: "100%", lg: "100%" }}
              mt={{ base: "20px",lg: "none" }}
            >
              <Heading py={"15px"}>Payment & Sponsorship</Heading><br />
              <Tabs variant="unstyled">
                <TabList>
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
                    py={{ base: "10px", lg: "10px" }}
                    px={{ base: "20px",md:"50px", lg: "70px" }}
                  >
                    Self Sponsorship Plan - SSP
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
                    py={{ base: "10px", lg: "10px" }}
                    px={{ base: "20px", md:"50px",lg: "70px" }}
                  >
                    Financial Investment Plan - FIP 
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel px={0} py={8}>
                    <Text mb={"40px"}>
                      The Self Sponsorship Plan - SSP is a (Payment-Learn-Earn) payment plan
                      where prospective learners either sponsor themselves and/or a third-party from the learner
                      help with the training costs.<br /><br />
                      We are so confident that our training and career support will lead to a high paying jobs for the learner
                      after going through our 6-month intensive training 
                    </Text>
                    <ReactRouterLink to="/application">
                      <Flex
                        w={"100%"}
                        alignItems={"center"}
                        fontSize={"18px"}
                        color={"brand.fuscia"}
                        fontWeight={"bold"}
                      >
                        <Text mr={2}>Enroll now</Text>{" "}
                        <BsArrowRight size={"20px"} />
                      </Flex>
                    </ReactRouterLink>
                  </TabPanel>
                  <TabPanel px={0} py={8}>
                    <Text mb={"40px"}>
                      <p>
                      Learners who cannot afford the bootcamp fees can opt for the
                      FIP(Financiers Investment Plan):<br /><br />This is a (Learn-Earn-Payment)
                      action plan. <br /><br />
                      Here, Zulfah and its financier partners will agree to sponsor learners
                      throughout the programme under which the student agree to pay XY% of
                      your post-Zulfah training income for XYmonths as agreed by the learner
                      and the financier partner.
                      </p>
                    </Text>
                    <ReactRouterLink to="/application">
                      <Flex
                        w={"100%"}
                        alignItems={"center"}
                        fontSize={"18px"}
                        color={"brand.fuscia"}
                        fontWeight={"bold"}
                      >
                        <Text mr={2}>Enroll now</Text>{" "}
                        <BsArrowRight size={"20px"} />
                      </Flex>
                    </ReactRouterLink>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </Flex>
        </Stack>
       {/*  Payment Options */}
       


        {/*  Company our student works */}
        <Stack w={"100%"} mb={0} mt={50} alignItems={{ base: "center" }}
          display={{ base: "none", md: "flex" }}
        >
        <Heading w={"80%"} fontSize={{base:"20px"}} textAlign={{ base: "center", lg: "center" }}>
           Companies Our Graduates Work For
        </Heading><br />
        <Flex
            w={"85%"}
            direction={{ base: "row", md:"row", lg: "row" }}
            bg={"white"}
            mt={{ base: "20px", lg: "100px" }}
          >
            <Stack
              w={{ base: "100%" }}
            >
               <Box
                  display={{ base: "flex" }}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  w={"100%" }
                  h={"155px"}
                  bg={"brand.white"}
                  borderRadius="12px"
                  boxShadow={"lg"}
                >
            <HStack h={"70%"}  pl={4}>
                  <Stack style={{ alignItems: "center", justifyContent: "center" }}
                          spacing={4} pl={4} pr={4} w={"20%"}>
                    <Image src={Meristem} w={{ md: "100%", lg: "70%" }} alt="Zulfah" />
              </Stack>
              <Divider
                orientation="vertical"
                bg={"brand.deepgrey"}
                color={"brand.deepgrey"}
              />
              <Stack style={{ alignItems: "center", justifyContent: "center" }}
                               spacing={4} pl={4} pr={4} w={"20%"}>
                <Image src={Interswitch}  w={{ md: "100%", lg: "80%" }} alt="Zulfah" />
              </Stack>
                <Divider orientation="vertical" />
                  
              <Stack style={{ alignItems: "center", justifyContent: "center" }}
                    spacing={4} pl={4} pr={4} w={"20%"}>
              <Image src={Flutterwave} alt="Zulfah" w={{ md: "100%", lg: "100%" }} />
              </Stack>
                  
              <Divider orientation="vertical" />
                  
              <Stack style={{ alignItems: "center", justifyContent: "center" }}
                    spacing={4} pl={4} pr={4} w={"20%"}>
                <Image h={50} w={{ md: "100%", lg: "70%" }} alignItems="start" src={HerVest} alt="Zulfah" />
              </Stack>
              <Divider orientation="vertical" />
              <Stack style={{ alignItems: "center", justifyContent: "center" }}
                              spacing={4} pl={4} pr={4} w={"15%"}>
              <Image src={logo} w={{ md: "100%", lg: "100%" }} alt="Zulfah" />
              </Stack>
            </HStack>

               </Box>
            </Stack>
          </Flex>
        </Stack>
        {/*  Company our student works */}
        
        
        {/*  Graduate Testimonials */}
        <Stack w={"100%"} mb={10} alignItems={{ base: "center" }} >
          <Flex
            w={"85%"}
            direction={{ base: "column", lg: "row" }}
            bg={"white"}
            mt={{ base: "30px", md: "10px" }}
          >
            
            <Stack
              w={{ base: "100%" }}
              mt={{ base: "50px"}}
            >
              <Heading py={"15px"}
                fontSize={{ base: "20px" }}
                textAlign={"center"}>Our Alumni Speak</Heading>
            
                <Box bg={useColorModeValue('gray.100', 'gray.700')}>
                  <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                   
                    <Stack
                      direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    {students_reviews.map((testimonial) => (
                      <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                        <TestimonialText>
                          {testimonial.review}
                        </TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={""}
                        name={ `${testimonial.name}` }
                        title={`${testimonial.work}`}
                      />
                      </Testimonial>
                    ))}
                     
                      
                    </Stack>
                  </Container>
                </Box>
              


            </Stack>
          </Flex>
        </Stack>
       {/*  Graduate Testimonials */}
       
        

      {/*  Payment Options */}
        {/* <Stack w={"100%"} alignItems={{ base: "center", lg: "flex-start" }}>
          <Flex
            w={"85%"}
            direction={{ base: "column", lg: "row" }}
            bg={"white"}
            mb={{ base: "50px", lg: "100px" }}
          >
            <Stack
              w={{ base: "100%", lg: "541px" }}
              mt={{ base: "50px", lg: "none" }}
            >
              <Heading
                py={"15px"}
                textAlign={"center"}>
                Testimonials
              </Heading>
              <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </Flex>
        </Stack> */}
       {/*  Payment Options */} 



        <FAQs />        
        <ApplicationCTA />

        
      </Box>
      <Footer />
    </Box>
  );
}
