import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const FarmHealth: React.FC = () => {
  return (
    <SafeAreaView className='bg-lime-50 flex-1 mt-2'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        {/* Header Section */}
        <View className='mb-6 p-4 bg-secondary-200 rounded-lg shadow-md items-center'>
          <Text className='text-xl font-bold text-white'>Farm Health Summary</Text>
        </View>

        {/* Farm Data Section */}
        <View className='mb-6'>
          <Text className='text-xl font-bold mb-3'>Farm Overview</Text>
          <View className='bg-white p-4 rounded-lg shadow-sm mb-3'>
            <Text className='text-lg font-bold mb-1'>Irrigation Type</Text>
            <Text className='text-base text-gray-800'>Drip Irrigation</Text>
          </View>
          <View className='bg-white p-4 rounded-lg shadow-sm mb-3'>
            <Text className='text-lg font-bold mb-1'>Water Dispensed</Text>
            <Text className='text-base text-gray-800'>500 Liters</Text>
          </View>
          <View className='bg-white p-4 rounded-lg shadow-sm mb-3'>
            <Text className='text-lg font-bold mb-1'>Soil Moisture</Text>
            <Text className='text-base text-gray-800'>70%</Text>
          </View>
          <View className='bg-white p-4 rounded-lg shadow-sm mb-3'>
            <Text className='text-lg font-bold mb-1'>Temperature</Text>
            <Text className='text-base text-gray-800'>22°C</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className='flex-row justify-between mb-6'>
          <TouchableOpacity className=' bg-secondary-200 p-3 rounded-lg flex-1 mr-1' onPress={() => alert('View More')}>
            <Text className='text-white text-center text-[16px] font-bold'>View More Details</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-yellow-600 p-3 rounded-lg flex-1 ml-1' onPress={() => alert('Update Settings')}>
            <Text className='text-white text-center text-[16px] font-bold'>Update Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FarmHealth;
