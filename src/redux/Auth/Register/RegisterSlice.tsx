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

// const initialState: RegisterState = {
//   firstName: "",
//   lastName: "",
//   username: "",
//   email: "",
//   roleId: "",
//   roleName: null,
//   token: "",
 
// };
interface AuthState {
  user: RegisterState | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};
export const registerUser=createAsyncThunk(
    'user/registerUser',
    async (userCredentials, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          'http://192.168.10.213:8080/TAM/registration',
          userCredentials
        );
  
        const responseData = response.data.body;
        console.log(responseData);
        localStorage.setItem('user', JSON.stringify(responseData));
  
        return responseData;
      } catch (error) {
        return rejectWithValue("");
      }
    }
  );

  const authSlice = createSlice({
    name: 'auth',
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
          // Handle login failure or errors here, if needed
        });
    },
  });
  
  export const { setUser } = authSlice.actions;
  export default authSlice.reducer;

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
  // },
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
// });

// export const {
//   updateFirstName,
//   updateLastName,
//   updateusername,
//   updateRole,
//   updateEmail,
// } = registerSlice.actions;


// export const signupSelector = (state: any) => state.signup;
// export default registerSlice.reducer;
