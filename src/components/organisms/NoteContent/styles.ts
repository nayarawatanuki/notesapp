import styled, { css } from 'styled-components';

export const ContentWrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #1c1c1e;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #f2f2f7;
  outline: none;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    background-color: #3f3f46;
    color: #facc15;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
`;

export const LastEdited = styled.span`
  font-size: 0.75rem;
  color: #a1a1aa;
`;

export const TextArea = styled.div`
  flex: 1;
  min-height: 300px;
  padding: 1rem;
  background-color: #2c2c2e;
  border-radius: 6px;
  color: #f2f2f7;
  font-size: 1rem;
  line-height: 1.6;
  outline: none;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button<{ $variant?: string }>`
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  ${({ $variant }) =>
    $variant === 'cancel'
      ? css`
          background-color: #3a3a3c;
          color: #f2f2f7;

          &:hover {
            background-color: #48484a;
          }
        `
      : css`
          background-color: #ffd60a;
          color: #1c1c1e;

          &:hover {
            background-color: #f9c700;
          }
        `}
`;