// CitiesStore.ts

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import citiesReducer from './Slices/CitiesSlice'

const CitiesStore = configureStore({
    reducer: {
        cities: citiesReducer
    },
})

export type RootState = ReturnType<typeof CitiesStore.getState>;
export type CitiesDispatch = typeof CitiesStore.dispatch;

export const useCitiesDispatch = () => useDispatch<CitiesDispatch>();
export const useCitiesSelector = useSelector.withTypes<RootState>();

export default CitiesStore;