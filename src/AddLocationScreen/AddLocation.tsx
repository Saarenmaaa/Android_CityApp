// AddLocation.tsx

import { StyleSheet, Text, View } from "react-native";
import { AddLocationScreenProps, LocationsNavigationProp, iLocation } from "../../App";
import { useRef, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useCitiesDispatch, useCitiesSelector } from "../Store/CitiesStore";
import uuid from 'react-native-uuid'
import { addLocation } from "../Store/Slices/CitiesSlice";
import { useNavigation } from "@react-navigation/native";


export const  AddLocation: React.FC<AddLocationScreenProps> = ( { route } ) => {
  const [location, setLocation] = useState<string>('');
  const [info, setInfo] = useState<string>('');

  const navigation = useNavigation<LocationsNavigationProp>();

  const dispatch = useCitiesDispatch();
  const locationRef = useRef<any>(null);

  const submitLocation = () => {
    const newlocation: iLocation = {
        id: uuid.v4().toString(),
        name: location,
        info: info,
    };

    dispatch(addLocation({ citys: route.params.city, location: newlocation }));
    setLocation('');
    setInfo('');
    navigation.goBack();
};
  return (
      <View style={styles.container}>
          <TextInput
              style={styles.intext}
              label="Location name"
              mode="outlined"
              ref={locationRef}
              value={location}
              onChangeText={setLocation}
          />
          <TextInput
              style={styles.info}
              label="Information"
              mode="outlined"
              value={info}
              onChangeText={setInfo}
              numberOfLines={3}
          />
          <Button
              style={styles.intext}
              mode="outlined"
              onPress={submitLocation}
          >
              Add Location
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
    info: {
      width: "80%",
      margin: 10,
      height: 50

    },
    intext: {
      width: "80%",
      margin: 10,
    }
  });

