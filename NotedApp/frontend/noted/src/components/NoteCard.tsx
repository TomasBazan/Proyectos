import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { typeNote, filterNotes } from "../types";
import { EditNoteModal } from "./EditNoteModal";

interface NoteCardProps {
  note: typeNote;
  onArchive: (note: typeNote) => void;
  onDelete: (id: number) => void;
  status: filterNotes;
  handleChanges: () => void;
}

export function NoteCard({
  note,
  onArchive,
  onDelete,
  status,
  handleChanges,
}: NoteCardProps) {
  const rendering = () => {
    return (
      <Card
        key={note.id}
        display="flex"
        justify="center"
        colorScheme="transparent"
        variant="outline"
      >
        <CardBody textAlign="center">
          <Stack spacing="4">
            <Heading
              textAlign="center"
              variant="outline"
              noOfLines={1}
              size="md"
            >
              {note.title}
            </Heading>
            <Text>{note.content}</Text>
          </Stack>
        </CardBody>
        <CardFooter display="flex" justifyContent="center" justify="center">
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              bg="pink.300"
              onClick={() => onArchive(note)}
              _hover={{ bg: "pink.500" }}
            >
              {note.archived ? "Desarchivar" : "Archivar"}
            </Button>{" "}
            <Button
              variant="solid"
              bg="pink.300"
              onClick={() => onDelete(note.id)}
              _hover={{ bg: "pink.500" }}
            >
              Eliminar
            </Button>{" "}
            <EditNoteModal id={note.id} handleChanges={handleChanges} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };
  if (status === filterNotes.All) {
    return rendering();
  } else if (status === filterNotes.Actived) {
    if (note.archived === true) {
      return rendering();
    }
  } else {
    if (note.archived === false) {
      return rendering();
    }
  }
}
