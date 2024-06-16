import {
  Button,
  useDisclosure,
  Text,
  Modal,
  ModalOverlay,
  Input,
  Box,
  ModalContent,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text !== "") {
      addTask({ text });
      setText("");
      console.log(addTask);
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      mb={5}
    >
      <Button
        onClick={onOpen}
        w={"50%"}
        display={"flex"}
        justifyContent={"flex-start"}
      >
        <Text fontWeight={"light"} color={"#4a5568"}>
          + Add a task
        </Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          m={60}
        >
          <Input
            placeholder="+ Add a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddTask;
