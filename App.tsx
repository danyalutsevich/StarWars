import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_100Thin } from '@expo-google-fonts/inter';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ClearFans from './components/ClearFans';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();
export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={
            {
              title: "Fans",
              headerTitleStyle: { fontFamily: "Inter_400Regular", fontWeight: "bold", fontSize: 30 },
              headerRight: ClearFans,
              headerRightContainerStyle: { zIndex: 10 }
            }}
            component={MainScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
