import apiSlice from "../apiSlice";

const ServiceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getService: builder.query({
            query: () => '/service'
        }),
        getSingleService: builder.query({
            query: (id) => `/service/single/${id}`
        }),
        getQueryService: builder.query({
            query: (data) => `/service/query/${data}`
        })
        
    })
});

export const { useGetServiceQuery,
    useGetSingleServiceQuery,
    useGetQueryServiceQuery,
    useSortingServicePriceQuery
} = ServiceApi;