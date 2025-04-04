// src/services/noteService.ts
export interface Note {
  id: string;
  title: string;
  description: string;
  archived?: boolean;
}

let notes: Note[] = [];

export const insertNote = (note: Note) => {
  notes.push(note);
  console.log('Nota inserida:', note);
};

export const readNotes = (onLoad: (notes: Note[]) => void) => {
  console.log('Lendo notas...');
  onLoad([...notes]);
};

export const deleteNote = (id: string) => {
  notes = notes.filter((note) => note.id !== id);
  console.log('Nota deletada:', id);
};

export const updateNote = (updatedNote: Note) => {
  notes = notes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note
  );
  console.log('Nota atualizada:', updatedNote);
};



/* Estrutura para banco de dados

import { database } from './firebase';
import {
  ref,
  set,
  push,
  onValue,
  remove,
  child,
  get,
  DataSnapshot,
  off
} from 'firebase/database';
 
const NOTES_PATH = 'notes/';

export const insertNote = (note: Note) => {
  const noteRef = ref(database, `${NOTES_PATH}${note.id}`);
  return set(noteRef, note);
};

export const readNotes = (onLoad: (notes: Note[]) => void) => {
  const notesRef = ref(database, NOTES_PATH);

  onValue(notesRef, (snapshot: DataSnapshot) => {
    if (!snapshot.exists()) {
      console.log('Nenhuma nota encontrada.');
      onLoad([]);
      return;
    }
  
    const data = snapshot.val();
    const notes = Object.values(data) as Note[];
    console.log('Notas carregadas:', notes);
    onLoad(notes);
  });
};

export const deleteNote = (id: string) => {
  const noteRef = ref(database, `${NOTES_PATH}${id}`);
  return remove(noteRef);
};

export const updateNote = (note: Note) => {
  const noteRef = ref(database, `${NOTES_PATH}${note.id}`);
  return set(noteRef, note);
};
*/