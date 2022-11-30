import {
  VStack,
  Text,
  Button,
  HStack,
  Input,
  Textarea,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import mineBlock from "../../hooks/mineBlock";
import checkHash from "../../hooks/checkHash";

const BlockCard = ({
  title,
  success,
  setSuccess,
  block,
  setBlock,
  width,
  blockchain,
  currIndex,
}) => {
  const handleSuccess = (res, i) => {
    let copySuccess = [...success];
    copySuccess.splice(i, 1, res);
    setSuccess(copySuccess);
  };

  const handleMineBlock = () => {
    const obj = mineBlock(
      block.nonce,
      block.id,
      block.message,
      block.previousHash
    );

    setBlock({
      ...block,
      hash: obj.hash,
      nonce: obj.nonce,
      previousHash: obj.previousHash,
    });

    blockchain?.forEach((block, index) => {
      const res = checkHash(
        block.nonce,
        block.id,
        block.message,
        block.previousHash,
        block.hash
      );

      console.log(res);

      handleSuccess(res, index);
    });
  };

  useEffect(() => {
    console.log(success);
  }, [blockchain]);

  return (
    <VStack
      alignItems={"flex-start"}
      justifyContent={"center"}
      w={width}
      height={"80%"}
      //max-height={"80%"}
      border={"6px solid black"}
      borderColor={success[currIndex] ? "green" : "red"}
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
        <Input
          name="id"
          value={block.id}
          py={6}
          fontSize={26}
          border={"6px solid black"}
          borderRadius={40}
          w={"100%"}
          borderColor={"black"}
          onChange={(e) => {
            setBlock({ ...block, id: e.target.value });
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
          name="nonce"
          value={block.nonce}
          fontSize={26}
          border={"6px solid black"}
          borderRadius={40}
          w={"100%"}
          borderColor={"black"}
          onChange={(e) => {
            setBlock({ ...block, nonce: e.target.value });
          }}
        />
      </HStack>
      <Textarea
        name="message"
        value={block.message}
        py={4}
        height={"100%"}
        border={"6px solid black"}
        borderColor={"black"}
        borderRadius={20}
        onChange={(e) => {
          setBlock({ ...block, message: e.target.value });
        }}
        placeholder="Enter message"
        size={"lg"}
        fontSize={26}
        resize={"none"}
      />
      <VStack
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
      >
        <Text w={"100%"} fontSize={32} fontWeight={600}>
          Previous Hash:{" "}
        </Text>
        <Text fontSize={32} fontWeight={500}>
          {block.previousHash}
        </Text>
        <Text w={"100%"} fontSize={32} fontWeight={600}>
          Hash Value:{" "}
        </Text>
        <Text fontSize={32} fontWeight={500}>
          {block.hash}
        </Text>
      </VStack>
      <Button
        py={6}
        px={10}
        onClick={handleMineBlock}
        borderRadius={30}
        size={"lg"}
      >
        Mine!
      </Button>
    </VStack>
  );
};

export default BlockCard;
