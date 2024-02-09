import { ApiResponse } from "../types";

import axios from "axios";
const SERVER_URL = "http://localhost:3000/categories";

export async function getAllCategories(): Promise<ApiResponse> {
  return axios.get(SERVER_URL).then((res) => res.data);
}

export async function getNoteCategories(noteId: number): Promise<ApiResponse> {
  return axios.get(`${SERVER_URL}?id=${noteId}`).then((res) => res.data);
}

export async function addNewCategory(
  newCategory: string,
): Promise<ApiResponse> {
  return axios.post(SERVER_URL, { name: newCategory }).then((res) => res.data);
}
