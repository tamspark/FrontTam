// redux/RegisterSlice.ts

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

//axios
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

export type AuthRegState = {
  user: RegisterState | null;
  isAuthenticated: boolean;
  error: string | null;
  token: string | null;
};

const initialState: AuthRegState = {
  user: null,
  isAuthenticated: false,
  error: null,
  token: null,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userCredentials: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.10.213:8080/TAM/registration",
        userCredentials
      );

      const responseRegData = response.data.body;
      console.log(responseRegData);
      // localStorage.setItem("user", JSON.stringify(responseRegData));

      if (response.status !== 200) {
        return rejectWithValue(responseRegData.error.message);
      }

      return responseRegData;
    } catch (error) {
      console.log("Error in registerUser:", error);

      return rejectWithValue("register failed");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<RegisterState>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
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
        state.error = action.payload as string | null;
      });
  },
});

export const { setUser, clearUser } = registerSlice.actions;
export default registerSlice.reducer;
