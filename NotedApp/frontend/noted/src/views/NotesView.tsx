import { Header } from "../components/Header";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getNotes from "../services/getNotes";
import { Notes } from "../components/Notes";
import { ApiResponse, typeNote, filterNotes } from "../types";

export function NotesView() {
  const [notes, setNotes] = useState<typeNote[]>([]);
  const [status, setStatus] = useState(filterNotes.All);
  const [changes, setChanges] = useState(0);

  const handleChanges = () => {
    if (changes >= 0 && changes <= 4) {
      setChanges(changes + 1);
    } else {
      setChanges(changes - 4);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listOfNotes: ApiResponse = await getNotes();
        if ("data" in listOfNotes) {
          setNotes(listOfNotes.data);
        } else {
          throw new Error(
            `Error response: ${listOfNotes.status} - ${listOfNotes.detail}`,
          );
        }
      } catch (e) {
        console.error(`Error while fetching data: ${e}`);
      }
    };
    fetchData();
  }, [changes, status]);

  return (
    <Box bg="darkBackground" minHeight="100vh">
      <Flex direction="column" align="center" justify="center" height="8%">
        <Box
          w="100%"
          p={4}
          bg="headerBackground"
          position="sticky"
          top="0"
          zIndex="sticky"
        >
          <Header setStatus={setStatus} handleChanges={handleChanges} />
        </Box>
        <VStack
          minHeight="100vh"
          spacing={4}
          p="24px 0px 8px 0px"
          borderRadius="sm"
          w="864px"
        >
          <Notes status={status} notes={notes} handleChanges={handleChanges} />
        </VStack>
      </Flex>
    </Box>
  );
}
