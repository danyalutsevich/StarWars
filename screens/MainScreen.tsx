import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';

import FansCounter from '../components/FansCounter';
import CharacterTable from '../components/CharacterTable';


export default function MainScreen(props) {

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <FansCounter />
      {/* <Text style={styles.text}>Home Screen</Text> */}
      <CharacterTable/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
  }
});
