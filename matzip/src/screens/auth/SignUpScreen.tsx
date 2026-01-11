import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import { useForm } from '@/hooks/useForm';

const SignUpScreen = () => {
  const signUp = useForm({
    initialValue: { email: '', password: '', passwordConfirm: '' },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          touched={signUp.touched.email}
          {...signUp.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          textContentType="oneTimeCode"
          touched={signUp.touched.password}
          {...signUp.getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          secureTextEntry
          {...signUp.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" variant="filled" size="large" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignUpScreen;
