// src/components/molecules/ConfirmDialog/index.tsx
import { DialogOverlay, DialogBox, Message, Buttons } from './styles';

interface ConfirmDialogProps {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ open, message, onConfirm, onCancel }: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <DialogOverlay>
      <DialogBox>
        <Message>{message}</Message>
        <Buttons>
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onConfirm}>Confirmar</button>
        </Buttons>
      </DialogBox>
    </DialogOverlay>
  );
}