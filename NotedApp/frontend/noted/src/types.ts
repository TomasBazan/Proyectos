export interface typeNote {
    id: number;
    title: string;
    content: string;
    archived: boolean;
}
export interface typeNoteToSend {
    title: string;
    content: string;
    archived: boolean;
}
export interface ApiResponseSuccess {
    ok: boolean;
    data: typeNote[]; 
}
  
export interface ApiResponseError {
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

