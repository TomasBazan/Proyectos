import { Stack } from "@chakra-ui/react";
import { TNote, filterNotes } from "../types";
import deleteNote from "../services/deleteNote";
import changeNote from "../services/changeNote";
import { NoteCard } from "./NoteCard";
import { useQueryClient } from "@tanstack/react-query";
interface noteProp {
  notes: TNote[];
  status: filterNotes;
  handleChanges: () => void;
}

export function Notes({ notes, status, handleChanges }: noteProp) {
  const queryClient = useQueryClient();
  const handleArchive = async (noteToArchive: TNote) => {
    try {
      if (noteToArchive.archived === false) {
        await changeNote({ archived: true }, noteToArchive.id);
      } else {
        await changeNote({ archived: false }, noteToArchive.id);
      }
      queryClient.invalidateQueries({
        queryKey: ["getAllNotes"],
      });
    } catch (e) {
      console.error(`Error : ${e}`);
    }
  };

  const eliminateNote = async (id: number) => {
    try {
      await deleteNote(id);
      queryClient.invalidateQueries({
        queryKey: ["getAllNotes"],
      });
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  };

  return (
    <Stack spacing="8" width="72%">
      {notes?.map((n: TNote) => (
        <NoteCard
          key={n.id}
          note={n}
          onArchive={handleArchive}
          onDelete={eliminateNote}
          status={status}
          handleChanges={handleChanges}
        />
      ))}
    </Stack>
  );
}
