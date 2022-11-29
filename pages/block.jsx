import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import BlockCard from "../components/BlockCard";

const Block = () => {
  const [value, setValue] = useState("");
  const [blockInput, setBlockInput] = useState("");
  const [nonceInput, setNonceInput] = useState("");

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
        title={"Block Demo"}
        //size={"65%"}
        hash={value}
        setHash={setValue}
        blockID={blockInput}
        setBlock={setBlockInput}
        nonce={nonceInput}
        setNonce={setNonceInput}
        isBlock={false}
      />
    </Flex>
  );
};

export default Block;
