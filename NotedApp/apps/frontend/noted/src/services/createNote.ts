import { ApiResponse, typeNoteToSend } from "../types";

const SERVER_URL = 'http://localhost:3000/notes';

function createNote (noteToSend : typeNoteToSend) :Promise<ApiResponse>{
	const parseJSONResponse = (response:Response): Promise<ApiResponse>=> {
		return new Promise((resolve) =>
			response.json().then((json) => {
				if (response.ok) {
					resolve({
						status: response.status,
						ok: response.ok,
						data: json,
					});
				} else {
					resolve({
						status: response.status,
						ok: response.ok,
						detail: json.message[0],
					});
				}
			}),
		);
	};
	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteToSend)
        
	};
	return new Promise((resolve, reject) => {
		fetch(SERVER_URL, config)
			.then(parseJSONResponse)
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
export default createNote;
