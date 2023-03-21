import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_100Thin } from '@expo-google-fonts/inter';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={{ title: "Fans" }} component={MainScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}