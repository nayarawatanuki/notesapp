import { Filter } from '@/interfaces/Filter';
import { SidebarWrapper, SectionTitle, FilterButton, TagItem } from './styles';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  tags: string[];
}

export default function Sidebar({ filter, setFilter, tags }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <SidebarWrapper>
      <SectionTitle>NotesApp</SectionTitle>

      <FilterButton
        onClick={() => setFilter({ type: 'all' })}
        $active={filter.type === 'all'}
      >
        📓 {t('all_notes')}
      </FilterButton>

      <FilterButton
        onClick={() => setFilter({ type: 'archived' })}
        $active={filter.type === 'archived'}
      >
        📦 {t('archived')}
      </FilterButton>

      <SectionTitle>{t('tags')}</SectionTitle>

      {tags.map((tag) => (
        <TagItem
          key={tag}
          onClick={() => setFilter({ type: 'tag', value: tag })}
          $active={filter.type === 'tag' && filter.value === tag}
        >
          #{tag}
        </TagItem>
      ))}
    </SidebarWrapper>
  );
}