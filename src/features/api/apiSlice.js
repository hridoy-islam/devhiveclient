import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// backend server
// https://devhiveserver.vercel.app/

// backend server
// https://devhiveserver.vercel.app/

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://devhiveserver.vercel.app/" }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
