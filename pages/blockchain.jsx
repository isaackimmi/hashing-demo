import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import BlockCard from "../components/BlockCard";
import { useState } from "react";
import React from "react";

const BlockChain = () => {
  const [value, setValue] = useState("");
  const [blockInput, setBlockInput] = useState("");
  const [nonceInput, setNonceInput] = useState("");
  const [blockchain, setBlockchain] = useState([]);
  let blockCards = [
    <BlockCard
      key={blockInput}
      title={"Blockchain Demo"}
      size={"65%"}
      hash={value}
      setHash={setValue}
      blockID={blockInput}
      setBlock={setBlockInput}
      nonce={nonceInput}
      setNonce={setNonceInput}
      isBlock={false}
    />,
  ];

  const handleAddBlock = () => {
    blockCards.push(
      <BlockCard
        key={blockInput}
        title={"Blockchain Demo"}
        size={"65%"}
        hash={value}
        setHash={setValue}
        blockID={blockInput}
        setBlock={setBlockInput}
        nonce={nonceInput}
        setNonce={setNonceInput}
        isBlock={false}
      />
    );
  };

  return (
    <VStack w={"100%"} height={"75vh"}>
      <HStack
        justifyContent={"flex-start"}
        spacing={16}
        alignItems={"center"}
        w={"100%"}
        min-height={"fit-content"}
        px={60}
        overflowX={"scroll"}
      >
        {React.Children.toArray(blockCards)}
      </HStack>
      <Button onClick={handleAddBlock}>Add Block</Button>
    </VStack>
  );
};

export default BlockChain;
