import { FC, useEffect, useState } from "react";
import {
  ApartmentsState,
  fetchApartmentCardDetails,
  // ApartmentDetails,
  // setApartmentId,
  // setUserId,
} from "redux/Auth/ApartmentCard/ApartmentCardSlice";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";

//styled-components
import styled from "styled-components";
import { useParams } from "react-router-dom";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Location = styled.div`
  font-weight: bold;
`;

const Price = styled.div`
  margin-top: 8px;
  font-size: 20px;
  color: #007bff;
`;

const Equipment = styled.div`
  margin-top: 8px;
`;

const ApartmentCard: FC<{}> = () => {
  const [apartmentCardDetails, setApartmentCardDetails] = useState<any>();

  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  const { id } = useParams();
  const apartmentId = id ? parseInt(id) : 0;
  useEffect(() => {
    if (userId && apartmentId) {
      dispatch(fetchApartmentCardDetails({ userId, id: apartmentId }))
        .then((result: any) => {
          if (fetchApartmentCardDetails.fulfilled.match(result)) {
            setApartmentCardDetails(result.payload);
          } else {
            console.error("Apartment details not found.");
          }
        })
        .catch((error: any) => {
          console.error("Error fetching apartment details:", error);
        });
    }
  }, [dispatch, userId, apartmentId]);

  console.log("apartmentCard", apartmentCardDetails);

  return (
    <>
      {apartmentCardDetails && (
        <CardContainer>
          <Location>
            <strong>Location:</strong>
            <br />
            Street: {apartmentCardDetails.location.street}
            <br />
            Zip: {apartmentCardDetails.location.zip}
            <br />
            City: {apartmentCardDetails.location.city}
            <br />
            Country: {apartmentCardDetails.location.country}
          </Location>
          <div>
            <strong>Rooms:</strong>
            <ul>
              <li>Max Occupancy: {apartmentCardDetails.rooms.maxOccupancy}</li>
              <li>Bedrooms: {apartmentCardDetails.rooms.bedrooms}</li>
              <li>Bathrooms: {apartmentCardDetails.rooms.bathrooms}</li>
              <li>Double Beds: {apartmentCardDetails.rooms.doubleBeds}</li>
              <li>Single Beds: {apartmentCardDetails.rooms.singleBeds}</li>
              <li>King Size Beds: {apartmentCardDetails.rooms.kingSizeBeds}</li>
            </ul>
          </div>
          <Equipment>
            <strong>Equipment:</strong>
          </Equipment>
          <Price>
            <strong>Price Range:</strong>
          </Price>
          <div>
            <strong>Type:</strong>
          </div>
        </CardContainer>
      )}
    </>
  );
};
export default ApartmentCard;
