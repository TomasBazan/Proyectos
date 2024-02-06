import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Stack,
  Textarea,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface propTypes {
  id: number;
  handleChanges: () => void;
}

export function AddCategoryModal({ id, handleChanges }: propTypes) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const allCategores = ["todo", "primero", "segundo", "cuarto"];
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
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Elija las categorias
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Wrap spacing={5} direction="row">
                {allCategores.map((category) => {
                  return (
                    <Checkbox colorScheme="green" defaultChecked>
                      {category}
                    </Checkbox>
                  );
                })}
                <Box>
                  <FormLabel htmlFor="otro">Otro</FormLabel>
                  <Textarea id="otro" />
                  <Button colorScheme="blue" mt="8px">
                    Agregar
                  </Button>
                </Box>
              </Wrap>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Guardar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
