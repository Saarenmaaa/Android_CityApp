// Locations.tsx

import { FlatList, StyleSheet, Text, View } from "react-native";
import { LocationsNavigationProp, LocationsScreenProps } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/CitiesStore";
import { deleteLocation } from "../Store/Slices/CitiesSlice";

export const  Locations: React.FC<LocationsScreenProps> = ({route}) => {
    const navigation = useNavigation<LocationsNavigationProp>();
    const locations = useSelector((state: RootState) => 
      state.cities.allCities.find(c => c.name === route.params.city)?.locations || []
    );
    const dispatch = useDispatch();


    useEffect(() => {
        navigation.setOptions({
            title: `Locations of ${route.params.city}`,

            headerRight: () => (
                <IconButton
                    icon='plus-circle-outline'
                    onPress={() => navigation.navigate('AddLocation', {city: route.params.city})}
                />
            )
        });
    });

    const buttonDelete = (cityName: string, locationId: string) => {
      dispatch(deleteLocation({ cityName, locationId }));
  };
    
    return (
      <View style={styles.container}>
        <FlatList
            style={styles.flatList}
            data={locations}
            renderItem={({ item }) => (
              <View style={styles.buttonContent}>
                <View style={styles.column}>
                  <Text style={styles.cityName}>{item.name}</Text>
                  <Text style={styles.country}>{item.info}</Text>
                </View>

                <Button
                  style={styles.delete}
                  onPress={() => buttonDelete(route.params.city, item.id)}>
                  DELETE
                </Button>
              </View>

            )}
            keyExtractor={item => item.name}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatList: {
      width: '100%',
    },
    column: {
      flexDirection: 'column',
      width: '80%'
    },
    buttonContent: {
      width: '100%',
      alignItems: 'flex-start',
      padding: 5,
      flexDirection: 'row'
    },
    cityName: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'black'
    },
    country: {
      fontSize: 12,
      color: 'gray',
    },
    delete: {
      fontSize: 12,
      backgroundColor: '#F08D80',
      height: 40,
    },
  });
