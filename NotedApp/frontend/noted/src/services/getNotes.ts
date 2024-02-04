import { ApiResponse} from '../types';

const SERVER_URL = 'http://localhost:3000/notes';

function getNotes () : Promise<ApiResponse>{
	const parseJSONResponse = (response:Response): Promise<ApiResponse>=> {
		return new Promise((resolve) =>
			response.json().then((json) => {
				if (response.ok) {
					resolve({
						ok: response.ok,
						data: json,
					});
				} else {
					resolve({
						status: response.status,
						ok: response.ok,
						detail: json.message,
					});
				}
			}),
		);
	};

	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
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
export default getNotes;
