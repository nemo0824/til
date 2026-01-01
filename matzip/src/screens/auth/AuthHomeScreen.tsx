import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackPramsList } from '@/types/navigation';
import CustomButton from '@/components/CustomButton';

type Navigation = StackNavigationProp<AuthStackPramsList>;

const AuthHomeScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <CustomButton
        label="이메일 로그인"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
