// Info.tsx

import { StyleSheet, Text, View } from "react-native";
import { InfoScreenProps } from "../../App";

export const  Info: React.FC<InfoScreenProps> = () => {
    return (
      <View style={styles.container}>
        <Text>Info Screen</Text>
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