/* eslint-disable react/no-children-prop */
import React from 'react';
import { Button, Flex, Radio, Text, Input, InputGroup, Box, InputRightElement, Icon } from "@chakra-ui/react";
import { MdArrowDropDown } from 'react-icons/md';
import Image from 'next/image';

const payments = [
  {
    image: 'om.png',
    name: "Orange Money"
  },
  {
    image: 'momo.png',
    name: "Mobile Money"
  },

]

export default function MobilePaymentCard() {
  return (
    <Flex
      border={"1px solid #A6A6A6"}
      backgroundColor={"#fff"}
      borderRadius={4}
      height={280}
      width={900}
      flexDirection={"column"}
      px={10}
      py={8}
    >
      <Radio size={"lg"} mr={-8} mt={-4} alignSelf={"flex-end"}></Radio>
      <Text color={"#353535"} fontSize={24} fontWeight={700}>Mobile Money Payment</Text>
      <Flex justifyContent={"space-between"} flex={1} width={"100%"}>
        <Flex flexDirection={"column"} flex={1} justifyContent={"space-around"}>
          <Flex justifyContent={"space-between"}>
            <Flex flexDirection={'column'} width={"65%"}>
              <Text color={"#9C9C9C"}>This is where users and other interested parties can learn.</Text>
              <InputGroup my={4} height={50} borderColor={"#A6A6A6"}>
                <Input placeholder='Enter your phone number' />
              </InputGroup>
              <InputGroup height={50} borderColor={"#A6A6A6"}>
                <Input placeholder='Enter account number' />
              </InputGroup>
            </Flex>
            <Flex width={"30%"} justifyContent={"flex-end"} color={"#fff"}>
              {payments.map((method) => {
                return (
                  <Box key={method.name} mr={4}>
                    <Image
                      src={require(`../../assets/${method.image}`)}
                      alt={method.name}
                      width={120}
                      height={60}
                    />
                  </Box>
                )
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex >
  )
}
