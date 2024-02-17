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
import { SubmitHandler, useForm } from "react-hook-form";

type formInput = {
  name: string;
};

export function AddNewCategory() {
  const NO_ERROR = 0;
  const OUT_LENGTH = 1;
  const REQUIRED = 2;
  const [error, setError] = useState(NO_ERROR);

  const {
    register,
    handleSubmit,
    formState: { erros, isSubmitting },
  } = useForm<formInput>();

  const errorMessages = [
    "Agrega una nueva categoria",
    "El nombre de la categoria debe ser entre 3 y 100",
    "Debes agregar una categoria",
  ];

  const queryClient = useQueryClient();
  const onSubmit: SubmitHandler<formInput> = async (data: formInput) => {
    await addNewCategory(data.name);
    queryClient.invalidateQueries({
      queryKey: ["getAllCategories"],
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Otro</FormLabel>
        <Input
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
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

        <Button colorScheme="blue" mt="8px" type="submit">
          {isSubmitting ? "Espera..." : "Agregar"}
        </Button>
      </FormControl>
    </form>
  );
}
