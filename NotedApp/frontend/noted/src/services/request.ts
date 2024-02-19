import { ApiResponseSuccess, TCategory } from "../types";

import axios from "axios";
const SERVER_URL_CATEGORIES = "http://localhost:3000/categories";
const SERVER_URL_NOTES = "http://localhost:3000/notes";

export async function getAllCategories(): Promise<TCategory[]> {
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
): Promise<ApiResponseSuccess<TCategory>> {
  console.log(categories);
  return axios
    .patch(`${SERVER_URL_NOTES}/update-categories?noteId=${noteId}`, {
      categoryIds: categories,
    })
    .then((res) => res.data);
}
export async function addNewCategory(
  newCategory: string,
): Promise<ApiResponseSuccess<TCategory>> {
  return axios
    .post(SERVER_URL_CATEGORIES, { name: newCategory })
    .then((res) => res.data);
}

export async function getAllNotes() {
  console.log("should print inside getAllNotes");
  const pepe = axios.get(SERVER_URL_NOTES).then((res) => res.data);
  console.log(pepe);
  return pepe;
}
