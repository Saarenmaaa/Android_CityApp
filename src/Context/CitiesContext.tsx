// CitiesContext.tsx

import React from "react";
import { iCity, iLocation } from "../../App";
import { testData } from "../Shared/TestData";

export interface iCitiesContext {
    allCities: iCity[];
    addCity: (city: iCity) => void;
    addLocation: (city: iCity, location: iLocation) => void;
}

const defaultState = {
    allCities: testData,
    addCity: (city: iCity) => {},
    addLocation: (city: iCity, location: iLocation) => {}
}

const defaultEmptyState = {
    allCities: [],
    addCity: (city: iCity) => {},
    addLocation: (city: iCity, location: iLocation) => {}
}

export const CitiesContext = React.createContext<iCitiesContext>(defaultState);
//export const CitiesContext = React.createContext<Partial<iCitiesContext>>(defaultState);