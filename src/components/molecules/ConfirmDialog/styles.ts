import styled from 'styled-components';

export const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const DialogBox = styled.div`
  background: white;
  color: #1c1c1e;
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const Button = styled.button<{ $variant?: 'danger' }>`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${({ $variant }) =>
    $variant === 'danger' ? '#e53935' : '#e0e0e0'};
  color: ${({ $variant }) =>
    $variant === 'danger' ? '#fff' : '#1c1c1e'};

  &:hover {
    opacity: 0.9;
  }
`;