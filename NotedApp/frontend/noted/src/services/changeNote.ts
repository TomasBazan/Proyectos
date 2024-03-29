import { typeNoteToSend , TSetArchive} from "../types";

const SERVER_URL = "http://localhost:3000/notes";

function changeNote(
  noteChanged: typeNoteToSend | TSetArchive,
  id: number,
): Promise<Response> {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteChanged),
  };
  return new Promise((resolve, reject) => {
    fetch(`${SERVER_URL}?id=${id}`, config)
      .then((response) => {
        if (response.ok) {
          return resolve(response);
        }
        return reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export default changeNote;
