import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://devhiveserver.vercel.app/' }),
  endpoints: (builder) => ({
     
    
  }),
})


export default apiSlice;