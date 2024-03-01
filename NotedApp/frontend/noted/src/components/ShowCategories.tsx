import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { useCategoriesOfNote } from "../customHooks/useCategoriesOfNote";
import { TCategory } from "../types";
import { deleteNoteCategory } from "../services/request";
import { useQueryClient } from "@tanstack/react-query";

type noteId = { noteId: number };
export function ShowCategories({ noteId }: noteId) {
  const { isLoading, categories } = useCategoriesOfNote(noteId);
  const queryClient = useQueryClient();
  const handleDelete = async (id: number) => {
    await deleteNoteCategory(id, noteId);
    queryClient.invalidateQueries({ queryKey: ["getNoteCategories"] });
  };

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
            <TagCloseButton onClick={() => handleDelete(c.id)} />
          </Tag>
        );
      })}
    </HStack>
  );
}
