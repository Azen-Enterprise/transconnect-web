import React from 'react';
import styles from './Footer.module.scss';
import { Box, Flex, Link, Text, Icon, Button } from '@chakra-ui/react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const quickLinks = [
  {
    title: "About",
    to: ""
  },
  {
    title: "Blog",
    to: ""
  },
  {
    title: "Become a partner",
    to: ""
  }
]

const legal = [
  {
    title: "Terms of Service",
    to: ""
  },
  {
    title: "Privacy Policy",
    to: ""
  },
  {
    title: "Disclaimer",
    to: ""
  }
]

const hotline = [
  {
    title:"+236 620 000 000",
    to: ""
  },
  {
    title: "Customer Support",
    to: ""
  },
  {
    title: "support@transapp.cm",
    to: ""
  }
]

const socials = [
  {
    icon: FaFacebookF,
    to: ""
  },
  {
    icon: FaInstagram,
    to: ""
  },
  {
    icon: FaTwitter,
    to: ""
  },
  {
    icon: SiGmail,
    to: ""
  },
  {
    icon: FaYoutube,
    to: ""
  },
]

const payments = [
  {
    image: "momo.png",
    name: "Mobile money"
  },
  {
    image: 'om.png',
    name: "Orange money"
  },
  {
    image: 'visa.png',
    name: "Visa"
  },
  {
    image: 'mastercard.png',
    name: "Mastercard"
  },
]
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <Flex flexDirection={"column"} flex={0.5}>
          <Text fontWeight={500} fontSize={20}>TransApp</Text>
          <Text my={16} width={"60%"} lineHeight={2}>Booking a bus trip is now within your finger tips. Skip a line, book online</Text>
        </Flex>
        <Flex flex={0.5} justifyContent={"space-around"} alignItems={"center"}>
          <Button 
            height={80} 
            width={220} 
            backgroundColor={"#fff6"}
            className='btn btn__rounded'
          >
            <Icon fontSize={48} color={"#fff"} as={IoLogoGooglePlaystore}/>
            <Box ml={24} textAlign={"left"}>
              <Text color={"#fff"}>Get it on</Text>
              <Text color={"#fff"}>App Store</Text>
            </Box>
          </Button>
          <Button 
            height={80} 
            width={220} 
            backgroundColor={"#fff6"}
            className='btn btn__rounded'
          >            <Icon fontSize={48} color={"#fff"} as={FaApple}/>
            <Box ml={24} textAlign={"left"}>
              <Text color={"#fff"}>Get it on</Text>
              <Text color={"#fff"}>App Store</Text>
            </Box>
          </Button>
        </Flex>
      </div>
      <div className={styles.footer__middle}>
        <Flex  
          flex={0.5} 
          flexDirection={"column"}  
          className={styles.footer__left}
        >
          <Box>
            <Image 
              src={require("../../assets/footer__logo.png")}
              alt="Footer Logo"
              width={120}
              height={40}
            />
          </Box>
          <Text fontWeight={200} my={16} color={"#fff"}>&copy; TransApp Booking LTD</Text>
          <Text fontWeight={200} color={"#fff"}>Terms of Service  |  Privacy Policy</Text>
        </Flex>
        <Flex flex={0.6} className={styles.footer__right}>
          <Flex flexDirection={"column"}>
          <Text mb={12} fontWeight={400} color={"#fff"}>QUICK LINKS</Text>
            {quickLinks.map((link) => (
              <Link my={4} fontWeight={200} color={"#fff"} key={link.title}>
                {link.title}
              </Link>
            ))}
          </Flex>
          <Flex flexDirection={"column"}>
            <Text mb={12} fontWeight={400} color={"#fff"}>LEGAL</Text>
            {legal.map((link) => (
              <Link my={4} fontWeight={200} color={"#fff"} key={link.title}>
                {link.title}
              </Link>
            ))}
          </Flex>
          <Flex flexDirection={"column"}>
            <Text mb={12} fontWeight={400} color={"#fff"}>CUSTOMER HOTLINE</Text>
            {hotline.map((link) => (
              <Link my={4} fontWeight={200} color={"#fff"} key={link.title}>
                {link.title}
              </Link>
            ))}
          </Flex>
        </Flex>
      </div>
      <div className={styles.footer__bottom}>
        <Flex>
          {socials.map((link, i) => (
            <Flex 
              key={i} 
              justifyContent="center"
              alignItems={"center"}
              height={30} 
              mr={8}
              width={30} 
              borderRadius={20} 
              background={"#7A7A7A40"}
            >
              <Icon color={"#fff"} as={link.icon}/>
            </Flex>
          ))}
        </Flex>

        <Flex>
          {payments.map((method) => {            
            return (
              <Box key={method.name} ml={12}>
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
        
      </div>
    </div>
  )
}
