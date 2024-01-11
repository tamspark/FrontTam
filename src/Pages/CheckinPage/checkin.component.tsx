import ChatComponent2 from 'Components/OpenAIAssistant/AdminAssistant.componet';

import React from 'react';
import styled from 'styled-components';

// Define the styled components for the page and the button
const PageContainer = styled.div`
  height: 100vh;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #f1f7fe, #f1d6fe);
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const GradientPage: React.FC = () => {
  return (
    <PageContainer>
      <Button>KYC Verification</Button>
      <ChatComponent2/>
    </PageContainer>
  );
};

export default GradientPage;