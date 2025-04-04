import { IconButton, IconLabel } from './styles';

interface IconActionButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  title?: string;
}

export default function IconActionButton({ icon, label, onClick, title }: IconActionButtonProps) {
  return (
    <IconButton onClick={onClick} title={title}>
      {icon}
      <IconLabel>{label}</IconLabel>
    </IconButton>
  );
}