import { FC, useEffect, useState} from "react";
import {
  ApartmentContentHolder,
  ApartmentNameParagraph,
  Container,
  ErrorMessage,
  Icon,
} from "./style/ApartmentPage.style";
// import { Button } from "App/style/App.style";
//fontawesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  ApartmentProps,
  fetchApartmentIds,
} from "redux/Auth/ApartmentsPage/ApartmentsPageSlice";
import { AppDispatch } from "../../redux/store";


//navigation
import { useNavigate } from "react-router";


const ApartmentPage: FC<{}> = () => {
  const navigate = useNavigate();
  const [apartmentName, setApartmentNames] = useState<ApartmentProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log("apartmentName", apartmentName);

  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.id;

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      if (userId) {
        console.log(userId);
        dispatch(fetchApartmentIds(userId))
          .then((result: any) => {
            console.log(result);
            if (fetchApartmentIds.fulfilled.match(result)) {
              setApartmentNames(result.payload);
            } else if (fetchApartmentIds.rejected.match(result)) {
              setError(
                "Error fetching apartment names. Please try again later!"
              );
            }
          })
          .catch((error: any) => {
            console.error("Error fetching apartment names:", error);
            setError("Error fetching apartment names. Please try again later!");
          });
      } else {
        setError("User ID not available.");
      }
    };

    fetchData();
  }, [dispatch, userId]);

  const handleApartmentClick = (apartment: ApartmentProps) => {
    console.log(apartment.id);
    navigate(`/apartmentcard/${apartment.id}`);
  };




  return (
    <Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        apartmentName.map((apartment: any) => (
          <ApartmentContentHolder
            key={apartment.id}
            onClick={() => handleApartmentClick(apartment)}
          >
            <Icon>
              <FontAwesomeIcon icon={faHotel} />
            </Icon>
            <ApartmentNameParagraph>{apartment.name}</ApartmentNameParagraph>
           
          </ApartmentContentHolder>
        ))
      )}
 
    </Container>
   
  );
};

export default ApartmentPage;
