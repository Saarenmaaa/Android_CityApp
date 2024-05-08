// CitiesSlice.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { iCity } from "../../../App";
import { testData } from "../../Shared/TestData";

export type CitiesStateType = {
    allCities: iCity[]
}

const initialState: CitiesStateType = {
    // dev
    allCities: testData
    // production
    //allCities: []
};

const citiesSlice = createSlice({
    name: 'cities',
    initialState: initialState,
    reducers: {
        addCity: (state, action: PayloadAction<iCity>) => {
            state.allCities = [...state.allCities, action.payload]
        }
    }
});

export const { addCity } = citiesSlice.actions;
export default citiesSlice.reducer;