import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './api/apislice';
import loginReducer from './api/loginSlice'
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
