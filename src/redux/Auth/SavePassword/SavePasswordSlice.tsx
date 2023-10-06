import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";
interface RecoverPass {
  password: string;
  token: string | null;
}
interface AuthRegPass {
  user: RecoverPass | null;
  isAuthenticated: boolean;
}
const initialState: AuthRegPass = {
  user: null,
  isAuthenticated: false,
};

export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  async (newPassword: object, { rejectWithValue }) => {
    // const navigate = useNavigate();
    const currentUrl = window.location.href;
    console.log("currentUrl", currentUrl);
    try {
      const url = new URL(currentUrl);
      console.log("url", url);
      const pathnameParts = url.pathname.split("/");
      console.log("pathname", pathnameParts);
      const token = pathnameParts[pathnameParts.length - 1];
      console.log("Token:", token);

      const response = await axios.post(
        `http://192.168.10.213:8080/TAM/savepassword/${token}`,

        newPassword
      );
      console.log("respsonse", response);
      const responseData = response.data.body;

      console.log("responseData", responseData);

      if (response.status !== 200) {
        return rejectWithValue(responseData.error.message);
      }


      return responseData;
    } catch (error) {
      console.log("Error in savepassword:", error);

      return rejectWithValue("savepassword failed");
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "recoverPassword",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<RecoverPass>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // clearUser: (state) => {
    //   state.user = null;
    //   state.isAuthenticated = false;
    // },
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
export const { setUser } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
