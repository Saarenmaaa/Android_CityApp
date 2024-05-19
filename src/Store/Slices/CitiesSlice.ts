// CitiesSlice.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { iCity, iLocation } from "../../../App";
import { testData } from "../../Shared/TestData";

export type CitiesStateType = {
    allCities: iCity[]
}

const initialState: CitiesStateType = {
    // dev
    //allCities: testData
    // production
    allCities: []
};

const citiesSlice = createSlice({
    name: 'cities',
    initialState: initialState,
    reducers: {
        addCity: (state, action: PayloadAction<iCity>) => {
            state.allCities.push(action.payload);
        },
        addLocation: (state, action: PayloadAction<{ citys: string, location: iLocation }>) => {
            const { citys, location } = action.payload;
          
            const cityIndex = state.allCities.findIndex(city => city.name === citys);
            state.allCities[cityIndex].locations.push(location);
        },
        deleteCity: (state, action: PayloadAction<string>) => {
            state.allCities = state.allCities.filter(city => city.id !== action.payload);
        },
        deleteLocation: (state, action: PayloadAction<{ cityName: string; locationId: string }>) => {
            const { cityName, locationId } = action.payload;
            
            const cityIndex = state.allCities.findIndex(city => city.name === cityName);
            console.log("City Index:", cityIndex, " for City Name:", cityName);
        
            state.allCities[cityIndex].locations = state.allCities[cityIndex].locations.filter(
                location => location.id !== locationId
            );
        }
        
    }
});

export const { addCity, addLocation, deleteCity, deleteLocation } = citiesSlice.actions;
export default citiesSlice.reducer;