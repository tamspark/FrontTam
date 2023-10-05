import { configureStore } from "@reduxjs/toolkit";

// slices

/* store map to provide to the toolkit provider ctx */
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/registerUser/fulfilled",
          "user/loginUser/fulfilled",
        ],
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
