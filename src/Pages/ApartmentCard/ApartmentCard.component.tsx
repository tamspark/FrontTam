import { FC, useEffect, useState } from "react";
import { fetchApartmentCardDetails } from "redux/Auth/ApartmentCard/ApartmentCardSlice";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";

//styled-components

import { useParams } from "react-router-dom";

//styled-components

import {
  ApartmentName,
  CardContainer,
  Div,
  DivsContentHolder,
  IconContainer,
  Label,
  ListItem,
  Paragraphs,
  UnorderedList,
} from "./style/ApartmentCard.style";

//fontawesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//modal component
import Modal from "Components/Modal/Modal.component";
interface ModalProps {
  onClose: () => void; 
}
const ApartmentCard: FC<{}> = () => {
  const [apartmentCardDetails, setApartmentCardDetails] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      {apartmentCardDetails && (
        <CardContainer>
          <ApartmentName>{apartmentCardDetails.name}</ApartmentName>

          <DivsContentHolder>
            <Div>
              {/* <Location> */}
              <Paragraphs>
                <Label>City: </Label> {apartmentCardDetails.location.city}
              </Paragraphs>
              <Paragraphs>
                <Label>Country: </Label>
                {apartmentCardDetails.location.country}
              </Paragraphs>
              <Paragraphs>
                <Label>Street: </Label>
                {apartmentCardDetails.location.street}
              </Paragraphs>
              <Paragraphs>
                {" "}
                <Label>Zip: </Label> {apartmentCardDetails.location.zip}
              </Paragraphs>
              <Paragraphs>
                <Label>Latitude: </Label>
                {apartmentCardDetails.location.latitude}
              </Paragraphs>
              <Paragraphs>
                <Label>Longitude: </Label>
                {apartmentCardDetails.location.longitude}
              </Paragraphs>
              <Paragraphs>
                <Label>Currency: </Label>"{apartmentCardDetails.currency}"
              </Paragraphs>
              <Paragraphs>
                <Label> Minimal price: </Label>"
                {apartmentCardDetails.price.minimal}"
              </Paragraphs>
              <Paragraphs>
                <Label>Maximal price: </Label>"
                {apartmentCardDetails.price.maximal}"
              </Paragraphs>
              <Paragraphs>
                <Label>Time Zone: </Label>
                {apartmentCardDetails.timeZone}
              </Paragraphs>
              <Paragraphs>
                <Label>Type: </Label> {apartmentCardDetails.type.name}
              </Paragraphs>
              {/* </Location> */}
            </Div>
            <Div>
              <Paragraphs>Rooms: </Paragraphs>
              <UnorderedList>
                <ListItem>
                  <Label> Bathrooms: </Label>
                  {apartmentCardDetails.rooms.bathrooms}
                </ListItem>
                <ListItem>
                  <Label>Bedrooms: </Label>
                  {apartmentCardDetails.rooms.bedrooms}
                </ListItem>
                <ListItem>
                  <Label> Child Beds: </Label>
                  {apartmentCardDetails.rooms.childBeds}
                </ListItem>
                <ListItem>
                  <Label> Couches: </Label>
                  {apartmentCardDetails.rooms.couches}
                </ListItem>
                <ListItem>
                  <Label> Double Beds: </Label>
                  {apartmentCardDetails.rooms.doubleBeds}
                </ListItem>
                <ListItem>
                  <Label> King Size Beds: </Label>
                  {apartmentCardDetails.rooms.kingSizeBeds}
                </ListItem>
                <ListItem>
                  <Label> Max Occupancy: </Label>
                  {apartmentCardDetails.rooms.maxOccupancy}
                </ListItem>
                <ListItem>
                  <Label> Queen Size Beds: </Label>
                  {apartmentCardDetails.rooms.queenSizeBeds}
                </ListItem>
                <ListItem>
                  <Label>Single Beds: </Label>
                  {apartmentCardDetails.rooms.singleBeds}
                </ListItem>
                <ListItem>
                  <Label>Sofa Beds: </Label>
                  {apartmentCardDetails.rooms.sofaBeds}
                </ListItem>
              </UnorderedList>
            </Div>
          </DivsContentHolder>
          <IconContainer>
            <FontAwesomeIcon icon={faPlus} onClick={openModal}/>
          </IconContainer>
        </CardContainer>
      )}
        {isModalOpen && <Modal  />}
    </>
  );
};
export default ApartmentCard;
