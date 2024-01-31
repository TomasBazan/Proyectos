import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Quote from "./components/Quote";

import "./output.css";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-slate-600 min-h-screen flex justify-center items-center">
        <Quote />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
//<main class="bg-slate-600 min-h-screen">
