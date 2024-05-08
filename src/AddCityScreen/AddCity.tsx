// AddCity.tsx

import { StyleSheet, Text, View } from "react-native";
import { AddCityScreenProps, iCity} from "../../App";
import { Button, TextInput } from "react-native-paper";
import { useContext, useRef, useState } from "react";
import { CitiesContext } from "../Context/CitiesContext";
import uuid from 'react-native-uuid'

export const AddCity: React.FC<AddCityScreenProps> = () => {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const cityRef = useRef<any>(null);

  const {addCity} = useContext(CitiesContext);

  return (
    <View style={styles.container}>
      <Text>AddCity Screen</Text>
      <TextInput
        style={styles.intext}
        label="City name"
        mode="outlined"
        ref={cityRef}
        value={city}
        onChangeText={(city) => setCity(city)}
      />

      <TextInput
        style={styles.intext}
        label="Country"
        mode="outlined"
        value={country}
        onChangeText={(country) => setCountry(country)}
      />

      <Button
        style={styles.intext}
        mode="outlined"
        onPress={() => {
          const cityInfo: iCity = {
            name: city,
            country: country,
            id: uuid.v4().toString(),
            locations: []
          };
          addCity(cityInfo);
          setCity('');
          setCountry('');
          cityRef.current?.focus();
          // cal navigate.back if user should go back to previous screen
        }}
        >
         Add City 
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    intext: {
      width: "80%",
      margin: 10,

    }
  });