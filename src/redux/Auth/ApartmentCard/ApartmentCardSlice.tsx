import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ApartmentDetails {
  location: {
    street: string;
    zip: string;
    city: string;
    country: string;
    latitude: string;
    longitude: string;
  };
  userId: number;
  id: number;
  // Define other fields here
}

export type ApartmentsState = {
  apartmentDetails: ApartmentDetails | null;
  isAuthenticated: boolean;
  error: string | null;
};
const initialState: ApartmentDetails = {
  location: {
    street: "",
    zip: "",
    city: "",
    country: "",
    latitude: "",
    longitude: "",
  },
  userId: 0,
  id: 0,
  // Initialize other fields
};

export const fetchApartmentCardDetails = createAsyncThunk<
  ApartmentDetails,
  { userId: number; id: number }
>("apartments/fetchUserApartmentCardDetails", async (userId, id) => {
  try {
    const response = await axios.get(
      `http://192.168.10.210:8080TAM/${userId}/apartments/${id}`
    );
    console.log("userId", userId);
    console.log("id", id);
    console.log("res", response);
    return response.data as ApartmentDetails;
  } catch (error) {
    console.error("err", error);
    throw error;
  }
});

const apartmentsCardSlice = createSlice({
  name: "apartmentCard",
  initialState,
    reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload; // Update the userId in the state
      state.isAuthenticated = true;
    },
    setApartmentId: (state, action: PayloadAction<number>) => {
      state.id = action.payload; // Update the apartment id in the state
      state.isAuthenticated = true;
    },
  },,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartmentCardDetails.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchApartmentCardDetails.rejected, (state, action) => {
        // Handle the error state if needed
        return state;
      });
  },
});

// export const { setUserId, setApartmentId } = apartmentsCardSlice.actions;
export default apartmentsCardSlice.reducer;
