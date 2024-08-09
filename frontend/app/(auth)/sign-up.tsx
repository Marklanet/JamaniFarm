import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Alert, Dimensions } from 'react-native';
import { Link, router } from 'expo-router';
import { images } from '../../constants';
import { CustomButton } from '../../components';
import FormField from '../../components/FormField';
import { useAuth } from '../../hooks/authHook';

interface FormState {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register } = useAuth();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    username: '',
    email: '',
    password: '',
  });

  const submit = async () => {
    if (form.username === '' || form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setSubmitting(true);
    try {
      await register(form.email, form.password, form.username);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error....', (error as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-lime-50 h-full flex justify-center">
      <ScrollView className="h-full">
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get('window').height - 0,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[180px] h-[45px]"
          />

          <Text className="text-2xl font-semibold text-yellow-600 mt-10 font-psemibold">
            Sign Up to Farm Shield
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(text) => setForm({ ...form, username: text })}
            otherStyles="mt-5"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(text) => setForm({ ...form, email: text })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(text) => setForm({ ...form, password: text })}
            otherStyles="mt-4"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
             containerStyles="mt-5"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-yellow-600 font-pregular">Have an account already? </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
