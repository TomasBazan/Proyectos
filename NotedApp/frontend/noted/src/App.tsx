import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { NotesView } from "./views/NotesView";
const theme = extendTheme({
  colors: {
    darkBackground: "#343541",
    noteBackground: "#FC8181",
    headerBackground: "#56586C",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NotesView />
    </ChakraProvider>
  );
}

export default App;
