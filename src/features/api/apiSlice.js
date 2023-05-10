import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// backend server
// https://devhiveserver.vercel.app/

// backend server
// https://devhiveserver.vercel.app/

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
