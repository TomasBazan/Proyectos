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

export function AddCategoryModal({ id, handleChanges }: propTypes) {
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
        Agregar Categoria
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agrega una Categoria</ModalHeader>
          <ModalBody pb={6}></ModalBody>

          <ModalFooter>
            <Button
              bg="pink.300"
              mr={3}
              _hover={{ bg: "pink.500" }}
              onClick={handleSubmit}
            >
              Agregar
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
