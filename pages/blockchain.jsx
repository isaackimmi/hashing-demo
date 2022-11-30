import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import BlockCard from "../components/BlockCard";
import { useEffect, useState } from "react";
import React from "react";

const BlockChain = () => {
  const [blockchain, setBlockchain] = useState([
    {
      id: 1,
      nonce: 1,
      message: "hello world",
      previousHash: 99,
      hash: 1,
    },
    //{ id: 2, nonce: 2, message: "hello moon", previousHash: 0, hash: 1 },
    //{ id: 3, nonce: 3, message: "hello jupiter", previousHash: 1, hash: 2 },
  ]);
  const [success, setSuccess] = useState([]);

  const handleAddBlock = () => {
    const prevHash = blockchain.at(-1).hash;
    const newBlock = {
      id: blockchain.at(-1).id + 1,
      nonce: Math.floor(Math.random() * 100),
      message: "",
      previousHash: prevHash,
      hash: Math.floor(Math.random() * 100),
    };

    setBlockchain((prevBlockchain) => [...prevBlockchain, newBlock]);
  };

  return (
    <VStack
      w={"100vw"}
      height={"100vh"}
      mb={20}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HStack
        justifyContent={"flex-start"}
        spacing={16}
        alignItems={"center"}
        w={"100%"}
        h={"400px"}
        //min-height={"fit-content"}
        px={60}
        overflowX={"scroll"}
        flex={"1 1 0px"}
      >
        {blockchain &&
          blockchain.map((block, index) => {
            return (
              <BlockCard
                key={index}
                blockchain={blockchain}
                title={"Blockchain Demo"}
                block={block}
                success={success}
                setSuccess={setSuccess}
                currIndex={index}
                setBlock={(newBlock) => {
                  blockchain.splice(index, 1, newBlock);
                  if (index < blockchain.length - 1) {
                    const afterBlock = {
                      ...blockchain[index + 1],
                      previousHash: newBlock.hash,
                    };
                    blockchain.splice(index + 1, 1, afterBlock);
                  }
                  setBlockchain([...blockchain]);
                }}
              />
            );
          })}
      </HStack>
      <Button onClick={handleAddBlock}>Add Block</Button>
    </VStack>
  );
};

export default BlockChain;
