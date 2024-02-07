import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { NotesView } from "./views/NotesView";
const theme = extendTheme({
  colors: {
    darkBackground: "#343541",
    noteBackground: "#FC8181",
    headerBackground: "#56586C",
  },
});

const queryClient = new QueryClient();
function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NotesView />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
