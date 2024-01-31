import { useQuery } from "react-query";
import axios from "axios";
import "../output.css";
// to use need to create a local server to make the request
//
function Quote() {
  const { isLoading, error, data, refetch, isIdle } = useQuery(
    "quoteData",
    () => axios.get("https://api.quotable.io/random").then((res) => res.data),
    { enabled: false },
  );
  // const { isLoading, error, data } = useQuery("quoteData", () =>
  //   fetch("https://api.quotable.io/random").then((res) => res.json()),
  // );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div className="bg-white rounded-xl p-6 min-w-96 min-h-56">
      {isIdle ? (
        <>
          <p>"Not ready..."</p>
          <button
            onClick={() => refetch()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Quote
          </button>
        </>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>Something went wrong</div>
      ) : (
        <section className="text-center">
          <h1>{data.author}</h1>
          <p className="mt-4">{data.content}</p>
          <button
            onClick={() => refetch()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Quote
          </button>
        </section>
      )}
    </div>
  );
}

export default Quote;
