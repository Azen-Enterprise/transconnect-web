import { Box, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Card } from '../components'

const blogs = [
  {
    subTitle: 'SOFT LIFE FOR DI AH-SIDE',
    title: 'Your time on queues are over',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel planning experience'
  },
  {
    subTitle: 'PAY INSIDE SIA',
    title: 'Pay from your device',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel  experience'
  },
  {
    subTitle: 'GERER ALL MAN',
    title: 'Book for yourself and others',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel planning experience'
  },
  {
    subTitle: 'SOFT LIFE FOR DI AH-SIDE',
    title: 'Your time on queues are over',
    description: 'A quick summary of how downloading the mobile app can boost the user’s travel planning experience'
  }
]


export default function Blog() {
  return (
    <Flex
      width="100%"
      bg="#162F26"
      px={16}
      pt={8}
      flexDirection={"column"}
    >
      <FormControl display={"flex"} justifyContent={"flex-end"}>
        <Input py={2} mt={1} minW={220} maxW={420} variant="flushed" className='lineInput' placeholder='Search Article' />
      </FormControl>
      <Text lineHeight={1.3} mt={2} className='header' color={"#fff"} width={"70%"}>
        Read About journeying  <br /> in <span style={{ color: "#BCC015" }}>Cameroon</span>
      </Text>

      <Flex flexWrap={"wrap"} justifyContent={"center"} mt={20} pb={60}>
        {
          blogs.map((blog, i) => (
            <Card
              key={i}
              subTitle={blog.subTitle}
              description={blog.description}
              title={blog.title}
            />
          ))
        }
      </Flex>
    </Flex>
  )
}
