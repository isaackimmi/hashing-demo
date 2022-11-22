import { Flex, HStack, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Image from "next/image";

const navElements = [
  { id: 1, label: "Hash Demo", value: "/" },
  { id: 2, label: "Block Demo", value: "block" },
  { id: 3, label: "Blockchain Demo", value: "blockchain" },
];

const Nav = () => {
  const router = useRouter();

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"}
      py={10}
      px={28}
      mb={20}
    >
      <HStack spacing={6} alignItems={"center"} justifyContent={"center"}>
        <Image src="/hashy.png" height={10} width={80} alt="Logo" />
        <Text fontSize={40} fontWeight={700}>
          Hashy
        </Text>
      </HStack>
      <HStack spacing={16}>
        {navElements.map((element) => {
          return (
            <Button
              onClick={() => router.push(element.value)}
              key={element.id}
              value={element.value}
              color={"black"}
              colorScheme={"white"}
              py={4}
              px={6}
              border={"4px solid black"}
              borderRadius={20}
            >
              {element.label}
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default Nav;
