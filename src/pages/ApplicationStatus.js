import React, { useState, useEffect } from "react" 
import axios from "axios" 
import { Link as ReactRouterLink } from "react-router-dom" 

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
  useDisclosure
} from "@chakra-ui/react" 
import Spacedev from "../assets/space-dev.png" 
import AppNavigation from "../components/AppNavigation" 
import { BaseUrl } from "../utils/Url" 
import Confetti from "react-confetti";

export const ApplicationStatus = () => {
  const { onClose } = useDisclosure();
  const [resultStatus, setResultStatus] = useState(null)  //null, 0-pending,1-rejected,2-success,
  const [email, setEmail] = useState("") 
  const [fullname, setFullname] = useState("")
  const [programme, setProgramme] = useState("")
  const [programmeType, setProgrammeType] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false) 
  const [successMessage, setSuccessMessage] = useState("")
  const toast = useToast()

  
  async function handleSubmit(e) {
      e.preventDefault() 
      if (!email) { 
        toast({
          title: "Email is required.",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
        return 
          
      }
    setIsSubmitted(true)   //submitting
    try {
      const{data} = await axios({
        method: "get",
        url: `${BaseUrl}/application/status/${email}`
      })
        if (data.data.status === "pending") {
            setResultStatus(0)  //pending
            setSuccessMessage("Application is still pending")
        } else if (data.data.status === "rejected") { 
            setResultStatus(1)  //rejected
            setSuccessMessage("Good one chap, Better luck next time")
        } else if (data.data.status === "success") { 
            setResultStatus(2)  //success
            setFullname(`${data.data.surname} ${data.data.othernames}`)
            setProgrammeType(data.data.programme_type)
            setProgramme(data.data.programme)
            setSuccessMessage("Congratulations! You have been accepted")
        } else {
            
        }

        onClose()
        setIsSubmitted(false) 
       showToast("Success", successMessage, "success");
    } catch (error) {
      setIsSubmitted(false) 
      console.log(error.response.data.message)
      showToast("Error",error.response.data.message, "error");
      onClose(); 
    }
  }

  const  showToast = (title, desc, status) => {
        toast({
        title,
        description: desc,
        status,
        duration: 5000,
        isClosable: true,
        }) 
  }
    
    return ( 
    
        <Flex pos={"relative"} h={"100vh"} bg={"white"}>
        <AppNavigation />
        <Stack
            h={"100%"}
            w={"40%"}
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={6}
            bg={"brand.bluishgrey"}
            color={"white"}
            paddingTop={"60px"}
            >
            <Heading fontSize={"36px"} w={"420px"} textAlign={"center"}>
            Track your <br /> Application here
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
            <Stack w={{ base: "90%", lg: "80%" }} h={{ base: "auto", lg: "500px" }}>
            { resultStatus === null && //means user want to check application status
                <form>
                    <Stack spacing={4} pt={{ base: "20px", lg: "0px" }}>
                    <Heading>Application</Heading>
                    <Text>
                      Check status of your application... Kindly input the <b>email address</b> associated with your application.
                    </Text>
                    <Box
                        w={"100%"}
                        bg={"white"}
                        boxShadow={"md"}
                        p={5}
                        borderRadius={4}
                        marginBottom={"10px"}
                        _last={{ marginBottom: "20px" }}
                        >
                        <Input
                            id='email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            required 
                        /><br /><br />
                        <Button
                            variant={"solid"}
                            color={{ base: "white", lg: "white" }}
                            bg={{ base: "brand.fuscia", lg: "brand.fuscia" }}
                            w={{ base: "100%", lg: "150px" }}
                            size={"md"}
                            alignSelf={"flex-start"}
                            onClick={ handleSubmit}
                            >  {isSubmitted === 3 ? "Searching ..." : "Check Status"}  </Button>  
                        
                        </Box>
                                    

                    </Stack>
                
                </form>
                        
            }
            {resultStatus === 0 && //pending - means result application is still pending
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
                <>
                    <Heading color={"#cf3a5e"}> Pending ... </Heading>
                    <Text>Hi <b>{email} </b>, <br /> We know you cant wait to start this journey with us .<br /> C'mon we also can't wait to get started with you</Text>
                    <Text>Kindly check back later ,<br /> application result will be out soon.</Text>
                                <br />✌🏽
                </>
                </Stack>
            }
                    
            {resultStatus === 1 && //rejected - means user have been rejected addmission
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
                <>
                    <Text>We know you gave this your best shot </Text> and we were impressed 
                    <Text>We wanted to let you know that we decided to move forward with other candidates for the current cohort. 
                          This does not reflect negative judgement of your background or experience.
                          We really appreciate you taking the time to speak with us and hope you'll consider a future cohort.<br /><br /><br />
                          wishing you the very best and do have a great rest for the week.🤗
                     </Text>
                    <Heading color={"#cf3a5e"}> Better luck next time </Heading>
                    
                </>
                </Stack>
            }
            {resultStatus === 2 &&  //success - means user have ben granted addminssion
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
                    <>
                        <Heading>🥳</Heading>
                        < Confetti />
                        <Heading color={"#cf3a5e"}> Congratulations </Heading>
                        <Text> <b>{fullname.toLocaleUpperCase()}</b> <br />  {email}</Text>
                        <Text>You have been selected <br /><b>{programme.toLocaleUpperCase()}</b> - <b>{programmeType.toLocaleUpperCase()}</b>, Cohorts 3, 2022.</Text>
                        <br />
                        <Text>Kindly check your email, accept the offer sent and wait for the next step.✌🏽 </Text>
                    </>
                </Stack>
            } 
            
            
            </Stack>
        </Stack>
        </Flex>
     
  ) 
} 
