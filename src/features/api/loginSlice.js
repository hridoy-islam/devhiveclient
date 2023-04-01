import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Configs/Firebase.config";
const auth = getAuth(app);
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
    logout: (state) => {
      signOut(auth);
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { setLoggedIn, setUserData, logout } = loginSlice.actions;

export default loginSlice.reducer;
