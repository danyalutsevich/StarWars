import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import FansCounter from '../components/FansCounter';
import CharacterTable from '../components/CharacterTable';
import { saveState, loadState } from '../saveState';
import { store } from '../store/store';
import { useDispatch } from 'react-redux';
import { setFansState } from '../store/fansSlice';

export default function MainScreen(props) {

  const dispatch = useDispatch();

  useEffect(() => {

    (async () => {
      const state = await loadState();
      if (state) {
        dispatch(setFansState(state));
      }
    })()

  }, []);

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <FansCounter />
      <CharacterTable navigation={props.navigation} />
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
