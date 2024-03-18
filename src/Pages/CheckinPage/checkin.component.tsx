import ChatComponent2 from "Components/OpenAIAssistant/AdminAssistant.componet";
import axios from "axios";
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #f1f7fe, #f1d6fe);
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  margin-right: 350px;
  border-radius: 6px;
  background-color: lightblue;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 90px;
  &:hover {
    background-color: #e3edf0;
  }
  @media (max-width: 750px) {
    width: 120px;
    height: 65px;
    margin-right: 200px;
  }
`;

const GradientPage: React.FC = () => {
  const currentURL = window.location.href;
  const urlParts = currentURL.split("/"); // Split the URL by '/'

  // Extract apartment ID from the URL
  const apartmentId = urlParts[4];
  localStorage.setItem("bookingApartmentId", apartmentId);
  console.log("Apartment id:", apartmentId);

  // Extract reservation ID and guest name from the URL
  const reservationId = urlParts[5];
  const guestName = urlParts[6];

  const checkIn = async () => {
    try {
      const requestBody = {
        reservationId: reservationId,
        guestName: guestName,
      };
      const response = await axios.post(
        "https://tambackend.onrender.com/TAM/meeting/generateJitsiMeetLink",
        requestBody
      );
      console.log("API call successful");
      const checkinurl = response.data;
      window.location.href = checkinurl;
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <PageContainer>
      <Button onClick={checkIn}>Check-in</Button>
      <ChatComponent2 />
    </PageContainer>
  );
};

export default GradientPage;
