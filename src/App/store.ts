import { configureStore } from "@reduxjs/toolkit";
import  addUsersReducers from "../redux/features/addUsersSlice";
import removeUserReducers from '../redux/features/userAction'

export const store = configureStore({
  reducer: {
    addUser: addUsersReducers,
    removeUsers: removeUserReducers,
  },

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch