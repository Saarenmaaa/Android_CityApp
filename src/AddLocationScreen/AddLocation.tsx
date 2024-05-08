// AddLocation.tsx

import { StyleSheet, Text, View } from "react-native";
import { AddLocationNavigationProp, AddLocationScreenProps } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const  AddLocation: React.FC<AddLocationScreenProps> = ({route}) => {
    const navigation = useNavigation<AddLocationNavigationProp>();
    useEffect(() => {
        navigation.setOptions({
            title: `Add Location to ${route.params.city}`,
        });
    });
    
    return (
      <View style={styles.container}>
        <Text>Addlocation Screen of City: {route.params.city}</Text>
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