import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar header header"
    "sidebar list form";
  height: 100vh;
  background-color: #f9f9f9;
`;

export const NotesHeaderArea = styled.div`
  grid-area: header;
  padding: 1rem;
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const SidebarArea = styled.div`
  grid-area: sidebar;
`;

export const NotesListArea = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const NotesContentArea = styled.div`
  grid-area: form;
  padding: 1rem;
`;