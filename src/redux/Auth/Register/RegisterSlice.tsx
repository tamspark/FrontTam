// redux/RegisterSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  roleId: string;
  roleName: string | null;
  // Add other fields like lastName, email, role, and username here
}

const initialState: RegisterState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  roleId: "",
  roleName: null,
  // Initialize other fields here
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    updateLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    updateusername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    updateRole(
      state,
      action: PayloadAction<{ roleId: string; roleName: string }>
    ) {
      state.roleId = action.payload.roleId;
      state.roleName = action.payload.roleName;
    },
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

export const {
  updateFirstName,
  updateLastName,
  updateusername,
  updateRole,
  updateEmail,
} = registerSlice.actions;

export default registerSlice.reducer;
