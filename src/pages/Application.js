import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Spacedev from "../assets/space-dev.png";
import AppNavigation from "../components/AppNavigation";
import { countries, processStages } from "../utils/lists";
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
    console.log("Submitted");
  }

  return (
    <Flex pos={"relative"} h={"100vh"} bg={"white"}>
      <AppNavigation />
      <Stack
        h={"100%"}
        w={"40%"}
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        justifyContent={"flex-end"}
        spacing={6}
        bg={"brand.bluishgrey"}
        color={"white"}
        paddingTop={"30px"}
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
        justifyContent={{ base: "center", lg: "flex-end" }}
        spacing={8}
        bg={"white"}
        color={"black"}
        paddingTop={"30px"}
      >
        <Stack w={{ base: "90%", lg: "80%" }} h={"600px"} spacing={4}>
          <form onSubmit={handleSubmit}>
            {progress === "not started" && (
              <>
                <Heading>Application</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sed mattis in ornare nisl in. Tortor, ut eget nibh ipsum
                </Text>
                {processStages.map((stage) => (
                  <Box
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
              </>
            )}
            {progress === "personal" && (
              <>
                <Heading>Personal details</Heading>
                <SimpleGrid
                  columns={{ base: 2, lg: 3 }}
                  columnGap={4}
                  rowGap={{ base: 4, lg: 2 }}
                  w={{ base: "100%", lg: "60%" }}
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
                        <option value={country.name}>{country.name}</option>
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
                  w={{ base: "100%", lg: "60%" }}
                  size={"lg"}
                  onClick={() => setProgress("education")}
                  mt={{ base: "30px", lg: "50px" }}
                >
                  Next
                </Button>
              </>
            )}
          </form>
        </Stack>
      </Stack>
    </Flex>
  );
};
