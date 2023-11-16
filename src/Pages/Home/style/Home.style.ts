import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  max-width: 1440px;
  padding: 50px;

  border: 2px solid gray;
  border-radius: 15px;
`;
export const ApartmentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  max-width: 1440px;
  padding: 50px;

  border: 2px solid gray;
  border-radius: 15px;
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;

  border-bottom: 2px solid grey;
`;

export const BottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;
`;

export const NextBookingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-basis: 80%;
  flex-grow: 0;
`;

export const HistoricalDataBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flwx-basis: 20%;
`;
