/* eslint-disable react/no-children-prop */
import React from 'react';
import { Button, Flex, Radio, Text, Input, InputGroup, Box, InputRightElement, Icon } from "@chakra-ui/react";
import { MdArrowDropDown } from 'react-icons/md';
import Image from 'next/image';

const payments = [
  {
    image: 'visa.png',
    name: "Visa"
  },
  {
    image: 'mastercard.png',
    name: "Mastercard"
  },
  {
    image: 'paypal.png',
    name: "PayPal"
  },
  {
    image: 'amex.png',
    name: "Amex"
  },

]

export default function BankPaymentCard() {
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
      <Text color={"#353535"} fontSize={24} fontWeight={700}>Bank Payment</Text>
      <Flex justifyContent={"space-between"} flex={1} width={"100%"}>
        <Flex flexDirection={"column"} flex={1} justifyContent={"space-around"}>
          <Flex justifyContent={"space-between"}>
            <InputGroup width={"65%"} height={50} borderColor={"#A6A6A6"}>
              <Input placeholder='Enter amount' />
              <InputRightElement children={<Icon color='#9C9C9C' as={MdArrowDropDown} />} />
            </InputGroup>
            <Button className='btn' height={42} width={"30%"} bg={"#B7B7B7"} color={"#fff"}>
              <Text fontWeight={500} fontSize={22}>Validate</Text>
            </Button>
          </Flex>
          <Flex>
            {payments.map((method) => {
              return (
                <Box key={method.name} mr={4}>
                  <Image
                    src={require(`../../assets/${method.image}`)}
                    alt={method.name}
                    width={80}
                    height={50}
                  />
                </Box>
              )
            })}
          </Flex>
          <Text color={"#9C9C9C"}>This is where users and other interested parties can learn.</Text>
        </Flex>
      </Flex>
    </Flex >
  )
}
