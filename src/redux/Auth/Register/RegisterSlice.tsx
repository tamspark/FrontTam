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
  token: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string | null;
  // Add other fields like lastName, email, role, and username here
}

const initialState: RegisterState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  roleId: "",
  roleName: null,
  token: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
  // Initialize other fields here
};
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ firstname, lastname, email, username }: any, thunkAPI) => {
    try {
      let link = "http://192.168.10.213:8080/TAM/registration";
      const params = {
        email: email,
        firstName: firstname,
        lastName: lastname,
        username: username,
      };
      const response = await axios.post(link, params, {
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e: any) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(signupUser.fulfilled, (state, { payload }) => {
    //       console.log(payload);
    //       state.token = payload.token;
    //       state.isFetching = false;
    //       state.isSuccess = true;
    //     })
    //     .addCase(signupUser.rejected, (state, { payload }) => {
    //       state.isFetching = false;
    //       state.isError = true;
    //       state.errorMessage = payload ? payload.message : "An error occurred";
    //     })
    //     .addCase(signupUser.pending, (state:any) => {
    //       state.isFetching = true;
    //     });
    // }

    // updateFirstName(state, action: PayloadAction<string>) {
    //   state.firstName = action.payload;
    // },
    // updateLastName(state, action: PayloadAction<string>) {
    //   state.lastName = action.payload;
    // },
    // updateusername(state, action: PayloadAction<string>) {
    //   state.username = action.payload;
    // },
    // updateEmail(state, action: PayloadAction<string>) {
    //   state.email = action.payload;
    // },
    // updateRole(
    //   state,
    //   action: PayloadAction<{ roleId: string; roleName: string }>
    // ) {
    //   state.roleId = action.payload.roleId;
    //   state.roleName = action.payload.roleName;
    // },
    // Define other action creators to update other form fields
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchUserData.pending, (state) => {
  //         // Handle pending state (optional)
  //       })
  //       .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<any>) => {
  //         state.user = action.payload; // Update the user field with the fetched data
  //       })
  //       .addCase(fetchUserData.rejected, (state, action) => {
  //         // Handle error here, you can log or display an error message
  //         console.error('Error fetching user data:', action.error.message);
  //       });
  //   },
});

// export const {
//   updateFirstName,
//   updateLastName,
//   updateusername,
//   updateRole,
//   updateEmail,
// } = registerSlice.actions;
export const { clearState } = registerSlice.actions;

export const signupSelector = (state: any) => state.signup;
export default registerSlice.reducer;
