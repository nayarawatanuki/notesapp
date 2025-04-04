// src/components/molecules/ConfirmDialog/styles.ts
import styled from 'styled-components';

export const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const DialogBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  min-width: 280px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
  }

  button:first-child {
    background: #ddd;
  }

  button:last-child {
    background: #fecd2f;
    color: #1c1c1e;
    font-weight: 600;
  }
`;