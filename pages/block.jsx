import {
  Flex,
  VStack,
  Text,
  Textarea,
  HStack,
  Input,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import BlockCard from "../components/BlockCard";

const Block = () => {
  //  const [value, setValue] = useState("");

  //  const handleHashInputValue = (e) => {
  //    setValue(e.target.value);
  //  };
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      height={"60vh"}
      px={60}
    >
      <BlockCard title={"Block Demo"} size={"65%"} />
    </Flex>
  );
};

export default Block;
