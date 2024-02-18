import { ApiResponse, TCategory } from "../types";

import axios from "axios";
const SERVER_URL_CATEGORIES = "http://localhost:3000/categories";
const SERVER_URL_NOTES = "http://localhost:3000/notes";

export async function getAllCategories(): Promise<TCategory> {
  return axios.get(SERVER_URL_CATEGORIES).then((res) => res.data);
}

export async function getNoteCategories(noteId: number): Promise<TCategory> {
  return axios
    .get(`${SERVER_URL_CATEGORIES}?id=${noteId}`)
    .then((res) => res.data);
}

export async function updateCategories(
  noteId: number,
  categories: number[],
): Promise<ApiResponse> {
  console.log(categories);
  return axios
    .patch(`${SERVER_URL_NOTES}/update-categories?noteId=${noteId}`, {
      categoryIds: categories,
    })
    .then((res) => res.data);
}
export async function addNewCategory(
  newCategory: string,
): Promise<ApiResponse> {
  return axios
    .post(SERVER_URL_CATEGORIES, { name: newCategory })
    .then((res) => res.data);
}
