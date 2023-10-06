import { configureStore } from "@reduxjs/toolkit";

// slices
import registerSlice from "redux/Auth/Register/RegisterSlice";
import authReducer from "./authSlicer";
/* store map to provide to the toolkit provider ctx */
const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/registerUser/fulfilled",
          "user/loginUser/fulfilled",
          "   resetPassword: resetPasswordSlice.reducer,",
        ],
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
