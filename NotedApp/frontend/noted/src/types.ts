export type TNote = {
  id: number;
  title: string;
  content: string;
  archived: boolean;
};
export type typeNoteToSend = {
  title: string;
  content: string;
  archived: boolean;
};
export type TSetArchive = {
  archived: boolean;
};
export type ApiResponseSuccess<T> = {
  ok: boolean;
  data: T;
};

export type ApiResponseError = {
  status: number;
  ok: boolean;
  detail: string;
};

export type TCategory = {
  id: number;
  name: string;
  map: (TCategory) => TCategory[];
  some: (TCategory) => boolean;
};

export enum filterNotes {
  All,
  Archived,
  Actived,
}
export type ApiResponse = ApiResponseSuccess | ApiResponseError;
