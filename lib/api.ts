import axios from "axios";
import type { Note, NoteForm } from "../types/note";

const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

interface getNotes {
  notes: Note[];
  totalPages: number;
}

export async function getNotes(
  page: number = 1,
  search: string = ""
): Promise<getNotes> {
  const { data } = await instance.get<getNotes>("/notes", {
    params: {
      search,
      page,
      perPage: 12,
    },
  });
  return data;
}

export async function createNote(newNote: NoteForm): Promise<Note> {
  const { data } = await instance.post<Note>("/notes", newNote);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await instance.delete<Note>(`/notes/${id}`);
  return data;
}
