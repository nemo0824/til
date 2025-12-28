import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackPramsList } from '../../types/navigation';

type Navigation = StackNavigationProp<AuthStackPramsList>;

const AuthHomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>AuthHomeScreen</Text>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
