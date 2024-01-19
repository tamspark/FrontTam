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

 
  const goToProfile = () => navigate('/auth/userprofile');

  return (
    <Styled.Header>
      <Styled.Nav>
     
        <div onClick={goToProfile} style={{display:"flex"}}>
        
        <div style={{width:"35px",cursor:"pointer"}}><PersonIcon fontSize='large'/></div>
        <Styled.LogoutButton onClick={logout}><LogoutIcon fontSize='small'/>Logout </Styled.LogoutButton></div>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
