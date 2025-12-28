import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import { createStaticNavigation } from '@react-navigation/native';

const AuthStack = createStackNavigator({
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
    cardStyle: {
      backgroundColor: 'white',
    },
  },
  screens: {
    AuthHome: {
      screen: AuthHomeScreen,
      options: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: '로그인',
      },
    },
    SignUp: {
      screen: SignUpScreen,
      options: {
        title: '회원가입',
      },
    },
  },
});

export const AuthNavigation = createStaticNavigation(AuthStack);
