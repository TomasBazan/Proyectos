import { Box, Checkbox } from "@chakra-ui/react";
import { TCategory } from "../types";
import { useCategoriesOfNote } from "../customHooks/useCategoriesOfNote";
import { useEffect } from "react";

type SelecteCategoriesProp = {
  allCategories: TCategory[];
  noteId: number;
  handleCheckboxChange: (id: number) => void;
};

export function SelectCategories({
  allCategories,
  noteId,
  handleCheckboxChange,
}: SelecteCategoriesProp) {
  const { isLoading, categories: selectedCategories } =
    useCategoriesOfNote(noteId);
  useEffect(() => {
    selectedCategories?.map((category: TCategory) => {
      handleCheckboxChange(category.id);
    });
  }, []);
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
            onChange={() => handleCheckboxChange(category.id)} // Call handleCheckboxChange on checkbox change
          >
            {category.name}
          </Checkbox>
        );
      })}
    </Box>
  );
}
