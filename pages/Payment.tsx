import { Flex, Text, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'
import BankPaymentCard from '../components/Card/BankPaymentCard'
import IdentityCard from '../components/Card/IdentityCard'
import MobilePaymentCard from '../components/Card/MobilePaymentCard'

export default function Payment() {

  const handleSubmit = () => {

  }

  return (
    <Flex
      width="100%"
      flexDirection={"column"}
    >
      <Flex
        bg="#162F26"
        width="100%"
        px={120}
        py={20}
        height={"50vh"}
      >
        <Box className='header' color={"#fff"} width={"100%"}>
          Please Authenticate <br /> your <span>Identity</span> <span>&amp;</span>
          <Text className='header' color={"#BCC015"}>Method of Payment</Text>
        </Box>
      </Flex>
      <Flex pt={20} pb={40} px={120} bg={"#fff"} minHeight={900}>
        <Flex flexDirection={"column"}>
          <Text className='header'>Pay For Your Trip</Text>
          <Text my={4} lineHeight={1.5} fontWeight={400} fontSize={20}>
            This is where users and other interested parties can learn about TransApp as a company,
            its products and values, team and structure, partners and prospects, business wins,
            actions towards corporate social, ethical and environmental responsibilities.
          </Text>

          <Flex flexDirection={"column"} alignItems={"center"}>
            <Box my={8}>
              <BankPaymentCard />
            </Box>
            <Box my={8}>
              <MobilePaymentCard />
            </Box>
            <Box my={8}>
              <IdentityCard />
            </Box>
          </Flex>
        </Flex>
      </Flex>

    </Flex >
  )
}
