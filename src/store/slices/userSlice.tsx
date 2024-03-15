import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    removeUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    removeAllUsers: (state, action) => {
      state.splice(0, state.length);
    },
  },
});
console.log("User actions:", userSlice.actions);

export const { addUser, removeUser, removeAllUsers } = userSlice.actions;
export default userSlice.reducer;
