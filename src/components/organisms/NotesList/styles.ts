import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: #f2f2f7;
  padding: 20px;
  border-right: 1px solid #ccc;
  overflow-y: auto;
`;

export const Header = styled.div`
  margin-bottom: 16px;
`;

export const CreateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fecd2f;
  color: #1c1c1e;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fdd84b;
  }
`;

export const NoteItem = styled.div<{ selected?: boolean }>`
  position: relative;
  background-color: ${({ selected }) => (selected ? '#d6d6d6' : 'white')};
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#d6d6d6' : '#f0f0f0')};
  }
`;

export const DeleteIcon = styled.span`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 14px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const NoteTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
`;

export const NoteMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
`;

export const Tag = styled.span`
  background-color: #e0e0e0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
`;