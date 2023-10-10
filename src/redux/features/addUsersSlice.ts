import { createSlice, nanoid } from "@reduxjs/toolkit";
interface addUsers {
  users: Array<{
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
}

const initialState: addUsers = {
  users: [
    {
      id: nanoid(),
      firstName: "Bipin",
      lastName: "Gurung",
      email: "texted!@gmail.com",
    },
  ],
};

export const addUsersSlice = createSlice({
  name: "addUsers",
  initialState,
  reducers: {
    addUsers: (state: any, action: any) => {
      const addUser = {
        id: nanoid(),
        ...action.payload,
      };
      state.users.push(addUser);
    },
  },
});

export const { addUsers } = addUsersSlice.actions;

export default addUsersSlice.reducer;
