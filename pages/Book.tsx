import { Flex, Text, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'

export default function Book() {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  const handleSubmit = () => {

  }

  return (
    <Flex
      height={"100vh"}
      width="100%"
      bg="#162F26"
      px={isLessThan768 ? 8 : 20}

      flexDirection={"column"}
    >
      <Box lineHeight={1.3} className='header' color={"#fff"} width={isLessThan768 ? "100%" : "60%"}>
        <Text className='header' color={"#BCC015"}>Booking a bus trip</Text> is now within your fingertips
      </Box>

      <Flex
        bg={"#fff"}
        flexDirection={isLessThan768 ? 'column' : 'row'}
        px={8}
        py={12}
        justifyContent={isLessThan768 ? "space-between" : "center "}
        alignItems={"center"}
        my={28}
        minH={80}
      >
        <FormControl mr={isLessThan768 ? 0 : 8} display={"flex"} flexDirection="column" alignItems={"center"}>
          <FormLabel fontWeight={600}>Departure City:</FormLabel>
          <Input py={2} mt={1} maxW={280} variant="flushed" placeholder='Douala' />
        </FormControl>
        <FormControl mr={isLessThan768 ? 0 : 8} display={"flex"} flexDirection="column" alignItems={"center"}>
          <FormLabel fontWeight={600}>Arrival City:</FormLabel>
          <Input py={2} mt={1} maxW={280} variant="flushed" placeholder='Yaounde' />
        </FormControl>
        <FormControl mr={isLessThan768 ? 0 : 8} display={"flex"} flexDirection="column" alignItems={"center"}>
          <FormLabel fontWeight={600}>Departure Date:</FormLabel>
          <Input py={2} mt={1} maxW={280} variant="flushed" placeholder='2/21/2021' />
        </FormControl>
        <Button my={6} minW={180} height={20} bg={"#BCC015"} color={"#fff"} className="btn" >
          Go!
        </Button>
      </Flex>
    </Flex>
  )
}
