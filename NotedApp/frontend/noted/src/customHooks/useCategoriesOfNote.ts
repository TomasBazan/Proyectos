import { useQuery } from "@tanstack/react-query";
import { getNoteCategories } from "../services/request";

export function useCategoriesOfNote(noteId: number) {
  const { isLoading, data: categories } = useQuery({
    queryFn: () => getNoteCategories(noteId),
    queryKey: ["getNoteCategories", noteId],
  });
  return { isLoading, categories };
}
