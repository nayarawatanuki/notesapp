import { DialogOverlay, DialogBox, Message, Actions, Button } from './styles';

interface ConfirmDialogProps {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  message,
  onConfirm,
  onCancel
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <DialogOverlay>
      <DialogBox>
        <Message>{message}</Message>
        <Actions>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button $variant="danger" onClick={onConfirm}>Excluir</Button>
        </Actions>
      </DialogBox>
    </DialogOverlay>
  );
}