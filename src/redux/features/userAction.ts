import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./addUsersSlice";

export const userAction = createSlice({
  name: "userAction",
  initialState,
  reducers: {
    removeUid: (state: any, action: any) => {
      state.users = state.users.filter((uid: any) => uid.id !== action.payload);
    },
  },
});

export const { removeUid } = userAction.actions;

export default userAction.reducer;
