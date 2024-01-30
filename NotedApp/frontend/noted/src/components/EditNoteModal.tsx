import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
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
import changeNote from "../services/changeNote";
import { handleChange } from "../customHooks/useControlForm";

interface propTypes {
  id: number;
  handleChanges: () => void;
}

export function EditNoteModal({ id, handleChanges }: propTypes) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    archived: false,
  });

  const handleSubmit = async () => {
    const { title, content, archived } = formData;
    try {
      await changeNote({ title, content, archived }, id);
    } catch (e) {
      alert("Error! content too long");
    }
    setFormData({
      title: "",
      content: "",
      archived: false,
    });
    onClose();
    handleChanges();
  };
  return (
    <>
      <Button
        variant="solid"
        bg="pink.300"
        onClick={onOpen}
        _hover={{ bg: "pink.500" }}
      >
        Modificar
      </Button>
      ;
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Note!</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Breaking Bad"
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
                placeholder="Good serie, good ending"
                resize="none"
                minHeight="160px"
                value={formData.content}
                onChange={(e) =>
                  handleChange("title", e.target.value, formData, setFormData)
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
