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
      pt={20}
      flexDirection={"column"}
    >
      <Box lineHeight={1.3} className='header' color={"#fff"} width={"60%"}>
        <Text className='header' color={"#BCC015"}>Booking a bus trip</Text> is now within your fingertips
      </Box>

      <Flex
        bg={"#fff"}
        px={8}
        py={12}
        justifyContent={"space-between"}
        alignItems={"center"}
        my={28}
        minH={80}
      >
        <FormControl mr={8}>
          <FormLabel fontWeight={600}>Departure City:</FormLabel>
          <Input py={2} mt={1} minW={180} variant="flushed" placeholder='Douala' />
        </FormControl>
        <FormControl mr={8}>
          <FormLabel fontWeight={600}>Arrival City:</FormLabel>
          <Input py={2} mt={1} minW={180} variant="flushed" placeholder='Yaounde' />
        </FormControl>
        <FormControl mr={8}>
          <FormLabel fontWeight={600}>Departure Date:</FormLabel>
          <Input py={2} mt={1} minW={180} variant="flushed" placeholder='2/21/2021' />
        </FormControl>
        <Button minW={280} height={20} bg={"#BCC015"} color={"#fff"} className="btn" >
          Go!
        </Button>
      </Flex>
    </Flex>
  )
}
