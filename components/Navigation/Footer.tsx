import React from "react";
import styles from "./Navigation.module.scss";
import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const quickLinks = [
  {
    title: "About",
    to: "",
  },
  {
    title: "Blog",
    to: "",
  },
  {
    title: "Become a partner",
    to: "",
  },
];

const legal = [
  {
    title: "Terms of Service",
    to: "",
  },
  {
    title: "Privacy Policy",
    to: "",
  },
  {
    title: "Disclaimer",
    to: "",
  },
];

const hotline = [
  {
    title: "+236 620 000 000",
    to: "",
  },
  {
    title: "Customer Support",
    to: "",
  },
  {
    title: "support@transapp.cm",
    to: "",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    to: "",
  },
  {
    icon: FaInstagram,
    to: "",
  },
  {
    icon: FaTwitter,
    to: "",
  },
  {
    icon: SiGmail,
    to: "",
  },
  {
    icon: FaYoutube,
    to: "",
  },
];

const payments = [
  {
    image: "momo.png",
    name: "Mobile money",
  },
  {
    image: "om.png",
    name: "Orange money",
  },
  {
    image: "visa.png",
    name: "Visa",
  },
  {
    image: "mastercard.png",
    name: "Mastercard",
  },
];

export default function Footer() {
  const [isLessThan896] = useMediaQuery("(max-width: 896px)");
  const [isLessThan448] = useMediaQuery("(max-width: 448px)");


  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <Flex flexDirection={"column"} mr={4}>
          <Text fontWeight={500}>
            TransApp
          </Text>
          <Text
            my={4}
            lineHeight={1.5}
            letterSpacing={1}
            fontWeight={500}
            fontSize={isLessThan896 ? 8 : 16}
          >
            Booking a bus trip is now within your finger tips. Skip a line, book
            online
          </Text>
        </Flex>
        <Flex
          width={"50%"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Button
            minW={20}
            mr={isLessThan448 ? 1 : 4}
            py={isLessThan448 ? 4 : 8}
            px={isLessThan896 ? 8 : 4}
            borderRadius={isLessThan896 ? 40 : 100}
            backgroundColor={"#fff6"}
            className="btn"
          >
            <Icon
              fontSize={isLessThan896 ? 16 : 36}
              color={"#fff"}
              as={IoLogoGooglePlaystore}
            />
            <Box ml={isLessThan448 ? 1 : 4} textAlign={"left"} color={"#fff"}>
              <Text fontSize={isLessThan896 ? 10 : 16}>Get it on</Text>
              <Text fontWeight={500} fontSize={isLessThan896 ? 10 : 16}>
                App Store
              </Text>
            </Box>
          </Button>
          <Button
            minW={20}
            borderRadius={100}
            py={isLessThan448 ? 4 : 8}
            px={isLessThan896 ? 8 : 4}
            backgroundColor={"#fff6"}
            className="btn"
          >
            <Icon
              fontSize={isLessThan896 ? 16 : 36}
              color={"#fff"}
              as={FaApple}
            />
            <Box ml={isLessThan896 ? 2 : 4} textAlign={"left"} color={"#fff"}>
              <Text fontSize={isLessThan896 ? 10 : 16}>Get it on</Text>
              <Text fontWeight={500} fontSize={isLessThan896 ? 10 : 16}>
                App Store
              </Text>
            </Box>
          </Button>
        </Flex>
      </div>
      <div className={styles.footer__middle}>
        <Flex
          flexDirection={"column"}
          className={styles.footer__left}
        >
          <Box>
            <Image
              src={require("../../assets/footer__logo.png")}
              alt="Footer Logo"
              width={isLessThan448 ? 80 : 120}
              height={isLessThan448 ? 20 : 40}
            />
          </Box>
          <Text
            fontWeight={200}
            my={4}
            color={"#fff"}
            fontSize={isLessThan896 ? 8 : 16}
          >
            &copy; TransApp Booking LTD
          </Text>
          <Text
            fontWeight={200}
            color={"#fff"}
            fontSize={isLessThan896 ? 8 : 16}
          >
            Terms of Service | Privacy Policy
          </Text>
        </Flex>
        <Flex width={isLessThan448 ? "80%" : "60%"} className={styles.footer__right}>
          <Flex flexDirection={"column"}>
            <Text
              mb={4}
              fontWeight={400}
              color={"#fff"}
              fontSize={isLessThan896 ? 9 : 16}
            >
              QUICK LINKS
            </Text>
            {quickLinks.map((link) => (
              <Link
                my={1}
                fontWeight={200}
                color={"#fff"}
                key={link.title}
                fontSize={isLessThan896 ? 8 : 16}
              >
                {link.title}
              </Link>
            ))}
          </Flex>
          <Flex flexDirection={"column"} mx={1}>
            <Text
              mb={4}
              fontWeight={400}
              color={"#fff"}
              fontSize={isLessThan896 ? 9 : 16}
            >
              LEGAL
            </Text>
            {legal.map((link) => (
              <Link
                my={1}
                fontWeight={200}
                color={"#fff"}
                key={link.title}
                fontSize={isLessThan896 ? 8 : 16}
              >
                {link.title}
              </Link>
            ))}
          </Flex>
          <Flex flexDirection={"column"}>
            <Text
              mb={4}
              fontWeight={400}
              color={"#fff"}
              fontSize={isLessThan896 ? 9 : 16}
            >
              CUSTOMER HOTLINE
            </Text>
            {hotline.map((link) => (
              <Link my={1} fontWeight={200} color={"#fff"} key={link.title} fontSize={isLessThan896 ? 9 : 16}>
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
              mr={2}
              width={30}
              borderRadius={20}
              background={"#7A7A7A40"}
            >
              <Icon color={"#fff"} as={link.icon} />
            </Flex>
          ))}
        </Flex>

        <Flex>
          {payments.map((method) => {
            return (
              <Box key={method.name} ml={6}>
                <Image
                  src={require(`../../assets/${method.image}`)}
                  alt={method.name}
                  width={80}
                  height={50}
                />
              </Box>
            );
          })}
        </Flex>
      </div>
    </footer>
  );
}
