const SERVER_URL = 'http://localhost:3000/notes';

function deleteNote(id:number):Promise<Response>{

	const config = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	return new Promise((resolve, reject) => {
		fetch(`${SERVER_URL}/${id}`, config)
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
export default deleteNote;
