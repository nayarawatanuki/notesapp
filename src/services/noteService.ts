// src/services/noteService.ts
import mockNotes from '../../public/data/mockNotes.json'
import { Note } from '@/interfaces/Note';

const NOTES_KEY = 'notes';

export function readNotes(callback: (notes: Note[]) => void) {
  const stored = localStorage.getItem(NOTES_KEY);
  if (stored) {
    callback(JSON.parse(stored));
  } else {
    const notesWithUUID = mockNotes.map((note) => ({
      ...note,
      id: crypto.randomUUID(),
    }));
    localStorage.setItem(NOTES_KEY, JSON.stringify(notesWithUUID));
    callback(notesWithUUID);
  }
}

export function insertNote(note: Note) {
  const stored = localStorage.getItem(NOTES_KEY);
  const notes = stored ? JSON.parse(stored) : [];
  notes.unshift(note);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function updateNote(note: Note) {
  const stored = localStorage.getItem(NOTES_KEY);
  if (!stored) return;
  const notes = JSON.parse(stored).map((n: Note) => (n.id === note.id ? note : n));
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function deleteNote(id: string) {
  const stored = localStorage.getItem(NOTES_KEY);
  if (!stored) return;
  const notes = JSON.parse(stored).filter((note: Note) => note.id !== id);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}


export const getAllTags = (notes: Note[]): string[] => {
  const allTags = notes.flatMap(note => note.tags || []);
  return [...new Set(allTags)];
}