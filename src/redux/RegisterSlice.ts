// src/features/auth/authSlice.ts
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

//slices

type Role = {
  id: number;
  name: string; 
};

type Register = {
  username : string;
  email:string;
  fistName:string;
  lastName:string;
  
}

export interface AuthState {
  register: null | Register;
  token: string | null;
  expire_at: string | null;
}

const initialState: AuthState = {
  token: "",
  register: null,
  expire_at: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    registerUser: (state) => {
      // Add your registration logic here
    },
  },
});

export const { updateFirstName } = authSlice.actions;
export default authSlice.reducer;
