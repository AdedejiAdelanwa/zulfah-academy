import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import Spacedev from "../assets/space-dev.png";
import AppNavigation from "../components/AppNavigation";
import {
  countries,
  devYears,
  paymentOptions,
  processStages,
  qualifications,
} from "../utils/lists";
export const Application = () => {
  const [progress, setProgress] = useState("not started");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [countryState, setCountryState] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [devExperience, setDevExperience] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitted", {
      fullname,
      country,
      gender,
      university,
      devExperience,
    });
    setProgress("submitted");
  }

  return (
    <Flex pos={"relative"} h={"100vh"} bg={"white"}>
      <AppNavigation />
      <Stack
        h={"100%"}
        w={"40%"}
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={6}
        bg={"brand.bluishgrey"}
        color={"white"}
        paddingTop={"60px"}
      >
        <Heading fontSize={"36px"} w={"420px"}>
          A few clicks away from begining your career in software engineering
        </Heading>
        <Box>
          <Image boxSize={"430px"} src={Spacedev} alt="Space develper" />
        </Box>
      </Stack>
      <Stack
        w={{ base: "100%", lg: "60%" }}
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "center" }}
        spacing={4}
        bg={"white"}
        color={"black"}
      >
        <Stack w={{ base: "90%", lg: "60%" }} h={{ base: "auto", lg: "500px" }}>
          {progress === "submitted" ? (
            <Stack
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
              bg={"white"}
              spacing={8}
              p={8}
              borderRadius={4}
              boxShadow={"md"}
            >
              <Icon
                w="100px"
                h="100px"
                color={"brand.fuscia"}
                as={AiFillCheckCircle}
              />
              <Heading>
                Your application is successful, we'll be in touch soon
              </Heading>
              <Button
                variant={"solid"}
                bg={"brand.gold"}
                w="150px"
                color={"black"}
                size={"lg"}
                borderRadius={4}
              >
                <ReactRouterLink to="/">Home</ReactRouterLink>
              </Button>
            </Stack>
          ) : (
            <form onSubmit={handleSubmit}>
              {progress === "not started" && (
                <Stack spacing={4} pt={{ base: "100px", lg: "0px" }}>
                  <Heading>Application</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    sed mattis in ornare nisl in. Tortor, ut eget nibh ipsum
                  </Text>
                  {processStages.map((stage, index) => (
                    <Box
                      key={index}
                      w={"100%"}
                      bg={"white"}
                      boxShadow={"md"}
                      p={5}
                      borderRadius={4}
                      marginBottom={"10px"}
                      _last={{ marginBottom: "20px" }}
                    >
                      <Heading fontSize={"16px"}>{stage.heading}</Heading>
                      <Text fontSize={"12px"}>{stage.summary}</Text>
                    </Box>
                  ))}
                  <Button
                    variant={"solid"}
                    color={{ base: "black", lg: "white" }}
                    bg={{ base: "brand.gold", lg: "brand.fuscia" }}
                    w={{ base: "100%", lg: "150px" }}
                    size={"lg"}
                    alignSelf={"flex-end"}
                    onClick={() => setProgress("personal")}
                  >
                    Get started
                  </Button>
                </Stack>
              )}
              {progress === "personal" && (
                <Stack spacing={8}>
                  <Heading fontSize={"36px"}>Personal details</Heading>
                  <SimpleGrid
                    columns={{ base: 2, lg: 3 }}
                    columnGap={4}
                    rowGap={4}
                    w="100%"
                  >
                    <GridItem colSpan={{ base: 2, lg: 3 }}>
                      <Input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </GridItem>
                    <GridItem colSpan={{ base: 2, lg: 3 }}>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone number"
                        required
                      />
                    </GridItem>
                    <GridItem colSpan={{ base: 2, lg: 3 }}>
                      <Select
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      >
                        {countries.map((country) => (
                          <option key={country.name} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </Select>
                    </GridItem>
                    <GridItem colSpan={{ base: 2, lg: 3 }}>
                      <Input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        type="text"
                        value={countryState}
                        onChange={(e) => setCountryState(e.target.value)}
                        placeholder="State"
                        required
                      />
                    </GridItem>
                    <GridItem colSpan={{ base: 2, lg: 1 }}>
                      <Input
                        type="text"
                        value={postalcode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="Postal code"
                        required
                      />
                    </GridItem>

                    <GridItem colSpan={1}>
                      <Select
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Select>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, lg: 2 }}>
                      <Input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="Date of birth"
                        required
                      />
                    </GridItem>
                  </SimpleGrid>
                  <Button
                    variant={"solid"}
                    color={{ base: "black", lg: "white" }}
                    bg={{ base: "brand.gold", lg: "brand.bluishgrey" }}
                    w="100%"
                    size={"lg"}
                    onClick={() => setProgress("education")}
                    mt={{ base: "30px", lg: "50px" }}
                  >
                    Next
                  </Button>
                </Stack>
              )}
              {progress === "education" && (
                <Stack spacing={8}>
                  <Heading fontSize={"36px"}>Education Information</Heading>
                  <SimpleGrid columns={1} rowGap={4} w="100%">
                    <GridItem colSpan={1}>
                      <Select
                        placeholder="What is your highest qualification?"
                        value={highestQualification}
                        onChange={(e) =>
                          setHighestQualification(e.target.value)
                        }
                        required
                      >
                        {qualifications.map((qualification, index) => (
                          <option key={index} value={qualification}>
                            {qualification}
                          </option>
                        ))}
                      </Select>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        type="tel"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="Where did you graduate from?"
                        required
                      />
                    </GridItem>

                    <GridItem colSpan={1}>
                      <Input
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        placeholder="Course of Study"
                        required
                      />
                    </GridItem>

                    <GridItem colSpan={1}>
                      <Select
                        placeholder="Programming Experience"
                        value={devExperience}
                        onChange={(e) => setDevExperience(e.target.value)}
                        required
                      >
                        {devYears.map((experience, index) => (
                          <option key={index} value={experience}>
                            {experience}
                          </option>
                        ))}
                      </Select>
                    </GridItem>
                  </SimpleGrid>
                  <Stack>
                    <Button
                      variant={"outline"}
                      color={"black"}
                      bg={"white"}
                      w="100%"
                      size={"lg"}
                      onClick={() => setProgress("personal")}
                      mt={{ base: "30px", lg: "50px" }}
                    >
                      Back
                    </Button>
                    <Button
                      variant={"solid"}
                      color={{ base: "black", lg: "white" }}
                      bg={{ base: "brand.gold", lg: "brand.bluishgrey" }}
                      w="100%"
                      size={"lg"}
                      onClick={() => setProgress("payment")}
                      mt={{ base: "30px", lg: "50px" }}
                    >
                      Next
                    </Button>
                  </Stack>
                </Stack>
              )}
              {progress === "payment" && (
                <Stack spacing={8}>
                  <Heading fontSize={"36px"}>Payment Option</Heading>
                  <SimpleGrid columns={1} rowGap={4} w="100%">
                    <GridItem colSpan={1}>
                      <Select
                        placeholder="Please select payment options"
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                        required
                      >
                        {paymentOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </GridItem>
                  </SimpleGrid>
                  <Stack>
                    <Button
                      variant={"outline"}
                      color={"black"}
                      bg={"white"}
                      w="100%"
                      size={"lg"}
                      onClick={() => setProgress("education")}
                      mt={{ base: "30px", lg: "50px" }}
                    >
                      Back
                    </Button>
                    <Button
                      variant={"solid"}
                      color={{ base: "black", lg: "white" }}
                      bg={{ base: "brand.gold", lg: "brand.bluishgrey" }}
                      w="100%"
                      size={"lg"}
                      onClick={handleSubmit}
                      mt={{ base: "30px", lg: "50px" }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              )}
            </form>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
};
