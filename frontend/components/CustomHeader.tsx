import { StyleSheet, Text, View } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from "../constants";

// Define the props type
interface CustomHeaderProps {
  pickImage: () => void; // Define the type for the pickImage prop
  onHistoryPress: () => void; // Define the type for the onHistoryPress prop
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ pickImage, onHistoryPress }) => {
  return (
    <View className="p-2 bg-[#f7fee7] rounded-b-lg flex-row items-center justify-between mt-10 shadow-md">
      <TouchableOpacity onPress={onHistoryPress} className="p-2 rounded-lg">
        <Image
          source={icons.history}
          resizeMode="contain"
          style={{ tintColor: 'black' }}
          className="w-7 h-7"
        />
      </TouchableOpacity>
      <View className="flex-row items-center">
        <Image
          source={icons.profile}
          resizeMode="contain"
          style={{ tintColor: '#ca8a04' }}
          className="w-10 h-10 rounded-full mr-2"
        />
        <View>
          <Text className="font-bold text-lg">Jamani Help</Text>
          <Text className="text-sm text-secondary">Online</Text>
        </View>
      </View>
      <TouchableOpacity onPress={pickImage} className="p-2 rounded-lg">
        <Image
          source={icons.camera}
          resizeMode="contain"
          style={{ tintColor: 'black' }}
          className="w-7 h-7"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
