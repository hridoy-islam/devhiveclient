import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    filterPrice: ''
}


const servicePrice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FilterPrice: (state, action) => {
            state.filterPrice = action.payload
        }
    }
})

export default servicePrice.reducer;
export const { FilterPrice } = servicePrice.actions