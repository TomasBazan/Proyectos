import { Box, Flex, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "../components/Header";
import { Notes } from "../components/Notes";
import { filterNotes } from "../types";
import { getAllNotes } from "../services/request";

function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading...
    </div>
  );
}

export function NotesView() {
  const [status, setStatus] = useState(filterNotes.All);
  const [changes, setChanges] = useState(0);
  const { isLoading, data: allNotes } = useQuery({
    queryFn: () => getAllNotes(),
    queryKey: ["getAllNotes"],
  });

  const handleChanges = () => {
    if (changes >= 0 && changes <= 4) {
      setChanges(changes + 1);
    } else {
      setChanges(changes - 4);
    }
  };

  if (isLoading) return <Loading />;

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
          <Notes
            status={status}
            notes={allNotes}
            handleChanges={handleChanges}
          />
        </VStack>
      </Flex>
    </Box>
  );
}
