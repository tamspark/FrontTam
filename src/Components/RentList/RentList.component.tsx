import { FC } from "react";
import {
  EditButton,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./style/RentList.style";
import { Link } from "react-router-dom";
import { Modal } from "redux/Modal/ModalSlice";
import DeleteIcon from "@mui/icons-material/Delete";
interface RentListProps {
  rentalData: Modal[];
}

const RentList: FC<RentListProps> = ({ rentalData }) => {
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
            {result.map(
              (rentalResult: any, index: number) => (
                console.log(rentalResult),
                (
                  <TableRow key={index}>
                    <TableCell>{rentalResult.date}</TableCell>
                    <TableCell>{`${rentalResult.price} $`}</TableCell>
                    <TableCell>{`${rentalResult.min_length_of_stay} nights`}</TableCell>
                    <TableCell>
                      <Link to="auth/modal">
                        <EditButton>Edit</EditButton>
                      </Link>
                      <Link to="">
                        <DeleteIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              )
            )}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RentList;
