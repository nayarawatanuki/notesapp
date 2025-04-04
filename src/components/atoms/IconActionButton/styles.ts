import styled from 'styled-components';

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;

  height: 38px;
  padding: 0 10px;
  max-width: 20px;
  background-color: #f2f2f7;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #1c1c1e;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    max-width: 200px;
    background-color: #e5e5ea;
  }

  &:hover span {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const IconLabel = styled.span`
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.2s ease;
`;