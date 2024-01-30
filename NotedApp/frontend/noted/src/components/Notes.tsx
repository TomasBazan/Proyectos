import { Stack } from "@chakra-ui/react";
import { typeNote, filterNotes } from "../types";
import deleteNote from "../services/deleteNote";
import changeNote from "../services/changeNote";
import { NoteCard } from "./NoteCard";
interface noteProp {
  notes: typeNote[];
  status: filterNotes;
  handleChanges: () => void;
}

export function Notes({ notes, status, handleChanges }: noteProp) {
  const handleArchive = (noteToArchive: typeNote) => {
    try {
      if (noteToArchive.archived === false) {
        changeNote({ archived: true }, noteToArchive.id);
      } else {
        changeNote({ archived: false }, noteToArchive.id);
      }
      handleChanges();
    } catch (e) {
      console.error(`Error : ${e}`);
    }
  };
  const eliminateNote = (id: number) => {
    try {
      deleteNote(id);
      handleChanges();
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  };
  return (
    <Stack spacing="8" width="72%">
      {notes?.map((n: typeNote) => (
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
