import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// export interface Message {
//   id: number;
//   subject: string;
//   message: string;
//   htmlMessage: string;
//   type: number;
// }
// export interface MesagePageProps {
//   page_count: number;
//   page_size: number;
//   total_items: number;
//   page: number;
//   messages: Message[];
// }
export interface MesagePageProps {
  page_count: number;
  page_size: number;
  total_items: number;
  page: number;
  messages: {
    id: number;
    subject: string;
    message: string;
    htmlMessage: string;
    type: number;
  }[];
}

export type MessageState = {
  messages: MesagePageProps | null;
  isAuthenticated: boolean;
  error: string | null;
};
const initialState: MessageState = {
  messages: null,
  isAuthenticated: false,
  error: null,
};

export const fetchMessage = createAsyncThunk<
  MesagePageProps,
  { userId: number },
  {
    rejectValue: string;
  }
>("message/fetchMessages", async ({ userId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `http://192.168.10.210:8080/TAM/48052989/message/${userId}`
    );
    console.log("userId", userId);

    console.log("res", response);
    return response.data as MesagePageProps;
  } catch (error) {
    console.error("err", error);
    return rejectWithValue("Failed to fetch messages.");
  }
});

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.messages = null;
        state.error = action.payload as string | null;
      });
  },
});

// export const { } = messagesSlice.actions;
export default messagesSlice.reducer;
