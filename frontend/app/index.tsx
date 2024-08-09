import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import { CustomButton, Loader } from '../components';
//import { useGlobalContext } from '../context/GlobalProvider';

const Welcome: React.FC = () => {
  //const { loading, isLogged } = useGlobalContext();

  //if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="h-full bg-lime-50">
      {/*<Loader isLoading={loading} />*/}

      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[250px] h-[110px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-yellow-600 font-bold text-center">
              Grow Your Crops{'\n'}
            With{' '}
              <Text className="text-secondary">Farm Shield™</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-stone-700 mt-7 text-center">
          FarmShield™ is the brain of the farm and 
          Shields it from any adverse conditions.
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
            isLoading={false}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
