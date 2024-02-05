import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { filterNotes, typeNote } from "../types";
import { EditNoteModal } from "./EditNoteModal";
import { AddCategoryModal } from "./AddCategoryModal";

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
    const categories = [
      { id: "1", content: "nada" },
      { id: "1", content: "xd" },
    ];
    console.log(categories);
    return (
      <Card key={note.id} colorScheme="transparent" variant="outline">
        <CardBody>
          <VStack spacing="4">
            <HStack width="100%" display="flex" justifyContent="space-between">
              <Heading
                textAlign="left"
                variant="outline"
                noOfLines={2}
                size="md"
              >
                {note.title}
              </Heading>
              <HStack>
                {categories.map((c) => {
                  return (
                    <Tag
                      size="sm"
                      key={c.id}
                      borderRadius="full"
                      variant="solid"
                      colorScheme="green"
                    >
                      <TagLabel>{c.content}</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  );
                })}
              </HStack>
            </HStack>
            <Text textAlign="left">{note.content}</Text>
          </VStack>
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
            <AddCategoryModal id={note.id} handleChanges={handleChanges} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };

  if (status === filterNotes.All) {
    return rendering();
  } else if (status === filterNotes.Actived) {
    if (note.archived === false) {
      return rendering();
    }
  } else {
    if (note.archived === true) {
      return rendering();
    }
  }
}
