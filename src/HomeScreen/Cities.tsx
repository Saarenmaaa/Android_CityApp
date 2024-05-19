// Cities.tsx

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CitiesNavigationProp, CitiesScreenProps } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useCitiesSelector } from "../Store/CitiesStore";
import { Button } from "react-native-paper";
import { useDispatch } from 'react-redux';
import { deleteCity } from "../Store/Slices/CitiesSlice";

export const  Cities: React.FC<CitiesScreenProps> = ({route}) => {
    const navigation = useNavigation<CitiesNavigationProp>();
    const cities = useCitiesSelector((state) => state.cities.allCities)
    const dispatch = useDispatch();

    
    const buttonDelete = (id: string) => {
      dispatch(deleteCity(id));
    };

    return (
      <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={cities}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                      style={styles.cityButton}
                      onPress={() => navigation.navigate('Locations', { city: item.name })}
                    >
                      <View style={styles.buttonContent}>
                        <Text style={styles.cityName}>{item.name}</Text>
                        <Text style={styles.country}>{item.country}</Text>
                      </View>
                      <Button
                          style={styles.delete}
                          onPress={() => buttonDelete(item.id)}>
                          DELETE
                      </Button>
                        
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.name}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    flatList: {
      width: '100%',
    },
    cityButton: {
      borderRadius: 0,
      backgroundColor: 'white',
      width: '100%',
      marginBottom: 2,
      flexDirection: 'row',
      alignItems: 'center'
    },
    buttonContent: {
      width: '80%',
      alignItems: 'flex-start',
      padding: 10,
      flexDirection: 'column'
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
