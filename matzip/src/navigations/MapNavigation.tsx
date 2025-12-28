import { createStackNavigator } from '@react-navigation/stack';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import AddLocationScreen from '../screens/map/AddLocationScreen';
import SearchLocationScreen from '../screens/map/SearchLocationScreen';

export const MapStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'gray',
    },
    headerTitleStyle: {
      fontSize: 16,
    },
  },
  screens: {
    MapHome: {
      screen: MapHomeScreen,
    },
    AddNavigation: {
      screen: AddLocationScreen,
    },
    SearchLocation: {
      screen: SearchLocationScreen,
    },
  },
});
