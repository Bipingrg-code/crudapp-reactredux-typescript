import { createSlice, nanoid } from "@reduxjs/toolkit";
interface addUsers {
  users: Array<{
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
}

export const initialState: addUsers = {
  users: [
    {
      firstName: "Bipin",
      lastName: "Gurung",
      email: "texted!@gmail.com",
    },
    {
      firstName: "tested",
      lastName: "test",
      email: "text123@gmail.com",
    },
  ],
};

export const addUsersSlice = createSlice({
  name: "addUsers",
  initialState,
  reducers: {
    addUsers: (state: any, action: any) => {
      const newUser = action.payload;
      console.log("my new user ==>", newUser);
      state.users.push(newUser);
    },
  },
});

export const { addUsers } = addUsersSlice.actions;

export default addUsersSlice.reducer;
