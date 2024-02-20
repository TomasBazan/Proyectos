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
import { changeNote } from "../services/request";
import { handleChange } from "../customHooks/useControlForm";

interface propTypes {
  id: number;
}

export function EditNoteModal({ id }: propTypes) {
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
      alert(`Error: ${e.statusText}`);
    }
    setFormData({
      title: "",
      content: "",
      archived: false,
    });
    onClose();
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
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Note!</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Titulo</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Breaking Bad"
                value={formData.title}
                onChange={(e) =>
                  handleChange("title", e.target.value, formData, setFormData)
                }
              />
              <FormHelperText>Solo 100 characters</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contenido</FormLabel>
              <Textarea
                placeholder="Good serie, good ending"
                resize="none"
                minHeight="160px"
                value={formData.content}
                onChange={(e) =>
                  handleChange("content", e.target.value, formData, setFormData)
                }
              />
              <FormHelperText>Solo 1000 caracteres</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="pink.300"
              mr={3}
              _hover={{ bg: "pink.500" }}
              onClick={handleSubmit}
            >
              Guardar
            </Button>
            <Button onClick={onClose} bg="pink.300" _hover={{ bg: "pink.500" }}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
