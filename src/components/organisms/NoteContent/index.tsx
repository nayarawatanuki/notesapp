import { useEffect, useRef, useState } from 'react';
import {
  ContentWrapper,
  ContentHeader,
  Title,
  Tags,
  LastEdited,
  TextArea,
  Actions,
  ActionButton
} from './styles';
import { Note } from '@/services/noteService';
import ConfirmDialog from '@/components/molecules/ConfirmDialog';

interface NoteContentProps {
  selectedNote: Note | null;
  onSave: (note: Note) => void;
  onDelete?: (id: string) => void;
}

export default function NoteContent({ selectedNote, onSave, onDelete }: NoteContentProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (selectedNote) {
      if (titleRef.current) titleRef.current.innerText = selectedNote.title;
      if (descriptionRef.current) descriptionRef.current.innerText = selectedNote.description;
    }
  }, [selectedNote]);

  const handleSave = () => {
    if (!selectedNote || !titleRef.current || !descriptionRef.current) return;

    const updatedNote: Note = {
      ...selectedNote,
      title: titleRef.current.innerText,
      description: descriptionRef.current.innerText
    };

    onSave(updatedNote);
  };

  const handleCancel = () => {
    if (!selectedNote) return;
    if (titleRef.current) titleRef.current.innerText = selectedNote.title;
    if (descriptionRef.current) descriptionRef.current.innerText = selectedNote.description;
  };

  const handleArchive = () => {
    if (!selectedNote || !titleRef.current || !descriptionRef.current) return;

    const archivedNote: Note = {
      ...selectedNote,
      title: titleRef.current.innerText,
      description: descriptionRef.current.innerText,
      archived: !selectedNote.archived,
    };

    onSave(archivedNote);
  };

  const confirmDelete = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (selectedNote && onDelete) {
      onDelete(selectedNote.id);
    }
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  if (!selectedNote) {
    return <ContentWrapper><p>Select a note to view details</p></ContentWrapper>;
  }

  return (
    <ContentWrapper>
      <ContentHeader>
        <Title contentEditable suppressContentEditableWarning ref={titleRef} />
        <Tags>
          <span>Paris</span>
          <span>Hotel</span>
        </Tags>
        <LastEdited>Last edited: just now</LastEdited>
      </ContentHeader>

      <TextArea
        contentEditable
        suppressContentEditableWarning
        ref={descriptionRef}
      />

      <Actions>
        <ActionButton onClick={handleSave}>Save note</ActionButton>
        <ActionButton onClick={handleArchive}>
          {selectedNote.archived ? 'Unarchive' : 'Archive'}
        </ActionButton>
        <ActionButton $variant="cancel" onClick={handleCancel}>Cancel</ActionButton>
        <ActionButton $variant="cancel" onClick={confirmDelete}>Delete</ActionButton>
      </Actions>

      <ConfirmDialog
        open={showConfirm}
        message="Tem certeza que deseja excluir esta nota?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </ContentWrapper>
  );
}