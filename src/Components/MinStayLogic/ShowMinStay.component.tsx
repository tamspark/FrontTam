import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface MinStay {
  day: number;
  minStay: number;
  id:number
}

const YourComponent: React.FC = () => {
  const [minStays, setMinStays] = useState<MinStay[]>([]);
  const [editedMinStay, setEditedMinStay] = useState<MinStay | null>(null);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MinStay[]>("http://192.168.10.210:8080/TAM/minStay/getAllMinStays");
        setMinStays(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [reload]);

  const handleEdit = (day: number, minStay: number,id:number) => {
    setEditedMinStay({ day, minStay,id });
  };

  const handleSave = async () => {
    if (editedMinStay) {
      try {
        const response = await axios.post("http://192.168.10.210:8080/TAM/minStay/saveOrUpdate", [editedMinStay]);
        console.log("POST request successful", response);
        setReload(prev => !prev);
        // Handle response if needed
        setEditedMinStay(null);
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    }
  };

  const callApi = async () => {
    try {
      await axios.post("http://192.168.10.210:8080/TAM/2/reservations/updateMinStayBasedOnRules");
      console.log("API call successful");
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };


  return (
    <TableContainer component={Paper} sx={{ width: "60%", maxWidth: "1000px" }}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell align="center" sx={{fontSize:"18px"}}>Day</TableCell>
            <TableCell align="center" sx={{fontSize:"18px"}}>Minimum Stay</TableCell>
            <TableCell align="center" sx={{fontSize:"18px"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {minStays.map(minStay => (
            <TableRow key={minStay.day}>
              <TableCell align="center">{minStay.day}</TableCell>
              <TableCell align="center">
                {editedMinStay && editedMinStay.day === minStay.day ? (
                  <TextField
                    value={editedMinStay.minStay}
                    onChange={(event) => setEditedMinStay({ ...editedMinStay, minStay: parseInt(event.target.value) })}
                  />
                ) : (
                  minStay.minStay
                )}
              </TableCell>
              <TableCell align="center">
                {editedMinStay && editedMinStay.day === minStay.day ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button onClick={() => handleEdit(minStay.day, minStay.minStay,minStay.id)}>Edit</Button>
                )}
                  <Button onClick={callApi  }>Update</Button>
              </TableCell>
              
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default YourComponent;
