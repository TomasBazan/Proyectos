import {
  Box,
  Button,
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { getAllCategories, updateCategories } from "../services/request";
import { AddNewCategory } from "./AddNewCategory";
import { SelectCategories } from "./SelectCategories";

type AddCategoryModal = { noteId: number };
export function AddCategoryModal({ noteId }: AddCategoryModal) {
  const queryClient = useQueryClient();
  const { isLoading, data: categories } = useQuery({
    queryFn: () => getAllCategories(),
    queryKey: ["getAllCategories"],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const checkedIds = useRef<number[]>([]);

  // Falta ver si funciona correctamente
  const handleCheckboxChange = (id: number) => {
    if (checkedIds.current.includes(id)) {
      checkedIds.current = checkedIds.current.filter(
        (checkedId) => checkedId !== id,
      );
    } else {
      checkedIds.current.push(id);
    }
    console.log(`handleCheckboxChange ref= ${checkedIds.current}`);
  };

  const sendNewCategories = async () => {
    await updateCategories(noteId, checkedIds.current);
    queryClient.invalidateQueries({
      queryKey: ["getNoteCategories", noteId],
    });
    onClose();
  };
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
                <SelectCategories
                  allCategories={categories}
                  noteId={noteId}
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Box>
                  <AddNewCategory />
                </Box>
              </Wrap>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                checkedIds.current = [];
                onClose();
              }}
            >
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={sendNewCategories}>
              Guardar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
