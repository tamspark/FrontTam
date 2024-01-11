import React from 'react';
import { useNavigate } from 'react-router';
import * as Styled from './Navbar.style'; // Import your styled components
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Navbar: React.FC = () => {
  const logout = (): void => {
    try {
      localStorage.clear();
      window.location.reload();
      console.log('localStorage cleared successfully.');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };

  const navigate = useNavigate();

  // const goToHome = () => navigate('/auth/home');
  // const goToCalendar = () => navigate('/auth/calendar');
  // const goToMessages = () => navigate('/auth/messagepage');
  // const goToApartments = () => navigate('/auth/apartmentpage');
  const goToProfile = () => navigate('/auth/userprofile');

  return (
    <Styled.Header>
      <Styled.Nav>
        {/* <Styled.Ul>
          <Styled.Li onClick={goToHome}>Home</Styled.Li>
          <Styled.Li onClick={goToCalendar}>Calendar</Styled.Li>
          <Styled.Li onClick={goToMessages}>Messages</Styled.Li>
          <Styled.Li onClick={goToApartments}>Apartments</Styled.Li>
        </Styled.Ul> */}
        <div onClick={goToProfile} style={{display:"flex"}}>
        
        <div style={{width:"35px",cursor:"pointer"}}><PersonIcon fontSize='large'/></div>
        <Styled.LogoutButton onClick={logout}><LogoutIcon fontSize='small'/>Logout </Styled.LogoutButton></div>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
