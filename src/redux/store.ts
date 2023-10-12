// import { configureStore } from "@reduxjs/toolkit";

// // slices
// import registerSlice from "redux/Auth/Register/RegisterSlice";
// import authReducer from "./authSlicer";
// /* store map to provide to the toolkit provider ctx */
// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     register: registerSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           "user/registerUser/fulfilled",
//           "user/loginUser/fulfilled",
//           "resetPassword: resetPasswordSlice.reducer",
//         ],
//       },
//     }),
// });

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { combineReducers } from "redux";
import registerSlice from "redux/Auth/Register/RegisterSlice";
import authReducer from "./authSlicer";
import { AuthState } from "./authSlicer";
import { AuthRegState } from "redux/Auth/Register/RegisterSlice";
import apartmentsSlice from "redux/Auth/ApartmentsPage/ApartmentsPageSlice";
import { AuthApartmentProps } from "redux/Auth/ApartmentsPage/ApartmentsPageSlice";
type RootState = {
  auth: AuthState;
  register: AuthRegState;
  apartments: AuthApartmentProps;
};

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth", "register", "apartments"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerSlice,
  apartments: apartmentsSlice,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/registerUser/fulfilled",
          "user/loginUser/fulfilled",
          "user/fetchApartmentIds/fulfilled",
          "resetPassword: resetPasswordSlice.reducer",
        ],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch;
export type { RootState };
