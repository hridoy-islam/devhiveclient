import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import loginReducer from "./api/loginSlice";
import userReducer from "./api/Auth/userReducer";
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: loginReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
