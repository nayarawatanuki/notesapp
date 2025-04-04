
import styled from 'styled-components';

export const ListContainer = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  padding: 16px;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const CreateButton = styled.button`
  background-color: #fecd2f;
  color: #1c1c1e;
  font-weight: bold;
  padding: 8px 120px;
  height: 38px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;