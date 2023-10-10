import { configureStore } from "@reduxjs/toolkit";
import  addUsersReducers from "../redux/features/addUsersSlice";

export const store = configureStore({
  reducer: addUsersReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch