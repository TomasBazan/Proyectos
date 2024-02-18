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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formInput>();

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
          aria-invalid={errors.name? "true":"false"}
          id="categoryInput"
          type="text"
          placeholder="Compras, recordatorio..."
        />
        {errors.name?.type === "required" && (
          <p role="alert"> Ingresa una categoria</p>
        )}
        <Button colorScheme="blue" mt="8px" type="submit">
          {isSubmitting ? "Espera..." : "Agregar"}
        </Button>
      </FormControl>
    </form>
  );
}


