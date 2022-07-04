/* eslint-disable react/no-children-prop */
import React from 'react';
import { Button, Flex, Radio, Text, Input, InputGroup, Box, InputRightElement, Icon } from "@chakra-ui/react";
import { MdArrowDropDown } from 'react-icons/md';
import Image from 'next/image';

export default function IdentityCard() {
  return (
    <Flex
      border={"1px solid #A6A6A6"}
      backgroundColor={"#fff"}
      borderRadius={4}
      width={900}
      flexDirection={"column"}
      px={10}
      py={8}
    >
      <Radio size={"lg"} mr={-8} mt={-4} alignSelf={"flex-end"}></Radio>
      <Text color={"#353535"} fontSize={24} fontWeight={700}>Mobile Money Payment</Text>
      <Flex width={"100%"} justifyContent={"space-between"}>
        <Flex flexDirection={"column"} width={"60%"}>
          <Text color={"#9C9C9C"} my={4}>
            This is where users and other interested parties can learn.
            This is where users and other interested parties can learn.
            This is where users and other interested parties can learn.
            This is where users and other interested parties can learn.
          </Text>
          <InputGroup my={4} height={50} borderColor={"#A6A6A6"}>
            <Input placeholder='Enter your ID Card number' />
          </InputGroup>
          <Radio size={"lg"} mb={6} mt={2}>
            No, Do not save ID Card details
          </Radio>
          <Radio size={"lg"}>
            yes, please save my ID card details
            for my future use
          </Radio>
        </Flex>
        <Flex width={"30%"} flexDirection={"column"} justifyContent={"space-between"}>
          <Flex>
            <Image
              src={require(`../../assets/identity.png`)}
              alt=""
              layout='fixed'
              width={200}
              height={100}
            />
          </Flex>
          <Button width={200} bg="#BCC015" color="#fff">
            Validate
          </Button>
        </Flex>
      </Flex>
    </Flex >
  )
}
