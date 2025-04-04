import { Note } from '@/services/noteService';
import {
  ListWrapper,
  Header,
  CreateButton,
  NoteItem,
  NoteTitle,
  NoteMeta,
  Tag,
  DeleteIcon
} from './styles';

interface NotesListProps {
  notes: Note[];
  onCreate: () => void;
  onSelect: (note: Note) => void;
  onDelete: (id: string) => void;
  selectedNote: Note | null;
}

export default function NotesList({
  notes,
  onCreate,
  onSelect,
  onDelete,
  selectedNote
}: NotesListProps) {
  return (
    <ListWrapper>
      <Header>
        <CreateButton onClick={onCreate}>+ Create new note</CreateButton>
      </Header>

      {notes.map((note) => (
        <NoteItem
          key={note.id}
          selected={selectedNote?.id === note.id}
          onClick={() => onSelect(note)}
        >
          <DeleteIcon
            onClick={(e) => {
              e.stopPropagation(); // evita selecionar a nota ao clicar no ícone
              onDelete(note.id);
            }}
          >
            🗑️
          </DeleteIcon>
          <NoteTitle>{note.title}</NoteTitle>
          <NoteMeta>
            <Tag>Paris</Tag>
            <Tag>Hotel</Tag>
            <span>just now</span>
          </NoteMeta>
        </NoteItem>
      ))}
    </ListWrapper>
  );
}