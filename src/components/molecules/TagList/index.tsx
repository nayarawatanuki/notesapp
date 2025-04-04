// src/components/molecules/TagsList/index.tsx
import Tag from '@/components/atoms/Tag';
import { TagsContainer } from './styles';

interface TagsListProps {
  tags: string[];
  onSelectTag?: (tag: string) => void;
}

export default function TagsList({ tags, onSelectTag }: TagsListProps) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} onClick={() => onSelectTag?.(tag)} />
      ))}
    </TagsContainer>
  );
}