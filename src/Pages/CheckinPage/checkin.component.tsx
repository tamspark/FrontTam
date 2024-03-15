import ChatComponent2 from 'Components/OpenAIAssistant/AdminAssistant.componet';
import axios from 'axios';

import React from 'react';
import styled from 'styled-components';


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

  const currentURL = window.location.href;


const numbers = currentURL.match(/\d+$/);

if (numbers) {
    
    const numbersString = numbers[0];


    localStorage.setItem('bookingApartmentId', numbersString);

    console.log('Apartment id:', numbersString);
} else {
    console.log('No numbers found in the URL.');
}

const checkIn = async () => {
  try {
    const requestBody = {
      reservationId: 55784576,
      guestName: "Redis"
    };
    await axios.post("http://192.168.10.210:8080/TAM/meeting/generateJitsiMeetLink", requestBody);
    console.log("API call successful");
  } catch (error) {
    console.error("Error calling API:", error);
  }
};

  return (
    <PageContainer>
      <Button onClick={checkIn}>Check-in</Button>
     
      <ChatComponent2/>
     
    </PageContainer>
  );
};

export default GradientPage;