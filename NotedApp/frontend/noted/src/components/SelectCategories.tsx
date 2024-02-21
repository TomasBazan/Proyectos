import { Box, Checkbox } from "@chakra-ui/react";
import { TCategory } from "../types";
import { useCategoriesOfNote } from "../customHooks/useCategoriesOfNote";

type SelecteCategoriesProp = {
  allCategories: TCategory[] | undefined;
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

  const addSelectedCategories = (id: number) => {
    const isAlreadySelected = selectedCategories?.some(
      (selectedCategory: TCategory) => {
        return selectedCategory.id === id;
      },
    );
    if (isAlreadySelected) {
      handleCheckboxChange(id);
    }
    return isAlreadySelected;
  };
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      {allCategories?.map((category: TCategory) => {
        const isChecked = addSelectedCategories(category.id);
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
