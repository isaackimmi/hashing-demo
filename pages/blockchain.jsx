import { HStack, VStack, Text } from "@chakra-ui/react";
import BlockCard from "../components/BlockCard";

const BlockChain = () => {
  return (
    <HStack
      justifyContent={"flex-start"}
      spacing={16}
      alignItems={"center"}
      w={"100%"}
      height={"75vh"}
      px={60}
      overflowX={"scroll"}
    >
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
      <BlockCard title={"Blockchain Demo"} width={"40%"} />
    </HStack>
  );
};

export default BlockChain;
