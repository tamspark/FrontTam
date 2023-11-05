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
import { Modal } from "redux/Modal/ModalSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "Components/Popup/Popup.component";
interface RentListProps {
  rentalData: Modal[];
}

const RentList: FC<RentListProps> = ({ rentalData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  console.log(selectedItem, "selected/ITem");
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
                  <Link to="auth/rentlist">
                    <EditButton onClick={() => handleEdit(rentalResult)}>
                      Edit
                    </EditButton>
                  </Link>
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
          <div>
            <label>Date:</label>
            <input type="text" value={selectedItem?.date} readOnly />
            <label>Price</label>
            <input type="number" value={selectedItem?.price} />
            <label>Length of stay</label>
            <input type="number" value={selectedItem?.min_length_of_stay} />
          </div>
        }
        footerContent={
          <button onClick={() => setIsModalOpen(false)}>Save</button>
        }
      />
    </>
  );
};

export default RentList;
