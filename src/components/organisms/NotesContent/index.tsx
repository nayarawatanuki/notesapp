import { useEffect, useRef, useState } from 'react';
import TextEditable from '@/components/atoms/TextEditable';
import IconActionButton from '@/components/atoms/IconActionButton';
import TagList from '@/components/molecules/TagList';
import ConfirmDialog from '@/components/molecules/ConfirmDialog';
import { useTranslation } from 'react-i18next';

import { Note } from '@/interfaces/Note';
import {
  ContentWrapper,
  ContentHeader,
  LastEdited,
  TextArea,
  Actions,
  Title
} from './styles';

interface NoteContentProps {
  selectedNote: Note | null;
  onSave: (note: Note) => void;
  onDelete: (id: string) => void;
}

export default function NoteContent({ selectedNote, onSave, onDelete }: NoteContentProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (selectedNote) {
      titleRef.current!.innerText = selectedNote.title;
      descriptionRef.current!.innerText = selectedNote.description;
    }
  }, [selectedNote]);

  const handleSave = () => {
    if (!selectedNote) return;
    onSave({
      ...selectedNote,
      title: titleRef.current?.innerText || '',
      description: descriptionRef.current?.innerText || ''
    });
  };

  const handleArchive = () => {
    if (!selectedNote) return;
    onSave({
      ...selectedNote,
      archived: !selectedNote.archived
    });
  };

  const handleCancel = () => {
    if (selectedNote) {
      titleRef.current!.innerText = selectedNote.title;
      descriptionRef.current!.innerText = selectedNote.description;
    }
  };

  const confirmDelete = () => setShowConfirm(true);

  const handleConfirmDelete = () => {
    if (selectedNote) {
      onDelete(selectedNote.id);
      setShowConfirm(false);
    }
  };

  if (!selectedNote) return <ContentWrapper><p>{t('Select a note to view.')}</p></ContentWrapper>;

  return (
    <ContentWrapper>
      <Actions>
        <IconActionButton icon="💾" label={t('Save')} onClick={handleSave} />
        <IconActionButton icon="📥" label={selectedNote.archived ? t('Restore') : t('Archive')} onClick={handleArchive} />
        <IconActionButton icon="❌" label={t('Cancel')} onClick={handleCancel} />
        <IconActionButton icon="🗑️" label={t('Delete')} onClick={confirmDelete} />
      </Actions>

      <ContentHeader>
        <Title as={TextEditable} ref={titleRef}>{selectedNote.title}</Title>
        <TagList tags={selectedNote.tags ?? []} />
        <LastEdited>Última edição: agora mesmo</LastEdited>
      </ContentHeader>

      <TextArea ref={descriptionRef}>{selectedNote.description}</TextArea>

      <ConfirmDialog
        open={showConfirm}
        message="Tem certeza que deseja excluir esta nota?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </ContentWrapper>
  );
}