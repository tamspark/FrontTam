import ChatComponent2 from 'Components/OpenAIAssistant/AdminAssistant.componet';

import React from 'react';
import styled from 'styled-components';

// Define the styled components for the page and the button
const PageContainer = styled.div`
  height: 100vh;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #f1f7fe, #f1d6fe);
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  margin-right:350px;
  border-radius: 6px;
  background-color: lightblue;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
height:90px;
&:hover {
  background-color: #e3edf0;;
 }
  @media (max-width: 750px) {
    width: 120px;
    height:65px;
    margin-right:200px;
  }
`;

const GradientPage: React.FC = () => {
  return (
    <PageContainer>
      <Button>Check-in</Button>
     
      <ChatComponent2/>
     
    </PageContainer>
  );
};

export default GradientPage;