export type typeNote = {
    id: number;
    title: string;
    content: string;
    archived: boolean;
}
export type typeNoteToSend = {
    title: string;
    content: string;
    archived: boolean;
}
export type TSetArchive = {
    archived: boolean;
}
export type ApiResponseSuccess = {
    ok: boolean;
    data: typeNote[]; 
}
  
export type ApiResponseError = {
    status: number;
    ok: boolean;
    detail: string;
}
export enum filterNotes {
    All,
    Archived,
    Actived,
}
export type ApiResponse = ApiResponseSuccess | ApiResponseError;

