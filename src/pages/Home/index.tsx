import { useEffect, useState } from 'react';
import { Note, insertNote, readNotes, deleteNote, updateNote } from '@/services/noteService';
import Sidebar from '@/components/organisms/Sidebar';
import NotesList from '@/components/organisms/NotesList';
import NoteContent from '@/components/organisms/NoteContent';
import ConfirmDialog from '@/components/molecules/ConfirmDialog';
import { Container } from './styles';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  useEffect(() => {
    readNotes((allNotes) => {
      const filtered = allNotes.filter((n) => !n.archived);
      setNotes(filtered);
    });
  }, []);

  const handleCreateNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: 'New note',
      description: 'Start typing here...',
      archived: false
    };
    insertNote(newNote);
    setSelectedNote(newNote);
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDelete = (id: string) => {
    deleteNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  const handleSave = (updatedNote: Note) => {
    updateNote(updatedNote);
    setNotes((prev) =>
      prev.map((n) => (n.id === updatedNote.id ? updatedNote : n)).filter((n) => !n.archived)
    );
    setSelectedNote(updatedNote.archived ? null : updatedNote);
  };

  return (
    <Container>
      <Sidebar />
      <NotesList
        notes={notes}
        onDelete={(id) => {
          const note = notes.find(n => n.id === id);
          if (note) setNoteToDelete(note);
        }}
        onCreate={handleCreateNote}
        onSelect={setSelectedNote}
        selectedNote={selectedNote}
      />
      <NoteContent
        selectedNote={selectedNote}
        onSave={handleSave}
        onDelete={(id) => {
          const note = notes.find(n => n.id === id);
          if (note) setNoteToDelete(note);
        }}
      />

      <ConfirmDialog
        open={!!noteToDelete}
        message={`Tem certeza que deseja excluir a nota "${noteToDelete?.title}"?`}
        onConfirm={() => {
          if (noteToDelete) handleDelete(noteToDelete.id);
          setNoteToDelete(null);
        }}
        onCancel={() => setNoteToDelete(null)}
      />
    </Container>
  );
}