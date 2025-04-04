import { Note } from '@/interfaces/Note';
import { Filter } from '@/interfaces/Filter';

export interface NotesListProps {
  notes: Note[];
  selectedNote: Note | null;
  onSelect: (note: Note) => void;
  onCreate: () => void;
  filter: Filter;
}