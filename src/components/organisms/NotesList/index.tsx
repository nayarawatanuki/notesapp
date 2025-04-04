import { Note } from '@/interfaces/Note';
import NoteCard from '@/components/molecules/NoteCard';
import { ListContainer, Header, CreateButton } from './styles';
import { useTranslation } from 'react-i18next';

interface NotesListProps {
  notes: Note[];
  selectedNote: Note | null;
  onSelect: (note: Note) => void;
  onCreate: () => void;
  onDelete: (id: string) => void;
}

export default function NotesList({
  notes,
  selectedNote,
  onSelect,
  onCreate,
  onDelete
}: NotesListProps) {

  const { t } = useTranslation();

  return (
    <ListContainer>
      <Header>
        <CreateButton onClick={onCreate}>+ {t('create')}</CreateButton>
      </Header>

      {notes.map((note) => (
        <NoteCard
          key={`${note.id}-${note.title}`}
          note={note}
          active={selectedNote?.id === note.id}
          onClick={() => onSelect(note)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </ListContainer>
  );
}