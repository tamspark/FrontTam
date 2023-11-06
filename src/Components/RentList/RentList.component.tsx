import { FC, useState } from "react";
import {
  EditButton,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./style/RentList.style";
import { Link } from "react-router-dom";
import { Modal, openModal, openRentList } from "redux/Modal/ModalSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "Components/Popup/Popup.component";
import TextField from "@mui/material/TextField";
import { Button } from "App/style/App.style";
import { AppDispatch, RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
interface RentListProps {
  rentalData: Modal[];
}

const RentList: FC<RentListProps> = ({ rentalData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [rentList, setRentList] = useState<Modal[]>([]);
  console.log(selectedItem, "selected/ITem");
  //get userId &apartmentId from store
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const apartmentIdFromStore = useSelector(
    (state: RootState) => state.apartmentsCard.apartmentDetails?.id
  );
  const dispatch: AppDispatch = useDispatch();
  const handleSave = async () => {
    if (!userId || !selectedItem) {
      console.error("User is not authenticated or no item is selected");
      return;
    }

    //post request
    const userCredentials = {
      apartments: [apartmentIdFromStore],
      operations: [
        {
          dates: [selectedItem.date], // Use the appropriate date format
          daily_price: parseFloat(selectedItem.price),
          min_length_of_stay: parseInt(selectedItem.min_length_of_stay),
        },
      ],
    };

    try {
      const response = await dispatch(openModal({ userId, userCredentials }));

      if (openModal.fulfilled.match(response)) {
        await fetchUpdatedList();
        console.log("Update successful", response.payload);

        setIsModalOpen(false); // Close the popup

        // Fetch the updated rent list if necessary
        // ...
      } else {
        console.error("Update failed", response.error);
      }
    } catch (error) {
      console.error("Error in handleSave:", error);
    }
  };

  //get api
  const rentListProperties = {
    start_date: selectedItem.date,
    end_date: selectedItem.date,
    apartments: apartmentIdFromStore,
  };
  const fetchUpdatedList = async () => {
    // use appropriate values for start_date and end_date

    if (userId) {
      console.log(userId);
      dispatch(openRentList({ userId, rentListProperties }))
        .then((result: any) => {
          console.log("result", result);
          if (openRentList.fulfilled.match(result)) {
            setRentList([result.payload]);
            console.log("resu", result.payload);
          }
        })
        .catch((error: any) => {
          console.error("Error fetching rent list:", error);
        });
    }
  };
  const handleEdit = (rentalResult: any) => {
    console.log(rentalResult);
    setIsModalOpen(true);
    setSelectedItem(rentalResult);
  };
  console.log(rentalData);
  const result: any[] = [];

  rentalData.forEach((outerObject: any) => {
    for (const outerKey in outerObject) {
      if (Object.prototype.hasOwnProperty.call(outerObject, outerKey)) {
        const innerObject = outerObject[outerKey];

        for (const dateKey in innerObject) {
          if (Object.prototype.hasOwnProperty.call(innerObject, dateKey)) {
            const dateData = innerObject[dateKey];
            const price = dateData.price;
            const min_length_of_stay = dateData.min_length_of_stay;

            // Create an object with the desired values
            const data = {
              date: dateKey,
              price: price,
              min_length_of_stay: min_length_of_stay,
            };

            result.push(data);
          }
        }
      }
    }
  });

  console.log(result);
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th>Minimum Length of Stay</th>
              <th>Actions</th>
            </tr>
          </TableHead>
          <tbody>
            {result.map((rentalResult: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{rentalResult.date}</TableCell>
                <TableCell>{`${rentalResult.price} $`}</TableCell>
                <TableCell>{`${rentalResult.min_length_of_stay} nights`}</TableCell>
                <TableCell>
                  <EditButton onClick={() => handleEdit(rentalResult)}>
                    Edit
                  </EditButton>

                  <Link to="">
                    <DeleteIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Popup
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        headerContent={<h2>Edit Item</h2>}
        bodyContent={
          <>
            <TextField
              id="outlined-basic"
              label="Date"
              value={selectedItem?.date || ""}
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
            />

            <TextField
              id="outlined-basic"
              label="Price"
              type="number"
              value={selectedItem?.price}
              onChange={(e) => {
                // Update the selectedItem with the new price value
                setSelectedItem({
                  ...selectedItem,
                  price: parseFloat(e.target.value),
                });
              }}
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
            />
            <TextField
              id="outlined-basic"
              label="Min length of stay"
              type="number"
              value={selectedItem?.min_length_of_stay}
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
            />
          </>
        }
        footerContent={<Button onClick={handleSave}>Save</Button>}
      />
    </>
  );
};

export default RentList;
