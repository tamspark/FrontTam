//redux
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//axios
import axios from "axios";

interface Modal {
  startDate: string;
  endDate: string;
  price: number;
  minLength: number;
  // apartments: number[];
}

export type ModalState = {
  modal: Modal | null;
  isAuthenticated: boolean;
  error: string | null;
  // postData: Modal | null; // Add this line
};

const initialState: ModalState = {
  modal: null,
  isAuthenticated: false,
  error: null,
  // postData: null,
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

//get api
// export const fetchUpdatedData = createAsyncThunk<
//   Modal,
//   { userId: number; startDate: string; endDate: string; apartments: number[] },
//   { rejectValue: string }
// >(
//   "modal/fetchUpdatedData",
//   async ({ userId, startDate, endDate, apartments }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "http://192.168.10.210:8080/TAM/1/apartmentAvailability",
//         {
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             apartments: apartments,
//           },
//         }
//       );
//       console.log("userId:", userId);

//       const responseData = response.data;
//       if (response.status !== 200) {
//         return rejectWithValue(responseData.error.message);
//       }
//       console.log("API Response:", responseData);
//       return responseData;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue("Failed to fetch updated data");
//     }
//   }
// );

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>) => {
      console.log(state.modal);
      state.modal = action.payload;
      state.isAuthenticated = true;
    },
    // clearModal: (state) => {
    //   state.modal = null;
    //   state.isAuthenticated = false;
    // },
    // setPostData: (state, action: PayloadAction<Modal>) => {
    //   state.postData = action.payload;
    //   state.isAuthenticated = true;
    // },
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
    // builder
    //   .addCase(fetchUpdatedData.fulfilled, (state, action) => {
    //     state.modal = action.payload;
    //     state.isAuthenticated = true;
    //     state.postData = action.payload;
    //   })
    //   .addCase(fetchUpdatedData.rejected, (state, action) => {
    //     state.isAuthenticated = false;
    //     state.modal = null;

    //     state.error = action.payload as string | null;
    //   });
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
