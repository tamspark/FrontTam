import React, { FC, useState, useEffect } from "react";

// date picker from MUI

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import TextField from "@mui/material/TextField";

//style
import {
  ModalContent,
  ModalForm,
  ModalParagraph,
  TextfieldDiv,
} from "./style/Modal.style";
import { Button } from "App/style/App.style";
import { ButtonContainer } from "Pages/Register/style/Register.style";

//redux
import { AppDispatch, RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Modal, openModal, openRentList } from "redux/Modal/ModalSlice";

import RentList from "Components/RentList/RentList.component";
// import { useLocation } from "react-router-dom";

const Modall: FC<{}> = () => {
  // const location = useLocation();
  // const { isEdit, initialData } = location.state || {};
  // console.log("Location state:", location);
  // console.log(location);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [minLength, setMinLength] = useState<string>("");
  const [rentList, setRentList] = useState<Modal[]>([]);
  console.log(rentList, "rent");
  const [error, setError] = useState<string | null>(null);
  const [showRentList, setShowRentList] = useState<boolean>(false);

  //get userId &apartmentId from store
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const apartmentIdFromStore = useSelector(
    (state: RootState) => state.apartmentsCard.apartmentDetails?.id
  );

  //editing the modal
  // useEffect(() => {
  //   if (isEdit && initialData) {
  //     console.log(isEdit, "isEdit");
  //     console.log("iinitalData", initialData);
  //     // If it's an edit operation and initialData is provided, pre-fill the input fields
  //     setStartDate(initialData.startDate);
  //     setEndDate(initialData.endDate);
  //     setPrice(initialData.price.toString());
  //     setMinLength(initialData.minLength.toString());
  //   }
  // }, [isEdit, initialData]);

  //startDate &endDate function
  function handleStartDateChange(event: any) {
    if (event) {
      const year = event.$y;
      const month = (event.$M + 1).toString().padStart(2, "0");
      const day = event.$D.toString().padStart(2, "0");
      setStartDate(`${year}-${month}-${day}`);
    }
  }

  function handleEndDateChange(event: any) {
    if (event) {
      const year = event.$y;
      const month = (event.$M + 1).toString().padStart(2, "0");
      const day = event.$D.toString().padStart(2, "0");
      setEndDate(`${year}-${month}-${day}`);
    }
  }

  const dispatch: AppDispatch = useDispatch();

  //post request
  const userCredentials = {
    apartments: [apartmentIdFromStore],
    operations: [
      {
        dates: [`${startDate}:${endDate}`],
        daily_price: parseFloat(price),
        min_length_of_stay: parseInt(minLength),
      },
    ],
  };

  const handleModalClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (userId) {
      try {
        const response = await dispatch(openModal({ userId, userCredentials }));

        if (openModal.fulfilled.match(response)) {
          await fetchData();
          setShowRentList(true);
        } else {
          console.log("Modal failed", response.error);
        }
      } catch (error) {
        console.log("Error in handleModalClick:", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  //get request
  const rentListProperties = {
    start_date: startDate,
    end_date: endDate,
    apartments: apartmentIdFromStore,
  };

  const fetchData = () => {
    if (userId) {
      console.log(userId);
      dispatch(openRentList({ userId, rentListProperties }))
        .then((result: any) => {
          console.log("result", result);
          if (openRentList.fulfilled.match(result)) {
            setRentList([result.payload]);
            console.log("resu", result.payload);
          } else if (openRentList.rejected.match(result)) {
            setError("Error fetching rent list. Please try again later!");
          }
        })
        .catch((error: any) => {
          console.error("Error fetching rent list:", error);
          setError("Error fetching rent list. Please try again later!");
        });
    } else {
      setError("User ID not available.");
    }
  };
  useEffect(() => {
    fetchData();
  }, [dispatch, userId, endDate, startDate]);

  return (
    <>
      {showRentList ? (
        <RentList rentalData={rentList} />
      ) : (
        <ModalForm>
          <ModalContent>
            {/* <XIconHolder>
            <FontAwesomeIcon icon={faPenToSquare} />
          </XIconHolder> */}
            <ModalParagraph>ADD RENT DATE </ModalParagraph>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Start date"
                  onChange={handleStartDateChange}
                  sx={{ marginTop: "10px !important" }}
                />
                <DatePicker
                  label="End date"
                  onChange={handleEndDateChange}
                  sx={{ marginTop: "10px !important" }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <TextfieldDiv>
              <TextField
                id="outlined-basic"
                label="Price"
                value={price || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
                }
                type="number"
                variant="outlined"
                fullWidth
              />
            </TextfieldDiv>
            <TextfieldDiv>
              <TextField
                id="outlined-basic"
                label="Minimum length of stay"
                value={minLength || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMinLength(e.target.value)
                }
                type="number"
                variant="outlined"
                fullWidth
              />
            </TextfieldDiv>
            <ButtonContainer>
              <Button
                h="40px"
                w="100%"
                variant="primary"
                borderradius="12px"
                fontSize="15px"
                onClick={handleModalClick}
              >
                SUBMIT
              </Button>
            </ButtonContainer>
          </ModalContent>
        </ModalForm>
      )}
    </>
  );
};
export default Modall;
