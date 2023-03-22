import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useGetHomeWorldQuery } from '../store/swapi';


export default function DetailsScreen(props) {

  const { character } = props.route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(character)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  