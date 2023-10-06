import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";
interface RecoverPass {
  password: string;
  token: string | null;
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
};

export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  async (newPassword: string, { rejectWithValue }) => {
    const navigate = useNavigate();
    const currentUrl = window.location.href;
    try {
      const url = new URL(currentUrl);

      const pathnameParts = url.pathname.split("/");
      const token = pathnameParts[pathnameParts.length - 1];
      console.log("Token:", token);
      console.log(``);
      const response = await axios.post(
        "http:/localhost/savepassword/{token}",
        {
          password: newPassword,
        }
      );
      const responseData = response.data.body;

      console.log(responseData);

      localStorage.setItem("user", JSON.stringify(responseData));

      if (response.status !== 200) {
        return rejectWithValue(responseData.error.message);
        navigate("/auth/login");
      }

      // localStorage.setItem("user", JSON.stringify(responseData));

      return responseData;
    } catch (error) {
      console.log("Error in loginUser:", error);

      return rejectWithValue("Login failed");
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
