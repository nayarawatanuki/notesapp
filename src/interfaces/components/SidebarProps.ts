import { Filter } from '@/interfaces/Filter';

export interface SidebarProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}