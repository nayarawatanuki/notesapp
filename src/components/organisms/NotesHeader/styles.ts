import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1e;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SearchInput = styled.input`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
`;

export const LangButton = styled.button`
  background-color: transparent;
  border: none;
  color: #1c1c1e;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    font-size: 16px;
  }
`;