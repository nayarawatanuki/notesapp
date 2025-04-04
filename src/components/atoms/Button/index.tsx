// src/components/atoms/ButtonIcon/index.tsx
import { IconButton, IconLabel } from './styles';

interface ButtonIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export default function ButtonIcon({ icon, label, onClick }: ButtonIconProps) {
  return (
    <IconButton onClick={onClick}>
      <span>{icon}</span>
      <IconLabel>{label}</IconLabel>
    </IconButton>
  );
}