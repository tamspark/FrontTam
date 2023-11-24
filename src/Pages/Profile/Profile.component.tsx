

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Icon from "./assets/829452_user_512x512.png"

interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}


const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

const Label = styled.p`
  font-weight: bold;
`;

const UserInfo = styled.div`
  margin-bottom: 10px;
`;


const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfileProps | null>(null);
  const [editable, setEditable] = useState(false);
  const [editedData, setEditedData] = useState<UserProfileProps | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://192.168.10.141:8080/TAM/user/3")
      .then((response) => {
        setUserData(response.data);
        setEditedData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    if (editedData) {
      axios
        .post("http://192.168.10.141:8080/TAM/user/update", editedData)
        .then((response) => {
          // Assuming the response indicates success
          setUserData({ ...editedData });
          setEditable(false);
          fetchData();
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
        });
    }
  };

  const handleCancelClick = () => {
    setEditedData(userData);
    setEditable(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (editedData) {
      setEditedData({ ...editedData, [name]: value });
    }
  };


  return (
    <div>
    <Card>
      <div style={{display:"flex",justifyContent:"center"}}>
      <img src={Icon} alt="test" style={{width:"35%"}}/>
      </div>
      <UserInfo>
        <Label>First Name:</Label>
        {editable ? (
          <input
            type="text"
            name="firstName"
            value={editedData?.firstName}
            onChange={handleInputChange}
          />
        ) : (
          <p>{userData?.firstName}</p>
        )}
      </UserInfo>
      <UserInfo>
        <Label>Last Name:</Label>
        {editable ? (
          <input
            type="text"
            name="lastName"
            value={editedData?.lastName}
            onChange={handleInputChange}
          />
        ) : (
          <p>{userData?.lastName}</p>
        )}
      </UserInfo>
      <UserInfo>
        <Label>Email:</Label>
        {editable ? (
          <input
            type="text"
            name="email"
            value={editedData?.email}
            onChange={handleInputChange}
          />
        ) : (
          <p>{userData?.email}</p>
        )}
      </UserInfo>
      <UserInfo>
        <Label>Role:</Label>
        {editable ? (
          <input
            type="text"
            name="role"
            value={editedData?.role}
            onChange={handleInputChange}
          />
        ) : (
          <p>{userData?.role}</p>
        )}
      </UserInfo>
      {editable ? (
        <>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </Card>
  </div>
  );
};

export default UserProfile;
