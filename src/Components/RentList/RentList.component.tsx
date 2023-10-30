import { FC, useState, useEffect } from "react";
import {
  EditButton,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./style/RentList.style";
import { Link } from "react-router-dom";

//redux
import { AppDispatch, RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RentListState, openRentList } from "redux/RentList/RentListSlice";
import axios from "axios";

const RentList: FC<{}> = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [price, setPrice] = useState<number | string>(""); // Set the type to number or string
  const [minLength, setMinLength] = useState<number | string>(""); // Set the type to number or string
  const [rentalData, setRentalData] = useState<RentListState[]>([])
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const apartmentIdFromStore = useSelector(
    (state: RootState) => state.apartmentsCard.apartmentDetails?.id
  );
  console.log(apartmentIdFromStore);
  const dispatch: AppDispatch = useDispatch();
//   const rentListProperties = {
//     start_date: startDate,
//     end_date: endDate,
//     apartments: [apartmentIdFromStore],
//   };
//   const rentalData = [
//     { id: 1, date: "2023-10-19", price: 40, minLength: 7 },
//     // Add more rental data items as needed
//   ];
    // Fetch data using the openRentList action when the component mounts
    useEffect(() => {
        if (userId && apartmentIdFromStore) {
          dispatch(
            openRentList({
              userId,
              rentListProperties: {
                start_date: startDate, // Define startDate and endDate
                end_date: endDate,
                apartments: [apartmentIdFromStore],
              },
            })
          )
            .unwrap()
            .then((rentListData:any) => {
              // Data is successfully fetched, update the state
              setRentalData(rentListData);
            })
            .catch((error) => {
              console.error("Failed to fetch rent list data:", error);
            });
        }
      }, [userId, apartmentIdFromStore]);
//   useEffect(() => {
//     if (userId && startDate && endDate && apartmentIdFromStore) {
//       // Define the URL and parameters for your GET request
//       const apiUrl = `http://192.168.10.210:8080/TAM/${userId}/apartmentAvailability`;
//       const params = {
//         start_date: startDate,
//         end_date: endDate,
//         apartments: [apartmentIdFromStore],
//       };

//       // Make the GET request
//       axios
//         .get(apiUrl, { params })
//         .then((response) => {
//           const responseData = response.data;
//           console.log("API Response:", responseData);

    
//         })
//         .catch((error) => {
//           console.error("Failed to fetch data from the API: ", error);
//         });
//     }
//   }, [userId, startDate, endDate, apartmentIdFromStore]);
//   const handleRentClick = async (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     e.preventDefault();
//     if (userId) {
//       try {
//         await dispatch(openRentList({ userId, rentListProperties }));
//       } catch (error) {
//         console.log("Modal failed", error);
//       }
//     } else {
//       console.log("User is not authenticated");
//     }
//   };
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
            {rentalData.map((rental) => (
              <TableRow>
                <TableCell>2023-10-19</TableCell>
                <TableCell>$40</TableCell>
                <TableCell>7 nights</TableCell>
                <TableCell>
                  <Link to="auth/rentlist">
                    <EditButton >
                      Edit
                    </EditButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RentList;
