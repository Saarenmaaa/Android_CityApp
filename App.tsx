/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Cities } from './src/HomeScreen/Cities'
import { AddCity } from './src/AddCityScreen/AddCity';
import { AddLocation } from './src/AddLocationScreen/AddLocation';
import { Locations } from './src/LocationsScreen/Locations';
import { Info } from './src/InfoScreen/Info';
import { IconButton } from 'react-native-paper';
import { Provider } from 'react-redux';
import CitiesStore from './src/Store/CitiesStore';

// interfaces for data content of application
export interface iLocation {
  name: string;
  info: string;
  id: string;
};

export interface iCity {
  id: string;
  name: string;
  country: string;
  locations: iLocation[];
}

// navigation route parameters
type RootStackParamList = {
  Cities: undefined;
  AddCity: undefined;
  Locations: {city: string};
  AddLocation: {city: string};
  Info: undefined;
}

// provides type safety
const Stack = createNativeStackNavigator<RootStackParamList>();

export type CitiesScreenProps = NativeStackScreenProps<RootStackParamList, 'Cities'>;
export type AddCityScreenProps = NativeStackScreenProps<RootStackParamList, 'AddCity'>;
export type LocationsScreenProps = NativeStackScreenProps<RootStackParamList, 'Locations'>;
export type AddLocationScreenProps = NativeStackScreenProps<RootStackParamList, 'AddLocation'>;
export type InfoScreenProps = NativeStackScreenProps<RootStackParamList, 'Info'>;

export type CitiesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cities'>;
export type LocationsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Locations'>;
export type AddLocationNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddLocation'>;

function App(): React.JSX.Element {
  return(
    <Provider store={CitiesStore}>
      <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='Cities'
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#F7DED0',
                }
            }}
            >
            <Stack.Screen 
              name='Cities'
              component={Cities}
              options={({navigation}) => ({
                title: 'List of Cities',
                headerLeft: () => (
                  <IconButton 
                    icon='information-outline'
                    onPress={() => navigation.navigate('Info')}
                    />
                ),
                headerRight: () => (
                  <IconButton 
                    icon='plus-circle-outline'
                    onPress={() => navigation.navigate('AddCity')}
                    />
                )
              })}
            ></Stack.Screen>
            <Stack.Screen 
              name='AddCity'
              component={AddCity}
              options={{
                title: 'Add City'
              }}
            ></Stack.Screen>
            <Stack.Screen 
              name='Locations'
              component={Locations}
              options={{
                title: 'Locations of'
              }}
            ></Stack.Screen>
            <Stack.Screen 
              name='AddLocation'
              component={AddLocation}
              options={{
                title: 'Add Location to '
              }}
            ></Stack.Screen>
            <Stack.Screen 
              name='Info'
              component={Info}
            ></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
