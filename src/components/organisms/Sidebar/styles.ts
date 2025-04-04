import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  border-right: 1px solid #ddd;
  padding: 2rem;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  padding: 1.5rem 1rem;
  width: 240px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h4`
  margin-bottom: 0.75rem;
  color: #888;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ $active }) => ($active ? '#e2e8f0' : 'transparent')};
  color: ${({ $active }) => ($active ? '#1c1c1e' : '#555')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e5ea;
  }
`;

export const TagItem = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.4rem 0.75rem;
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
  border-radius: 4px;
  color: ${({ $active }) => ($active ? '#1c1c1e' : '#666')};
  background-color: ${({ $active }) => ($active ? '#e2e8f0' : 'transparent')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;