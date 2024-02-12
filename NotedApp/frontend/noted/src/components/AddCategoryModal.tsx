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
import { useState } from "react";

export function AddCategoryModal({ noteId }) {
  const { isLoading, data: categories } = useQuery({
    queryFn: () => getAllCategories(),
    queryKey: ["getAllCategories"],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkedIds, setCheckedIds] = useState<number[]>([]); // State to keep track of checked checkbox IDs
  const handleCheckboxChange = (id: number) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id)); // Uncheck the checkbox
    } else {
      setCheckedIds([...checkedIds, id]); // Check the checkbox
    }
    console.log(checkedIds);
  };
  const sendNewCategories = () => {
    updateCategories(noteId, checkedIds);
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
            <Button variant="outline" mr={3} onClick={onClose}>
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
