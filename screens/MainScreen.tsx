import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import FansCounter from '../components/FansCounter';
import CharacterTable from '../components/CharacterTable';

export default function MainScreen(props) {

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <FansCounter />
      <CharacterTable navigation={props.navigation}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f5f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
  }
});
