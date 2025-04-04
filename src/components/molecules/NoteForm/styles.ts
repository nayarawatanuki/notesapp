import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #fcd34d;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #facc15;
  }
`;