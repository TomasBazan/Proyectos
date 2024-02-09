import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { addNewCategory } from "../services/request";
import { useQueryClient } from "@tanstack/react-query";

export function AddNewCategory() {
  const NO_ERROR = 0;
  const OUT_LENGTH = 1;
  const REQUIRED = 2;
  const [error, setError] = useState(NO_ERROR);
  const errorMessages = [
    "Agrega una nueva categoria",
    "El nombre de la categoria debe ser entre 3 y 100",
    "Debes agregar una categoria",
  ];

  const queryClient = useQueryClient();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newCategory = event.target.categoryInput.value;
    if (!newCategory) {
      setError(REQUIRED);
      return;
    }
    if (newCategory.length > 100 || newCategory.length < 3) {
      setError(OUT_LENGTH);
      return;
    }
    await addNewCategory(newCategory);
    queryClient.invalidateQueries({
      queryKey: ["getAllCategories"],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Otro</FormLabel>
        <Input
          id="categoryInput"
          type="text"
          placeholder="Compras, recordatorio..."
        />
        {error === OUT_LENGTH ? (
          <FormHelperText>{`${errorMessages[OUT_LENGTH]}`}</FormHelperText>
        ) : error === REQUIRED ? (
          <FormHelperText>{`${errorMessages[REQUIRED]}`}</FormHelperText>
        ) : (
          <FormHelperText>{`${errorMessages[NO_ERROR]}`}</FormHelperText>
        )}
        <Button
          colorScheme="blue"
          mt="8px"
          type="submit"
          onSubmit={handleSubmit}
        >
          Agregar
        </Button>
      </FormControl>
    </form>
  );
}
