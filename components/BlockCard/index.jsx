import {
  VStack,
  Text,
  Button,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import mineBlock from "../../hooks/mineBlock";
import useBlock from "../../hooks/mineBlock";
import mineBlockchain from "../../hooks/mineBlockchain";
import useBlockchain from "../../hooks/mineBlockchain";

const BlockCard = ({
  title,
  hash,
  setHash,
  blockID,
  setBlock,
  nonce,
  setNonce,
  width,
  height,
  isBlock,
}) => {
  const handleMineBlock = () => {
    setHash(mineBlock(blockID, hash));
  };

  const handleMineBlockchain = () => {
    setHash(mineBlock(blockID, hash));
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
          Block
        </Text>
        <Input
          py={6}
          fontSize={26}
          border={"6px solid black"}
          borderRadius={40}
          w={"100%"}
          borderColor={"black"}
          onChange={(e) => {
            setBlock(e.target.value);
          }}
        />
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
          borderColor={"black"}
          onChange={(e) => {
            setNonce(e.target.value);
          }}
        />
      </HStack>
      <Textarea
        py={4}
        height={"100%"}
        border={"6px solid black"}
        borderRadius={20}
        onChange={(e) => {
          setHash(e.target.value);
        }}
        placeholder="Enter message"
        size={"lg"}
        fontSize={26}
        resize={"none"}
      />
      <HStack spacing={4} alignItems={"center"} justifyContent={"center"}>
        <Text w={"100%"} fontSize={32} fontWeight={600}>
          Hash Value:{" "}
        </Text>
        <Text fontSize={32} fontWeight={500}>
          {hash}
        </Text>
      </HStack>
      <Button
        onClick={isBlock ? handleMineBlock : handleMineBlockchain}
        borderRadius={30}
        size={"lg"}
      >
        Mine!
      </Button>
    </VStack>
  );
};

export default BlockCard;
