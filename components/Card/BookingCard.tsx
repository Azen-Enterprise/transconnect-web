import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react'

export default function BookingCard() {
  return (
    <Flex
      p={40}
      borderRadius={5}
      bg={"#F7F5F5"}
      height={330}
    >
      <Flex height={"100%"} mr={10} flexDirection={"column"} justifyContent={"space-between"}>
        <Button height={40} className='btn' bg={"#353535"} color={"#fff"}>
          <Text>PRICE :</Text>
          <Text>15 000</Text>
          <Text>XAF</Text>
        </Button>
        <Flex height={165} width={165} bg={"#fff"} borderRadius={100}>
        </Flex>
      </Flex>
      <Flex height={"100%"} flexDirection={"column"} ml={20} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight={500} fontSize={54} color={"#353535"}>YDE - DLA</Text>
        <Flex bg={"#E2E2E2"} width={300} px={20} py={10} borderRadius={5} justifyContent={"space-between"}>
          <Flex color={"#7A7A7A"} fontSize={14} >
            <Text fontWeight={700} >BUS </Text>
            <Text ml={4}>  CE 3244 F</Text>
          </Flex>
          <Flex color={"#7A7A7A"} fontSize={14}>
            <Text fontWeight={700}>CATEGORY</Text>
            <Text ml={4}>VIP</Text>
          </Flex>
        </Flex>
        <Flex bg={"#E2E2E2"} width={300} px={20} py={10} borderRadius={5} justifyContent={"space-between"}>
          <Flex color={"#7A7A7A"} fontSize={14} flexDirection={"column"} >
            <Text fontWeight={700} >BOARDING </Text>
            <Text>05: 00 PM</Text>
          </Flex>
          <Flex color={"#7A7A7A"} fontSize={14} flexDirection={"column"}>
            <Text fontWeight={700}>ARRIVAL</Text>
            <Text>05: 00 PM</Text>
          </Flex>
          <Flex color={"#7A7A7A"} fontSize={14} flexDirection={"column"}>
            <Text fontWeight={700}>DURATION</Text>
            <Text>05: 00 PM</Text>
          </Flex>
        </Flex>
        <Button className='btn' bg="#BCC015" color={"#fff"} width={300} height={40}>Book</Button>
      </Flex>
    </Flex >
  )
}
