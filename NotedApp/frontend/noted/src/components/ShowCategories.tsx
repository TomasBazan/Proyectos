import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { useCategoriesOfNote } from "../customHooks/useCategoriesOfNote";
import { TCategory } from "../types";

type noteId = { noteId: number };
export function ShowCategories({ noteId }: noteId) {
  const { isLoading, categories } = useCategoriesOfNote(noteId);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HStack>
      {categories?.map((c: TCategory) => {
        return (
          <Tag
            size="sm"
            key={c.id}
            borderRadius="full"
            variant="solid"
            colorScheme="green"
          >
            <TagLabel>{c.name}</TagLabel>
            <TagCloseButton />
          </Tag>
        );
      })}
    </HStack>
  );
}
