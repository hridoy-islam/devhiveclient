import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logoutUser: (state) => {
      localStorage.removeItem("jwt");
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const { logoutUser, registerSuccess } = userSlice.actions;

export default userSlice.reducer;
