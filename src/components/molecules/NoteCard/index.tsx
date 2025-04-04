import { Card, CardHeader, DeleteButton } from './styles';
import { Note } from '@/interfaces/Note';

interface NoteCardProps {
  note: Note;
  active?: boolean;
  onClick: () => void;
  onDelete: () => void;
}

export default function NoteCard({ note, active, onClick, onDelete }: NoteCardProps) {
  return (
    <Card onClick={onClick} $active={active}>
      <CardHeader>
        <strong>{note.title}</strong>
        <DeleteButton onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}>
          🗑️
        </DeleteButton>
      </CardHeader>
      <p>{note.description.slice(0, 60)}...</p>
    </Card>
  );
}