import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackPramsList } from '@/types/navigation';
import CustomButton from '@/components/CustomButton';
import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import { colors } from '@/constants/colors';

type Navigation = StackNavigationProp<AuthStackPramsList>;

const AuthHomeScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/matzip.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="이메일 로그인"
          onPress={() => navigation.navigate('Login')}
        />
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.emailText}>이메일로 가입하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 10,
  },
  emailText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    padding: 10,
    color: colors.BLACK,
  },
});

export default AuthHomeScreen;
