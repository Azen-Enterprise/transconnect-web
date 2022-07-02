import React from "react";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Post() {
  return (
    <Flex width="100%" flexDirection={"column"}>
      <Flex bg="#162F26" px={16}>
        <FormControl display={"flex"} justifyContent={"flex-end"} pt={4} pb={12}>
          <Input
            py={2}
            mt={1}
            minW={220}
            maxW={420}
            variant="flushed"
            className="lineInput"
            placeholder="Search Article"
          />
        </FormControl>
      </Flex>
      <Flex px={20} pt={16} flexDirection={"column"} pb={40}>
        <Text className="header" >Post Title</Text>
        <Text my={4}>By TransAppUser</Text>
        <Divider orientation="horizontal" />
        <Text my={3}>Posted on January 1, 2020 at 20:20 PM</Text>
        <Divider orientation="horizontal" mb={8} />
        <Image
          src={require("../assets/post.png")}
          alt={"Post Image"}
        />
        <Text fontWeight={400} textAlign={"justify"} my={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum!

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          - Someone famous said this

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum!
        </Text>
      </Flex>

    </Flex>
  );
}
