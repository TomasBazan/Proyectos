import { ApiResponse } from "../types";

import axios from "axios";
const SERVER_URL = "http://localhost:3000/categories";

export function getAllCategories(): Promise<ApiResponse> {
  return axios.get(SERVER_URL).then((res) => res.data);
}

export function getNoteCategories(noteId: number): Promise<ApiResponse> {
  return axios.get(`${SERVER_URL}?id=${noteId}`).then((res) => res.data);
}
