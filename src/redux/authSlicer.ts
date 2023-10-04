// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// import axios from 'axios'; 



// interface User {
//     id: number|null;
//     accessToken: string|null;
//     email: string|null;
//     firstName: string | null;
//     lastName: string|null;
//     role: string|null;
//   }
  
//   interface AuthState {
//     user: User | null;
//     isAuthenticated: boolean;
//   }
  
//   const initialState: AuthState = {
//     user: null,
//     isAuthenticated: false,
//   };
  
// export const loginUser=createAsyncThunk(
//     'user/loginUser',
//     async(userCredentials)=>{
// const request= await axios.post('http://192.168.10.210:8080/TAM/auth/login',userCredentials);
// const response=await request.data.data;
// localStorage.setItem('user',JSON.stringify(response));
// return response;
//     }
// )

//   const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//       setUser: (state, action: PayloadAction<User>) => {
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       },

//     },
//   });
  
//   export default  authSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number | null;
  accessToken: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  role: string | null;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://192.168.10.210:8080/TAM/auth/login',
        userCredentials
      );

      const responseData = response.data.body;
      console.log(responseData);
      localStorage.setItem('user', JSON.stringify(responseData));

      return responseData;
    } catch (error) {
      return rejectWithValue("");
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Handle login failure or errors here, if needed
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;