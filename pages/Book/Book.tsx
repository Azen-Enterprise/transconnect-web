import { Flex, Text, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'

export default function Book() {

  const handleSubmit = () => {

  }

  return (
    <Flex
      height={"100vh"}
      width="100%"
      bg="#162F26"
      px={120}
      pt={80}
      flexDirection={"column"}
    >
      <Text lineHeight={1.3} className='header' color={"#fff"} width={"50%"}>
        <Text className='header' color={"#BCC015"}>Booking a bus trip</Text> is now within your fingertips
      </Text>

      <Flex
        bg={"#fff"}
        px={60}
        py={80}
        justifyContent={"space-between"}
        mt={60}
      >
        <FormControl>
          <FormLabel fontWeight={600}>Departure City:</FormLabel>
          <Input py={8} mt={32} width={220} className='lineInput' placeholder='Douala'/>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight={600}>Arrival City:</FormLabel>
          <Input py={8} mt={32} width={220} className='lineInput' placeholder='Yaounde'/>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight={600}>Departure Date:</FormLabel>
          <Input py={8} mt={32} width={220} className='lineInput' placeholder='2/21/2021'/>
        </FormControl>
        <Button width={"20%"} bg={"#BCC015"} color={"#fff"} className='btn'>
          Go!
        </Button>
      </Flex>
    </Flex>
  )
}
