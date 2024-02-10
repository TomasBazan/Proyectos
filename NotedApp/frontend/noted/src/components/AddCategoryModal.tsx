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
  Stack,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/request";
import { TCategory } from "../types";
import { AddNewCategory } from "./AddNewCategory";
import { SelectCategories } from "./SelectCategories";
// PARA EL GUARDAR:
// Puedo hacer que el boton se encargue de tomar todos los checkbox seleccionados y guardarlos en un array
// para pasarlos a una query, tengo que cambiar el back para que tome un array de ids
// Tal vez primero tendria que hacer que en el map haya una condicion para que si el la categoria pertenece
// a la nota, el checkbox este seleccionado. Tener en cuenta que tal vez deba hacerlo en otro componente
// de una manera similar a ShowCategories

export function AddCategoryModal({ noteId }) {
  const { isLoading, data: categories } = useQuery({
    queryFn: () => getAllCategories(),
    queryKey: ["getAllCategories"],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) return <div>Loading...</div>;
  return (
    <section>
      <Button
        variant="solid"
        bg="pink.300"
        onClick={onOpen}
        _hover={{ bg: "pink.500" }}
      >
        Agregar Categoria
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Elija las categorias
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Wrap spacing={5} direction="row">
                <SelectCategories allCategories={categories} noteId={noteId} />
                <Box>
                  <AddNewCategory />
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
    </section>
  );
}
