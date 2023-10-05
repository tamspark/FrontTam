// redux/RegisterSlice.ts

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  roleId: string;
  roleName: string | null;
  token: string | null;

}

interface AuthRegState {
  user: RegisterState | null;
  isAuthenticated: boolean;
}

const initialState: AuthRegState = {
  user: null,
  isAuthenticated: false,
};
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userCredentials:object, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          'http://192.168.10.213:8080/TAM/registration',
          userCredentials
        );
  
        const responseRegData = response.data.body;
        console.log(responseRegData);
        localStorage.setItem('user', JSON.stringify(responseRegData));
  
        if (response.status !== 200) {
          return rejectWithValue(responseRegData.error.message);
        }
  
  
        return responseRegData;
      } catch (error) {
        console.log("Error in loginUser:", error);
  
        return rejectWithValue("Login failed");
      }
    }
  );

  const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<RegisterState>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.isAuthenticated = false;
          state.user = null;
          // state.error = action.payload as string | null;
        });
    },
  });
  
  export const { setUser } = registerSlice.actions;
  export default registerSlice.reducer;

