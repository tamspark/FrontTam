import { FC, useEffect, useState } from "react";
import {
  ApartmentsState,
  fetchApartmentCardDetails,
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
  // const apartmentCardDetails = useSelector((state: RootState) => state.apartmentsCard.apartmentDetails);
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  // const apartmentId = useSelector(
  //   (state: RootState) => state.apartmentsCard.apartmentDetails?.id
  // );
  // const routeApartementId = parseInt(useParams().id ?? "");
  const { id } = useParams();
  const apartmentId = id ? parseInt(id) : 0;
  useEffect(() => {
    if (userId && apartmentId) {
      dispatch(fetchApartmentCardDetails({ userId, id: apartmentId }))
        .then((result: any) => {
          if (fetchApartmentCardDetails.fulfilled.match(result)) {
            setApartmentCardDetails(result.payload);
          } else {
            // Handle the case when apartment details are not available
            console.error("Apartment details not found.");
            // You can also redirect to an error page or display a message.
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
      <CardContainer>
        <Location>
          <strong>Location:</strong>
          <br />
          Street: Pjeter Budi
          <br />
          Zip: "13"
          <br />
          City: lushnje
          <br />
          Country: albania
        </Location>
        <div>
          <strong>Rooms:</strong>
          <ul>
            <li>Max Occupancy:12</li>
            <li>Bedrooms: 2</li>
            <li>Bathrooms: 2</li>
            <li>Double Beds: 2</li>
            <li>Single Beds: 1</li>
            <li>King Size Beds: 2</li>
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
    </>
  );
};
export default ApartmentCard;
