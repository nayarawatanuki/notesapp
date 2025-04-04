import { SidebarContainer, Title, NavItem, NavGroup } from './styles';
import { FaStickyNote, FaArchive, FaTags } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Title>NotesApp</Title>
      <NavGroup>
        <NavItem><FaStickyNote /> All notes</NavItem>
        <NavItem><FaArchive /> Archived notes</NavItem>
      </NavGroup>

      <NavGroup>
        <NavItem><FaTags /> Travel</NavItem>
        <NavItem><FaTags /> Paris</NavItem>
        <NavItem><FaTags /> London</NavItem>
        <NavItem><FaTags /> Miami</NavItem>
        <NavItem><FaTags /> Roma</NavItem>
        <NavItem><FaTags /> Hotel</NavItem>
        <NavItem><FaTags /> Experience</NavItem>
        <NavItem><FaTags /> Dinner</NavItem>
        <NavItem><FaTags /> Food</NavItem>
      </NavGroup>
    </SidebarContainer>
  );
} 