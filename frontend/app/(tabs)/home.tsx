import { Text, ScrollView, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DataBox from '@/components/DataBox';
import { icons, images } from '../../constants';
import DarkDataBox from '@/components/DarkDataBox';


interface FormState {
  cropName: string;
  cropStage: string;
  shieldType: string;
  irrigationType: string;
  waterDispensed: string;
  shieldBattery: string;
  lightIntensity: string;
  carbonDioxide: string;
  airHumidity: string;
  airTemperature: string;
  soilTemperature: string;
  soilMoisture: string;
  soilNPK: string;
  soilPH: string;
  soilConductvity: string;
}

const Home = () => {
  const [farmData, setFarmData] = useState<FormState>({
    cropName: 'Tomatoes',
    cropStage: 'Vegetative',
    shieldType: 'Pro',
    irrigationType: 'Timer',
    waterDispensed: '200L',
    shieldBattery: '90%',
    lightIntensity: '536',
    carbonDioxide: '788',
    airHumidity: '47',
    airTemperature: '28°C',
    soilTemperature: '25°C',
    soilMoisture: '464',
    soilNPK: '12 38 31',
    soilPH: '5.81',
    soilConductvity: '0.64',
  });

  return (
    <View className="flex-1 p0 bg-[#f7fee7]">
      <ScrollView className="">
      <ImageBackground
          source={images.card}
          className="bg-[#00b300] pb-0 h-60 relative rounded-b-xl overflow-hidden justify-end"
      >
    
        <View className="flex flex-row flex-wrap justify-between px-2 pb-0 pt-4 mt-0">
        <Text className="text-xl text-yellow-600 font-bold text-center w-4/6 mx-auto  bg-[#f7fee7] p-1 px-3  rounded-t-xl">View Your Farm Data</Text>
        </View>
      </ImageBackground>
        <Text className="text-lg mt-0 mx-2 mb-0 font-semibold text-black text-center "></Text>
       
        
          <View className="flex flex-row flex-wrap justify-between p-2 pt-4 mt-5 ">
            <DarkDataBox
              title="Irrigation Type"
              value={farmData.irrigationType}
              icon={icons.time}
              textStyles="mt-5"
              className='mb-5'
              
            />
            <DarkDataBox
              title="Water Dispensed"
              value={farmData.waterDispensed}
              icon={icons.water}
              textStyles="mt-5"
               className='mb-5'
            />
          </View>
    


        <Text className="text-lg mt-4 mx-2 mb-4 font-bold text-yellow-600 text-center">Air Data</Text>

        <ImageBackground
          source={images.fieldfarm}
          className="relative overflow-hidden rounded-sm "
          // Ensure position is relative for overlay
        >
          <View style={{ 
            backgroundColor: 'rgba(17, 40, 72, 0.7)', 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: 0, 
            right: 0 
          }} />
          <View className="flex flex-row flex-wrap justify-between p-2 pt-4 mt-5">
          <DataBox
            title="Light Intensity"
            value={farmData.lightIntensity}
            icon={icons.light}
            textStyles="mt-5"
            className='mb-5'
          />
          <DataBox
            title="Carbon Dioxide"
            value={farmData.carbonDioxide}
            icon={icons.carbon}
            textStyles="mt-5"
             className='mb-5'
          />
          <DataBox
            title="Air Temperature"
            value={farmData.airTemperature}
            icon={icons.temperature}
            textStyles="mt-5"
            className='mb-5'
          />
          <DataBox
            title="Air Humidity"
            value={farmData.airHumidity}
            icon={icons.humidity}
            textStyles="mt-5"
            className='mb-5'
          />
          </View>
        </ImageBackground>


        <Text className="text-lg mt-4 mx-2 mb-4 font-bold text-yellow-600 text-center">Soil Data</Text>
        <ImageBackground
          source={images.greenhouse}
          className="relative overflow-hidden rounded-t-sm "
         // Ensure position is relative for overlay
        >
          <View style={{ 
            backgroundColor: 'rgba(17, 40, 72, 0.7)', 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: 0, 
            right: 0 
          }} />
          <View className="flex flex-row flex-wrap justify-between p-2 pt-4 mt-5">
          <DataBox
            title="Soil Temperature"
            value={farmData.soilTemperature}
            icon={icons.soiltemp}
            textStyles="mt-5"
            className='mb-5'
          />
          <DataBox
            title="Soil Conductivity"
            value={farmData.soilConductvity}
            icon={icons.conductivity}
            textStyles="mt-5"
            className='mb-5'
          />
          <DataBox
            title="Soil Moisture"
            value={farmData.soilMoisture}
            icon={icons.soilmoisture}
            textStyles="mt-5"
            className='mb-5'
          />
       
          <DataBox
            title="Soil NPK"
            value={farmData.soilNPK}
            icon={icons.npk}
            textStyles="mt-5"
            className='mb-5'
          />
          <DataBox
            title="Soil pH"
            value={farmData.soilPH}
            icon={icons.ph}
            textStyles="mt-5"
            className='mb-5'
           
          />
        
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Home;
