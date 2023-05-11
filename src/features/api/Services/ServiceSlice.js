import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    services: [],
   
}

const servicePrice = createSlice({
    name: "filterIng",
    initialState,
    reducers: {
        FilterPrice: (state, action) => {
            state.services = action.payload
        }

    }
})

export default servicePrice.reducer;
export const { FilterPrice } = servicePrice.actions