import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import BlockCard from "../components/BlockCard";

const Block = () => {
  const [blockchain, setBlockchain] = useState([
    { id: 1, nonce: 1, message: "hello world", previousHash: 99, hash: 1 },
  ]);
  const [success, setSuccess] = useState([true]);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      height={"100vh"}
      px={60}
      mb={20}
    >
      <BlockCard
        isBlock={true}
        title={"Block Demo"}
        success={success}
        block={blockchain[0]}
        setBlock={(newBlock, index) => {
          blockchain.splice(index, 1, newBlock);
          setBlockchain([...blockchain]);
        }}
        id={blockchain[0].id}
      />
    </Flex>
  );
};

export default Block;
