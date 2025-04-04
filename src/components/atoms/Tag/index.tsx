// src/components/atoms/Tag/index.tsx
import { StyledTag } from './styles';

interface TagProps {
  label: string;
  onClick?: () => void;
}

export default function Tag({ label, onClick }: TagProps) {
  return <StyledTag onClick={onClick}>#{label}</StyledTag>;
}