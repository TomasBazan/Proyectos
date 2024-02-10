import { Box, Checkbox } from "@chakra-ui/react";
import { TCategory } from "../types";
import { useCategoriesOfNote } from "../customHooks/useCategoriesOfNote";

type SelecteCategoriesProp = { allCategories: TCategory[]; noteId: number };

export function SelectCategories({
  allCategories,
  noteId,
}: SelecteCategoriesProp) {
  const { isLoading, categories: selectedCategories } =
    useCategoriesOfNote(noteId);
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      {allCategories.map((category: TCategory) => {
        const isChecked = selectedCategories.some(
          (selectedCategory: TCategory) => selectedCategory.id === category.id,
        );
        return (
          <Checkbox
            key={category.id}
            colorScheme="green"
            defaultChecked={isChecked}
          >
            {category.name}
          </Checkbox>
        );
      })}
    </Box>
  );
}
