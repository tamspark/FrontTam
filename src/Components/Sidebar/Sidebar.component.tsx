import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import BusinessIcon from '@mui/icons-material/Business';
import MenuIcon from '@mui/icons-material/Menu';

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

const SidebarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 50px;
  left: ${({ open }) => (open ? '0' : '0')}; 
  width: ${({ open }) => (open ? '250px' : '50px')};
  height: 100%;
  background-color: lightblue;
  transition: left 0.3s ease-in-out;
  z-index: 999;
`;

const SidebarToggle = styled.div<{ open: boolean }>`
  padding: 10px;
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  gap:10px;
  &:hover {
    background-color: #73b9cf;
  }
`;

const SidebarLinks = styled.ul`
  list-style: none;
  padding: 0;
      display: flex;
    flex-direction: column;
    row-gap: 35px;
`;

const SidebarLink = styled.li`
  padding: 10px;
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  display: flex;
    align-items: center;
    gap:10px;
  &:hover {
    background-color: #73b9cf;
  }
`;

const Sidebar: FC<SidebarProps> = ({ open,toggleSidebar }) => {

    const navigate = useNavigate();

    const goToHome = () => navigate('/auth/home');
    const goToCalendar = () => navigate('/auth/calendar');
    const goToMessages = () => navigate('/auth/messagepage');
    const goToApartments = () => navigate('/auth/apartmentpage');
    
  

  return (
    <SidebarContainer open={open}>
         <SidebarToggle open={open} onClick={toggleSidebar}>
        <MenuIcon/> {open ? 'Close Menu' : null}
      </SidebarToggle>
      <SidebarLinks>
      <SidebarLink onClick={goToHome} ><HomeIcon/> {open ? 'Home' : null}</SidebarLink>
      <SidebarLink onClick={goToCalendar}><CalendarMonthIcon/> {open ? 'Calendar' : null}</SidebarLink>
      <SidebarLink onClick={goToMessages}><MessageIcon/> {open ? 'Messages' : null}</SidebarLink>
      <SidebarLink onClick={goToApartments}><BusinessIcon/> {open ? 'Apartments' : null}</SidebarLink>
        
        
 
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
