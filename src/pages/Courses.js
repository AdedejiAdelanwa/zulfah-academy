import React from "react";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/Navigation";
import guyWithLaptop from "../assets/guy-with-laptop.png"
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  StackDivider,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  GridItem,
  Input,
  Textarea,
  useToast,
  useColorModeValue,
  Container,
  Image,
  
} from "@chakra-ui/react";
import {
  IoBookmarksOutline, IoCloudySharp, IoLogoReact,
  IoBowlingBallSharp, IoCafeSharp, IoEaselSharp,
  IoHourglassSharp,
  IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp
} from 'react-icons/io5';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


export default function Courses() {


  
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
  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Container maxW={'5xl'} py={12}>
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
            Our Story
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
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
              text={'FRONTEND '}
            />
            <Feature
              icon={<Icon as={IoCloudySharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'BACKEND '}
            />
            <Feature
              icon={
                <Icon as={IoCafeSharp} color={'teal'} w={5} h={5} />
              }
              iconBg={useColorModeValue('teal.100', 'teal.900')}
              text={'FULLSTACK'}
            /> <Feature
            icon={
              <Icon as={IoHourglassSharp} color={'purple.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'WEB3'}
          /> <Feature
          icon={
            <Icon as={IoEaselSharp} color={'blue.500'} w={5} h={5} />
          }
          iconBg={useColorModeValue('blue.100', 'blue.900')}
          text={'PRODUCT'}
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
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature2
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature2
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature2
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
     </Box>
     
        
      </Container>
     
  
      <Footer />
    </Box>
  );
}





