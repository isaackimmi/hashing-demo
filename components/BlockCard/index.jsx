import { VStack, Text, Badge, HStack, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const BlockCard = ({ title, blockID, nonce, width, height }) => {
  const [value, setValue] = useState("");

  const handleHashInputValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <VStack
      alignItems={"flex-start"}
      justifyContent={"center"}
      w={width}
      h={height ? height : null}
      border={"6px solid black"}
      borderRadius={100}
      spacing={10}
      py={24}
      px={36}
      boxShadow={
        "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;"
      }
    >
      <Text mb={10} as={"h1"} fontSize={60} fontWeight={700}>
        {title}
      </Text>
      <HStack spacing={4}>
        <Text fontSize={32} fontWeight={600}>
          Block ID
        </Text>
        <Badge px={4} borderRadius={20} fontSize={32}>
          1
        </Badge>
      </HStack>
      <HStack
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={6}
      >
        <Text fontSize={32} fontWeight={600}>
          Nonce
        </Text>
        <Input
          py={6}
          fontSize={26}
          border={"6px solid black"}
          borderRadius={40}
          w={"100%"}
        ></Input>
      </HStack>
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
  );
};

export default BlockCard;
