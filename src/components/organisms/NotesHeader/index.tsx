import { FaGlobe } from 'react-icons/fa';
import {
  HeaderContainer,
  Title,
  SearchWrapper,
  SearchInput,
  LangButton
} from './styles';

interface NotesHeaderProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleLanguage: () => void;
  currentLanguage: 'en' | 'pt';
}

export default function NotesHeader({
  search,
  onSearchChange,
  onToggleLanguage,
  currentLanguage
}: NotesHeaderProps) {
  return (
    <HeaderContainer>
      <Title>All Notes</Title>

      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchChange}
        />

        <LangButton onClick={onToggleLanguage}>
          <FaGlobe />
          <span>{currentLanguage.toUpperCase()}</span>
        </LangButton>
      </SearchWrapper>
    </HeaderContainer>
  );
}