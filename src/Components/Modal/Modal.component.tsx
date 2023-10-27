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
  XIconHolder,
} from "./style/Modal.style";
import { Button } from "App/style/App.style";
import { ButtonContainer } from "Pages/Register/style/Register.style";

//redux
import { AppDispatch, RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalState,
  // fetchUpdatedData,
  openModal,
} from "redux/Modal/ModalSlice";

//fontawesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface ModalData {
  startDate: string;
  endDate: string;
  price: string;
  minLength: string;
  // apartments: number[];
}

// export type ModalProps = {
//   // onClose: () => void;
//   isUpdate: boolean;
//   initialData?: ModalData; // Use the new type here
// };
const Modal: FC<{}> = () => {
  // const location = useLocation();
  // console.log(location);
  // const modal = location.state ? location.state.modal : "";
  const [startDate, setStartDate] = useState<string>("");
  // console.log(modal);
  const [endDate, setEndDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [minLength, setMinLength] = useState<string>("");

  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const apartmentIdFromStore = useSelector(
    (state: RootState) => state.apartmentsCard.apartmentDetails?.id
  );
  console.log(apartmentIdFromStore);

  function handleStartDateChange(event: any) {
    if (event) {
      const year = event.$y;
      const month = event.$M + 1;
      const day = event.$D;
      setStartDate(`${year}-${month}-${day}`);
    }
  }

  function handleEndDateChange(event: any) {
    if (event) {
      const year = event.$y;
      const month = event.$M + 1;
      const day = event.$D;
      setEndDate(`${year}-${month}-${day}`);
    }
  }

  const dispatch: AppDispatch = useDispatch();

  const modalCredentials = {
    apartments: [apartmentIdFromStore],
    operations: [
      {
        dates: [`${startDate}:${endDate}`],
        daily_price: parseFloat(price),
        min_length_of_stay: parseInt(minLength),
      },
    ],
  };
  // const editModalCredentials = {
  //   apartments: [apartmentIdFromStore],
  //   operations: [
  //     {
  //       dates: [`${startDate}:${endDate}`],
  //       daily_price: parseFloat(price),
  //     },
  //   ],
  // };
  const handleModalClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (userId) {
      try {
        await dispatch(
          openModal({ userId, userCredentials: modalCredentials })
        );
        setStartDate("");
        setEndDate("");
        setPrice("");
        setMinLength("");
      } catch (error) {
        console.log("Modal failed", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };
  const abc = {
    start_date: "2023-12-02",
    end_date: "2023-12-02",
    apartments: [apartmentIdFromStore],
  };
  console.log("abc", abc);
  useEffect(() => {
    if (userId) {
      console.log(userId);

      try {
        axios
          .get(
            `http://192.168.10.210:8080/TAM/${userId}/apartmentAvailability`,
            {
              params: {
                start_date: "2023-12-02",
                end_date: "2023-12-02",
                apartments: apartmentIdFromStore,
              },
            }
          )
          .then((response) => {
            const data = response.data;
            console.log(data);
            setStartDate(data.apartments.start_date);
            setEndDate(data.endDate);
            setPrice(data.price);
            setMinLength(data.minLength);
          })
          .catch((error) => {
            console.error("Failed to fetch data from the API: ", error);
          });
      } catch (error) {
        console.error("Error in API request: ", error);
      }
    }
  }, [userId]);

  // useEffect(() => {
  //   if (initialData) {
  //     dispatch(
  //       fetchUpdatedData({
  //         userId: userId,
  //         startDate: initialData.startDate,
  //         endDate: initialData.endDate,
  //         apartments: initialData.apartments,
  //       })
  //     )
  //       .unwrap()
  //       .then((data) => {
  //         console.log(data);
  //         setStartDate(data.startDate);
  //         setEndDate(data.endDate);
  //         setPrice(data.price.toString()); // Make sure to convert to a string if needed
  //         setMinLength(data.minLength.toString()); // Convert to a string if needed
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch updated data: ", error);
  //       });
  //   }
  // }, [dispatch, initialData, userId]);

  return (
    <>
      <ModalForm>
        <ModalContent>
          <XIconHolder>
            <FontAwesomeIcon icon={faPenToSquare} />
          </XIconHolder>
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
    </>
  );
};
export default Modal;
