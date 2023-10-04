// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authSlicer";
// // slices

// /* store map to provide to the toolkit provider ctx */
// const store = configureStore({
//   reducer: {
//     auth:authReducer
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export default store;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}



import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlicer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/loginUser/fulfilled'], // Ignore specific actions if needed
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
