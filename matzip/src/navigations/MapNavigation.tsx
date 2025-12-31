import { createStackNavigator } from '@react-navigation/stack';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import AddLocationScreen from '../screens/map/AddLocationScreen';
import SearchLocationScreen from '../screens/map/SearchLocationScreen';
import { colors } from '../constants/colors';
import DrawerButton from '../components/DrawerButton';

export const MapStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: colors.BLACK,
    headerStyle: {
      backgroundColor: colors.WHITE,
      shadowColor: colors.GRAY_500,
    },
    headerTitleStyle: {
      fontSize: 16,
    },
    cardStyle: {
      backgroundColor: 'white',
    },
  },

  screens: {
    MapHome: {
      screen: MapHomeScreen,
      options: {
        headerShown: true,
        title: '지도',
        headerLeft: () => <DrawerButton />,
      },
    },
    AddNavigation: {
      screen: AddLocationScreen,
    },
    SearchLocation: {
      screen: SearchLocationScreen,
    },
  },
});
