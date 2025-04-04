import { FormEvent } from 'react';
import { Form, Input, Button } from './styles';

interface NoteFormProps {
  title: string;
  setTitle: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function NoteForm({
  title,
  setTitle,
  description,
  setDescription,
  onSubmit
}: NoteFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add Note</Button>
    </Form>
  );
}