import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export function AddNewCategory() {
  //if (isLoading) return <div>Loading...</div>;
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the functionality to make the request
  };
  return (
    <FormControl onSubmit={handleSubmit}>
      <FormLabel>Otro</FormLabel>
      <Input type="text" placeholder="Compras, recordatorio..." />
      <FormHelperText> Agrega tu propia categoria</FormHelperText>
      <Button colorScheme="blue" mt="8px" type="submit">
        Agregar
      </Button>
    </FormControl>
  );
}
