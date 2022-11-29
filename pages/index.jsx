import { Flex, VStack, Text, Textarea, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Hash = () => {
  const [value, setValue] = useState("");

  const handleHashInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      height={"60vh"}
      mt={28}
      //  border={"1px solid black"}
      px={60}
    >
      <VStack
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"65%"}
        border={"6px solid black"}
        borderRadius={100}
        spacing={6}
        py={24}
        px={36}
        boxShadow={
          "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;"
        }
      >
        <Text mb={12} as={"h1"} fontSize={60} fontWeight={700}>
          SHA 256 Demo
        </Text>
        <Textarea
          py={4}
          height={"100%"}
          border={"6px solid black"}
          borderRadius={20}
          onChange={handleHashInputValue}
          placeholder="Enter data"
          size={"lg"}
          fontSize={26}
          resize={"none"}
        />
        <HStack spacing={4} alignItems={"center"} justifyContent={"center"}>
          <Text w={"100%"} fontSize={32} fontWeight={600}>
            Hash Value:{" "}
          </Text>
          <Text fontSize={32} fontWeight={500}>
            {value}
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Hash;
