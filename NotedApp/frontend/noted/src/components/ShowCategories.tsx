import { HStack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getNoteCategories } from "../services/request";
import { TCategory } from "../types";
type noteId = { noteId: number };
export function ShowCategories({ noteId }: noteId) {
  const { isLoading, data: categories } = useQuery({
    queryFn: () => getNoteCategories(noteId),
    queryKey: ["getNoteCategories", noteId],
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <HStack>
      {categories.map((c: TCategory) => {
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
