import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import FansCounter from '../components/FansCounter';
import CharacterTable from '../components/CharacterTable';
import { loadState } from '../saveState';
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FansCounter />
      <CharacterTable navigation={props.navigation} />
    </View>
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
