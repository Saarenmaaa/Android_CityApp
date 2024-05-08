// CitiesProvider.tsx

import { ReactNode, useState } from "react";
import { iCity, iLocation } from "../../App";
import { testData } from "../Shared/TestData";
import { CitiesContext } from "./CitiesContext";
import { Alert } from "react-native";

interface Props {
    children: ReactNode;
}

export const CitiesProvider: React.FC<Props> = ({children}) => {
    const [cities, setCities] = useState<iCity[]>(testData);

    console.log(`CitiesProvider: ${JSON.stringify(cities)}`);

    return (
        <CitiesContext.Provider
            value={{
                allCities: cities,
                addCity: (city: iCity) => {
                    console.log(`addCity called:  ${JSON.stringify(city)}`)
                    // check that name dosent exist
                    const idx = cities.findIndex((item) => item.name===city.name);
                    if(idx >= 0){
                        Alert.alert(`City ${city.name} already exists`)
                        return;
                    }
                    setCities([...cities, city])
                },
                addLocation: (city: iCity, location: iLocation) => {
                    console.log(`addLocation called: ${JSON.stringify(city)} ${JSON.stringify(location)}`)
                },
            }}
            >
            {children}
        </CitiesContext.Provider>
    )
}