import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { createNote } from "../services/request";
import { handleChange } from "../customHooks/useControlForm";
import { useQueryClient } from "@tanstack/react-query";

export function NewNoteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    archived: false,
  });
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    const { title, content, archived } = formData;
    try {
      await createNote({ title: title, content: content, archived: archived });
    } catch (e) {
      alert(e.detail);
    }

    setFormData({
      title: "",
      content: "",
      archived: false,
    });
    onClose();
    queryClient.invalidateQueries({
      queryKey: ["getAllNotes"],
    });
  };

  return (
    <>
      <IconButton
        bg="white"
        aria-label="Create new Note"
        icon={<AddIcon />}
        onClick={onOpen}
        _hover={{
          bg: "pink.500",
        }}
        variant="outline"
      />
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new Note!</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Game of Thrones"
                value={formData.title}
                onChange={(e) =>
                  handleChange("title", e.target.value, formData, setFormData)
                }
              />
              <FormHelperText>Only 100 characters</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                placeholder="Good serie, bad ending"
                resize="none"
                minHeight="160px"
                value={formData.content}
                onChange={(e) =>
                  handleChange("content", e.target.value, formData, setFormData)
                }
              />
              <FormHelperText>Only 1000 characters</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="pink.300"
              mr={3}
              _hover={{ bg: "pink.500" }}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose} bg="pink.300" _hover={{ bg: "pink.500" }}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
