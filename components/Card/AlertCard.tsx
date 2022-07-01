import { Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Flex, Icon, Box, Button } from '@chakra-ui/react'

export default function AlertCard() {
  return (
    <Flex
      height={360}
      width={280}
      borderWidth={2}
      px={20}
      pt={40}
      pb={20}
      borderRadius={5}
      bg={"#fff"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Icon as={AiOutlineCheckCircle} fontSize={48} color={"#BCC015"} />
      <Box lineHeight={1.5}>
        <Text>Okay!</Text>
        <Text>You are going to Yaounde</Text>
      </Box>

      <Box lineHeight={1.5}>
        <Text>Your ticket has been</Text>
        <Text>sent to your mail</Text>
      </Box>

      <Button className="btn" width={"100%"} color="grey">
        Proceed
      </Button>
    </Flex>
  )
}
