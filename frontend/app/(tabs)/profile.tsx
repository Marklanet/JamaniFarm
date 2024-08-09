import React, { useState, useEffect } from 'react';
import { Link } from "expo-router";
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { images } from "../../constants"; // Assuming you have images like profile pictures stored here
import { getCurrentUser, logoutUser } from "../../lib/appauth"; // Import your auth functions

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<{ name?: string; email?: string }>({
    name: 'Loading...',
    email: 'Loading...',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser({
          name: userData.name || 'Smart Farmer',
          email: userData.email || 'smart.farmer@gmail.com',
        });
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setUser({
          name: 'Error',
          email: 'Failed to load email',
        });
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      // Navigate to login screen or other appropriate screen
      console.log('User logged out');
      // Assuming you are using React Navigation
      // Replace with your navigation logic
      // navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Logout Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <SafeAreaView className="bg-lime-50 h-full flex-1">
      <ScrollView className="p-4 mt-10">
        <View className="items-center">
          <Image
            source={images.farmerImg} // Replace with your profile image source
            resizeMode="cover"
            className="w-32 h-32 rounded-full border-4 border-yellow-600 mb-4"
          />
          <Text className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</Text>
          <Text className="text-lg text-gray-600 mb-4">{user.email}</Text>

          <View className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-md mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-2">About Me</Text>
            <Text className="text-gray-600">
              Driven by a passion for building remarkable solutions, I spend my days crafting 
              exceptional applications. In my downtime, I recharge by music, reading, and 
              delving into emerging technologies.
            </Text>
          </View>

          <View className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-md mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-2">My Interests</Text>
            <Text className="text-gray-600">
              - Technology
              {"\n"}- Farming
              {"\n"}- Reading
              {"\n"}- Travel
            </Text>
          </View>

          <View className="flex-row w-full justify-between mb-4">
            <TouchableOpacity className="flex-1 bg-secondary-200 p-3 rounded-lg mr-4 items-center">
              <Text className="text-white text-lg font-semibold">Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} className="flex-1 bg-yellow-600 p-3 rounded-lg items-center">
              
            <Link
              href="/sign-in"
              className="text-white text-lg font-semibold"
            >
              Logout
            </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
