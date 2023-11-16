import { FC, useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { fetchApartmentCardDetails } from "redux/Auth/ApartmentCard/ApartmentCardSlice";

//react-router-dom
import { useParams } from "react-router-dom";

//styled-components
import {
  ApartmentName,
  CardContainer,
  Div,
  DivsContentHolder,
  Holder,
  IconContainer,
  IconHold,
  Label,
  ListItem,
  Paragraphs,
  RentLink,
  UnorderedList,
} from "./style/ApartmentCard.style";

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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event: any) => {
    
    const file = event.target.files[0];
  
    setSelectedFile(file);
    handleFileInputChange1(event);
  };

  const handleUpload = () => {
  
    if (selectedFile) {
    
      console.log("Uploading file:", selectedFile);
    
    } else {
      console.log("No file selected.");
    }
  };

  const [selectedFileName, setSelectedFileName] = useState('');

const handleFileInputChange1 = (event:any) => {
  const fileName = event.target.files[0].name;
  setSelectedFileName(fileName);
  // Handle other file input logic as needed
};
  return (
    <Holder>
      {apartmentCardDetails && (
        <CardContainer>
          <ApartmentName>{apartmentCardDetails.name}</ApartmentName>

          <DivsContentHolder>
            <Div>
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
            <IconHold>
              <RentLink to="/auth/rentlist">EDIT PRICE</RentLink>
            </IconHold>
            <IconHold>
              <RentLink to="/auth/modal">ADD RENT DATE</RentLink>
            </IconHold>
          </IconContainer>
          <div style={{display:"flex",
        flexDirection:"row",
        gap:"50px",
        justifyContent:"center",
        alignItems:"flex-end"}}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-block",
              height:"35px"
            }}
          >
            <input
              type="file"
              id="fileInput"
              style={{
                position: "absolute",
               
                opacity: 0,
                top: 0,
                right: 0,
              }}
              onChange={handleFileInputChange}
            />
            <label
              htmlFor="fileInput"
              style={{
                display: "flex",
              alignItems:"center",
              justifyContent:"center",
                backgroundColor: "#3498db",
                color: " #fff",
                borderRadius: "5px",
                cursor: "pointer",
             width:"100px",
              height: "35px"
              }}
            >
              Choose File
            </label>
          </div>
          <button
            style={{
              display: "inline-block",
              padding: "px 20px",
              backgroundColor: "#3498db",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              textDecoration: "none",
              border: "none",
              marginTop: "10px",
              width: "100px",
              height: "35px",
            }}
            onClick={handleUpload}
          >
            Upload
          </button>
          </div>
          {selectedFileName && <p>Selected Photo: {selectedFileName}</p>}
        </CardContainer>
      )}
    </Holder>
  );
};
export default ApartmentCard;
