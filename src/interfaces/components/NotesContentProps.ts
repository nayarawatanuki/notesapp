import { Note } from '@/interfaces/Note';

export interface NoteContentProps {
  note: Note | null;
  onUpdate: (updatedNote: Note) => void;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
}