import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface RecoverPass {
    password: string;
    acessToken: string | null;
}
 interface AuthRecoverPass {
    user: RecoverPass | null;
    isAuthenticated: boolean;
    error: string | null;
 }
const initialState: AuthRecoverPass = {
    user: null,
    isAuthenticated: false,
    error: null,
}

const accessToken = sessionStorage.getItem("accessToken");
export const resetPassword = createAsyncThunk(
    'resetPassword/reset',
    async (newPassword: string, { rejectWithValue }) => {
        
      try {
     
        const response = await axios.post('http://192.168.10.213:8080/TAM/savepassword/{accessToken}', {
            password: newPassword,
            accessToken,
        });
        const responseData = response.data;

        console.log(responseData);
  
        localStorage.setItem("user", JSON.stringify(responseData));
        
        if (response.status !== 200) {
            return rejectWithValue(responseData.error.message);
          }
    
          localStorage.setItem("user", JSON.stringify(responseData));
    
          return responseData;
        } catch (error) {
          console.log("Error in loginUser:", error);
    
          return rejectWithValue("Login failed");
        }
      }
    );


const resetPasswordSlice  = createSlice({
    name: "resetPassword",
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<RecoverPass>) => {
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
        .addCase(resetPassword.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(resetPassword.rejected, (state, action) => {
          state.isAuthenticated = false;
          state.user = null;
        //   state.error = action.payload as string | null;
        });
    },
  });
  export const { setUser, clearUser } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;