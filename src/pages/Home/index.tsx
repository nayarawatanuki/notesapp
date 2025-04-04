import { useEffect, useState } from 'react';
import { Note } from '@/interfaces/Note';
import { Filter } from '@/interfaces/Filter';
import {
  insertNote,
  readNotes,
  deleteNote,
  updateNote,
  getAllTags,
} from '@/services/noteService';

import NotesHeader from '@/components/organisms/NotesHeader';
import Sidebar from '@/components/organisms/Sidebar';
import NotesList from '@/components/organisms/NotesList';
import NotesContent from '@/components/organisms/NotesContent';
import ConfirmDialog from '@/components/molecules/ConfirmDialog';

import { Container, NotesHeaderArea, SidebarArea, NotesListArea, NotesContentArea } from './styles';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);
  const [filter, setFilter] = useState<Filter>({ type: 'all' });
  const [tags, setTags] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    readNotes((storedNotes) => {
      setNotes(storedNotes);
      setTags(getAllTags(storedNotes));
    });
  }, []);

  const handleCreate = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: 'New note',
      description: 'Start typing here...',
      archived: false,
      tags: ['Paris', 'Hotel'],
    };
    insertNote(newNote);
    setNotes((prev) => [newNote, ...prev]);
    setSelectedNote(newNote);
  };

  const handleSave = (note: Note) => {
    updateNote(note);
    setNotes((prev) =>
      prev.map((item) => (item.id === note.id ? note : item))
    );
    setSelectedNote(note.archived ? null : note);
  };

  const handleDelete = (id: string) => {
    deleteNote(id);
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (selectedNote?.id === id) setSelectedNote(null);
  };

  const applyFilter = (): Note[] => {
    return notes.filter((note) => {
      const matchesFilter =
        (filter.type === 'archived' && note.archived) ||
        (filter.type === 'tag' && note.tags?.includes(filter.value)) ||
        (filter.type === 'all' && !note.archived);

      const matchesSearch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  };

  return (
    <Container>

      <SidebarArea>
        <Sidebar filter={filter} setFilter={setFilter} tags={tags} />
      </SidebarArea>

      <NotesHeaderArea>
        <NotesHeader
          search={search}
          onSearchChange={(e) => setSearch(e.target.value)}
          onToggleLanguage={toggleLanguage}
          currentLanguage={i18n.language as 'en' | 'pt'}
        />
      </NotesHeaderArea>

      <NotesListArea>
        <NotesList
          notes={applyFilter()}
          onCreate={handleCreate}
          onSelect={setSelectedNote}
          onDelete={(id) => {
            const note = notes.find((n) => n.id === id);
            if (note) setNoteToDelete(note);
          }}
          selectedNote={selectedNote}
        />
      </NotesListArea>

      <NotesContentArea>
        <NotesContent
          selectedNote={selectedNote}
          onSave={handleSave}
          onDelete={(id) => {
            const note = notes.find((n) => n.id === id);
            if (note) setNoteToDelete(note);
          }}
        />
      </NotesContentArea>

      <ConfirmDialog
        open={!!noteToDelete}
        message={t('confirmDelete', {
          title: noteToDelete?.title || '',
        })}
        onConfirm={() => {
          if (noteToDelete) handleDelete(noteToDelete.id);
          setNoteToDelete(null);
        }}
        onCancel={() => setNoteToDelete(null)}
      />
    </Container>
  );
}