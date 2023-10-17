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
import apartmentsCardSlice from "redux/Auth/ApartmentCard/ApartmentCardSlice";
import { AuthApartmentProps } from "redux/Auth/ApartmentsPage/ApartmentsPageSlice";
import { ApartmentsState } from "redux/Auth/ApartmentCard/ApartmentCardSlice";
import { AuthRegPass } from "redux/Auth/SavePassword/SavePasswordSlice";
import resetPasswordSlice from "redux/Auth/SavePassword/SavePasswordSlice";
type RootState = {
  auth: AuthState;
  register: AuthRegState;
  apartments: AuthApartmentProps;
  apartmentsCard: ApartmentsState;
  recoverPassword: AuthRegPass;
};

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    "auth",
    "register",
    "apartments",
    "apartmentsCard",
    "recoverPassword",
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerSlice,
  apartments: apartmentsSlice,
  apartmentsCard: apartmentsCardSlice,
  recoverPassword: resetPasswordSlice,
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
          "user/fetchApartmentCardDetails/fulfilled",
          "user/resetPassword/fulfilled",
        ],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch;
export type { RootState };
