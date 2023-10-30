//redux
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//axios
import axios from "axios";

interface RentList {
  startDate: string;
  endDate: string;
  price: number;
  minLength: number;
  // apartments: number[];
}

export type RentListState = {
  rentList: RentList | null;
  isAuthenticated: boolean;
  error: string | null;
  // postData: Modal | null; // Add this line
};

const initialState: RentListState = {
  rentList: null,
  isAuthenticated: false,
  error: null,
  // postData: null,
};

export const openRentList = createAsyncThunk<
  RentList,
  { userId: number; rentListProperties: object },
  { rejectValue: string }
>(
  "rentList/openRentList",
  async ({ userId, rentListProperties }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://192.168.10.210:8080/TAM/${userId}/apartmentAvailability`,
        { params: rentListProperties }
      );

      const responseRentListData = response.data.body;
      console.log(response);
      if (response.status !== 200) {
        return rejectWithValue(responseRentListData.error.message);
      }

      return responseRentListData;
    } catch (error: any) {
      console.log(error.response);
      return rejectWithValue("Rent list fetch failed");
    }
  }
);

const rentListSlice = createSlice({
  name: "rentlist",
  initialState,
  reducers: {
    setRentList: (state, action: PayloadAction<RentList>) => {
      console.log(state.rentList);
      state.rentList = action.payload;
      state.isAuthenticated = true;
    },
    // clearModal: (state) => {
    //   state.modal = null;
    //   state.isAuthenticated = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(openRentList.fulfilled, (state, action) => {
        state.rentList = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(openRentList.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.rentList = null;
        state.error = action.payload as string | null;
      });
  },
});

export const { setRentList } = rentListSlice.actions;
export default rentListSlice.reducer;
