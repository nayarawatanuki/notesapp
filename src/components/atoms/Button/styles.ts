// src/components/atoms/ButtonIcon/styles.ts
import styled from 'styled-components';

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;

  height: 38px;
  padding: 0 10px;
  max-width: 38px;
  background-color: #f2f2f7;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #1c1c1e;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  & > span:first-child {
    font-size: 24px;
    transition: font-size 0.3s ease;
  }

  &:hover {
    max-width: 200px;
    background-color: #e5e5ea;
  }

  &:hover > span:first-child {
    font-size: 16px;
  }

  &:hover span:last-child {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const IconLabel = styled.span`
  opacity: 0;
  transform: translateX(-8px);
  font-size: 10px;
  font-weight: 400;
  transition: all 0.2s ease;
`;