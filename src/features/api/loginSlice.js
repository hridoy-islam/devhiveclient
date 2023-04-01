import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    userData: null,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setLoggedIn, setUserData } = loginSlice.actions;

export default loginSlice.reducer;
