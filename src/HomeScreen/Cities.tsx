// Cities.tsx

import { StyleSheet, Text, View } from "react-native";
import { CitiesNavigationProp, CitiesScreenProps } from "../../App";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const  Cities: React.FC<CitiesScreenProps> = ({route}) => {
    const navigation = useNavigation<CitiesNavigationProp>();

    console.log(`Cities component ${JSON.stringify(route.params.cities)}`)
    return (
      <View style={styles.container}>
        <Text>Cities</Text>
        <Button
            mode='contained'
            onPress={() => navigation.navigate('Locations', {city: 'Lahti'})}
            >
            Go To Lahti locations
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
  });