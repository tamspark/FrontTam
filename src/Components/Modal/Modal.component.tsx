import React, { FC, useState } from "react";

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
import { openModal } from "redux/Modal/ModalSlice";

const Modal: FC<{}> = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [minLength, setMinLength] = useState<string>("");
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  function handleStartDateChange(event: any) {
    const year = event.$y;
    const month = event.$M + 1;
    const day = event.$D;
    setStartDate(`${year}-${month}-${day}`);
  }

  function handleEndDateChange(event: any) {
    const year = event.$y;
    const month = event.$M + 1;
    const day = event.$D;
    setEndDate(`${year}-${month}-${day}`);
  }
  const dispatch: AppDispatch = useDispatch();

  const modalCredentials = {
    apartments: [1874674],
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
        await dispatch(
          openModal({ userId, userCredentials: modalCredentials })
        );

        setPrice("");
        setMinLength("");
      } catch (error) {
        console.log("Modal failed", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };
  return (
    <>
      <ModalForm>
        <ModalContent>
          <ModalParagraph>ADD RENT DATE</ModalParagraph>
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
              value={price}
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
              value={minLength}
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
    </>
  );
};
export default Modal;
