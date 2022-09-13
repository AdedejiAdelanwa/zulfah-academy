import {React, useState} from "react";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/Navigation";
import guyWithLaptop from "../assets/guy-with-laptop.png"
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Input,
  Text,
  StackDivider,
  FormControl,
  SimpleGrid,
  useToast,
  useColorModeValue,
  Container,
  Image,
  
} from "@chakra-ui/react";
import axios from "axios" 
import { CheckIcon } from '@chakra-ui/icons';
import {
  IoCloudySharp, IoLogoReact,
   IoCafeSharp,
  IoHourglassSharp,IoCloudUploadSharp
} from 'react-icons/io5';
import { FcAssistant,FcVoicePresentation,FcLink } from 'react-icons/fc';
import { BaseUrl } from "../utils/Url" 

export default function Courses() {

  const [email, setEmail] = useState('');
  const [state, setState] = useState('initial')

  const [error, setError] = useState(false);
  const toast = useToast()
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  const Feature2 = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };
  const  showToast = (title, desc, status) => {
    toast({
      title,
      description: desc,
      status,
      duration: 5000,
      isClosable: true,
    }) 
  }
  async function onSubmit(e) {
      e.preventDefault();
      setError(false);
      setState('submitting');
      try {
        const{ data } = await axios({
          method: "post",
          url: `${BaseUrl}/newsletter/subscribe`,
          data: {  email  }
        })
        showToast("Success", data.message, "success");
        setState('success')
      } catch (error) {
        setError(true)
        showToast("Error",error.response.data.message, "error");
          setState('initial')
          return
      }

     }

  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Container maxW={'6xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            We are who we are
          </Text>
          <Heading>Technology is art . </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
              You’ll learn the latest in-demand tech skills from real-world programmers.
              Our range of courses will help you develop and improve your skills.
              Our courses are frequently updated with the latest information so you can always
              stay at the top of your career.
          </Text><br />
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoLogoReact} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'FRONTEND'}
            />
            <Feature
              icon={<Icon as={IoCloudySharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'BACKEND'}
            />
            <Feature
              icon={
                <Icon as={IoCafeSharp} color={'teal'} w={5} h={5} />
              }
              iconBg={useColorModeValue('teal.100', 'teal.900')}
              text={'FULLSTACK'}
              />
              
              <Feature
          icon={
            <Icon as={IoCloudUploadSharp} color={'blue.500'} w={5} h={5} />
          }
          iconBg={useColorModeValue('blue.100', 'blue.900')}
          text={'DEVOPS'}
        />
              <Feature
                icon={
                  <Icon as={IoHourglassSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'WEB3'}
          /> 
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={guyWithLaptop }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    
        <Box pt={100}>
          <Heading py={"15px"}
            fontSize={{ base: "25px" }}
            textAlign={"center"}>Still not sure which course is right for me ? 
          </Heading>
          <Text textAlign={"center"}>
            Talk to one of our career coach.<br /> Join our event to find your path to a tech career.</Text>
          <br /><br />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature2
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'You can talk to us'}
          text={
            `You can reach out to us via call or whatsapp on +2348115371014. Lets meet you, 
                 we will ask you few more questions and definitely reach out with more infromation 
                 on which of the courses is a best fit.`
          }
        />
        <Feature2
          icon={<Icon as={FcVoicePresentation} w={10} h={10} />}
          title={'Join our event'}
          text={
                `Our monthly session with Industry experts is an opportunity to engage tech veterans, network, and gain mentorship. You can always join us 
                at our office to discuss the tech industry, career choices and various oppotunities available.
                .`
          }
        />
        <Feature2
          icon={<Icon as={FcLink} w={10} h={10} />}
          title={'Visit our office'}
          text={
            `Ready to change your career and join the world’s next workforce? Our office is always open, you can walk in anytime 9AM - 5PM. Let's discuss and advise you better on how to start your journey into tech.`
          }
        />
      </SimpleGrid>
        </Box>
     
        <Box pt={100}>
          <Flex
            minH={'auto'}
            align={'center'}
            justify={'center'}>
            <Container
              maxW={'lg'}
              bg={useColorModeValue('white', 'whiteAlpha.100')}
              boxShadow={'xl'}
              rounded={'lg'}
              p={6}
              direction={'column'}>
              <Heading
                as={'h2'}
                fontSize={{ base: 'xl', sm: '2xl' }}
                textAlign={'center'}
                mb={5}>
                Hear From Us
              </Heading>
              <Text mb={10}>
                Subscribe to our newsletter to stay connected to our activities !
              </Text>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                as={'form'}
                spacing={'12px'}
                onSubmit={ onSubmit }
              >
                <FormControl>
                  <Input
                    variant={'solid'}
                    borderWidth={1}
                    color={'gray.800'}
                    _placeholder={{
                      color: 'gray.400',
                    }}
                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                    id={'email'}
                    type={'email'}
                    required
                    placeholder={'Your Email'}
                    aria-label={'Your Email'}
                    value={email}
                    disabled={state !== 'initial'}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </FormControl>
                <FormControl w={{ base: '100%', md: '40%' }}>
                  <Button
                    colorScheme={state === 'success' ? 'green' : 'yellow'}
                    isLoading={state === 'submitting'}
                    w="100%"
                    type={state === 'success' ? 'button' : 'submit'}>
                    {state === 'success' ? <CheckIcon /> : 'Submit'}
                  </Button>
                </FormControl>
              </Stack>
              <Text
                mt={2}
                textAlign={'center'}
                color={error ? 'red.500' : 'gray.500'}>
                {error
                  ? 'Oh no an error occured! 😢 Please try again later.'
                  : "You won't receive any spam! ✌️"}
              </Text>
            </Container>
    </Flex>
        </Box>
        
      </Container>
     
  
      <Footer />
    </Box>
  )
}





