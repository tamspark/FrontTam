//redux
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//axios
import axios from "axios";

interface Modal {
  startDate: string;
  endDate: string;
  price: number;
  minLength: number;
}

export type ModalState = {
  modal: Modal | null;
  isAuthenticated: boolean;
  error: string | null;
};

const initialState: ModalState = {
  modal: null,
  isAuthenticated: false,
  error: null,
};

export const openModal = createAsyncThunk<
  Modal,
  { userId: number; userCredentials: object },
  { rejectValue: string }
>(
  "modal/openModal",
  async ({ userId, userCredentials }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://192.168.10.213:8080/TAM/${userId}/apartmentAvailability`,
        userCredentials
      );

      const responseRegData = response.data.body;
      console.log(response);
      if (response.status !== 200) {
        return rejectWithValue(responseRegData.error.message);
      }

      return responseRegData;
    } catch (error: any) {
      console.log(error.response);
      return rejectWithValue("Modal register failed");
    }
  }
);

//get request
export const fetchUpdatedData = createAsyncThunk<Modal, number>(
  "modal/fetchUpdatedData",
  async (userId: number) => {
    try {
      const response = await axios.get(
        `http://192.168.10.210:8080/TAM/${userId}/apartmentAvailability`
      );

      const responseUpdatedData = response.data;
      console.log(response);
      return responseUpdatedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>) => {
      state.modal = action.payload;
      state.isAuthenticated = true;
    },
    clearModal: (state) => {
      state.modal = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(openModal.fulfilled, (state, action) => {
        state.modal = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(openModal.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.modal = null;
        state.error = action.payload as string | null;
      });
    builder
      .addCase(fetchUpdatedData.fulfilled, (state, action) => {
        state.modal = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUpdatedData.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.modal = null;
        state.error = action.payload as string | null;
      });
  },
});

export const { setModal, clearModal } = modalSlice.actions;
export default modalSlice.reducer;
