import styled from 'styled-components';

export const Card = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? '#fecd2f' : '#fff')};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#fecd2f' : '#f2f2f2')};
  }

  p {
    font-size: 13px;
    color: #444;
    margin-top: 4px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 14px;
    font-weight: 600;
    color: #1c1c1e;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #888;

  &:hover {
    color: #e53935;
  }
`;