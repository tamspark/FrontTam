import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
 
  
  @media (max-width: 768px) {
    width:100vw;
    overflow-x: hidden;
    overflow-y: auto; 
    display: flex;
    justify-content: flex-end;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
 
  width: 80%;
  max-width: 1240px;
  padding: 50px;

  border: 2px solid gray;
  border-radius: 15px;
 

  @media (max-width:  1050px) {
    border: 0;
    overflow-y: auto;
  }
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid grey;
  @media (max-width: 1050px) {
    flex-direction: column;
    border-bottom: 0;
    margin-top:1200px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-wrap: row;
  padding-top:20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom:20px;
  
  @media (max-width: 1050px) {
    flex-direction: column;
    row-gap:50px;

    
  }
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
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

  flex-basis: 20%;
`;
