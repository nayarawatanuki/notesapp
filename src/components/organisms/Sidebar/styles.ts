import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background-color: #2c2c2e;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 1px solid #3a3a3c;
`;

export const Title = styled.h2`
  color: #f2f2f7;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.5rem;
`;

export const NavGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #d1d1d6;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #3a3a3c;
  }
`;